import { MultiLangString } from '../types/language-type';

export interface Profile {
  firstName: MultiLangString;
  lastName: MultiLangString;
  headline: string;
  description: MultiLangString;
  aboutMe: MultiLangString;

  avatarUrl: string;
  resumeUrl: MultiLangString;

  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };

  highlightTags: string[];
  updatedAt: Date;
}
