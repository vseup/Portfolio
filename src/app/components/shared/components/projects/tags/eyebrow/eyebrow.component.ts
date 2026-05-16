import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ProjectData } from '../../../../types/project-data.type';

@Component({
  selector: 'app-eyebrow',
  templateUrl: './eyebrow.component.html',
  styleUrl: './eyebrow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyebrowComponent {
  readonly area = input.required<ProjectData['area']>();
  readonly period = input.required<ProjectData['period']>();
}
