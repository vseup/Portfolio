import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';

type ProjectCard = {
  area: string;
  title: string;
  summary: string;
  tags: string[];
  toneClass: string;
};

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, ButtonComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  protected readonly projectCards: ProjectCard[] = [
    {
      area: 'Fullstack Development',
      title: 'Project One',
      summary: 'Placeholder structure for problem framing, implementation decisions, and measured outcomes.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
      toneClass: 'tone-sun',
    },
    {
      area: 'Creative Coding',
      title: 'Project Two',
      summary: 'Placeholder structure for concept exploration, iteration process, and technical execution.',
      tags: ['JavaScript', 'Canvas', 'WebGL', 'Creative'],
      toneClass: 'tone-pink',
    },
    {
      area: 'HCI and Accessibility',
      title: 'Project Three',
      summary: 'Placeholder structure for user research, accessibility priorities, and delivery outcomes.',
      tags: ['React', 'Accessibility', 'Education', 'UX Research'],
      toneClass: 'tone-sky',
    },
    {
      area: 'Mobile Product',
      title: 'Project Four',
      summary: 'Placeholder structure for mobile-first design and implementation constraints.',
      tags: ['Angular', 'Ionic', 'Design System', 'Testing'],
      toneClass: 'tone-violet',
    },
    {
      area: 'Service Platform',
      title: 'Project Five',
      summary: 'Placeholder structure for architecture tradeoffs and scalable frontend patterns.',
      tags: ['Angular', 'Nx', 'Performance', 'API'],
      toneClass: 'tone-mint',
    },
  ];
}
