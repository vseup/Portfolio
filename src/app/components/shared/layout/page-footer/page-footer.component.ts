import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-footer',
  imports: [RouterLink],
  templateUrl: './page-footer.component.html',
  styleUrl: './page-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageFooterComponent {
  protected readonly currentYear = new Date().getFullYear();
}
