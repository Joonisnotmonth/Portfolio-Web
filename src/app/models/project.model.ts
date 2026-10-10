import { BaseEntity } from '../types/base-entity';
import { MultiLangString } from '../types/language-type';

export interface Project extends BaseEntity {
  title: MultiLangString;
  description: MultiLangString;
  isShowcase: boolean;
  gitRepoUrl?: string;
  liveDemoUrl?: string;

  tagline: MultiLangString;
  features: string[];
  status: MultiLangString;
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
  gallery?: { url: string; caption?: MultiLangString }[];
}
