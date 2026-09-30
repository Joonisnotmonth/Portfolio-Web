import { MultiLangString } from '../types/language.type';

export interface Project {
  id: number;
  title: MultiLangString;
  description: MultiLangString;
  gitRepoUrl: string;
  liveDemoUrl: string;
  technologies: string[];
  isShowcase: boolean;
}

export interface ProjectDetail extends Project {
  features: string[];
  challenges: string[];
  frontend: string[];
  backend: string[];
  database: string[];
  images: string[];
}
