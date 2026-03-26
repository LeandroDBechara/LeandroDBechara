import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="container-width flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm text-[var(--text-secondary)]">{t("copyright", { year })}</p>
          <p className="text-xs text-[var(--text-muted)]">{t("made_with")}</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:leodbechara@gmail.com"
            className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            aria-label="Email"
          >
            <span className="inline-flex items-center gap-2">
              <Mail className="size-4" /> Email
            </span>
          </a>
          <a
            href="https://github.com/LeandroDBechara"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/leandro-david-bechara/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
