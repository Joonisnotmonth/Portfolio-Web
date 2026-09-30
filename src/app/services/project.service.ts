import { ProjectDetail } from '../models/project.model';

export const MOCK_PROJECT_DETAILS: ProjectDetail[] = [
  {
    id: 1,
    title: {
      th: 'ระบบบริหารจัดการร้านค้า E-Commerce',
      en: 'E-Commerce Management System',
    },
    description: {
      th: 'ระบบหลังบ้านครบวงจรสำหรับจัดการสต็อกสินค้า คำสั่งซื้อ และแดชบอร์ดวิเคราะห์ยอดขายแบบเรียลไทม์',
      en: 'All-in-one backend system for inventory management, orders, and real-time sales analytics dashboard.',
    },
    gitRepoUrl: 'https://github.com/username/ecommerce-backend-frontend',
    liveDemoUrl: 'https://demo-ecommerce-shop.com',
    technologies: ['Angular', '.NET Core', 'MongoDB', 'Tailwind CSS'],
    isShowcase: true,
    features: [
      'ระบบ Authentication และ Role-based Authorization ด้วย JWT',
      'ระบบจัดการสต็อกสินค้าพร้อมแจ้งเตือนสินค้าใกล้หมด',
      'Dashboard แสดงสถิติยอดขายรายเดือนด้วยกราฟอินเทอร์แอกทีฟ',
    ],
    challenges: [
      'การจัดการ High Concurrency ช่วง Flash Sale ที่มีคนเข้าใช้งานพร้อมกันจำนวนมาก',
      'การออกแบบ MongoDB Schema ให้รองรับการค้นหาสินค้าและฟิลเตอร์ที่ซับซ้อนได้อย่างรวดเร็ว',
    ],
    frontend: ['Angular 18', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    backend: ['.NET 8 Web API', 'Entity Framework (สำหรับบางส่วน)', 'MediatR (CQRS Pattern)'],
    database: ['MongoDB'],
    images: [
      'https://images.unsplash.com/photo-1557821552-17105176678c?w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    ],
  },
  {
    id: 2,
    title: {
      th: 'แอปพลิเคชันจองคิวคลินิกออนไลน์',
      en: 'Online Clinic Queue Booking App',
    },
    description: {
      th: 'เว็บแอปพลิเคชันอำนวยความสะดวกในการจองคิวพบแพทย์ ดูประวัติการรักษา และแจ้งเตือนสถานะคิวแบบเรียลไทม์',
      en: 'Web application for booking doctor appointments, viewing medical history, and real-time queue status notifications.',
    },
    gitRepoUrl: 'https://github.com/username/clinic-queue-system',
    liveDemoUrl: 'https://demo-clinic-queue.com',
    technologies: ['Angular', '.NET Core', 'SignalR', 'MongoDB'],
    isShowcase: true,
    features: [
      'ระบบจองคิวออนไลน์เลือกแผนกและแพทย์ได้ตามต้องการ',
      'ระบบแจ้งเตือนอัปเดตสถานะคิวแบบเรียลไทม์ผ่าน SignalR',
      'ระบบออกใบนัดหมายและประวัติการรักษาดิจิทัล',
    ],
    challenges: [
      'การทำ Real-time Notification ให้มีความเสถียรเมื่อมีผู้ป่วยจองคิวเข้ามาพร้อมกันหลายคน',
      'การออกแบบโครงสร้างข้อมูลใน MongoDB ให้สอดคล้องกับ Time-series ของคิวหมอ',
    ],
    frontend: ['Angular', 'RxJS', 'Bootstrap'],
    backend: ['.NET 8', 'SignalR Hub'],
    database: ['MongoDB'],
    images: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800'],
  },
];
