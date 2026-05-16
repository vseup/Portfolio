import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../components/shared/components/button/button.component';

@Component({
  selector: 'app-home-hero',
  imports: [NgOptimizedImage, RouterLink, ButtonComponent],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroComponent { }
