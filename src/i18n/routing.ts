import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'sv', 'fr', 'fi'],
  defaultLocale: 'en',
});
