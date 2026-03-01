'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'fi', label: 'Suomi', flag: '🇫🇮' },
];

interface Props {
  dropdown?: boolean;
}

export default function LanguageSwitcher({ dropdown = true }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const current = languages.find((l) => l.code === locale) || languages[0];

  useEffect(() => {
    if (!dropdown) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdown]);

  const switchLocale = (code: string) => {
    router.replace(pathname, { locale: code });
    setOpen(false);
  };

  const cycleLocale = () => {
    const idx = languages.findIndex((l) => l.code === locale);
    const next = languages[(idx + 1) % languages.length];
    router.replace(pathname, { locale: next.code });
  };

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={dropdown ? () => setOpen(!open) : cycleLocale}
        className="group flex items-center overflow-hidden rounded-md bg-white text-[#070707] font-[family-name:var(--font-manrope)]"
        style={{ padding: '6px 6px 6px 16px', gap: '12px' }}
      >
        <span className="flex items-center gap-2 text-sm">
          <span>{current.flag}</span>
          <span className="uppercase tracking-wide">{current.code}</span>
        </span>

        {dropdown && (
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-sm flex-shrink-0 bg-[#070707] text-white transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        )}
      </button>

      {/* Dropdown — only when dropdown=true */}
      {dropdown && (
        <div
          className={`absolute right-0 mt-2 w-40 rounded-md border border-white/10 bg-[rgba(7,7,7,0.95)] backdrop-blur-md overflow-hidden transition-all duration-200 ${
            open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-[family-name:var(--font-manrope)] transition-colors duration-150 ${
                lang.code === locale
                  ? 'text-white bg-white/10'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
