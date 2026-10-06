import { Education } from '../models/education.model';

export const MOCK_EDUCATION: Education[] = [
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
    startDate: new Date('2021-08'),
    endDate: new Date('2025-05'),
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
    startDate: new Date('2018-05'),
    endDate: new Date('2021-03'),
    gpa: 3.75,
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-01-01'),
  },
];
