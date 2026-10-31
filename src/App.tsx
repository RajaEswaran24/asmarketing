import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { WholesaleSection } from './components/WholesaleSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { StoreGallery } from './components/StoreGallery';
import { WholesaleEnquiry } from './components/WholesaleEnquiry';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductModal } from './components/ProductModal';
import { Toast } from './components/Toast';
import { Product } from './types';

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleScrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectCategoryFromNav = (cat: string) => {
    setSelectedCategory(cat);
    handleScrollToSection('#products');
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col font-sans selection:bg-brand-blue selection:text-white">
      {/* Toast Notification */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />

      {/* Navigation Header */}
      <Header
        onOpenEnquiry={() => handleScrollToSection('#enquiry')}
        onSelectCategory={handleSelectCategoryFromNav}
      />

      <main className="flex-1">
        {/* Section 4: Hero Section */}
        <Hero
          onExploreProducts={() => handleScrollToSection('#products')}
          onGetWholesalePrices={() => handleScrollToSection('#enquiry')}
        />

        {/* Section 5: itel Product Showcase */}
        <ProductShowcase
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenDetails={(product) => setSelectedProduct(product)}
        />

        {/* Section 6: Wholesale Business Opportunities */}
        <WholesaleSection
          onOpenEnquiry={() => handleScrollToSection('#enquiry')}
        />

        {/* Section 7: Why Choose AS Marketing */}
        <WhyChooseUs />

        {/* Section 8: Store Gallery (Using Real Shop Photographs) */}
        <StoreGallery />

        {/* Section 9: Wholesale Enquiry Section & WhatsApp Generator */}
        <WholesaleEnquiry />

        {/* Section 11: Contact & Location (Ramanathapuram) */}
        <ContactSection
          onShowToast={handleShowToast}
          onOpenEnquiry={() => handleScrollToSection('#enquiry')}
        />
      </main>

      {/* Section 13: Footer */}
      <Footer
        onSelectCategory={handleSelectCategoryFromNav}
      />

      {/* Section 10: Official Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default App;
