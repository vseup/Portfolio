import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectHeroComponent } from '@app/components/projects/project-hero/project-hero.component';
import { ProjectSectionComponent } from '@app/components/projects/project-section/project-section.component';
import { DividerComponent } from '@app/components/shared/layout/divider/divider.component';
import { PLAYMAKE_PROJECT } from '@app/constants/projects.constants';
import type { ProjectData } from '@app/types/project-data.type';
import type { ProjectImageData } from '@app/types/project-image-data.type';
import {
  PostItsComponent,
  type PostItNote,
} from '@app/components/projects/post-its/post-its.component';
import { AnchorButtonComponent } from '@app/components/shared/buttons/anchor-button/anchor-button.component';

@Component({
  selector: 'app-playmake-page',
  imports: [
    NgOptimizedImage,
    RouterLink,
    ProjectHeroComponent,
    ProjectSectionComponent,
    DividerComponent,
    PostItsComponent,
    AnchorButtonComponent,
  ],
  templateUrl: './playmake.page.html',
  styleUrl: './playmake.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaymakePage {
  protected readonly project: ProjectData = PLAYMAKE_PROJECT;

  protected readonly insightNotes: readonly PostItNote[] = [
    {
      label: 'Games boost engagement.',
      text: 'Teachers value game-based learning for improving attention, social interaction, and motivation.',
    },
    {
      label: 'Budget matters.',
      text: 'As schools have very limited budget they need tools that work with existing devices and don’t require extra tech training or materials.',
    },
    {
      label: 'Tactile interaction supports learning.',
      text: 'Physical play benefits different learning styles and encourages deeper involvement.',
    },
    {
      label: 'Teacher empowerment is critical.',
      text: 'Simple, flexible creation tools reduce preperation time and let teachers focus on teaching – not tech.',
    },
  ] as const;

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
  protected readonly outcomeImage: ProjectImageData = {
    src: '/images/projects/playmake/playmake-living-history.jpg',
    width: 750,
    height: 608,
    alt: 'A smartphone plays an interview with Auschwitz survivor Else Baker while printed interview cards with student questions are placed around the board.',
  };
}
