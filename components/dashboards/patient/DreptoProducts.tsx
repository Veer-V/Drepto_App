
import React, { useState } from 'react';

const DreptoProducts: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const products: { id: number, title: string, price: string, category: string, image: string }[] = [];
    
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const displayedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="animate-fade-in-up pb-10">
            <div className="flex items-center mb-8">
                <button onClick={onBack} className="mr-4 p-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group">
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <div className="flex-1">
                     <h2 className="text-2xl font-bold text-gray-900">Drepto Store</h2>
                </div>
                <button className="p-2 bg-white border border-gray-200 rounded-xl text-gray-600 hover:text-orange-500 relative">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                </button>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 mb-10 text-center relative overflow-hidden">
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-orange-200 rounded-full opacity-50"></div>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-200 rounded-full opacity-50"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-orange-900 mb-2 relative z-10">Wellness Essentials</h3>
                <p className="text-orange-800/70 relative z-10">Curated products for your healthy lifestyle.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProducts.length > 0 ? displayedProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100 flex flex-col">
                        <div className="relative h-60 overflow-hidden bg-gray-100">
                            <img src={product.image} alt={product.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                                {product.category}
                            </span>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.title}</h3>
                            <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-50">
                                <span className="text-2xl font-bold text-orange-500">{product.price}</span>
                                <button className="bg-gray-900 text-white p-3 rounded-xl hover:bg-orange-500 transition-colors shadow-md group-active:scale-95">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="col-span-full text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                         <div className="w-16 h-16 bg-orange-50 text-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                        </div>
                        <p className="text-gray-500 font-medium">No products available in store.</p>
                    </div>
                )}
            </div>

            {products.length > itemsPerPage && (
                <div className="flex justify-center items-center gap-4 mt-12">
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 font-medium disabled:opacity-50 hover:bg-gray-50">Previous</button>
                    <span className="text-gray-600 font-medium">Page {currentPage} of {totalPages}</span>
                    <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 font-medium disabled:opacity-50 hover:bg-gray-50">Next</button>
                </div>
            )}
        </div>
    );
};

export default DreptoProducts;
