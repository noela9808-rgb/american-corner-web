import type { Translation } from '@/i18n';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ActivitiesProps {
  t: Translation;
}

export default function Activities({ t }: ActivitiesProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="activities" className="relative py-20 sm:py-28 px-5 sm:px-8 bg-ink-50 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-xs text-accent-600 tracking-[0.15em] uppercase">
              {t.activities.label}
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-ink-200" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-ink-900 leading-[1.1] max-w-2xl mb-4">
            {t.activities.title}
          </h2>
          <p className="text-ink-500 text-base leading-relaxed max-w-xl">{t.activities.subtitle}</p>
        </div>

        {/* Editorial list — alternating layout */}
        <div className="space-y-px bg-ink-200">
          {t.activities.items.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={`group bg-ink-50 hover:bg-white transition-colors duration-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-6 px-2 sm:px-4">
                  {/* Number */}
                  <span className="font-mono text-xs text-ink-300 tracking-wider shrink-0 sm:w-12">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Tag */}
                  <span className="inline-block self-start sm:self-auto text-[10px] font-mono font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 shrink-0 sm:w-28 text-center">
                    {item.tag}
                  </span>

                  {/* Title + desc */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-medium text-lg text-ink-900 mb-1 group-hover:text-accent-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ink-500 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Arrow indicator */}
                  <span className="hidden sm:block text-ink-300 group-hover:text-accent-500 group-hover:translate-x-1 transition-all duration-300 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
