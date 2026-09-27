import { BookOpen, GraduationCap, Globe, Film } from 'lucide-react';
import type { Translation } from '@/i18n';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface AboutProps {
  t: Translation;
}

export default function About({ t }: AboutProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const icons = [BookOpen, GraduationCap, Globe, Film];

  return (
    <section id="about" className="relative py-20 sm:py-28 px-5 sm:px-8 bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Editorial header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-xs text-accent-600 tracking-[0.15em] uppercase">
              {t.about.label}
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-ink-200" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-ink-900 leading-[1.1] max-w-3xl">
            {t.about.title}
          </h2>
        </div>

        {/* Two-column: text + image, asymmetric */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: Text block */}
          <div className={`lg:col-span-7 space-y-5 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-lg text-ink-800 leading-relaxed">{t.about.paragraph1}</p>

            {/* Pullquote */}
            <blockquote className="relative my-8 pl-6 border-l-2 border-accent-500">
              <p className="font-display italic text-2xl text-ink-900 leading-snug">
                {t.about.pullquote}
              </p>
            </blockquote>

            <p className="text-base text-ink-600 leading-relaxed">{t.about.paragraph2}</p>
            <p className="text-base text-ink-600 leading-relaxed">{t.about.paragraph3}</p>
          </div>

          {/* Right: Image, smaller column */}
          <div className={`lg:col-span-5 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3747518/pexels-photo-3747518.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Warm library scene"
                className="w-full h-[340px] sm:h-[440px] object-cover rounded-sm"
              />
              {/* Caption overlay */}
              <div className="mt-3 flex items-start gap-2">
                <span className="font-mono text-[10px] text-ink-400 tracking-wider uppercase shrink-0 mt-0.5">
                  Fig. 01
                </span>
                <span className="text-xs text-ink-400 leading-relaxed">
                  {t.about.label} — "Hasan Prishtina" Cultural Center, Kukës
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Features — inline editorial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px mt-20 bg-ink-100">
          {t.about.features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className={`bg-white p-6 group transition-all duration-500 hover:bg-ink-50 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${300 + i * 80}ms` }}
              >
                <Icon size={22} className="text-accent-600 mb-4 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="font-display font-medium text-ink-900 text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
