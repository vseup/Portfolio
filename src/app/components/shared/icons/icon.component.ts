import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly name = input<string>('');
  readonly color = input<string>('currentColor');
  readonly weight = input<string>('300');
  readonly decorative = input<boolean>(true);
}
