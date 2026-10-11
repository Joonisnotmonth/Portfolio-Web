import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  standalone: true,
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects();
    this.switchLang('th');
  }
  currentLang: 'th' | 'en' = 'th';
  projectsData: any;
  techList: string[] = [];

  MAX_CHIPS = 4;

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
