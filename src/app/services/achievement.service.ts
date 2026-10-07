import { Injectable } from '@angular/core';
import { Achievement } from '../models/achievement.model';

@Injectable({
  providedIn: 'root',
})
export class AchievementService {
  constructor() {}

  getAchievements(): Achievement[] {
    return [
      {
        id: 1,
        order: 1,
        isPublished: true,
        title: {
          th: 'รางวัลชนะเลิศ',
          en: 'First Place Award',
        },
        issuer: {
          th: 'องค์กรจัดการแข่งขัน',
          en: 'Competition Organizer',
        },
        kind: 'competition',
        date: '2023-10-01',
        description: {
          th: 'ได้รับรางวัลชนะเลิศในการแข่งขันโปรแกรมเมิง',
          en: 'Received first place award in programming competition',
        },
        result: {
          th: 'ชนะเลิศ',
          en: 'First Place',
        },
        skillsGained: ['JavaScript', 'Python'],
        createdAt: new Date('2023-10-01'),
        updatedAt: new Date('2023-10-01'),
      },
      {
        id: 2,
        order: 2,
        isPublished: true,
        title: {
          th: 'ใบรับรองการอบรม',
          en: 'Training Certificate',
        },
        issuer: {
          th: 'สถาบันฝึกอบรม',
          en: 'Training Institute',
        },
        kind: 'certificate',
        date: '2022-05-15',
        expiryDate: '2025-05-15',
        description: {
          th: 'เข้าร่วมการอบรมเชิงปฏิบัติการเกี่ยวกับการพัฒนาเว็บ',
          en: 'Participated in a hands-on workshop on web development',
        },
        skillsGained: ['HTML', 'CSS', 'JavaScript'],
        credentialUrl: 'https://example.com/certificate/12345',
        imageUrl: 'https://example.com/images/certificate.jpg',
        createdAt: new Date('2022-05-15'),
        updatedAt: new Date('2022-05-15'),
      },
      {
        id: 3,
        order: 3,
        isPublished: true,
        title: {
          th: 'ประกาศนียบัตรการเข้าร่วมค่าย',
          en: 'Camp Participation Certificate',
        },
        issuer: {
          th: 'ค่ายพัฒนาทักษะ',
          en: 'Skill Development Camp',
        },
        kind: 'other',
        date: '2021-08-20',
        description: {
          th: 'เข้าร่วมค่ายพัฒนาทักษะด้านเทคโนโลยีสารสนเทศ',
          en: 'Participated in a skill development camp for information technology',
        },
        skillsGained: ['Teamwork', 'Problem Solving'],
        createdAt: new Date('2021-08-20'),
        updatedAt: new Date('2021-08-20'),
      },
    ];
  }
}
