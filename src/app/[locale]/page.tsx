import HeroSection from '@/components/hero/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* TEMP SECTION — remove when done */}
      <section className="min-h-screen bg-[#111] flex items-center justify-center">
        <p className="text-white text-3xl font-bold">Temporary Section</p>
      </section>
    </main>
  );
}
