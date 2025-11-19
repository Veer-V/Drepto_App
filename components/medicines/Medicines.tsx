
import React, { useMemo, useRef, useState } from 'react';
import { MEDICINES, PHARMACY_FAQS, PHARMACY_TESTIMONIALS } from '../../constants';
import type { Medicine, Testimonial } from '../../types';
import FAQ from './FAQ';

interface MedicinesProps {
    onViewDetails: (medicine: Medicine) => void;
}

// Icons
const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
);

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
);

// Helper Components
const ServiceIcon: React.FC<{ icon: string, title: string, subtitle: string }> = ({ icon, title, subtitle }) => (
    <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
        <img src={icon} alt={title} className="h-16 w-16 mb-3 object-contain" />
        <h3 className="font-bold text-white">{title}</h3>
        <p className="text-sm text-teal-100 opacity-90">{subtitle}</p>
    </div>
);

const OrderOption: React.FC<{ icon: string, title: string, actionText: string, onClick: () => void }> = ({ icon, title, actionText, onClick }) => (
    <div className="flex-1 flex flex-col items-center p-4 border border-gray-200 rounded-lg text-center hover:shadow-md transition-shadow">
        <img src={icon} alt={title} className="h-10 w-10 mb-2" />
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <button onClick={onClick} className="mt-2 text-sm font-bold text-teal-600 hover:text-teal-700">{actionText}</button>
    </div>
);

const OfferCard: React.FC<{ title: string, code: string, description: string, onAction: () => void }> = ({ title, code, description, onAction }) => (
    <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 flex items-center hover:border-teal-400 transition-colors">
        <div className="flex-1">
            <p className="text-xs font-bold text-teal-600 bg-teal-50 inline-block px-2 py-0.5 rounded">{title}</p>
            <p className="text-sm font-bold text-gray-800 mt-1">{description}</p>
            <div className="mt-2">
                <button onClick={onAction} className="px-3 py-1 text-xs font-bold text-teal-700 border border-teal-600 rounded hover:bg-teal-50">
                    {code}
                </button>
            </div>
        </div>
        <div className="text-teal-500">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
        </div>
    </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
        <div className="flex-grow">
            <svg className="w-8 h-8 text-gray-200 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.913 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H15.017C14.465 8 14.017 8.448 14.017 9V11C14.017 11.552 13.569 12 13.017 12H12.017V5H22.017V15C22.017 18.314 19.331 21 16.017 21H14.017V21ZM5.01697 21L5.01697 18C5.01697 16.896 5.91297 16 7.01697 16H10.017C10.569 16 11.017 15.552 11.017 15V9C11.017 8.448 10.569 8 10.017 8H6.01697C5.46497 8 5.01697 8.448 5.01697 9V11C5.01697 11.552 4.56897 12 4.01697 12H3.01697V5H13.017V15C13.017 18.314 10.331 21 7.01697 21H5.01697V21Z"></path></svg>
            <p className="text-gray-600 italic text-sm">"{testimonial.quote}"</p>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="font-bold text-gray-900">{testimonial.name}</p>
            <p className="text-xs text-gray-500">{testimonial.location}</p>
        </div>
    </div>
);

const FilterDropdown: React.FC<{ label: string }> = ({ label }) => (
    <button className="flex items-center justify-between gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto whitespace-nowrap">
        <span>{label}</span>
        <ChevronDownIcon className="h-4 w-4 text-gray-500" />
    </button>
);

