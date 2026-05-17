import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  PostItsComponent,
  type PostItNote,
} from '@app/components/projects/post-its/post-its.component';
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
    PostItsComponent,
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
  protected readonly approachNotes: readonly PostItNote[] = [
    {
      label: 'Robust and appealing form factor.',
      text: 'The TUI should be self-contained and easy to use independently without screens or setup. A durable build, along with tactile and visual appeal, supports blind children and invites sighted peers for inclusive play.',
    },
    {
      label: 'Clear physical affordances.',
      text: 'Elements follow standard Braille sizing for accurate recognition, because oversized characters can distort tactile learning. Beveled corners and clear slot guidance keep interaction intuitive and error resistant.',
    },
    {
      label: 'Modular learning system.',
      text: 'The TUI should offer multiple game modes and a scalable card system, so it remains flexible, engaging, and expandable for learners with different skill levels.',
    },
  ] as const;
}
