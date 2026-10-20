import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { ProjectService } from '../../services/project.service';
import { ProjectDetailComponent } from './project-detail/project-detail';

@Component({
  imports: [ProjectDetailComponent, RouterLink],
  standalone: true,
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  constructor(private projectService: ProjectService) {}

  readonly open = input<string>();
  readonly selectedProject = computed(() =>
    this.projectsData?.find((p: any) => p.id === this.open()),
  );

  currentLang: 'th' | 'en' = 'th';
  projectsData: any;
  techList: string[] = [];

  MAX_CHIPS = 4;

  ngOnInit() {
    this.projects();
    this.switchLang('th');
  }

  switchLang(lang: 'th' | 'en') {
    this.currentLang = lang;
  }

  projects() {
    this.projectsData = this.projectService
      .getProjects()
      .filter((p) => p.isPublished === true)
      .map((p) => ({
        ...p,
        tech: [...new Set([...p.frontend, ...p.backend, ...p.database])],
      }));
  }
}
