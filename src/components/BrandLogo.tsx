import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'monogram';
  theme?: 'dark' | 'light';
  className?: string;
  showPartner?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  theme = 'dark',
  className = '',
  showPartner = false
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Monogram / Icon Emblem */}
      <div className="relative flex-shrink-0 group">
        <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-slate-900 via-brand-surface to-slate-950 p-[1.5px] shadow-md border border-white/10 flex items-center justify-center transition-transform group-hover:scale-105">
          <div className="w-full h-full bg-slate-950/90 rounded-[10px] flex items-center justify-center relative overflow-hidden">
            {/* Subtle tech grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(#0066FF_1px,transparent_1px)] [background-size:6px_6px] opacity-20" />
            
            {/* Monogram letters */}
            <div className="relative flex items-center justify-center font-display font-black text-lg tracking-tight leading-none">
              <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">A</span>
              <span className="text-brand-red -ml-0.5 drop-shadow-[0_0_8px_rgba(229,9,20,0.6)]">S</span>
            </div>

            {/* Corner tech accent */}
            <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-brand-cyan animate-pulse" />
          </div>
        </div>
      </div>

      {/* Brand Text */}
      {variant !== 'monogram' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-display font-extrabold tracking-tight text-lg md:text-xl leading-none ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              AS <span className="font-bold">MARKETING</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
          </div>

          <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] tracking-widest font-semibold uppercase mt-0.5">
            <span className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
              MOBILES & ACCESSORIES
            </span>
            <span className="text-brand-blue font-bold">•</span>
            <span className="text-brand-red font-bold">WHOLESALE</span>
          </div>
        </div>
      )}

      {/* Official itel partner/dealership badge */}
      {showPartner && (
        <div className="hidden lg:flex items-center gap-2 pl-3 ml-2 border-l border-white/10">
          <div className="px-2.5 py-1 rounded-full bg-slate-900 border border-red-500/30 flex items-center gap-1.5 shadow-sm">
            <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Specialist</span>
            <img 
              src="/brand/itel_logo_2023.svg" 
              alt="itel" 
              className="h-3.5 w-auto object-contain brightness-110" 
            />
          </div>
        </div>
      )}
    </div>
  );
};
