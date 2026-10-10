import {
  afterNextRender,
  AfterViewInit,
  Component,
  DestroyRef,
  DOCUMENT,
  inject,
  signal,
} from '@angular/core';
import { CustomDatePipe } from '../../pipes/custom-date-pipe';

import { WorkExperienceService } from '../../services/work-experience.service';
import { EducationService } from '../../services/education.service';
import { ProjectService } from '../../services/project.service';
import { ProfileService } from '../../services/profile.service';
import { AchievementService } from '../../services/achievement.service';
import { Achievement, AchievementKind } from '../../models/achievement.model';
import { MultiLangString } from '../../types/language-type';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CustomDatePipe],
  styleUrls: ['./home.css'],
  templateUrl: './home.html',
})
export class HomeComponent {
  constructor(
    private workExperienceService: WorkExperienceService,
    private educationService: EducationService,
    private projectService: ProjectService,
    private profileService: ProfileService,
    private achievementService: AchievementService,
  ) {
    afterNextRender(() => this.initScrollSpy());
  }

  currentLang: 'th' | 'en' = 'th';

  profileData: any;
  workExperiencesData: any;
  educationsData: any;
  projectsData: any;
  achievementsData: any;
  activeAchievementKind: AchievementKind | null = null;

  private readonly sectionIds = ['about', 'experience', 'activity'];
  active = signal('about');

  private doc = inject(DOCUMENT);
  private destroyRef = inject(DestroyRef);
  private locked = false;

  MAX_CHIPS = 4;

  openId = signal<string | null>(null);
  KIND: Record<
    AchievementKind,
    { icon: string; label: MultiLangString; bg: string; text: string }
  > = {
    certificate: {
      icon: 'fa-graduation-cap',
      label: { th: 'ใบรับรอง', en: 'Certificate' },
      bg: 'bg-indigo-200',
      text: 'text-indigo-400',
    },
    competition: {
      icon: 'fa-trophy',
      label: { th: 'การแข่งขัน', en: 'Competition' },
      bg: 'bg-rose-200',
      text: 'text-rose-400',
    },
    other: {
      icon: 'fa-seedling',
      label: { th: 'กิจกรรม', en: 'Activity' },
      bg: 'bg-lime-100',
      text: 'text-lime-400',
    },
  };

  ngOnInit() {
    this.profile();
    this.workExperiences();
    this.educations();
    this.projects();
    this.achievements();

    this.switchLang('th');
  }

  initScrollSpy() {
    const last = this.sectionIds[this.sectionIds.length - 1];
    let ticking = false;

    const update = () => {
      ticking = false;
      if (this.locked) return;

      const line = window.innerHeight * 0.35; // เส้นอ้างอิง ปรับได้
      let current = this.sectionIds[0];
      for (const id of this.sectionIds) {
        const el = this.doc.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // สุดหน้าแล้ว ให้ section สุดท้ายเป็น active
      if (window.innerHeight + window.scrollY >= this.doc.documentElement.scrollHeight - 4) {
        current = last;
      }
      this.active.set(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    // capture: true ดักการเลื่อนจาก element ไหนก็ได้ รวมถึงกรณีหน้าเลื่อนใน container ไม่ใช่ window
    this.doc.addEventListener('scroll', onScroll, { capture: true, passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update(); // ตั้งค่าเริ่มต้นตอนโหลด

    this.destroyRef.onDestroy(() => {
      this.doc.removeEventListener('scroll', onScroll, { capture: true });
      window.removeEventListener('resize', onScroll);
    });
  }

  goSection(id: string) {
    const el = this.doc.getElementById(id);
    if (!el) return;
    this.active.set(id);
    this.locked = true;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    const unlock = () => {
      this.locked = false;
      clearTimeout(timer);
    };
    const timer = setTimeout(unlock, 1500);
    window.addEventListener('scrollend', unlock, { once: true });
  }

  switchLang(lang: 'th' | 'en') {
    this.currentLang = lang;
  }

  workExperiences() {
    this.workExperiencesData = this.workExperienceService.getWorkExperiences();
  }

  educations() {
    this.educationsData = this.educationService.getEducations();
  }

  projects() {
    this.projectsData = this.projectService.getProjects().map((p) => ({
      ...p,
      tech: [...new Set([...p.frontend, ...p.backend, ...p.database])],
    }));
  }

  achievements() {
    this.achievementsData = this.achievementService.getAchievements();
  }

  profile() {
    this.profileData = this.profileService.getProfile();
  }

  kind(a: Achievement) {
    return this.KIND[a.kind] || this.KIND.certificate;
  }

  isOpen(a: Achievement) {
    return (this.openId() ?? this.achievementsData[0]?.id) === a.id;
  }
}
