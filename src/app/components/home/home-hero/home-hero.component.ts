import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterButtonComponent } from '@app/components/shared/buttons/router-button/router-button.component';
import { AnchorButtonComponent } from '@app/components/shared/buttons/anchor-button/anchor-button.component';

@Component({
  selector: 'app-home-hero',
  imports: [NgOptimizedImage, RouterLink, RouterButtonComponent, AnchorButtonComponent],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroComponent {}
