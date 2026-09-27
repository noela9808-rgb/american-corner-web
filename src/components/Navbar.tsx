import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Translation, Language } from '@/i18n';

interface NavbarProps {
  t: Translation;
  lang: Language;
  onToggleLang: () => void;
}

export default function Navbar({ t, lang, onToggleLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'activities', label: t.nav.activities },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Official American Spaces mark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-3 group"
        >
          <img
            src="/images/american-spaces-official-logo.png"
            alt="American Spaces"
            className="w-[118px] h-auto object-contain bg-white rounded-sm px-1 py-0.5"
          />
          <span className={`hidden lg:block text-[10px] font-mono tracking-[0.15em] uppercase transition-colors ${scrolled ? 'text-ink-500' : 'text-white/70'}`}>
            Kukës
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                activeSection === item.id
                  ? scrolled ? 'text-ink-900' : 'text-white'
                  : scrolled ? 'text-ink-500 hover:text-ink-900' : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-accent-500 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          ))}
        </div>

        {/* Language toggle */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onToggleLang}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-mono font-medium tracking-wide transition-all duration-300 ${
              scrolled
                ? 'border-ink-200 text-ink-600 hover:border-ink-400 hover:text-ink-900'
                : 'border-white/25 text-white/80 hover:border-white/50 hover:text-white'
            }`}
          >
            <span className={lang === 'en' ? 'text-accent-600' : 'opacity-50'}>EN</span>
            <span className="opacity-30">|</span>
            <span className={lang === 'al' ? 'text-accent-600' : 'opacity-50'}>AL</span>
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onToggleLang}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md border text-xs font-mono font-medium ${
              scrolled
                ? 'border-ink-200 text-ink-600'
                : 'border-white/25 text-white/80'
            }`}
          >
            <span className={lang === 'en' ? 'text-accent-600' : 'opacity-50'}>EN</span>
            <span className="opacity-30">|</span>
            <span className={lang === 'al' ? 'text-accent-600' : 'opacity-50'}>AL</span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={scrolled ? 'text-ink-900 p-1' : 'text-white p-1'}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pt-3 pb-6 bg-white shadow-lg flex flex-col gap-0">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`px-2 py-3.5 text-sm font-medium border-b border-ink-50 transition-colors ${
                activeSection === item.id ? 'text-accent-600' : 'text-ink-600 hover:text-ink-900'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
