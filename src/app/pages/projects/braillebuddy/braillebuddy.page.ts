import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectHeroComponent } from '@app/components/projects/project-hero/project-hero.component';
import { ProjectSectionComponent } from '@app/components/projects/project-section/project-section.component';
import { DividerComponent } from '@app/components/shared/layout/divider/divider.component';
import { BRAILLEBUDDY_PROJECT } from '@app/constants/projects.constants';
import type { ProjectData } from '@app/types/project-data.type';
import type { ProjectImageData } from '@app/types/project-image-data.type';

@Component({
  selector: 'app-braillebuddy-page',
  imports: [
    NgOptimizedImage,
    RouterLink,
    ProjectHeroComponent,
    ProjectSectionComponent,
    DividerComponent,
  ],
  templateUrl: './braillebuddy.page.html',
  styleUrl: './braillebuddy.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BraillebuddyPage {
  protected readonly project: ProjectData = BRAILLEBUDDY_PROJECT;
  //https://www.pexels.com/de-de/foto/hande-buch-lernen-ausbildung-7694417/
  protected readonly motivationImage1: ProjectImageData = {
    src: '/images/projects/braillebuddy/braille-learning.jpg',
    width: 1255,
    height: 837,
    alt: "Adult hands guide children's hands while exploring a braille educational book.",
  };
  protected readonly motivationImage2: ProjectImageData = {
    src: '/images/projects/braillebuddy/braille-cells.png',
    width: 1255,
    height: 283,
    alt: 'Braille alphabet cells shown as tactile dot patterns.',
  };
  protected readonly prototypeImage: ProjectImageData = {
    src: '/images/projects/braillebuddy/braillebuddy-prototype.png',
    width: 1080,
    height: 545,
    alt: 'Internally, an ESP32, RFID/NFC setup, photoresistors, and a DFPlayer enable card detection and responsive audio feedback.',
  };
  protected readonly evaluationImage: ProjectImageData = {
    src: '/images/projects/braillebuddy/braillebuddy-study-setup.jpg',
    width: 1436,
    height: 609,
    alt: "User testing setup where a blind student investigates Braillebuddy's braille letter cards using his hands.",
  };
}
