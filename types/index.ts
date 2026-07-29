export interface Course {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'Available' | 'Coming Soon';
  chapters: Chapter[];
}

export interface Chapter {
  slug: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  slug: string;
  title: string;
}

export interface CourseMeta {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'Available' | 'Coming Soon';
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  website?: string;
  location?: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
  gpa?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
}