import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageFooterComponent } from './shared/components/layout/page-footer/page-footer.component';
import { PageHeaderComponent } from './shared/components/layout/page-header/page-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageFooterComponent, PageHeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App { }
