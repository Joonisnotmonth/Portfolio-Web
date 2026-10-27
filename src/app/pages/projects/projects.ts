import { Component, computed, inject, input } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared-imports';
import { LanguageService } from '../../services/language.service';

import { ProjectService } from '../../services/project.service';
import { ProjectDetailComponent } from './project-detail/project-detail';

@Component({
  imports: [ProjectDetailComponent, SHARED_IMPORTS],
  standalone: true,
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  constructor(private projectService: ProjectService) {}

  // Language
  languageService = inject(LanguageService);

  readonly open = input<string>();
  readonly selectedProject = computed(() =>
    this.projectsData?.find((p: any) => p.id === this.open()),
  );

  projectsData: any;
  techList: string[] = [];

  MAX_CHIPS = 4;

  ngOnInit() {
    this.projects();
  }

  get currentLang() {
    return this.languageService.currentLang();
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
