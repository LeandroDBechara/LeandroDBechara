"use client";

import { useEffect, useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import type { AppLocale } from "@/lib/i18n/routing";
import { cn } from "@/lib/utils";

const localeStorageKey = "portfolio-locale";

export function LanguageToggle() {
  const t = useTranslations("nav");
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();

  const locales = useMemo(() => ["en", "es"] as const, []);

  useEffect(() => {
    localStorage.setItem(localeStorageKey, locale);
  }, [locale]);

  const changeLocale = (nextLocale: AppLocale) => {
    localStorage.setItem(localeStorageKey, nextLocale);
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="inline-flex rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-1">
      {locales.map((candidate) => {
        const active = locale === candidate;
        return (
          <button
            key={candidate}
            type="button"
            onClick={() => changeLocale(candidate)}
            aria-label={candidate === "en" ? t("switch_to_en") : t("switch_to_es")}
            className={cn(
              "rounded-lg px-3 py-1.5 text-xs font-semibold uppercase transition-colors",
              active
                ? "bg-[var(--accent)] text-[var(--bg-primary)]"
                : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"
            )}
          >
            {candidate}
          </button>
        );
      })}
    </div>
  );
}
