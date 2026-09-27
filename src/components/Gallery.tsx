import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Translation } from '@/i18n';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface GalleryProps {
  t: Translation;
}
const galleryImages = [
 { src: '/images/images (1).jfif' },
  { src: '/images/images (2).jfif' },
  { src: '/images/images (3).jfif' },
  { src: '/images/images (4).jfif' },
  { src: '/images/images (5).jfif' },
  { src: '/images/images (6).jfif' },
];
export default function Gallery({ t }: GalleryProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));
  };
  const prevImage = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const spanClass = (span: string) => {
    switch (span) {
      case 'tall':
        return 'row-span-2';
      case 'wide':
        return 'col-span-2';
      default:
        return '';
    }
  };

  return (
    <section id="gallery" className="relative py-20 sm:py-28 px-5 sm:px-8 bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-xs text-accent-600 tracking-[0.15em] uppercase">
              {t.gallery.label}
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-ink-200" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-ink-900 leading-[1.1] mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-ink-500 text-base leading-relaxed max-w-xl">{t.gallery.subtitle}</p>
        </div> 

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-2 sm:gap-3">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className={`group relative overflow-hidden rounded-sm cursor-pointer Class(img.span)} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 60}ms`, transitionDuration: '500ms' }}
            >
              <img
                src={img.src}
                alt={t.gallery.captions[i] || ''}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/30 transition-colors duration-300" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-mono text-[10px] text-white/90 tracking-wider">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-white text-xs font-medium leading-tight mt-0.5">
                  {t.gallery.captions[i] || ''}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink-950/95 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={closeLightbox}
          >
            <X size={26} />
          </button>
          <button
            className="absolute left-3 sm:left-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={galleryImages[lightboxIndex].src}
            alt={t.gallery.captions[lightboxIndex] || ''}
            className="max-w-[90vw] max-h-[82vh] object-contain rounded-sm animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-3 sm:right-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight size={32} />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <span className="font-mono text-xs text-white/50 tracking-wider">
              {String(lightboxIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
            </span>
            <p className="text-white/80 text-sm mt-1">{t.gallery.captions[lightboxIndex] || ''}</p>
          </div>
        </div>
      )}
    </section>
  );
}
