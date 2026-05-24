import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page.js').then((m) => m.HomePage),
    title: 'Home',
  },
  {
    path: 'projects/braillebuddy',
    loadComponent: () =>
      import('./pages/projects/braillebuddy/braillebuddy.page.js').then((m) => m.BraillebuddyPage),
    title: 'Braillebuddy',
  },
  {
    path: 'projects/playmake',
    loadComponent: () =>
      import('./pages/projects/playmake/playmake.page.js').then((m) => m.PlaymakePage),
    title: 'Playmake',
  },
  {
    path: 'projects/magic-glove',
    loadComponent: () =>
      import('./pages/projects/magic-glove/magic-glove.page.js').then((m) => m.MagicGlovePage),
    title: 'Magic Glove',
  },
  // Fallback route: redirect unknown URLs to the landing page.
  {
    path: '**',
    redirectTo: '',
  },
];
