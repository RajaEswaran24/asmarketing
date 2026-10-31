import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, MapPin, Sparkles, ChevronRight, Clock } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_CONFIG, buildWhatsAppLink } from '../config/business';

interface HeaderProps {
  onOpenEnquiry?: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry, onSelectCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'itel Mobiles', href: '#products', category: 'smartphones' },
    { label: 'Feature Phones', href: '#products', category: 'feature-phones' },
    { label: 'Accessories', href: '#products', category: 'accessories' },
    { label: 'Wholesale Deals', href: '#wholesale' },
    { label: 'Store Gallery', href: '#gallery' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, category?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (category && onSelectCategory) {
      onSelectCategory(category);
    }

    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const primaryPhone = BUSINESS_CONFIG.phones[0];

  return (
    <>
      {/* Top Ticker / Dealer Notice Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-brand-surface to-slate-950 text-slate-300 text-xs py-1.5 px-4 border-b border-white/5 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-red/20 text-red-400 font-semibold text-[10px] uppercase tracking-wider border border-brand-red/30">
              <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '4s' }} />
              Wholesale Dealership
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
              Bharathinagar, Ramanathapuram – 623503
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-300">
              Cash & UPI Accepted | Bulk Dealer Orders
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href={`tel:${primaryPhone.raw}`}
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <span>{primaryPhone.number}</span>
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2.5' 
            : 'bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center transition-transform hover:scale-[1.01]"
          >
            <BrandLogo showPartner={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.category)}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                if (onOpenEnquiry) {
                  onOpenEnquiry();
                } else {
                  const target = document.querySelector('#enquiry');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all duration-300 shadow-md hover:shadow-neon-blue bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-brand-blue flex items-center gap-2 border border-blue-400/30"
            >
              <span>GET WHOLESALE PRICE</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => {
                if (onOpenEnquiry) onOpenEnquiry();
                else {
                  const target = document.querySelector('#enquiry');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="sm:hidden px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-hover transition-colors"
            >
              Wholesale
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-brand-surface/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl transition-all animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.category)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 flex items-center justify-between transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            {/* Quick Contact & WhatsApp in Mobile Menu */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-xs text-slate-400 px-2 pb-1">
                <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                <span>{BUSINESS_CONFIG.timings.weekdays}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${primaryPhone.raw}`}
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-blue" />
                  <span>Call Store</span>
                </a>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-950"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEnquiry) onOpenEnquiry();
                  else {
                    const target = document.querySelector('#enquiry');
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-950 flex items-center justify-center gap-2"
              >
                <span>GET WHOLESALE PRICE NOW</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
