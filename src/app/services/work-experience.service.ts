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
      {
        id: 2,
        order: 2,
        isPublished: true,
        role: 'Frontend Developer',
        company: {
          th: 'สตาร์ทอัพด้านเทคโนโลยี',
          en: 'Tech Startup',
        },
        location: {
          th: 'เชียงใหม่, ประเทศไทย',
          en: 'Chiang Mai, Thailand',
        },
        startDate: new Date('2018-06-01'),
        endDate: new Date('2019-12-31'),
        achievements: [
          {
            th: 'ออกแบบและพัฒนาอินเทอร์เฟซผู้ใช้ที่ตอบสนองและใช้งานง่าย',
            en: 'Designed and developed responsive and user-friendly interfaces.',
          },
          {
            th: 'ปรับปรุงประสิทธิภาพของแอปพลิเคชันเว็บโดยการเพิ่มประสิทธิภาพโค้ดและลดเวลาในการโหลดหน้าเว็บ',
            en: 'Improved web application performance by optimizing code and reducing page load times.',
          },
        ],
        techStack: ['React', 'JavaScript', 'CSS', 'HTML'],
        createdAt: new Date('2018-06-01'),
        updatedAt: new Date('2019-12-31'),
      },
    ];
  }
}
