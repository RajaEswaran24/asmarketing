import React from 'react';
import { Product } from '../types';
import { X, MessageSquare, Phone, ShieldCheck, Zap, CheckCircle2, ExternalLink } from 'lucide-react';
import { buildProductEnquiryLink, BUSINESS_CONFIG } from '../config/business';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappUrl = buildProductEnquiryLink(product.name, product.subCategory);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full bg-slate-900 rounded-3xl border border-white/15 overflow-hidden shadow-2xl my-8 animate-in zoom-in-95 duration-200 flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800/90 hover:bg-slate-700 text-white border border-white/15 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Image Stage (Clean light background with subtle gradient) */}
        <div className="w-full md:w-5/12 bg-gradient-to-b from-white via-slate-50 to-slate-100 p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-slate-200">
          <div className="relative w-full aspect-square flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain drop-shadow-xl"
            />
          </div>

          {/* Verification Pill */}
          <div className="mt-4 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-[11px] font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified itel Model</span>
          </div>
        </div>

        {/* Right: Detailed Specifications & Wholesale Actions */}
        <div className="w-full md:w-7/12 p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
          <div>
            {/* Category & Badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                {product.subCategory || product.category}
              </span>
              {product.badge && (
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-red/20 text-red-400 border border-brand-red/30">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Model Name */}
            <h3 className="text-2xl font-display font-black text-white">
              {product.name}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              {product.tagline}
            </p>

            {/* Price Policy */}
            <div className="mt-4 p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                  Wholesale Price Structure
                </span>
                <span className="text-sm font-extrabold text-brand-red flex items-center gap-1 mt-0.5">
                  <Zap className="w-4 h-4 fill-brand-red" />
                  WHOLESALE PRICE ON REQUEST
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium text-right">
                Tiered Dealer MOQ
              </span>
            </div>

            {/* Full Specifications Table */}
            <div className="mt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Verified Technical Specifications
              </h4>
              <div className="rounded-xl border border-white/10 overflow-hidden divide-y divide-white/10 text-xs">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between p-2.5 bg-slate-900/50">
                    <span className="text-slate-400 font-medium">{spec.label}</span>
                    <span className="text-white font-semibold text-right max-w-[65%]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Key Wholesale Features
                </h4>
                <div className="space-y-1.5">
                  {product.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Warranty */}
            {product.warranty && (
              <div className="mt-4 text-xs text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Warranty: <strong className="text-slate-200">{product.warranty}</strong></span>
              </div>
            )}
          </div>

          {/* Action Buttons in Modal */}
          <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>ENQUIRE PRICE ON WHATSAPP</span>
            </a>

            <a
              href={`tel:${BUSINESS_CONFIG.phones[0].raw}`}
              className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-cyan" />
              <span>Call Store</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
