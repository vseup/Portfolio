import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page.js').then((m) => m.HomePage),
    title: 'Home',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page.js').then((m) => m.AboutPage),
    title: 'About',
  },
  {
    path: 'imprint',
    loadComponent: () => import('./pages/imprint/imprint.page.js').then((m) => m.ImprintPage),
    title: 'Imprint',
  },
  {
    path: 'data-policy',
    loadComponent: () =>
      import('./pages/data-policy/data-policy.page.js').then((m) => m.DataPolicyPage),
    title: 'Data Policy',
  },
  {
    path: 'projects/cathouse',
    loadComponent: () =>
      import('./pages/projects/cathouse/cathouse.page.js').then((m) => m.CathousePage),
    title: 'Cathouse',
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
  {
    path: 'projects/cura',
    loadComponent: () => import('./pages/projects/cura/cura.page.js').then((m) => m.CuraPage),
    title: 'Cura',
  },
  // Fallback route: redirect unknown URLs to the landing page.
  {
    path: '**',
    redirectTo: '',
  },
];
