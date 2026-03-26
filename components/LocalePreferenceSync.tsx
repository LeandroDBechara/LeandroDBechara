"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { useEffect } from "react";
import type { AppLocale } from "@/lib/i18n/routing";

const localeStorageKey = "portfolio-locale";

export function LocalePreferenceSync() {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const savedLocale = localStorage.getItem(localeStorageKey) as AppLocale | null;
    if (!savedLocale || savedLocale === locale) {
      return;
    }

    router.replace(pathname, { locale: savedLocale });
  }, [locale, pathname, router]);

  return null;
}
