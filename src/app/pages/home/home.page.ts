import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeHeroComponent } from '../../components/home/home-hero/home-hero.component';
import { ProjectCardComponent } from '../../components/home/project-card/project-card.component';
import { PROJECTS } from '../../components/shared/constants/projects.constants';

@Component({
  selector: 'app-home-page',
  imports: [HomeHeroComponent, ProjectCardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  protected readonly projectCards = PROJECTS;
}
