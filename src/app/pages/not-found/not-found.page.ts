import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterButtonComponent } from '@app/components/shared/buttons/router-button/router-button.component';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterButtonComponent],
  templateUrl: './not-found.page.html',
  styleUrl: './not-found.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage {}
