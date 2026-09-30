import { MultiLangString } from '../types/language.type';

export interface Profile {
  name: MultiLangString;
  lastName: MultiLangString;
  description: MultiLangString;
  aboutMe: MultiLangString;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    tel: string;
  };
  tags: string[];
  lastUpdated: Date;
}
