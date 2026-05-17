import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import type { ProjectImageData } from '@app/types/project-image-data.type';

@Component({
  selector: 'app-project-section',
  imports: [NgOptimizedImage],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--project-section-columns]': 'columns()',
  },
})
export class ProjectSectionComponent {
  readonly title = input.required<string>();
  readonly headingId = input<string>();
  readonly image = input<ProjectImageData>();
  readonly columns = input('1fr 1fr');

  protected readonly resolvedHeadingId = computed(() => {
    const explicitId = this.headingId()?.trim();

    if (explicitId) {
      return explicitId;
    }

    const generatedId = this.title()
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    return generatedId || 'project-section-title';
  });
}
