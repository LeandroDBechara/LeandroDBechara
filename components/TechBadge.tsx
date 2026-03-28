import {
  Code2,
  Database,
  Globe,
  Gamepad2,
  Terminal,
  Container,
  Cloud,
  Palette,
  Share2,
  FileCode,
  Box,
  Server,
  Layers,
  Braces,
  Cpu,
  TestTubeDiagonal,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  // Languages
  TypeScript: Code2,
  JavaScript: Code2,
  "C#": FileCode,
  HTML: Globe,
  CSS: Palette,
  SQL: Database,
  Python: Braces,

  // Frameworks
  React: Box,
  "React Native": Box,
  "Next.js": Layers,
  NestJS: Server,
  ".NET": Box,
  Unity: Gamepad2,

  // Backend & DB
  "Node.js": Terminal,
  Prisma: Database,
  PostgreSQL: Database,
  MySQL: Database,
  "SQL Server": Database,
  Docker: Container,

  // Tools
  "Google Cloud": Cloud,
  Git: Share2,
  "Framer Motion": Cpu,
  "Tailwind CSS": Palette,
  "Vitest": TestTubeDiagonal,
};

type TechBadgeProps = {
  children: string;
  className?: string;
};

export function TechBadge({ children, className }: TechBadgeProps) {
  const Icon = iconMap[children];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-tertiary)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--accent)]",
        className
      )}
    >
      {Icon && <Icon className="size-3.5 shrink-0" />}
      {children}
    </span>
  );
}
