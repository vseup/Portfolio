import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageFooterComponent } from './shared/layout/page-footer/page-footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, PageFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App { }
