import { cn } from "@/lib/utils";

type TechBadgeProps = {
  children: string;
  className?: string;
};

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-tertiary)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--accent)]",
        className
      )}
    >
      {children}
    </span>
  );
}
