import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PLAYMAKE_PROJECT } from '../../../constants/projects.constants';
import type { ProjectData } from '../../../types/project-data.type';
import { RouterLink } from '@angular/router';
import { ProjectHeroComponent } from '../../../components/projects/project-hero/project-hero.component';
import { ProjectSectionComponent } from '../../../components/projects/project-section/project-section.component';
import type { ProjectImageData } from '../../../types/project-image-data.type';
import { DividerComponent } from '../../../components/shared/layout/divider/divider.component';

@Component({
  selector: 'app-playmake-page',
  imports: [
    NgOptimizedImage,
    RouterLink,
    ProjectHeroComponent,
    ProjectSectionComponent,
    DividerComponent,
  ],
  templateUrl: './playmake.page.html',
  styleUrl: './playmake.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaymakePage {
  protected readonly project: ProjectData = PLAYMAKE_PROJECT;
  protected readonly heroImage: ProjectImageData = {
    src: '/images/projects/playmake/playmake-preview.jpg',
    width: 1280,
    height: 899,
    alt: 'Two cardboard Playmake prototypes with a phone and tablet displaying eyes, plus loose letter tiles in front.',
  };
}
