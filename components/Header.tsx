"use client";

import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Link, usePathname } from "@/lib/i18n/navigation";
import type { AppLocale } from "@/lib/i18n/routing";
import { LanguageToggle } from "./LanguageToggle";

type HeaderProps = {
  showSectionLinks?: boolean;
};

export function Header({ showSectionLinks = true }: HeaderProps) {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Detect if we're on the home page (root or /es)
  const isHomePage = pathname === "/" || pathname === "/es";

  // If showSectionLinks is explicitly false, or we're not on home, use full paths
  const useAnchors = showSectionLinks && isHomePage;

  const links = [
    
    { href: useAnchors ? "#skills" : "/#skills", label: t("skills") },
    { href: useAnchors ? "#projects" : "/projects", label: t("projects") },
    { href: useAnchors ? "#contact" : "/#contact", label: t("contact") },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-primary)]">
      <div className="container-width flex h-16 items-center justify-between gap-4">
        <Link href="/" locale={locale} className="text-sm font-bold uppercase tracking-[0.12em]">
          Leandro Bechara
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
