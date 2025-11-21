import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { projectsRoutes } from './projects/project.routes';

export const routes: Routes = [
    { path: '', component: ProfileComponent, title: 'Kurt Cagulang | Full Stack Developer'}, 
    { path: 'projects', children: projectsRoutes }
];
