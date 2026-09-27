import { MapPin, Mail } from 'lucide-react';
import type { Translation } from '@/i18n';

interface FooterProps {
  t: Translation;
}

export default function Footer({ t }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'activities', label: t.nav.activities },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-ink-950 border-t border-white/10 px-5 sm:px-8 py-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 mb-10">
          {/* Brand + description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative w-9 h-9 flex items-center justify-center overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-blue-700" />
                <div className="absolute top-0 left-0 w-full h-1/3 bg-white" />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-accent-600" />
                <span className="relative font-display font-bold text-[10px] text-white leading-none">AC</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-semibold text-sm text-white">American Corner</span>
                <span className="text-[10px] font-mono text-white/50 tracking-[0.15em] uppercase">Kukës</span>
              </div>
            </div>
            <p className="text-sm text-ink-400 leading-relaxed max-w-sm">{t.footer.description}</p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] text-ink-400 uppercase tracking-wider mb-4">{t.footer.quickLinks}</p>
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-ink-300 hover:text-accent-400 transition-colors text-left w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] text-ink-400 uppercase tracking-wider mb-4">{t.footer.contactTitle}</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-accent-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-ink-300 leading-relaxed">{t.contact.addressValue}</span>
              </div>
              <a href="mailto:ackukes@gmail.com" className="flex items-center gap-2.5 text-sm text-ink-300 hover:text-white transition-colors">
                <Mail size={15} className="text-accent-500 shrink-0" strokeWidth={1.5} />
                ackukes@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] text-ink-500 tracking-wider">
            © {new Date().getFullYear()} AMERICAN CORNER KUKËS. {t.footer.rights.toUpperCase()}
          </p>
          <p className="text-xs text-ink-500">{t.footer.embassy}</p>
        </div>
      </div>
    </footer>
  );
}
