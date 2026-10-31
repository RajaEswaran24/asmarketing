import React from 'react';
import { WHY_CHOOSE_POINTS } from '../data/wholesale';
import { Store, Smartphone, BatteryCharging, Layers, CreditCard, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Store':
        return <Store className="w-5 h-5 text-brand-blue" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-brand-cyan" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-5 h-5 text-brand-red" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-emerald-400" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-amber-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-brand-dark relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Reliable B2B Partnership
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            WHY RETAILERS CHOOSE <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              AS MARKETING
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-300">
            Built from the ground up to empower mobile shops with consistent itel product availability, genuine stock, and seamless wholesale ordering.
          </p>
        </div>

        {/* 6 Key Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_POINTS.map((point, index) => (
            <div
              key={index}
              className="bg-slate-900/60 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-slate-900/90 hover:shadow-xl backdrop-blur-sm group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {getIcon(point.iconName)}
              </div>

              <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-cyan transition-colors">
                {point.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed font-normal">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ramanathapuram Local Presence Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-brand-surface via-slate-900 to-brand-surface border border-brand-blue/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              Established in 2024 • Ramanathapuram, Tamil Nadu
            </div>
            <div className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Direct Wholesale Supplies For Tamil Nadu Retailers
            </div>
            <div className="text-xs text-slate-400">
              Bhagat Singh Road, Bharathinagar, Ramanathapuram – 623503
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap"
          >
            Visit Our Store
          </a>
        </div>

      </div>
    </section>
  );
};
