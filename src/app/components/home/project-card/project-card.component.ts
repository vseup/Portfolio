import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EyebrowComponent } from '@app/components/projects/eyebrow/eyebrow.component';
import { TagsComponent } from '@app/components/projects/tags/tags.component';
import type { ProjectData } from '@app/types/project-data.type';

@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage, RouterLink, TagsComponent, EyebrowComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly project = input.required<ProjectData>();
}
