import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-router-button',
  imports: [RouterLink],
  templateUrl: './router-button.component.html',
  styleUrl: '../button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouterButtonComponent {
  readonly isSecondary = input<boolean>(false);
  readonly routerLink = input<string | undefined>(undefined);
  readonly fragment = input<string | undefined>(undefined);
}
