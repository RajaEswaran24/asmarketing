import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_CONFIG, buildWhatsAppLink } from '../config/business';
import { MapPin, Phone, MessageSquare, ArrowUp, ShieldCheck, Mail, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onSelectCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, category?: string) => {
    e.preventDefault();
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand Column (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-5">
            <BrandLogo showPartner={true} />

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              <strong className="text-white">{BUSINESS_CONFIG.tagline}</strong>. Serving mobile phone shop owners and regional dealers with genuine itel smartphones, feature phones, and charging & audio accessories.
            </p>

            {/* Address in Footer */}
            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
              <span>{BUSINESS_CONFIG.address.fullFormatted}</span>
            </div>

            {/* Phone & WhatsApp Quick Connect */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${BUSINESS_CONFIG.phones[0].raw}`}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                <span>{BUSINESS_CONFIG.phones[0].number}</span>
              </a>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-xs font-semibold text-emerald-400 flex items-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Wholesale</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-400">
              <li>
                <a 
                  href="#hero" 
                  onClick={(e) => handleLinkClick(e, '#hero')}
                  className="hover:text-brand-cyan transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => handleLinkClick(e, '#products')}
                  className="hover:text-brand-cyan transition-colors"
                >
                  All Products
                </a>
              </li>
              <li>
                <a 
                  href="#wholesale" 
                  onClick={(e) => handleLinkClick(e, '#wholesale')}
                  className="hover:text-brand-cyan transition-colors"
                >
                  Wholesale Services
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  onClick={(e) => handleLinkClick(e, '#gallery')}
                  className="hover:text-brand-cyan transition-colors"
                >
                  Store Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="hover:text-brand-cyan transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="hover:text-brand-cyan transition-colors"
                >
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories Column (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Product Categories
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-400">
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => handleLinkClick(e, '#products', 'smartphones')}
                  className="hover:text-brand-cyan transition-colors flex items-center justify-between"
                >
                  <span>itel Smartphones (5G & 4G)</span>
                  <span className="text-[10px] text-slate-500">6 models</span>
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => handleLinkClick(e, '#products', 'feature-phones')}
                  className="hover:text-brand-cyan transition-colors flex items-center justify-between"
                >
                  <span>itel Feature Phones (Keypad)</span>
                  <span className="text-[10px] text-slate-500">4 models</span>
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => handleLinkClick(e, '#products', 'accessories')}
                  className="hover:text-brand-cyan transition-colors flex items-center justify-between"
                >
                  <span>Fast Chargers & Adapters</span>
                  <span className="text-[10px] text-slate-500">PD & QC</span>
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => handleLinkClick(e, '#products', 'accessories')}
                  className="hover:text-brand-cyan transition-colors flex items-center justify-between"
                >
                  <span>Power Banks (10k & 20k)</span>
                  <span className="text-[10px] text-slate-500">Fast charge</span>
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => handleLinkClick(e, '#products', 'accessories')}
                  className="hover:text-brand-cyan transition-colors flex items-center justify-between"
                >
                  <span>Audio & TWS Earbuds</span>
                  <span className="text-[10px] text-slate-500">ANC / Bass</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Wholesale Notice & Action (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              B2B Wholesale
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We supply mobile dealers across Ramanathapuram, Paramakudi, Rameswaram, and surrounding Tamil Nadu districts.
            </p>
            <div className="pt-1">
              <span className="inline-block px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                Cash & UPI Accepted
              </span>
            </div>
            <div>
              <button
                onClick={scrollToTop}
                className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Wholesale Legal Disclaimer */}
        <div className="py-6 border-b border-white/5 text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-300">Wholesale Commercial Disclaimer:</strong> {BUSINESS_CONFIG.disclaimer} All itel product names, logos, trademarks, and registered brands referenced on this website are the property of their respective trademark holders.
          </p>
        </div>

        {/* Bottom Copyright & Ramanathapuram Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 AS Marketing Mobile Accessories. All Rights Reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Ramanathapuram, Tamil Nadu, India – 623503</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
