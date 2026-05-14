import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type HomeProjectPreviewImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type HomeProjectCardData = {
  area: string;
  period: string;
  title: string;
  summary: string;
  tags: string[];
  toneClass: string;
  previewImage?: HomeProjectPreviewImage;
};

@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly project = input.required<HomeProjectCardData>();
}
