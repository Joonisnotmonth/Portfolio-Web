import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { Project } from '../../../models/project.model';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-project-detail',
  styleUrls: ['./project-detail.css'],
  templateUrl: './project-detail.html',
})
export class ProjectDetailComponent {
  readonly project = input.required<Project>();
  private readonly router = inject(Router);

  readonly stack = computed(() => {
    const p = this.project();
    if (!p) return [];
    return (['frontend', 'backend', 'database', 'tools'] as const)
      .map((key) => ({ key, items: p[key] }))
      .filter((g) => g.items.length);
  });

  currentLang: 'th' | 'en' = 'th';

  // Gallery
  readonly gallery = computed(() => this.project()?.gallery ?? []);
  readonly activeIndex = signal(0);

  readonly hasPrev = computed(() => this.activeIndex() > 0);
  readonly hasNext = computed(() => this.activeIndex() < this.gallery().length - 1);
  readonly railTransform = computed(
    () => `translateY(calc((1 - ${this.activeIndex()}) * (var(--slot) + var(--gap))))`,
  );

  constructor() {
    effect(() => {
      console.log('Project Detail Component initialized with project:', this.project());
    });
  }

  ngOnInit() {
    this.switchLang('th');
  }

  switchLang(lang: 'th' | 'en') {
    this.currentLang = lang;
  }

  close() {
    this.router.navigate(['/projects']);
  }

  get currentCaption() {
    return this.gallery()[this.activeIndex()]?.caption?.[this.currentLang] ?? '';
  }

  isNear(i: number) {
    return Math.abs(i - this.activeIndex()) <= 1;
  }

  select(i: number) {
    const max = this.gallery().length - 1;
    this.activeIndex.set(Math.max(0, Math.min(i, max)));
  }

  next() {
    this.select(this.activeIndex() + 1);
  }

  prev() {
    this.select(this.activeIndex() - 1);
  }
}
