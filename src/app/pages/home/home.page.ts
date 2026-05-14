import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import type { HomeProjectCardData } from './project-card/project-card.component';

@Component({
  selector: 'app-home-page',
  imports: [HomeHeroComponent, ProjectCardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  protected readonly projectCards: HomeProjectCardData[] = [
    {
      area: 'Fullstack Development',
      period: '2026',
      title: 'Cathouse',
      summary:
        'Simple charity web app that raised more than 1000€ for an animal shelter.',
      tags: ['SvelteKit', 'NestJS', 'TypeScript', 'PostgreSQL', 'Docker'],
      toneClass: 'tone-sun',
      previewImage: {
        src: '/images/projects/cathouse/cathouse-preview.jpg',
        alt: 'Cathouse project preview showing the charity web app interface.',
        width: 1280,
        height: 786,
      },
    },
    {
      area: 'Mobile App Development',
      period: '2023',
      title: 'Playmake',
      summary: 'Platform that allows to build interactive board-game-like games without any programming experience.',
      tags: ['Flutter', 'OpenCV', 'UX Research', 'Interactive Prototyping'],
      toneClass: 'tone-pink',
      previewImage: {
        src: '/images/projects/playmake/playmake-preview.jpg',
        alt: 'Playmake project preview showing the board-game-like setup.',
        width: 1280,
        height: 899,
      },
    },
    {
      area: 'Embedded Development',
      period: '2022/23',
      title: 'Braillebuddy',
      summary: "Tool that supports children's self-directed exploration of Braille. Published at the ACM CHI Conference.",
      tags: ['Arduino C/C++', 'Accessibility', 'UX Research', 'Interactive Prototyping'],
      toneClass: 'tone-sky',
    },
    {
      area: 'Interaction Design',
      period: '2017/18',
      title: 'Magic Glove',
      summary: 'Concept of a smart glove that integrates the human intuitively into the network of smart kitchen devices. Siemens Home Appliances Design Award (2nd place).',
      tags: ['Arduino C/C++', 'UX Research', 'Interactive Prototyping'],
      toneClass: 'tone-violet',
    },
    {
      area: 'Service Design',
      period: '2017',
      title: 'Cura',
      summary: 'Concept of a conversional agent that streamlines the early stages of home care.',
      tags: ['UX Design', 'UX Research', 'Prototyping'],
      toneClass: 'tone-mint',
    },
  ];
}
