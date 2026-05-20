import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-anchor-button',
  templateUrl: './anchor-button.component.html',
  styleUrl: '../button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnchorButtonComponent {
  readonly isSecondary = input<boolean>(false);
  readonly href = input<string | undefined>(undefined);
  readonly target = input<string | undefined>(undefined);
  readonly rel = input<string | undefined>(undefined);
}
