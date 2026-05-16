import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PLAYMAKE_PROJECT } from '../../../constants/projects.constants';
import type { ProjectData } from '../../../types/project-data.type';
import { RouterLink } from '@angular/router';
import { ProjectHeroComponent } from '../../../components/projects/project-hero/project-hero.component';

@Component({
  selector: 'app-playmake-page',
  imports: [RouterLink, ProjectHeroComponent],
  templateUrl: './playmake.page.html',
  styleUrl: './playmake.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaymakePage {
  protected readonly project: ProjectData = PLAYMAKE_PROJECT;
}
