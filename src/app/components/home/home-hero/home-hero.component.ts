import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterButtonComponent } from '@app/components/shared/buttons/router-button/router-button.component';
import { AnchorButtonComponent } from '@app/components/shared/buttons/anchor-button/anchor-button.component';

@Component({
  selector: 'app-home-hero',
  imports: [NgOptimizedImage, RouterLink, RouterButtonComponent, AnchorButtonComponent],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroComponent implements OnInit, OnDestroy {
  private readonly typewriterPhrases = [
    'software engineer with a design background',
    'an introverted cat lady',
    "and I'm happy you came here",
  ] as const;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  readonly phraseIndex = signal(0);
  readonly visibleChars = signal(0);
  readonly isDeleting = signal(false);
  readonly currentPhrase = computed(() => this.typewriterPhrases[this.phraseIndex()]);
  readonly typedPhrase = computed(() => this.currentPhrase().slice(0, this.visibleChars()));

  ngOnInit(): void {
    this.runTypewriterTick();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private runTypewriterTick(): void {
    const phrase = this.currentPhrase();
    const visibleChars = this.visibleChars();
    const deleting = this.isDeleting();

    // Typing phase: reveal the next character until the phrase is complete.
    if (!deleting && visibleChars < phrase.length) {
      this.visibleChars.update((value) => value + 1);
      this.scheduleNextTick(90);
      return;
    }

    // Pause briefly after fully typing the phrase, then switch to delete mode.
    if (!deleting && visibleChars === phrase.length) {
      this.isDeleting.set(true);
      this.scheduleNextTick(1600);
      return;
    }

    // Deleting phase: remove one character per tick until the phrase is empty.
    if (deleting && visibleChars > 0) {
      this.visibleChars.update((value) => value - 1);
      this.scheduleNextTick(90);
      return;
    }

    // Phrase is fully deleted: advance to the next phrase and restart typing.
    this.isDeleting.set(false);
    this.phraseIndex.update((value) => (value + 1) % this.typewriterPhrases.length);
    this.scheduleNextTick(350);
  }

  private scheduleNextTick(delay: number): void {
    this.timeoutId = setTimeout(() => this.runTypewriterTick(), delay);
  }
}
