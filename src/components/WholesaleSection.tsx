import React from 'react';
import { WHOLESALE_SERVICES } from '../data/wholesale';
import { Smartphone, Headphones, Package, Users, ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { buildWhatsAppLink } from '../config/business';

interface WholesaleSectionProps {
  onOpenEnquiry: () => void;
}

export const WholesaleSection: React.FC<WholesaleSectionProps> = ({ onOpenEnquiry }) => {
  // Map icon names to Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-brand-cyan" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-brand-red" />;
      case 'Package':
        return <Package className="w-6 h-6 text-brand-blue" />;
      case 'Users':
        return <Users className="w-6 h-6 text-purple-400" />;
      default:
        return <Zap className="w-6 h-6 text-brand-cyan" />;
    }
  };

  return (
    <section id="wholesale" className="py-20 lg:py-28 bg-brand-surface relative overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-red text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            B2B Mobile Distribution
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            SMARTER SOURCING. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-blue-400 bg-clip-text text-transparent">
              BETTER WHOLESALE OPPORTUNITIES.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            AS Marketing Mobile Accessories is focused on supplying itel mobile phones and accessories to mobile retailers and bulk buyers in Ramanathapuram and surrounding areas.
          </p>
        </div>

        {/* 4 Wholesale Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHOLESALE_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-slate-900/80 rounded-2xl p-6 border border-white/10 hover:border-brand-blue/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/10 backdrop-blur-sm"
            >
              {/* Corner Index Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(service.iconName)}
                </div>
                <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-brand-cyan transition-colors">
                  0{index + 1}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red">
                  {service.subtitle}
                </span>
                <h3 className="text-lg font-display font-bold text-white mt-1 group-hover:text-brand-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Action Button */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={buildWhatsAppLink(`Hello AS Marketing, I would like to inquire about: ${service.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-brand-blue text-slate-200 hover:text-white font-semibold text-xs transition-colors flex items-center justify-between"
                >
                  <span>Enquire For Retail</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Wholesale Workflow Notice */}
        <div className="mt-14 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-red/20 border border-brand-red/30 flex items-center justify-center flex-shrink-0 text-brand-red font-bold">
              AS
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Are you opening a new mobile shop or expanding your accessories counter?
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                We provide complete starter kits with high-turnover itel models, genuine accessories, and fast dealer restocking.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="w-full lg:w-auto px-6 py-3 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-md hover:shadow-neon-blue"
          >
            Request Dealer Onboarding
          </button>
        </div>

      </div>
    </section>
  );
};
