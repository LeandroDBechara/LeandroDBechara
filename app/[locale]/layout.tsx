import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocalePreferenceSync } from "@/components/LocalePreferenceSync";
import { PageTransition } from "@/components/PageTransition";
import { routing } from "@/lib/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <LocalePreferenceSync />
      <Header />
      <PageTransition>
        <main className="min-h-screen pt-16">{children}</main>
      </PageTransition>
      <Footer />
    </NextIntlClientProvider>
  );
}
