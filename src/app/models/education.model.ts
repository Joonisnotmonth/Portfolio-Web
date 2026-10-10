import { BaseEntity } from '../types/base-entity';
import { MultiLangString } from '../types/language-type';

export interface Education extends BaseEntity {
  degree: MultiLangString;
  institution: MultiLangString;
  field?: MultiLangString;
  startYear: number;
  endYear?: number;
  gpa?: number;
  note?: MultiLangString;
}
