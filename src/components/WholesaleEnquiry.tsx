import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { WholesaleEnquiryData } from '../types';
import { BUSINESS_CONFIG, buildWhatsAppLink } from '../config/business';
import { Send, CheckCircle2, MessageSquare, AlertCircle, Sparkles, Building2, User, Phone, MapPin, Package, Layers } from 'lucide-react';

export const WholesaleEnquiry: React.FC = () => {
  const [formData, setFormData] = useState<WholesaleEnquiryData>({
    customerName: '',
    mobileNumber: '',
    businessName: '',
    city: 'Ramanathapuram',
    category: 'itel Smartphones',
    productModel: '',
    quantity: '25 - 50 Units',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof WholesaleEnquiryData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof WholesaleEnquiryData, string>> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Customer name is required';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
      newErrors.mobileNumber = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Shop or business name is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City or location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch {
      // safe fallback
    }

    // Build structured WhatsApp message
    const formattedMessage = `*NEW WHOLESALE ENQUIRY – AS MARKETING*
━━━━━━━━━━━━━━━━━━━━
👤 *Dealer / Contact:* ${formData.customerName}
🏪 *Shop / Business:* ${formData.businessName}
📍 *City / Location:* ${formData.city}
📞 *Mobile:* ${formData.mobileNumber}
━━━━━━━━━━━━━━━━━━━━
📦 *Category:* ${formData.category}
📱 *Product / Model:* ${formData.productModel || 'All in this category'}
🔢 *Quantity Needed:* ${formData.quantity}
━━━━━━━━━━━━━━━━━━━━
💬 *Additional Message:*
${formData.message || 'Please share available models, MOQ, and wholesale dealer rates.'}`;

    const waLink = buildWhatsAppLink(formattedMessage);
    setGeneratedWhatsAppUrl(waLink);
    setIsSubmitted(true);

    // Open WhatsApp in new tab
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="enquiry" className="py-20 lg:py-28 bg-brand-dark relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 w-[35rem] h-[35rem] bg-brand-blue/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Wholesale Price Quotation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            LOOKING FOR ITEL WHOLESALE DEALS?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Whether you own a mobile shop or need products in bulk, connect with AS Marketing for product availability and wholesale enquiries.
          </p>
        </div>

        {/* Enquiry Form Container */}
        <div className="max-w-3xl mx-auto bg-slate-900/90 rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative">
          
          {isSubmitted ? (
            /* Submission Success State */
            <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-display font-bold text-white">
                Enquiry Ready for WhatsApp!
              </h3>

              <p className="text-sm text-slate-300 max-w-md mx-auto">
                We have prepared your wholesale quotation details. If WhatsApp did not open automatically, click the button below to send your details directly to AS Marketing.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Message</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Customer Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Customer Name <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.customerName}
                      onChange={(e) => {
                        setFormData({ ...formData, customerName: e.target.value });
                        if (errors.customerName) setErrors({ ...errors, customerName: undefined });
                      }}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all ${
                        errors.customerName 
                          ? 'border-brand-red focus:border-brand-red focus:ring-brand-red' 
                          : 'border-white/10 focus:border-brand-blue focus:ring-brand-blue'
                      }`}
                    />
                  </div>
                  {errors.customerName && (
                    <span className="text-[11px] text-brand-red mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.customerName}
                    </span>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Mobile Number (WhatsApp) <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.mobileNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, mobileNumber: e.target.value });
                        if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: undefined });
                      }}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all ${
                        errors.mobileNumber 
                          ? 'border-brand-red focus:border-brand-red focus:ring-brand-red' 
                          : 'border-white/10 focus:border-brand-blue focus:ring-brand-blue'
                      }`}
                    />
                  </div>
                  {errors.mobileNumber && (
                    <span className="text-[11px] text-brand-red mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.mobileNumber}
                    </span>
                  )}
                </div>

                {/* Business / Shop Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Business / Shop Name <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. Sri Murugan Mobiles"
                      value={formData.businessName}
                      onChange={(e) => {
                        setFormData({ ...formData, businessName: e.target.value });
                        if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                      }}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all ${
                        errors.businessName 
                          ? 'border-brand-red focus:border-brand-red focus:ring-brand-red' 
                          : 'border-white/10 focus:border-brand-blue focus:ring-brand-blue'
                      }`}
                    />
                  </div>
                  {errors.businessName && (
                    <span className="text-[11px] text-brand-red mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.businessName}
                    </span>
                  )}
                </div>

                {/* City / Location */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    City / Location <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. Ramanathapuram, Paramakudi, Madurai..."
                      value={formData.city}
                      onChange={(e) => {
                        setFormData({ ...formData, city: e.target.value });
                        if (errors.city) setErrors({ ...errors, city: undefined });
                      }}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all ${
                        errors.city 
                          ? 'border-brand-red focus:border-brand-red focus:ring-brand-red' 
                          : 'border-white/10 focus:border-brand-blue focus:ring-brand-blue'
                      }`}
                    />
                  </div>
                  {errors.city && (
                    <span className="text-[11px] text-brand-red mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.city}
                    </span>
                  )}
                </div>

                {/* Product Category */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Product Category
                  </label>
                  <div className="relative">
                    <Layers className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/90 border border-white/10 text-slate-100 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue appearance-none transition-all"
                    >
                      <option value="itel Smartphones">itel Smartphones (5G & 4G)</option>
                      <option value="itel Feature Phones">itel Feature Phones (Keypad)</option>
                      <option value="itel Mobile Accessories">itel Mobile Accessories</option>
                      <option value="Mixed Wholesale Carton">Mixed Wholesale Carton (Smartphones + Accessories)</option>
                    </select>
                  </div>
                </div>

                {/* Quantity Required */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Quantity Required
                  </label>
                  <div className="relative">
                    <Package className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/90 border border-white/10 text-slate-100 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue appearance-none transition-all"
                    >
                      <option value="10 - 25 Units">10 – 25 Units (Starter Wholesale)</option>
                      <option value="25 - 50 Units">25 – 50 Units (Regular Shop Batch)</option>
                      <option value="50 - 100 Units">50 – 100 Units (Bulk Retailer Rate)</option>
                      <option value="100+ Units">100+ Units (Master Dealer Consignment)</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Required Product / Model */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Specific Product / Model (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. itel Color Pro 5G, S24, it2163S, 25W Charger, Power Banks..."
                  value={formData.productModel}
                  onChange={(e) => setFormData({ ...formData, productModel: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-white/10 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                />
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Additional Message or Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your shop or specific delivery / wholesale requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-white/10 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-red via-red-600 to-rose-600 hover:from-red-600 hover:to-brand-red text-white font-display font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-neon-red transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span>SUBMIT WHOLESALE ENQUIRY</span>
              </button>

              {/* Form Footer Note */}
              <p className="text-[11px] text-slate-400 text-center">
                Submitting this form connects you directly with AS Marketing Ramanathapuram on WhatsApp (+91 {BUSINESS_CONFIG.whatsapp.phoneNumber}). No spam, only genuine wholesale dealer discussions.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
