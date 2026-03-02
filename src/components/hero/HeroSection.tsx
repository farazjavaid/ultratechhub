import { getTranslations } from 'next-intl/server';
import { TypewriterWord } from './TypewriterWord';
import SplineBackground from './SplineBackground';
import StackSlider from '@/components/StackSlider';

export default async function HeroSection() {
  const t = await getTranslations('hero');

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0a]">

      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                            linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Spline Background */}
      <div className="absolute inset-0 z-0 pt-72 md:pt-52 scale-130 md:scale-150 origin-center">
        <SplineBackground />
      </div>

      <div className="relative z-10 w-full mx-auto px-6 lg:px-8 pt-14 pb-6 md:pb-24 pointer-events-none" style={{ maxWidth: '1440px' }}>
        <div className="flex flex-col gap-8">

          {/* Heading */}
          <div>
            <h1
              className="font-[family-name:var(--font-outfit)] text-white"
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 5rem)',
                fontWeight: 300,
                lineHeight: '120%',
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                marginTop: '-1.3rem',
                marginBottom: '-1.1rem',
              }}
            >
              <span>{t('heading1')}</span>
              <br />
              <span className="text-white">
                {t('heading2')} <TypewriterWord />
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="font-[family-name:var(--font-manrope)] text-xl text-zinc-300 italic">
            {t('tagline')}
          </p>

          {/* Subtitle */}
          <p className="font-[family-name:var(--font-manrope)] text-lg md:text-xl text-zinc-200 max-w-md leading-relaxed md:self-end">
            {t('subtitle')}
          </p>

        </div>
      </div>

      {/* Stack Slider — bottom of hero */}
      <div className="relative z-10 mt-auto">
        <StackSlider />
      </div>

    </section>
  );
}
