import { Project } from '../models/project.model';

export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    order: 1,
    isPublished: true,
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-01-01'),

    title: {
      en: 'Taskii',
      th: 'ระบบจัดการงาน Taskii',
    },

    description: {
      en: 'A full-stack task management system built with Angular and .NET.',
      th: 'ระบบจัดการงานแบบ Full-stack พัฒนาด้วย Angular และ .NET',
    },

    gitRepoUrl: 'https://github.com/yourname/taskii',
    liveDemoUrl: 'https://taskii-demo.vercel.app',

    technologies: ['Angular', '.NET 8', 'PostgreSQL', 'Tailwind CSS'],

    isShowcase: true,

    detail: {
      id: 1,
      order: 1,
      isPublished: true,
      createdAt: new Date('2026-01-01'),
      updatedAt: new Date('2026-01-01'),

      title: {
        en: 'Taskii',
        th: 'ระบบจัดการงาน Taskii',
      },

      description: {
        en: 'A full-stack task management system built with Angular and .NET.',
        th: 'ระบบจัดการงานแบบ Full-stack พัฒนาด้วย Angular และ .NET',
      },

      gitRepoUrl: 'https://github.com/yourname/taskii',
      liveDemoUrl: 'https://taskii-demo.vercel.app',

      technologies: ['Angular', '.NET 8', 'PostgreSQL', 'Tailwind CSS'],

      isShowcase: true,

      detail: null,

      tagline: {
        en: 'Manage tasks efficiently in one place.',
        th: 'จัดการงานทั้งหมดได้อย่างมีประสิทธิภาพในที่เดียว',
      },

      features: ['Authentication', 'Task CRUD', 'Task Status Tracking', 'Dashboard'],

      status: {
        en: 'In Progress',
        th: 'กำลังพัฒนา',
      },

      frontend: ['Angular 20', 'TypeScript', 'Tailwind CSS'],

      backend: ['.NET 8 Web API', 'Entity Framework Core', 'JWT Authentication'],

      database: ['PostgreSQL'],

      gallery: [
        {
          url: '/images/taskii/dashboard.png',
          caption: {
            en: 'Dashboard Page',
            th: 'หน้าแดชบอร์ด',
          },
        },
        {
          url: '/images/taskii/task-list.png',
          caption: {
            en: 'Task List',
            th: 'รายการงาน',
          },
        },
      ],
    },
  },

  {
    id: 2,
    order: 2,
    isPublished: true,
    createdAt: new Date('2026-02-01'),
    updatedAt: new Date('2026-02-01'),

    title: {
      en: 'Personal Portfolio',
      th: 'เว็บไซต์ Portfolio',
    },

    description: {
      en: 'A multilingual portfolio website showcasing projects and skills.',
      th: 'เว็บไซต์ Portfolio รองรับหลายภาษา สำหรับแสดงผลงานและทักษะ',
    },

    gitRepoUrl: 'https://github.com/yourname/portfolio',
    liveDemoUrl: 'https://portfolio-demo.vercel.app',

    technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],

    isShowcase: true,

    detail: null,
  },

  {
    id: 3,
    order: 3,
    isPublished: false,
    createdAt: new Date('2026-03-01'),
    updatedAt: new Date('2026-03-01'),

    title: {
      en: 'E-Commerce Dashboard',
      th: 'แดชบอร์ดร้านค้าออนไลน์',
    },

    description: {
      en: 'Admin dashboard for managing products and orders.',
      th: 'ระบบหลังบ้านสำหรับจัดการสินค้าและคำสั่งซื้อ',
    },

    gitRepoUrl: '',
    liveDemoUrl: '',

    technologies: ['Angular', 'Chart.js', 'Firebase'],

    isShowcase: false,

    detail: null,
  },
];
