export interface NavItem {
  label: string;
  path?: string;
  children?: NavItem[];
}

export interface FacultyMember {
  id: number;
  name: string;
  role: string;
  department: string;
  bio: string;
  imageUrl: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
}