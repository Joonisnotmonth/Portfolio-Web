import { BaseEntity } from '../types/base-entity';
import { MultiLangString } from '../types/language-type';

export interface WorkExperience extends BaseEntity {
  role: string;
  company: MultiLangString;
  startDate: Date;
  endDate?: Date;
  location?: MultiLangString;
  achievements?: MultiLangString[];
  techStack: string[];
}
