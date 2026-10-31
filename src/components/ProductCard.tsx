import React from 'react';
import { Product } from '../types';
import { MessageSquare, ExternalLink, Shield, Cpu, Maximize2, Zap, Smartphone, Check } from 'lucide-react';
import { buildProductEnquiryLink } from '../config/business';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const whatsappUrl = buildProductEnquiryLink(product.name, product.subCategory);

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Top Card Ribbon / Badges */}
      <div className="p-4 pb-0 flex items-center justify-between gap-2 z-10">
        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
          {product.subCategory || product.category}
        </span>

        {product.badge && (
          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 text-brand-red border border-red-200/60 flex items-center gap-1 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Image Stage (Clean light background with hover zoom) */}
      <div 
        onClick={() => onOpenDetails(product)}
        className="relative w-full h-56 sm:h-64 flex items-center justify-center p-6 cursor-pointer overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100/40"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 drop-shadow-md"
          loading="lazy"
        />

        {/* Quick View Overlay on Hover */}
        <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 text-white text-xs font-semibold shadow-lg flex items-center gap-1.5">
            <Maximize2 className="w-3.5 h-3.5" />
            View Specifications
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 pt-3 flex-1 flex flex-col justify-between bg-white border-t border-slate-100">
        <div>
          {/* Brand + Name */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-red mb-1">
            <span>itel Original</span>
            <span>•</span>
            <span className="text-slate-500 font-normal">Genuine Stock</span>
          </div>

          <h3 
            onClick={() => onOpenDetails(product)}
            className="text-lg font-display font-bold text-slate-900 hover:text-brand-blue transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed font-normal">
            {product.tagline}
          </p>

          {/* Key Verified Specs Grid (First 3 specs) */}
          <div className="mt-3.5 pt-3 border-t border-slate-100 grid grid-cols-1 gap-1.5">
            {product.specs.slice(0, 3).map((spec, idx) => (
              <div key={idx} className="flex items-center justify-between text-[11px] py-0.5">
                <span className="text-slate-500 font-medium">{spec.label}</span>
                <span className="text-slate-900 font-semibold text-right truncate max-w-[65%]">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Notice & Enquiry Action */}
        <div className="mt-5 pt-3 border-t border-slate-100">
          
          {/* Mandatory Label: WHOLESALE PRICE ON REQUEST */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">
                Retail / Bulk Pricing
              </span>
              <span className="text-xs font-extrabold text-brand-red tracking-tight flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-brand-red" />
                WHOLESALE PRICE ON REQUEST
              </span>
            </div>
            
            <button
              onClick={() => onOpenDetails(product)}
              className="text-xs text-slate-500 hover:text-slate-900 font-medium flex items-center gap-0.5"
              title="See complete specs"
            >
              <span>Details</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          {/* Action Button: ENQUIRE NOW (Direct WhatsApp wholesale link) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-display font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group/btn"
          >
            <MessageSquare className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
            <span>ENQUIRE NOW</span>
          </a>

        </div>

      </div>

    </div>
  );
};
