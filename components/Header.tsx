"use client";

import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/lib/i18n/navigation";
import type { AppLocale } from "@/lib/i18n/routing";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./LanguageToggle";

type HeaderProps = {
  showSectionLinks?: boolean;
};

export function Header({ showSectionLinks = true }: HeaderProps) {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = height > 0 ? (y / height) * 100 : 0;
      setProgress(Math.min(Math.max(nextProgress, 0), 100));
      setScrolled(y > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/projects", label: t("projects") },
    { href: showSectionLinks ? "#skills" : "/#skills", label: t("skills") },
    { href: showSectionLinks ? "#contact" : "/#contact", label: t("contact") },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-200",
        scrolled ? "bg-[color-mix(in_oklab,var(--bg-primary)_80%,transparent)] backdrop-blur-md border-[var(--border)]" : "bg-transparent"
      )}
    >
      <div
        className="h-0.5 bg-[var(--accent)] transition-[width] duration-200"
        style={{ width: `${progress}%` }}
      />
      <div className="container-width flex h-16 items-center justify-between gap-4">
        <Link href="/" locale={locale} className="text-sm font-bold uppercase tracking-[0.12em]">
          LeandroDBechara
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              locale={locale}
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {link.label}
            </Link>
          ))}
          <LanguageToggle />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? t("close_menu") : t("open_menu")}
          className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-2 text-[var(--text-secondary)] md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--border)] bg-[var(--bg-secondary)] md:hidden">
          <div className="container-width flex flex-col gap-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                locale={locale}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </Link>
            ))}
            <LanguageToggle />
          </div>
        </div>
      ) : null}
    </header>
  );
}
