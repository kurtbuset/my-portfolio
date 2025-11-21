import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import projectsData from './projects.json'
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: 'list.component.html',
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class ListComponent {
  projects: any[] = [];

  ngOnInit() {
    this.projects = projectsData;
  } 
}
