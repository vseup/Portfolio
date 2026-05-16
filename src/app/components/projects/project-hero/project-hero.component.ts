import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { EyebrowComponent } from '../../shared/components/projects/tags/eyebrow/eyebrow.component';
import { TagsComponent } from '../../shared/components/projects/tags/tags.component';

@Component({
  selector: 'app-project-hero',
  imports: [EyebrowComponent, TagsComponent],
  templateUrl: './project-hero.component.html',
  styleUrl: './project-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectHeroComponent {
  readonly headingId = input.required<string>();
  readonly heading = input.required<string>();
  readonly area = input.required<string>();
  readonly period = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly description = input.required<string>();
  readonly tagsTitle = input.required<string>();
  readonly tags = input.required<string[]>();
}
