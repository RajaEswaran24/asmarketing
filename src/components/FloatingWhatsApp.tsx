import React, { useState } from 'react';
import { buildWhatsAppLink, BUSINESS_CONFIG } from '../config/business';
import { MessageSquare, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = buildWhatsAppLink();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/95 text-white border border-white/15 text-xs font-semibold shadow-2xl backdrop-blur-md transition-all duration-300 pointer-events-none ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
        <span>Chat With Us (Wholesale Enquiries)</span>
      </div>

      {/* Floating Official Green WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat with AS Marketing on WhatsApp"
      >
        {/* Pulsing Ripple Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        {/* WhatsApp Official Vector Logo */}
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current transition-transform group-hover:scale-105"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>

        {/* Live Green Online Status Indicator */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-white shadow-sm" />
      </a>
    </div>
  );
};
