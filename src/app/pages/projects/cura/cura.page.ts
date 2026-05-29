import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectHeroComponent } from '@app/components/projects/project-hero/project-hero.component';
import { ProjectSectionComponent } from '@app/components/projects/project-section/project-section.component';
import { DividerComponent } from '@app/components/shared/layout/divider/divider.component';
import { CURA_PROJECT } from '@app/constants/projects.constants';
import type { ProjectData } from '@app/types/project-data.type';
import type { ProjectImageData } from '@app/types/project-image-data.type';
import { AnchorButtonComponent } from '@app/components/shared/buttons/anchor-button/anchor-button.component';
import { IconComponent } from '@app/components/shared/icons/icon.component';

@Component({
  selector: 'app-cura-page',
  imports: [
    NgOptimizedImage,
    RouterLink,
    ProjectHeroComponent,
    ProjectSectionComponent,
    DividerComponent,
    AnchorButtonComponent,
    IconComponent,
  ],
  templateUrl: './cura.page.html',
  styleUrl: './cura.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuraPage {
  protected readonly project: ProjectData = CURA_PROJECT;
  protected readonly overviewImage: ProjectImageData = {
    src: '/images/projects/cura/cura-overview.png',
    width: 731,
    height: 736,
    alt: 'TODO',
  };
  protected readonly quoteImage1: ProjectImageData = {
    src: '/images/projects/cura/cura-problem-01.png',
    width: 850,
    height: 849,
    alt: 'TODO',
  };
  protected readonly quoteImage2: ProjectImageData = {
    src: '/images/projects/cura/cura-problem-02.png',
    width: 850,
    height: 849,
    alt: 'TODO',
  };
  protected readonly quoteImage3: ProjectImageData = {
    src: '/images/projects/cura/cura-problem-03.png',
    width: 850,
    height: 849,
    alt: 'TODO',
  };
  protected readonly screensImage: ProjectImageData = {
    src: '/images/projects/cura/cura-screens.png',
    width: 1712,
    height: 786,
    alt: 'TODO',
  };
}