const ProductCard: React.FC<{ product: Medicine; onViewDetails: (medicine: Medicine) => void; onAdd: (m: Medicine) => void; }> = ({ product, onViewDetails, onAdd }) => {
    const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden group flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-48 bg-gray-50 flex items-center justify-center p-6">
                <img src={product.imageUrl} alt={product.name} className="h-full w-auto object-contain max-h-40 transition-transform duration-300 group-hover:scale-110" />
                {discount > 0 && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">{discount}% OFF</div>
                )}
            </div>
            <div className="p-4 flex-grow flex flex-col">
                <p className="text-xs font-bold text-teal-600 uppercase mb-1 tracking-wide">{product.brand}</p>
                <h3 className="text-sm font-bold text-gray-900 flex-grow leading-snug mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{product.packSize}</p>
                <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
                        <span className="text-xs text-gray-400 line-through">₹{product.mrp.toFixed(2)}</span>
                    </div>
                    <div className="flex gap-2">
                         <button onClick={() => onAdd(product)} className="flex-1 py-2 bg-teal-600 text-white text-xs font-bold rounded-lg hover:bg-teal-700 transition-colors shadow-sm">
                          Add
                        </button>
                        <button onClick={() => onViewDetails(product)} className="flex-1 py-2 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors">
                          Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Medicines: React.FC<MedicinesProps> = ({ onViewDetails }) => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const fileRef = useRef<HTMLInputElement>(null);

  const addToCart = (m: Medicine) => {
    try {
      const key = 'patient_cart';
      const stored = localStorage.getItem(key);
      const cart: Array<{ id: number | string; name: string; price: string; image: string }> = stored ? JSON.parse(stored) : [];
      cart.push({ id: m.id, name: m.name, price: String(m.price), image: m.imageUrl || '' });
      localStorage.setItem(key, JSON.stringify(cart));
      window.dispatchEvent(new Event('cart:updated'));
    } catch {}
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MEDICINES;
    return MEDICINES.filter((p) =>
      p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
    );
  }, [query]);

  const visible = filtered.slice(0, page * pageSize);

  const copyOffer = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      alert(`Coupon ${code} copied`);
    } catch {}
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hi, I want to order medicines.');
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+911234567890';
  };

  const handleUploadClick = () => fileRef.current?.click();
  const handleUploadChange = () => alert('Prescription uploaded');

  return (
    <div className="bg-white">
      {/* Pharmacy Hero Section */}
      <section className="bg-[#0f3460] relative overflow-hidden pt-24 pb-32">
           {/* Abstract Background Pattern */}
           <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
           </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-12">
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                      Get Medicines Fast with <span className="text-teal-400">Superfast Delivery</span>
                  </h1>
                  <p className="text-blue-200 text-lg font-medium">Genuine medicines, great discounts, and doorstep delivery.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ServiceIcon icon="https://cdn-icons-png.flaticon.com/512/2331/2331966.png" title="Cash on Delivery" subtitle="Available on all orders" />
                  <ServiceIcon icon="https://cdn-icons-png.flaticon.com/512/2979/2979684.png" title="Express Delivery" subtitle="Within 24 hours in select cities" />
                  <ServiceIcon icon="https://cdn-icons-png.flaticon.com/512/1584/1584808.png" title="Easy Returns" subtitle="No questions asked return policy" />
              </div>
          </div>
      </section>

      {/* Search, Order & Offers Section */}
      <section className="bg-gray-50 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
                      <div className="relative flex-grow w-full">
                          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                              type="search"
                              value={query}
                              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                              placeholder="Search for Medicines, Health Products..."
                              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 text-gray-800"
                          />
                      </div>
                      <button onClick={() => setPage(1)} className="w-full md:w-auto px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors shadow-lg shadow-teal-200">
                          Search
                      </button>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 text-center lg:text-left">Quick Order Options</p>
                          <div className="flex flex-col sm:flex-row gap-4">
                              <OrderOption onClick={handleWhatsApp} icon="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" title="WhatsApp Order" actionText="Chat Now" />
                              <OrderOption onClick={handleUploadClick} icon="https://cdn-icons-png.flaticon.com/512/2301/2301134.png" title="Upload Rx" actionText="Upload" />
                              <OrderOption onClick={handleCall} icon="https://cdn-icons-png.flaticon.com/512/724/724664.png" title="Call to Order" actionText="Call Now" />
                          </div>
                          <input ref={fileRef} type="file" className="hidden" onChange={handleUploadChange} accept="image/*,.pdf" />
                      </div>
                      <div>
                           <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 text-center lg:text-left">Exclusive Offers</p>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <OfferCard title="NEW USER" description="Flat 25% OFF on first order > ₹1000" code="FIRST25" onAction={() => copyOffer('FIRST25')} />
                              <OfferCard title="HEALTH" description="Get 15% OFF + 5% Cashback" code="HEALTH15" onAction={() => copyOffer('HEALTH15')} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Product Grid Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4 md:mb-0">Popular Medicines</h2>
              <div className="flex flex-wrap gap-2">
                <FilterDropdown label="Category" />
                <FilterDropdown label="Brand" />
                <FilterDropdown label="Sort By" />
              </div>
            </div>

            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {visible.map((product) => (
                <ProductCard key={product.id} product={product} onViewDetails={onViewDetails} onAdd={addToCart} />
              ))}
            </div>

            <div className="mt-12 text-center">
              {visible.length < filtered.length ? (
                <button onClick={() => setPage((p) => p + 1)} className="px-8 py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-xl hover:border-teal-500 hover:text-teal-600 transition-all">Load More Products</button>
              ) : (
                <span className="text-sm text-gray-400">No more products</span>
              )}
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900">What Our Customers Say</h2>
              <p className="text-gray-500 mt-2">Trusted by thousands of happy customers</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {PHARMACY_TESTIMONIALS.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>
          </div>
      </section>

      <FAQ faqs={PHARMACY_FAQS} />
    </div>
  );
};

export default Medicines;
