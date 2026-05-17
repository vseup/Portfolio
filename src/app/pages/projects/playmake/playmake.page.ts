import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectHeroComponent } from '@app/components/projects/project-hero/project-hero.component';
import { ProjectSectionComponent } from '@app/components/projects/project-section/project-section.component';
import { DividerComponent } from '@app/components/shared/layout/divider/divider.component';
import { PLAYMAKE_PROJECT } from '@app/constants/projects.constants';
import type { ProjectData } from '@app/types/project-data.type';
import type { ProjectImageData } from '@app/types/project-image-data.type';

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
  protected readonly gameImage: ProjectImageData = {
    src: '/images/projects/playmake/playmake-geoshape.jpg',
    width: 1280,
    height: 635,
    alt: 'Cardboard Playmake prototype with a smartphone interface, number cards, and wooden geometric blocks spilled from small fabric bags.',
  };
}
