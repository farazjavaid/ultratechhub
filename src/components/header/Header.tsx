'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations('nav');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/#about',     label: t('about') },
    { href: '/#process',   label: t('process') },
    { href: '/#portfolio', label: t('portfolio') },
    { href: '/#stats',     label: t('stats') },
  ];

  return (
    <>
      <header
        className={`fixed z-50 left-0 w-full flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'top-0 py-3 backdrop-blur-md bg-[rgba(7,7,7,0.88)] border-b border-white/5'
            : 'bottom-[8rem] py-4 bg-transparent'
        }`}
      >
        <div className="w-full mx-auto flex items-center justify-between px-6 lg:px-8" style={{ maxWidth: '1400px' }}>

        {/* ── LEFT: Dark pill (logo + nav) ── */}
        <div className="hidden md:flex items-stretch rounded-md border border-white/10 bg-[rgba(7,7,7,0.92)] overflow-hidden divide-x divide-white/10">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center px-4 py-2.5 text-white font-[family-name:var(--font-outfit)] font-semibold text-base tracking-tight whitespace-nowrap"
          >
            UltraTechHub
          </a>

          {/* Nav links */}
          <nav className="flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-5 py-3 text-base text-white/70 hover:text-white transition-colors duration-200 font-[family-name:var(--font-manrope)] whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile: logo pill only */}
        <div className="md:hidden flex items-center rounded-md border border-white/10 bg-[rgba(7,7,7,0.92)] overflow-hidden">
          <a href="/" className="px-4 py-2.5 text-white font-[family-name:var(--font-outfit)] font-semibold text-sm">
            UltraTechHub
          </a>
        </div>

        {/* Mobile: language switcher (no dropdown) */}
        <div className="md:hidden">
          <LanguageSwitcher dropdown={false} />
        </div>

        {/* ── RIGHT: Contact button + burger ── */}
        <div className="flex items-center gap-3">

          {/* Contact button — desktop */}
          <a
            href="/contact"
            className="group hidden md:flex relative items-center overflow-hidden rounded-md bg-white flex-shrink-0"
            style={{ padding: '6px 6px 6px 16px', color: '#070707', gap: '12px' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <span className="relative text-sm font-[family-name:var(--font-manrope)] group-hover:text-white transition-colors duration-300">
              {t('contact')}
            </span>
            <div
              className="relative flex items-center justify-center w-8 h-8 rounded-sm flex-shrink-0 bg-[#070707] text-white transition-all duration-300 group-hover:bg-white group-hover:text-black"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 13 13" fill="none">
                <path d="M11.0032 3.41421L2.39663 12.0208L0.982422 10.6066L9.58901 2H2.00324V0H13.0032V11H11.0032V3.41421Z" fill="currentColor" />
              </svg>
            </div>
          </a>

          {/* Burger — mobile */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-2.5 rounded-md border border-white/10 bg-[rgba(7,7,7,0.92)]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
          </button>
        </div>
        </div>
      </header>

      {/* ── Mobile fullscreen overlay ── */}
      <div
        className={`fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-6 p-2 text-white"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl font-[family-name:var(--font-outfit)] text-white/70 hover:text-white transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile contact button */}
          <a
            href="/contact"
            className="group relative flex items-center overflow-hidden rounded-md bg-white mt-4"
            style={{ padding: '8px 8px 8px 20px', color: '#070707', gap: '16px' }}
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-base font-[family-name:var(--font-manrope)]">{t('contact')}</span>
            <div
              className="flex items-center justify-center w-10 h-10 rounded-sm flex-shrink-0"
              style={{ backgroundColor: '#070707', color: '#fff' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="none">
                <path d="M11.0032 3.41421L2.39663 12.0208L0.982422 10.6066L9.58901 2H2.00324V0H13.0032V11H11.0032V3.41421Z" fill="currentColor" />
              </svg>
            </div>
          </a>
        </nav>
      </div>
    </>
  );
}
