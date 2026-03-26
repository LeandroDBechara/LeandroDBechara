import dgtWeb from "@/content/projects/dgt-web.json";
import metalcNet from "@/content/projects/metalc-net.json";
import verdeandoApp from "@/content/projects/verdeando-app.json";
import verdeandoBack from "@/content/projects/verdeando-back.json";
import verdeandoTheGame from "@/content/projects/verdeando-the-game.json";
import type { Project } from "./types";

const projects = [
  verdeandoApp,
  verdeandoBack,
  metalcNet,
  verdeandoTheGame,
  dgtWeb,
] as Project[];

export function getProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.slice(0, 3);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
