import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const variants = {
  primary:
    "border-[var(--accent)] bg-[var(--accent)] text-[var(--bg-primary)] hover:border-[var(--accent-hover)] hover:bg-[var(--accent-hover)]",
  secondary:
    "border-[var(--accent)] bg-transparent text-[var(--accent)] hover:bg-[color-mix(in_oklab,var(--accent)_12%,transparent)]",
  ghost: "border-transparent bg-transparent text-[var(--accent)] hover:bg-[var(--bg-tertiary)]",
} as const;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
