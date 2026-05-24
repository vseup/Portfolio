import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectHeroComponent } from '@app/components/projects/project-hero/project-hero.component';
import { ProjectSectionComponent } from '@app/components/projects/project-section/project-section.component';
import { DividerComponent } from '@app/components/shared/layout/divider/divider.component';
import { MAGIC_GLOVE_PROJECT } from '@app/constants/projects.constants';
import type { ProjectData } from '@app/types/project-data.type';
import type { ProjectImageData } from '@app/types/project-image-data.type';
import { AnchorButtonComponent } from '@app/components/shared/buttons/anchor-button/anchor-button.component';
import { IconComponent } from '@app/components/shared/icons/icon.component';

@Component({
  selector: 'app-magic-glove-page',
  imports: [
    NgOptimizedImage,
    RouterLink,
    ProjectHeroComponent,
    ProjectSectionComponent,
    DividerComponent,
    AnchorButtonComponent,
    IconComponent,
  ],
  templateUrl: './magic-glove.page.html',
  styleUrl: './magic-glove.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MagicGlovePage {
  protected readonly project: ProjectData = MAGIC_GLOVE_PROJECT;
  protected readonly heroImage: ProjectImageData = {
    src: '/images/projects/magic-glove/magic-glove.jpg',
    width: 1280,
    height: 836,
    alt: 'Close-up of the Magic Glove concept with UI elements on the wrist band',
  };
  protected readonly approachImage: ProjectImageData = {
    src: '/images/projects/magic-glove/mango.jpg',
    width: 1733,
    height: 1139,
    alt: 'Magic Glove holding a mango while an interface overlay displays vitamin C information',
  };
  protected readonly approachImage2: ProjectImageData = {
    src: '/images/projects/magic-glove/prototyping-3.jpg',
    width: 1280,
    height: 853,
    alt: 'Design team discussing glove materials and a model during a workshop session',
  };
  protected readonly prototypingImage: ProjectImageData = {
    src: '/images/projects/magic-glove/prototyping-2.jpg',
    width: 1280,
    height: 852,
    alt: 'Early functional prototype with wired glove sensors connected to an Arduino and laptop',
  };
  protected readonly prototypingImage2: ProjectImageData = {
    src: '/images/projects/magic-glove/paper-prototyping.png',
    width: 1254,
    height: 719,
    alt: 'Photo collage of paper prototype tests for gestures, wrist display, and cooking interactions',
  };
  protected readonly outcomeImage: ProjectImageData = {
    src: '/images/projects/magic-glove/juhu.gif',
    width: 500,
    height: 500,
    alt: 'Team celebrating their Siemens Home Appliances Design Award 2018 recognition',
  };
  protected readonly outcomeImage2: ProjectImageData = {
    src: '/images/projects/magic-glove/team.jpg',
    width: 1280,
    height: 853,
    alt: 'Magic Glove team at the award event holding their certificate and trophy',
  };
}
