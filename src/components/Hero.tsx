import { ArrowRight, BookOpen } from 'lucide-react';
import type { Translation } from '@/i18n';

interface HeroProps {
  t: Translation;
}

export default function Hero({ t }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink-950"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2249063/pexels-photo-2249063.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Library books under warm light"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/80 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 to-transparent" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-20 pb-12">
        <div className="max-w-3xl">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in-down">
            <span className="h-px w-10 bg-accent-500" />
            <span className="font-mono text-xs text-accent-400 tracking-[0.15em] uppercase">
              {t.hero.kicker}
            </span>
          </div>

          {/* Title — editorial mixed typography */}
          <h1 className="mb-8 animate-fade-in-up">
            <span className="block font-display text-5xl sm:text-6xl md:text-7xl font-normal text-white leading-[0.95]">
              {t.hero.title1}
            </span>
            <span className="block font-display italic text-5xl sm:text-6xl md:text-7xl font-normal text-accent-400 leading-[0.95] mt-1">
              {t.hero.title2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-ink-200 max-w-2xl leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <button
              onClick={() => scrollTo('activities')}
              className="group flex items-center gap-2 px-6 py-3 rounded-md bg-accent-600 hover:bg-accent-500 text-white font-medium text-sm transition-all duration-300 hover:gap-3"
            >
              {t.hero.cta}
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="group flex items-center gap-2 px-6 py-3 rounded-md border border-white/20 hover:border-white/40 text-white font-medium text-sm transition-all duration-300 hover:bg-white/5"
            >
              <BookOpen size={16} className="opacity-70" />
              {t.hero.secondaryCta}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden sm:flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
        <span className="font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase [writing-mode:vertical-rl]">
          {t.hero.scroll}
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
