import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing-page/landing-page').then((m) => m.LandingPage),
    title: 'Alessia Vicini | Psicologa',
  },
  {
    path: 'about-me',
    loadComponent: () => import('./pages/about-me/about-me').then((m) => m.AboutMe),
    title: 'Alessia Vicini | Psicologa',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
    title: 'Alessia Vicini | Psicologa',
  },
  {
    path: 'psycotherapy',
    loadComponent: () => import('./pages/psychoterapy/psycotherapy').then((m) => m.Psycotherapy),
  },
  {
    path: 'reading-room',
    loadComponent: () => import('./pages/reading-room/reading-room').then((m) => m.ReadingRoom),
    title: 'Alessia Vicini | Psicologa',
  },
];
