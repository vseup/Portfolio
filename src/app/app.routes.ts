import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page.js').then((m) => m.HomePage),
    title: 'Verena Pues | Portfolio',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page.js').then((m) => m.AboutPage),
    title: 'About | Verena Pues',
  },
  {
    path: 'imprint',
    loadComponent: () => import('./pages/imprint/imprint.page.js').then((m) => m.ImprintPage),
    title: 'Imprint | Verena Pues',
  },
  {
    path: 'data-policy',
    loadComponent: () =>
      import('./pages/data-policy/data-policy.page.js').then((m) => m.DataPolicyPage),
    title: 'Privacy Policy | Verena Pues',
  },
  {
    path: 'projects/cathouse',
    loadComponent: () =>
      import('./pages/projects/cathouse/cathouse.page.js').then((m) => m.CathousePage),
    title: 'Cathouse Project | Verena Pues',
  },
  {
    path: 'projects/braillebuddy',
    loadComponent: () =>
      import('./pages/projects/braillebuddy/braillebuddy.page.js').then((m) => m.BraillebuddyPage),
    title: 'Braillebuddy Project | Verena Pues',
  },
  {
    path: 'projects/playmake',
    loadComponent: () =>
      import('./pages/projects/playmake/playmake.page.js').then((m) => m.PlaymakePage),
    title: 'Playmake Project | Verena Pues',
  },
  {
    path: 'projects/magic-glove',
    loadComponent: () =>
      import('./pages/projects/magic-glove/magic-glove.page.js').then((m) => m.MagicGlovePage),
    title: 'Magic Glove Project | Verena Pues',
  },
  {
    path: 'projects/cura',
    loadComponent: () => import('./pages/projects/cura/cura.page.js').then((m) => m.CuraPage),
    title: 'Cura Project | Verena Pues',
  },
  {
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found.page.js').then((m) => m.NotFoundPage),
    title: 'Page Not Found | Verena Pues',
  },
  // Fallback route: redirect unknown URLs to a dedicated not-found page.
  {
    path: '**',
    redirectTo: '404',
  },
];
