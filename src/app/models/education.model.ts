import { BaseEntity } from '../types/base-entity';
import { MultiLangString } from '../types/language-type';

export interface Education extends BaseEntity {
  degree: MultiLangString;
  institution: MultiLangString;
  field?: MultiLangString;
  startDate: Date;
  endDate?: Date;
  gpa?: number;
  note?: MultiLangString;
}
