import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  getProjects(): Project[] {
    return [
      {
        id: 1,
        order: 1,
        isPublished: true,
        title: {
          th: 'เว็บไซต์พอร์ตโฟลิโอ',
          en: 'Portfolio Website',
        },
        description: {
          th: 'เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่แสดงประวัติการทำงาน การศึกษา และผลงาน',
          en: 'A personal portfolio website showcasing work experience, education, and projects.',
        },
        isShowcase: true,
        tagline: {
          th: 'เว็บไซต์พอร์ตโฟลิโอส่วนตัว',
          en: 'Personal Portfolio Website',
        },
        features: [
          'แสดงประวัติการทำงาน การศึกษา และผลงาน',
          'รองรับหลายภาษา (ไทยและอังกฤษ)',
          'ออกแบบให้ใช้งานง่ายและโหลดเร็ว',
        ],
        status: {
          th: 'เสร็จสมบูรณ์',
          en: 'Completed',
        },
        frontend: ['Angular', 'TypeScript', 'Tailwind CSS'],
        backend: ['Node.js', 'Express'],
        database: ['MongoDB'],
        tools: ['Figma', 'Git', 'Vercel'],
        gallery: [
          {
            url: 'https://picsum.photos/seed/picsum/400/300',
            caption: {
              th: 'ภาพหน้าจอของเว็บไซต์พอร์ตโฟลิโอ',
              en: 'Screenshot of the portfolio website',
            },
          },
        ],
        gitRepoUrl: '',
        liveDemoUrl: 'https://example.com/portfolio',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
      {
        id: 2,
        order: 2,
        isPublished: true,
        title: {
          th: 'ระบบจัดการงาน',
          en: 'Task Management System',
        },
        description: {
          th: 'ระบบจัดการงานที่ช่วยให้ทีมสามารถติดตามและจัดการงานได้อย่างมีประสิทธิภาพ',
          en: 'A task management system that helps teams track and manage tasks efficiently.',
        },
        isShowcase: false,
        tagline: {
          th: 'ระบบจัดการงานสำหรับทีม',
          en: 'Team Task Management System',
        },
        features: [
          'สร้างและมอบหมายงานให้สมาชิกในทีม',
          'ติดตามความคืบหน้าของงานและสถาน  ะงาน',
          'แจ้งเตือนเมื่อมีการอัปเดตงาน',
        ],
        status: {
          th: 'อยู่ระหว่างพัฒนา',
          en: 'In Development',
        },
        frontend: ['React', 'TypeScript', 'Tailwind CSS'],
        backend: ['Node.js', 'Express'],
        database: ['PostgreSQL'],
        tools: ['Figma', 'Git', 'Docker'],
        gallery: [
          {
            url: 'https://picsum.photos/seed/picsum/400/300',
            caption: {
              th: 'ภาพหน้าจอของระบบจัดการงาน',
              en: 'Screenshot of the task management system',
            },
          },
        ],
        gitRepoUrl: '',
        liveDemoUrl: 'https://example.com/task-manager',
        createdAt: new Date('2024-02-01'),
        updatedAt: new Date('2024-02-01'),
      },
      {
        id: 3,
        order: 3,
        isPublished: true,
        title: {
          th: 'แอปพลิเคชันจดบันทึก',
          en: 'Note-Taking Application',
        },
        description: {
          th: 'แอปพลิเคชันจดบันทึกที่ช่วยให้ผู้ใช้สามารถสร้างและจัดการบันทึกได้อย่างง่ายดาย',
          en: 'A note-taking application that allows users to create and manage notes easily.',
        },
        isShowcase: false,
        tagline: {
          th: 'แอปพลิเคชันจดบันทึกส่วนตัว',
          en: 'Personal Note-Taking Application',
        },
        features: [
          'สร้างและแก้ไขบันทึกได้อย่างง่ายดาย',
          'จัดหมวดหมู่และค้นหาบันทึกได้อย่างรวดเร็ว',
          'ซิงค์บันทึกระหว่างอุปกรณ์ต่าง ๆ',
        ],
        status: {
          th: 'อยู่ระหว่างพัฒนา',
          en: 'In Development',
        },
        frontend: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
        backend: ['Node.js', 'Express'],
        database: ['SQLite'],
        tools: ['Figma', 'Git', 'Electron'],
        gallery: [
          {
            url: 'https://picsum.photos/seed/picsum/400/300',
            caption: {
              th: 'ภาพหน้าจอของแอปพลิเคชันจดบันทึก',
              en: 'Screenshot of the note-taking application',
            },
          },
        ],
        gitRepoUrl: '',
        liveDemoUrl: 'https://example.com/note-app',
        createdAt: new Date('2024-03-01'),
        updatedAt: new Date('2024-03-01'),
      },
    ];
  }
}
