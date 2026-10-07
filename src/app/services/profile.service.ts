import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  getProfile(): Profile {
    return {
      firstName: { th: 'สมชาย', en: 'Somchai' },
      lastName: { th: 'ใจดี', en: 'Jaidee' },
      headline: 'Frontend Developer',

      description: {
        th: 'Frontend Developer ที่ชอบทำ UI ให้ใช้งานง่ายและโหลดไว ถนัด React, Next.js และ Figma',
        en: 'Frontend Developer focused on clean, fast, and accessible interfaces. Working mainly with React, Next.js, and Figma.',
      },

      aboutMe: {
        th: 'นักพัฒนาเว็บที่สนใจงานออกแบบประสบการณ์ผู้ใช้ เคยทำโปรเจกต์จริงร่วมกับทีม กำลังมองหางาน Frontend ที่ได้ดูแลตั้งแต่ออกแบบจนถึงการนำขึ้นใช้งาน มีความตั้งใจสูงและพร้อมเรียนรู้เทคโนโลยีใหม่ ๆ อยู่เสมอ',
        en: 'A web developer passionate about user experience with hands-on team project experience. Looking for a frontend role covering everything from design to deployment. Highly motivated and always eager to learn.',
      },

      avatarUrl: 'https://placehold.co/300x300/171717/10b981?text=SJ',
      resumeUrl: {
        th: '/resume-th.pdf',
        en: '/resume-en.pdf',
      },

      socialLinks: {
        github: '',
        linkedin: '',
        email: '',
      },

      highlightTags: ['TOEIC 850', 'React', 'TypeScript', 'Figma'],
      updatedAt: new Date('2026-06-01T00:00:00.000Z'),
    };
  }
}
