import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeHeroComponent } from '@app/components/home/home-hero/home-hero.component';
import { ProjectCardComponent } from '@app/components/home/project-card/project-card.component';
import { DividerComponent } from '@app/components/shared/layout/divider/divider.component';
import { PROJECTS } from '@app/constants/projects.constants';

@Component({
  selector: 'app-home-page',
  imports: [HomeHeroComponent, DividerComponent, ProjectCardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  protected readonly projectCards = PROJECTS;
}
