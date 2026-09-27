import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Activities from '@/components/Activities';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

function App() {
  const { t, lang, toggle } = useLanguage();

  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar t={t} lang={lang} onToggleLang={toggle} />
      <main>
        <Hero t={t} />
        <Stats t={t} />
        <About t={t} />
        <Activities t={t} />
        <Gallery t={t} />
        <Contact t={t} lang={lang} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
