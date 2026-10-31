import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/wholesale';
import { GalleryPhoto } from '../types';
import { Eye, MapPin, CheckCircle2, X, ZoomIn, Sparkles, Store } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const StoreGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-brand-surface relative overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Store className="w-3.5 h-3.5" />
            Physical Wholesale Store
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            AS MARKETING STORE GALLERY
          </h2>

          <p className="mt-4 text-base text-slate-300">
            Real photographs of our wholesale facility and brand signage located at Bharathinagar, Bhagat Singh Road, Ramanathapuram.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative bg-slate-900 rounded-2xl border border-white/10 hover:border-brand-blue/50 overflow-hidden shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Location Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 text-slate-200 border border-white/15 text-[11px] font-bold tracking-wide backdrop-blur-md flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-brand-cyan" />
                    {photo.tag}
                  </span>
                </div>

                {/* Center Hover Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <span className="w-12 h-12 rounded-full bg-brand-blue/90 text-white flex items-center justify-center shadow-neon-blue transition-transform group-hover:scale-110">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>

                {/* Bottom Caption on Card */}
                <div className="absolute bottom-4 inset-x-4 z-10">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                    {photo.caption}
                  </p>
                </div>
              </div>

              {/* Bottom Details Strip */}
              <div className="p-4 bg-slate-900/90 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Storefront Photo
                </span>
                <span className="text-brand-blue font-semibold group-hover:underline">
                  Click to Expand
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Store Verification Assurance */}
        <div className="mt-12 max-w-2xl mx-auto text-center p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
          <p>
            <strong className="text-white">Visit our store:</strong> Mobile phone retailers and bulk dealers are welcome to inspect physical inventory in person at Bharathinagar, Ramanathapuram.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl border border-white/15 overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-6 bg-slate-900 border-t border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                  {activePhoto.tag}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-400">
                  AS Marketing, Ramanathapuram
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
