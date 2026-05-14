import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TagsComponent } from '../../../shared/components/projects/tags/tags.component';
import { EyebrowComponent } from '../../../shared/components/projects/tags/eyebrow/eyebrow.component';
import { BRAILLEBUDDY_PROJECT } from '../../../shared/constants/projects.constants';
import type { ProjectData } from '../../../shared/types/project-data.type';
import type { ProjectImageData } from '../../../shared/types/project-image-data.type';
import { RouterLink } from '@angular/router';
import { ProjectSectionComponent } from '../components/project-section/project-section.component';

@Component({
  selector: 'app-braillebuddy-page',
  imports: [NgOptimizedImage, RouterLink, TagsComponent, EyebrowComponent, ProjectSectionComponent],
  templateUrl: './braillebuddy.page.html',
  styleUrl: './braillebuddy.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BraillebuddyPage {
  protected readonly project: ProjectData = BRAILLEBUDDY_PROJECT;
  protected readonly overviewImage: ProjectImageData = {
    src: '/images/projects/braillebuddy/braille-cells.jpg',
    width: 8247,
    height: 2052,
    alt: 'Braille alphabet cells shown as tactile dot patterns.',
  };
  protected readonly prototypeImage: ProjectImageData = {
    src: '/images/projects/braillebuddy/braillebuddy-prototype.jpg',
    width: 1080,
    height: 545,
    alt: 'Internally, an ESP32, RFID/NFC setup, photoresistors, and a DFPlayer enable card detection and responsive audio feedback.',
  };
}
