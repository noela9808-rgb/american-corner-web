import type { Translation } from '@/i18n';

interface StatsProps {
  t: Translation;
}

export default function Stats({ t }: StatsProps) {
  const stats = [
    { value: t.stats.sinceValue, label: t.stats.since },
    { value: t.stats.programsValue, label: t.stats.programs },
    { value: t.stats.audienceValue, label: t.stats.audience },
    { value: t.stats.volunteersValue, label: t.stats.volunteers },
  ];

  return (
    <section className="relative bg-ink-950 border-t border-white/5 px-5 sm:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4 py-2 lg:border-r border-white/10 last:border-r-0 [&:nth-child(2)]:lg:border-r-0"
            >
              <span className="font-display text-3xl sm:text-4xl font-normal text-white mb-1.5">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-ink-400 tracking-[0.1em] uppercase leading-tight max-w-[120px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
