export interface NavItem {
  title: string;
  path: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops';
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}