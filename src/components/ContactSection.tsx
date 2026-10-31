import React, { useState } from 'react';
import { BUSINESS_CONFIG, buildWhatsAppLink } from '../config/business';
import { MapPin, Phone, MessageSquare, Copy, Check, ExternalLink, Clock, CreditCard, Banknote, Navigation, Compass } from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
  onOpenEnquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast, onOpenEnquiry }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.address.fullFormatted);
    setCopied(true);
    onShowToast('Store address copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-surface relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Ramanathapuram Hub Location
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            CONTACT & STORE LOCATION
          </h2>

          <p className="mt-4 text-base text-slate-300">
            Connect with AS Marketing Mobile Accessories for immediate stock availability, bulk orders, or visit our wholesale counter.
          </p>
        </div>

        {/* Contact Info & Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Details & Badges (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Business Profile Card */}
            <div className="bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl backdrop-blur-md">
              
              <div className="flex flex-wrap items-center justify-between gap-2 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                    Wholesale Dealership
                  </span>
                  <h3 className="text-2xl font-display font-black text-white mt-1">
                    {BUSINESS_CONFIG.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {BUSINESS_CONFIG.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                    Est. {BUSINESS_CONFIG.yearEstablished}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                    Active Hub
                  </span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="py-6 border-b border-white/10">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center flex-shrink-0 text-brand-cyan mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Store Address
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-white mt-1 leading-snug">
                      {BUSINESS_CONFIG.address.fullFormatted}
                    </div>

                    {/* Address Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 mt-3.5">
                      <button
                        onClick={handleCopyAddress}
                        className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 flex items-center gap-1.5 transition-colors"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
                      </button>

                      <a
                        href={BUSINESS_CONFIG.maps.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-brand-blue/20 hover:bg-brand-blue text-brand-cyan hover:text-white border border-brand-blue/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Get Directions</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Contact Numbers */}
              <div className="py-6 border-b border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Direct Dealer Calling Lines
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BUSINESS_CONFIG.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.raw}`}
                      className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-white/10 flex items-center justify-between group transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-brand-cyan" />
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-brand-blue transition-colors">
                            {phone.number}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {phone.label}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Operating Hours & Payment Modes */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Operating Hours */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    <Clock className="w-4 h-4 text-brand-cyan" />
                    <span>Business Hours</span>
                  </div>
                  <div className="text-xs text-slate-200 space-y-1">
                    <div>{BUSINESS_CONFIG.timings.weekdays}</div>
                    <div className="text-slate-400">{BUSINESS_CONFIG.timings.sunday}</div>
                    <div className="text-[11px] text-emerald-400 font-semibold pt-1">
                      ● {BUSINESS_CONFIG.timings.currentStatus}
                    </div>
                  </div>
                </div>

                {/* Modes of Payment */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    <CreditCard className="w-4 h-4 text-emerald-400" />
                    <span>Payment Methods</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                      <Banknote className="w-3.5 h-3.5" /> Cash Accepted
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-bold flex items-center gap-1.5">
                      <CreditCard className="w-3.5 h-3.5" /> UPI (GPay / PhonePe / Paytm / BHIM)
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Google Maps Interactive Card & Direct WhatsApp (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Google Maps Visual Embed Card */}
            <div className="bg-slate-900/90 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              
              {/* Map Header */}
              <div className="p-4 bg-slate-950/80 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-red animate-ping" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Ramanathapuram Hub Location
                  </span>
                </div>
                <a
                  href={BUSINESS_CONFIG.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-cyan hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Visual Container */}
              <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden group">
                <iframe
                  title="AS Marketing Store Location"
                  src="https://maps.google.com/maps?q=Bharathinagar,+Bhagat+Singh+Road,+Ramanathapuram,+Tamil+Nadu+623503&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-125 opacity-90 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                  allowFullScreen
                />

                {/* Styled Center Pin Card for Instant Recognition */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="flex flex-col items-center">
                    <div className="px-3 py-1.5 rounded-xl bg-slate-950/90 text-white border border-brand-red text-xs font-bold shadow-2xl flex items-center gap-1.5 whitespace-nowrap animate-bounce">
                      <MapPin className="w-3.5 h-3.5 text-brand-red fill-brand-red" />
                      <span>AS MARKETING</span>
                    </div>
                    <div className="w-2 h-2 rotate-45 bg-slate-950 border-r border-b border-brand-red -mt-1" />
                  </div>
                </div>
              </div>

              {/* Bottom Map Direction Bar */}
              <div className="p-4 bg-slate-900 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-white">Landmark:</span> Near Bhagat Singh Road, Bharathinagar Rmn
                </div>
                <a
                  href={BUSINESS_CONFIG.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors flex items-center gap-1.5"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

            {/* Quick Action Card: WhatsApp Direct Contact */}
            <div className="bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-950 rounded-3xl p-6 border border-emerald-500/30 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                  Instant Response On WhatsApp
                </span>
                <h4 className="text-xl font-display font-extrabold text-white mt-1">
                  Have an urgent wholesale inquiry?
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Chat directly with our wholesale manager for real-time model availability, carton prices, and dispatch status.
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider text-center shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={onOpenEnquiry}
                  className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-xs transition-colors"
                >
                  Submit Form
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
