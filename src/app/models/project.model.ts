import { BaseEntity } from '../types/base-entity';
import { MultiLangString } from '../types/language-type';

export interface Project extends BaseEntity {
  title: MultiLangString;
  description: MultiLangString;
  gitRepoUrl: string;
  liveDemoUrl: string;
  technologies: string[];
  isShowcase: boolean;
  detail: ProjectDetail | null;
}

export interface ProjectDetail extends Project {
  tagline: MultiLangString;
  features: string[];
  status: MultiLangString;
  frontend: string[];
  backend: string[];
  database: string[];
  gallery?: { url: string; caption?: MultiLangString }[];
}
