import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectHeroComponent } from '@app/components/projects/project-hero/project-hero.component';
import { ProjectSectionComponent } from '@app/components/projects/project-section/project-section.component';
import { DividerComponent } from '@app/components/shared/layout/divider/divider.component';
import { AnchorButtonComponent } from '@app/components/shared/buttons/anchor-button/anchor-button.component';
import { CATHOUSE_PROJECT } from '@app/constants/projects.constants';
import type { ProjectData } from '@app/types/project-data.type';
import type { ProjectImageData } from '@app/types/project-image-data.type';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cathouse-page',
  imports: [
    RouterLink,
    ProjectHeroComponent,
    ProjectSectionComponent,
    DividerComponent,
    AnchorButtonComponent,
    NgOptimizedImage,
  ],
  templateUrl: './cathouse.page.html',
  styleUrl: './cathouse.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CathousePage {
  protected readonly project: ProjectData = CATHOUSE_PROJECT;
  //https://www.pexels.com/de-de/foto/haustier-katze-liegend-liegen-15479743/
  protected readonly catImage: ProjectImageData = {
    src: '/images/projects/cathouse/cat.jpg',
    width: 853,
    height: 443,
    alt: 'Close-up photo of an orange cat.',
  };
  protected readonly screensImage: ProjectImageData = {
    src: '/images/projects/cathouse/cathouse-screens.png',
    width: 1949,
    height: 786,
    alt: 'Four mobile mockups of the Cathouse donation app showing cat selection, donation flow, and supporter list screens.',
  };
  protected readonly catAnimationImage: ProjectImageData = {
    src: '/images/projects/cathouse/cathouse-asesprite.png',
    width: 1101,
    height: 859,
    alt: 'Aseprite editor screenshot with a pixel-art cat sprite and heart animation used in the project.',
  };
  protected readonly cathouseImage: ProjectImageData = {
    src: '/images/projects/cathouse/cathouse.png',
    width: 1480,
    height: 859,
    alt: 'Desktop screenshot of the live Cathouse app with animated cats and a donation call-to-action panel.',
  };
}
