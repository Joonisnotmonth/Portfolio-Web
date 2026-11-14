import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Yada Kruekkhoksung — Portfolio',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'projects',
    title: 'Projects | Yada Kruekkhoksung — Portfolio',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.ProjectsComponent),
  },
  {
    path: 'admin',
    title: 'Admin | Yada Kruekkhoksung — Portfolio',
    loadComponent: () => import('./pages/admin/admin').then((m) => m.AdminComponent),
  },
];
