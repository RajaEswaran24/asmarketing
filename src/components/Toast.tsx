import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed top-20 right-6 z-50 animate-in slide-in-from-top-4 duration-300">
      <div className="bg-slate-900 text-white px-4 py-3 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        <span className="text-xs font-semibold">{message}</span>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 ml-2 transition-colors"
          aria-label="Dismiss toast"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
