import { Component, computed, inject, input } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared-imports';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';

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
  private readonly seo = inject(SeoService);

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

    // SEO
    this.seo.update({
      title: 'Projects',
      description:
        'Browse all projects by Yada Kruekkhoksung — web applications, tools, and experiments built with React, Angular, TypeScript, and more.',
      keywords:
        'Yada Kruekkhoksung, Projects, Web Development, React, Angular, TypeScript, Frontend Projects',
    });
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
