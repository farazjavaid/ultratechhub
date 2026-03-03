import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { LangSetter } from '@/components/LangSetter';
import Header from '@/components/header/Header';
import Preloader from '@/components/Preloader';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'UltraTechHub — Digital Agency',
  description: 'Cutting-edge web solutions for forward-thinking businesses.',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'de' | 'sv' | 'fr')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <CustomCursor />
      <Preloader />
      <LangSetter locale={locale} />
      <div className="fixed top-6 left-0 right-0 z-[60] hidden md:flex justify-center pointer-events-none">
        <div className="w-full flex justify-end pointer-events-auto px-6 lg:px-8" style={{ maxWidth: '1400px' }}>
          <LanguageSwitcher />
        </div>
      </div>
      <Header />
      {children}
    </NextIntlClientProvider>
  );
}
