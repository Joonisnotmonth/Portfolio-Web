import { Profile } from '../models/profile.model';

export const MOCK_PROFILE: Profile = {
  name: {
    en: 'John',
    th: 'จอห์น',
  },
  lastName: {
    en: 'Doe',
    th: 'โด',
  },
  description: {
    en: 'Frontend Developer',
    th: 'นักพัฒนาเว็บ',
  },
  aboutMe: {
    en: 'I am a passionate frontend developer with experience in React and TypeScript.',
    th: 'ผมเป็นนักพัฒนาเว็บที่มีประสบการณ์ใน React และ TypeScript',
  },
  socialLinks: {
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    email: 'johndoe@example.com',
    tel: '+66 123456789',
  },
  tags: ['React', 'TypeScript', 'Figma'],
  lastUpdated: new Date(),
};
