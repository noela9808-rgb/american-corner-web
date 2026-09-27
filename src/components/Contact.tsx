import { MapPin, Mail, Clock, Facebook, ArrowUpRight } from 'lucide-react';
import type { Translation, Language } from '@/i18n';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ContactProps {
  t: Translation;
  lang: Language;
}

export default function Contact({ t, lang }: ContactProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-5 sm:px-8 bg-ink-950 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-xs text-accent-500 tracking-[0.15em] uppercase">
              {t.contact.label}
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-white/15" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-[1.1]">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: Contact details */}
          <div className={`lg:col-span-5 space-y-px transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {/* Address */}
            <div className="flex items-start gap-4 py-5 border-t border-white/10">
              <MapPin size={20} className="text-accent-500 mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-mono text-[10px] text-ink-400 uppercase tracking-wider mb-1">{t.contact.address}</p>
                <p className="text-white text-sm leading-relaxed">{t.contact.addressValue}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 py-5 border-t border-white/10">
              <Mail size={20} className="text-accent-500 mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-mono text-[10px] text-ink-400 uppercase tracking-wider mb-1">{t.contact.email}</p>
                <a href="mailto:ackukes@gmail.com" className="text-white text-sm hover:text-accent-400 transition-colors">
                  ackukes@gmail.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 py-5 border-t border-white/10">
              <Clock size={20} className="text-accent-500 mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-mono text-[10px] text-ink-400 uppercase tracking-wider mb-1">{t.contact.hours}</p>
                <p className="text-white text-sm">{t.contact.hoursValue}</p>
                <p className="text-white text-sm">{t.contact.hoursValue2}</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 py-5 border-t border-white/10">
              <span className="font-mono text-[10px] text-ink-400 uppercase tracking-wider">{t.contact.followUs}</span>
              <a
                href="https://www.facebook.com/kukesac"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <Facebook size={18} strokeWidth={1.5} />
                <span>{t.contact.facebookLink}</span>
                <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://al.usembassy.gov/american-corner-kukes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <span>{t.contact.embassyLink}</span>
                <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="relative h-full min-h-[300px] rounded-sm overflow-hidden border border-white/10">
              <iframe
                title="Map of Kukës"
                src="https://www.openstreetmap.org/export/embed.html?bbox=20.4167%2C42.0764%2C20.4367%2C42.0864&layer=mapnik&marker=42.0814%2C20.4267"
                className="w-full h-full min-h-[300px] grayscale-[30%] opacity-70"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-ink-950/80 backdrop-blur-sm px-3 py-2 rounded-sm">
                <span className="font-mono text-[10px] text-white/80 tracking-wider uppercase">
                  {lang === 'en' ? 'Kukës, Albania' : 'Kukës, Shqipëri'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
