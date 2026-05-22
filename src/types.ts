export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  category: 'Frontend' | 'Fullstack' | 'Mobile' | 'Tools';
  problemSolved?: string;
  keyFeatures?: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Database';
  level: number; // 0 to 100
  iconName: string; // Lucide icon name string to dynamically render or map
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  org: string;
  description: string;
  type: 'education' | 'achievement' | 'work';
}
