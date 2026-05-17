import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageFooterComponent } from '@app/components/shared/layout/page-footer/page-footer.component';
import { PageHeaderComponent } from '@app/components/shared/layout/page-header/page-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageFooterComponent, PageHeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
