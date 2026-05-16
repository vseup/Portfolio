import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TagsComponent } from '../../projects/tags/tags.component';
import { EyebrowComponent } from '../../projects/eyebrow/eyebrow.component';
import { RouterLink } from '@angular/router';
import type { ProjectData } from '../../../types/project-data.type';

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
