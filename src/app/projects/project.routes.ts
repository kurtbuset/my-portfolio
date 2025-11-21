import { Routes } from '@angular/router';

export const projectsRoutes: Routes = [
  { path: '', loadComponent: () => import('./layout.component').then(m => m.LayoutComponent), 
    children: [
      { path: '', loadComponent: () => import('./list.component').then((m) => m.ListComponent), title: 'Projects | Kurt Cagulang' },
      { path: ':linkParams', loadComponent: () => import('./view.component').then((m) => m.ViewComponent), title: 'View Project' },
    ]
  }
];

