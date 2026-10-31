import React from 'react';
import { ArrowRight, MapPin, Zap, ShieldCheck, Sparkles, ChevronDown, CheckCircle2, TrendingUp, Smartphone, BatteryCharging } from 'lucide-react';
import { buildWhatsAppLink } from '../config/business';

interface HeroProps {
  onExploreProducts: () => void;
  onGetWholesalePrices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onGetWholesalePrices }) => {
  return (
    <section id="hero" className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-brand-dark pt-8 pb-12 lg:py-16">
      {/* Background Studio Lighting & Tech Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Dynamic Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-brand-red/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-brand-cyan/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Top subtle light beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy, CTAs, Location Badge (7 cols on lg) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            
            {/* Small Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="text-xs font-bold tracking-wider text-slate-200 uppercase">
                RAMANATHAPURAM, TAMIL NADU
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-[11px] font-semibold text-brand-red uppercase tracking-wider">
                Wholesale Hub
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-[1.08]">
              YOUR TRUSTED <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                WHOLESALE DESTINATION
              </span> <br />
              <span className="relative inline-block mt-1">
                <span className="bg-gradient-to-r from-brand-red via-red-500 to-rose-400 bg-clip-text text-transparent">
                  FOR ITEL
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-transparent rounded-full" />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover the latest <span className="text-white font-semibold">itel smartphones</span>, <span className="text-white font-semibold">feature phones</span> and <span className="text-white font-semibold">mobile accessories</span>. Quality products, wholesale opportunities and reliable service – all under one roof.
            </p>

            {/* Target Audience Notice */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs font-medium text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                Mobile Retailers
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                Shop Owners
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                Bulk Orders
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                Cash & UPI
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreProducts}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-display font-bold text-sm tracking-wider uppercase text-white bg-gradient-to-r from-brand-blue via-blue-600 to-brand-cyan hover:shadow-neon-blue transition-all duration-300 flex items-center justify-center gap-2.5 border border-cyan-400/30 group shadow-lg"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onGetWholesalePrices}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-display font-bold text-sm tracking-wider uppercase text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-brand-red/50 hover:shadow-neon-red transition-all duration-300 flex items-center justify-center gap-2.5 group backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-brand-red transition-transform group-hover:rotate-12" />
                <span>GET WHOLESALE PRICES</span>
              </button>
            </div>

            {/* Independent Status Verification Tag */}
            <p className="text-[11px] text-slate-500 pt-1">
              * Independent wholesale business serving Ramanathapuram and regional mobile dealers since 2024.
            </p>
          </div>

          {/* Right Column: 3D Product Arrangement & Visual Stage (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Stage Container */}
            <div className="relative w-full max-w-lg aspect-[4/5] sm:aspect-square flex items-center justify-center">
              
              {/* Studio Spotlight Pedestal Base */}
              <div className="absolute -bottom-8 w-80 h-28 bg-gradient-to-t from-brand-blue/30 via-brand-cyan/15 to-transparent rounded-[100%] blur-xl" />
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-b from-white/5 via-transparent to-brand-blue/10 border border-white/10 backdrop-blur-sm" />
              
              {/* Floating Orbit Spec Badges */}
              <div className="absolute -top-3 -right-2 sm:right-2 z-30 animate-float bg-slate-900/90 border border-brand-cyan/40 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-xl flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-cyan/20 flex items-center justify-center text-brand-cyan font-bold text-xs">
                  5G
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white leading-tight">Dimensity 6080</div>
                  <div className="text-[9px] text-slate-400">High-Speed Dual 5G</div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-4 sm:-left-6 z-30 animate-float bg-slate-900/90 border border-brand-red/40 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-xl flex items-center gap-2" style={{ animationDelay: '2.5s' }}>
                <div className="w-7 h-7 rounded-lg bg-brand-red/20 flex items-center justify-center text-brand-red font-bold text-xs">
                  108M
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white leading-tight">Ultra-Clear Camera</div>
                  <div className="text-[9px] text-slate-400">itel S24 3X Zoom</div>
                </div>
              </div>

              <div className="absolute -bottom-3 left-4 sm:left-10 z-30 animate-float bg-slate-900/90 border border-emerald-400/40 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-xl flex items-center gap-2" style={{ animationDelay: '1.2s' }}>
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
                  UPI
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white leading-tight">Super Guru 4G</div>
                  <div className="text-[9px] text-slate-400">Keypad Scan & Pay</div>
                </div>
              </div>

              {/* Central Multi-Phone Composition */}
              <div className="relative z-20 flex items-center justify-center w-full h-full p-4">
                
                {/* Secondary Background Phone (Left): itel S24 */}
                <div className="absolute -left-2 sm:left-4 w-36 sm:w-44 transform -rotate-12 scale-90 opacity-80 hover:opacity-100 transition-all duration-300 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]">
                  <img
                    src="/products/s24.jpg"
                    alt="itel S24 Smartphone"
                    className="w-full h-auto object-contain rounded-2xl"
                    loading="eager"
                  />
                  <div className="text-center mt-1">
                    <span className="text-[10px] font-bold text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded-full border border-white/10">
                      itel S24
                    </span>
                  </div>
                </div>

                {/* Primary Hero Center Phone: itel Color Pro 5G */}
                <div className="relative z-20 w-44 sm:w-56 transform hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_25px_40px_rgba(0,102,255,0.35)]">
                  <div className="relative group">
                    <img
                      src="/products/color_pro_5g.jpg"
                      alt="itel Color Pro 5G Flagship"
                      className="w-full h-auto object-contain rounded-2xl"
                      loading="eager"
                    />
                    
                    {/* Hover Glow Plate */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-brand-cyan/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  
                  <div className="text-center mt-2">
                    <span className="inline-block text-xs font-extrabold text-white bg-gradient-to-r from-brand-red to-rose-600 px-3 py-1 rounded-full shadow-md border border-white/20">
                      itel Color Pro 5G
                    </span>
                  </div>
                </div>

                {/* Secondary Phone (Right): itel Super Guru 4G Keypad */}
                <div className="absolute -right-2 sm:right-4 w-32 sm:w-40 transform rotate-12 scale-90 opacity-85 hover:opacity-100 transition-all duration-300 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]">
                  <img
                    src="/products/super_guru_4g.jpg"
                    alt="itel Super Guru 4G"
                    className="w-full h-auto object-contain rounded-2xl"
                    loading="eager"
                  />
                  <div className="text-center mt-1">
                    <span className="text-[10px] font-bold text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded-full border border-white/10">
                      Super Guru 4G
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Wholesale Ticker & Key Assurances Strip */}
        <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center flex-shrink-0 text-brand-cyan">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Latest itel Range</div>
              <div className="text-xs text-slate-400">Smartphones & Keypads</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center flex-shrink-0 text-brand-red">
              <BatteryCharging className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Original Accessories</div>
              <div className="text-xs text-slate-400">Fast Chargers & Audio</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Wholesale Margins</div>
              <div className="text-xs text-slate-400">Competitive Dealer Rates</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 text-purple-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Verified Dealership</div>
              <div className="text-xs text-slate-400">Ramanathapuram Hub</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
