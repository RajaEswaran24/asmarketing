import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { Search, X, Filter, Sparkles, Smartphone, Layers, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { buildWhatsAppLink } from '../config/business';

interface ProductShowcaseProps {
  onOpenDetails: (product: Product) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onOpenDetails,
  selectedCategory,
  onSelectCategory
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered products calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.subCategory?.toLowerCase().includes(q) ||
        item.specs.some(
          (s) =>
            s.label.toLowerCase().includes(q) || s.value.toLowerCase().includes(q)
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-900/40 relative">
      {/* Light accent separators */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Verified itel Product Catalogue
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            EXPLORE OUR WHOLESALE RANGE
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Browse genuine itel smartphones, durable keypad feature phones, and high-margin charging & audio accessories for mobile retailers.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-10 space-y-4">
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Tabs */}
            <div className="w-full md:w-auto flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 border ${
                      isActive
                        ? 'bg-brand-blue text-white border-blue-400 shadow-neon-blue'
                        : 'bg-slate-800/80 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="w-full md:w-72 lg:w-80 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search models, 5G, charger, UPI..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-800/90 border border-white/10 text-slate-100 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Status Feedback */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>
              Showing <strong className="text-white">{filteredProducts.length}</strong> verified wholesale products
              {searchQuery && ` matching "${searchQuery}"`}
            </span>

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-brand-cyan hover:underline font-medium"
              >
                Reset search
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={onOpenDetails}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 bg-slate-800/40 rounded-2xl border border-white/10 max-w-lg mx-auto">
            <Search className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No products found</h3>
            <p className="text-xs text-slate-400 mt-1">
              We couldn't find any itel products matching "{searchQuery}". Try searching for "5G", "keypad", or "charger".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-brand-blue text-white text-xs font-semibold hover:bg-blue-600 transition-colors"
            >
              View All Products
            </button>
          </div>
        )}

        {/* Wholesale Order Callout Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-900 via-brand-surface to-slate-900 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Custom Bulk Requirements?
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Need a mixed wholesale carton of smartphones & accessories?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              We supply flexible wholesale mixes customized to your shop's weekly demand. Share your required models directly on WhatsApp for prompt quotation.
            </p>
          </div>

          <a
            href={buildWhatsAppLink("Hello AS Marketing, I would like to request a customized wholesale quotation for a mixed order of itel smartphones and accessories.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 whitespace-nowrap transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat for Custom Mix</span>
          </a>
        </div>

      </div>
    </section>
  );
};
