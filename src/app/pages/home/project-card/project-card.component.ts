import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type HomeProjectCardData = {
  area: string;
  period: string;
  title: string;
  summary: string;
  tags: string[];
  toneClass: string;
};

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly project = input.required<HomeProjectCardData>();
}
