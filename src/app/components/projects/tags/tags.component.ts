import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ProjectData } from '@app/types/project-data.type';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsComponent {
  readonly title = input.required<ProjectData['title']>();
  readonly tags = input.required<ProjectData['tags']>();
}
