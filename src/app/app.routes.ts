import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page.js').then((m) => m.HomePage),
    title: 'Home',
  },
  // Fallback route: redirect unknown URLs to the landing page.
  {
    path: '**',
    redirectTo: '',
  },
];
