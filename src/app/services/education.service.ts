import { Injectable } from '@angular/core';
import { Education } from '../models/education.model';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  constructor() {}

  getEducations(): Education[] {
    return [
      {
        id: 1,
        order: 1,
        isPublished: true,
        degree: {
          th: 'วท.บ. วิทยาการคอมพิวเตอร์',
          en: 'B.Sc. in Computer Science',
        },
        institution: {
          th: 'มหาวิทยาลัยเทคโนโลยี…',
          en: 'University of Technology…',
        },
        startYear: 2021,
        endYear: 2025,
        gpa: 3.5,
        note: { th: 'GPAX 3.50 ·ทุนเพชรพระจอมเกล้า', en: 'GPAX 3.50 · Academic Scholarship' },
        createdAt: new Date('2026-01-01'),
        updatedAt: new Date('2026-01-01'),
      },
      {
        id: 2,
        order: 2,
        isPublished: true,
        degree: { th: 'มัธยมศึกษาตอนปลาย สายวิทย์-คณิต', en: 'High School, Science-Math Program' },
        institution: { th: 'โรงเรียนเตรียมอุดม…', en: 'Triam Udom School…' },
        startYear: 2018,
        endYear: 2021,
        gpa: 3.75,
        createdAt: new Date('2026-01-01'),
        updatedAt: new Date('2026-01-01'),
      },
    ];
  }
}
