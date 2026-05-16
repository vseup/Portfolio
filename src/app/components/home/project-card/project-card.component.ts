import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TagsComponent } from '../../../components/shared/components/projects/tags/tags.component';
import { EyebrowComponent } from '../../../components/shared/components/projects/tags/eyebrow/eyebrow.component';
import { RouterLink } from '@angular/router';
import type { ProjectData } from '../../../components/shared/types/project-data.type';

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
