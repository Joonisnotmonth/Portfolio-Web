import { BaseEntity } from '../types/base-entity';
import { MultiLangString } from '../types/language-type';

export type AchievementKind =
  | 'certificate' // ใบรับรอง / คอร์สออนไลน์ / อบรม
  | 'competition' // แข่งขัน / hackathon / ประกวด
  | 'other'; // ค่าย ชมรม จิตอาสา งานอาสาสมัคร

export interface Achievement extends BaseEntity {
  title: MultiLangString;
  issuer: MultiLangString;
  kind: AchievementKind;
  date: string;
  expiryDate?: string;

  description?: MultiLangString;
  result?: MultiLangString;
  skillsGained?: string[];

  credentialUrl?: string;
  imageUrl?: string;
}
