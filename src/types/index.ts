export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: readonly string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
  technologies: readonly string[];
  achievements: readonly string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate: Date;
  gpa?: number;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export interface Route {
  path: string;
  label: string;
  description?: string;
}

export const ROUTES = {
  home: '/',
  about: '/about',
  projects: '/projects',
  blog: '/blog',
  contact: '/contact',
} as const;

export type RouteKey = keyof typeof ROUTES;
