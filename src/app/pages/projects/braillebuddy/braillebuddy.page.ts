import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TagsComponent } from '../../../shared/components/projects/tags/tags.component';
import { EyebrowComponent } from '../../../shared/components/projects/tags/eyebrow/eyebrow.component';
import { BRAILLEBUDDY_PROJECT } from '../../../shared/constants/projects.constants';
import type { ProjectData } from '../../../shared/types/project-data.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-braillebuddy-page',
  imports: [RouterLink, TagsComponent, EyebrowComponent],
  templateUrl: './braillebuddy.page.html',
  styleUrl: './braillebuddy.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BraillebuddyPage {
  protected readonly project: ProjectData = BRAILLEBUDDY_PROJECT;
}
