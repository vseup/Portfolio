import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

type ButtonVariant = 'primary' | 'ghost';

@Component({
  selector: 'app-button',
  imports: [RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly routerLink = input<string | undefined>(undefined);
  readonly fragment = input<string | undefined>(undefined);
  readonly href = input<string | undefined>(undefined);
  readonly target = input<string | undefined>(undefined);
  readonly rel = input<string | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);
}
