export type ProjectStatus = "production" | "development" | "open-source";
export type ProjectCategory = "web" | "mobile" | "game" | "backend";

export type Project = {
  slug: string;
  title: string;
  titleEs: string;
  year: number;
  status: ProjectStatus;
  category: ProjectCategory;
  thumbnail: string;
  gallery: string[];
  technologies: string[];
  github: string;
  live?: string;
  apk?: string;
  summary: string;
  summaryEs: string;
  problem: string;
  problemEs: string;
  solution: string;
  solutionEs: string;
  challenges: string[];
  challengesEs: string[];
  features: string[];
  featuresEs: string[];
  architecture: string;
  architectureEs: string;
};
