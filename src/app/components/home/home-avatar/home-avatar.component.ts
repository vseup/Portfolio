import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-home-avatar',
  imports: [NgOptimizedImage],
  templateUrl: './home-avatar.component.html',
  styleUrl: './home-avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeAvatarComponent implements OnInit, OnDestroy {
  private readonly eyeAnchorX = 0.5;
  private readonly eyeAnchorY = 0.45;
  private readonly maxPupilOffsetFactor = 0.016;
  private readonly platformId = inject(PLATFORM_ID);
  private readonly avatarRef = viewChild<ElementRef<HTMLElement>>('avatar');
  private readonly handleWindowPointerDown = (event: PointerEvent): void => {
    this.updatePupilOffset(event);
  };
  private readonly handleWindowPointerMove = (event: PointerEvent): void => {
    this.updatePupilOffset(event);
  };
  private readonly handleWindowPointerLeave = (): void => {
    this.pupilOffsetX.set(0);
    this.pupilOffsetY.set(0);
  };

  readonly pupilOffsetX = signal(0);
  readonly pupilOffsetY = signal(0);
  readonly pupilTransform = computed(
    () => `translate(${this.pupilOffsetX().toFixed(2)}px, ${this.pupilOffsetY().toFixed(2)}px)`,
  );

  ngOnInit(): void {
    // During SSR/prerender there is no global `window`, so pointer listeners must only be attached in the browser.
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.addEventListener('pointermove', this.handleWindowPointerMove, { passive: true });
    window.addEventListener('pointerdown', this.handleWindowPointerDown, { passive: true });
    window.addEventListener('pointerleave', this.handleWindowPointerLeave, { passive: true });
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.removeEventListener('pointermove', this.handleWindowPointerMove);
    window.removeEventListener('pointerdown', this.handleWindowPointerDown);
    window.removeEventListener('pointerleave', this.handleWindowPointerLeave);
  }

  private updatePupilOffset(event: PointerEvent): void {
    const avatarElement = this.avatarRef()?.nativeElement;
    if (!avatarElement) {
      return;
    }

    const rect = avatarElement.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    const anchorX = rect.width * this.eyeAnchorX;
    const anchorY = rect.height * this.eyeAnchorY;
    const deltaX = pointerX - anchorX;
    const deltaY = pointerY - anchorY;
    const distance = Math.hypot(deltaX, deltaY);
    const maxOffset = rect.width * this.maxPupilOffsetFactor;

    if (distance === 0 || maxOffset === 0) {
      this.pupilOffsetX.set(0);
      this.pupilOffsetY.set(0);
      return;
    }

    const scale = Math.min(1, maxOffset / distance);
    this.pupilOffsetX.set(deltaX * scale);
    this.pupilOffsetY.set(deltaY * scale);
  }
}
