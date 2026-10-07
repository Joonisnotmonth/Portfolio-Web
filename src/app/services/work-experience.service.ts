import { Injectable } from '@angular/core';
import { WorkExperience } from '../models/work-experience.model';

@Injectable({
  providedIn: 'root',
})
export class WorkExperienceService {
  constructor() {}

  getWorkExperiences(): WorkExperience[] {
    return [
      {
        id: 1,
        order: 1,
        isPublished: true,
        role: 'Software Engineer',
        company: {
          th: 'บริษัทเทคโนโลยี',
          en: 'Tech Company',
        },
        location: {
          th: 'กรุงเทพมหานคร, ประเทศไทย',
          en: 'Bangkok, Thailand',
        },
        startDate: new Date('2020-01-01'),
        endDate: undefined,
        achievements: [
          {
            th: 'พัฒนาและบำรุงรักษาแอปพลิเคชันเว็บโดยใช้เทคโนโลยีสมัยใหม่',
            en: 'Developed and maintained web applications using modern technologies.',
          },
          {
            th: 'ทำงานร่วมกับทีมข้ามสายงานเพื่อส่งมอบโครงการที่ตรงเวลา',
            en: 'Collaborated with cross-functional teams to deliver projects on time.',
          },
        ],
        techStack: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL'],
        createdAt: new Date('2020-01-01'),
        updatedAt: new Date('2023-01-01'),
      },
    ];
  }
}
