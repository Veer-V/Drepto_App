import React from 'react';
import MobileHeader from './MobileHeader';

const products = [
    { id: 1, name: 'Drepto Glucometer', price: '$25.00', image: 'https://placehold.co/200x200?text=Glucometer' },
    { id: 2, name: 'Drepto BP Monitor', price: '$35.00', image: 'https://placehold.co/200x200?text=BP+Monitor' },
    { id: 3, name: 'Drepto Thermometer', price: '$15.00', image: 'https://placehold.co/200x200?text=Thermometer' },
];

const MobileProducts: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <MobileHeader title="Drepto Products" />
            <div className="p-4 grid grid-cols-2 gap-4">
                {products.map((prod) => (
                    <div key={prod.id} className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center text-center">
                        <img src={prod.image} alt={prod.name} className="w-24 h-24 object-contain mb-3" />
                        <h3 className="font-bold text-gray-800 text-sm mb-1">{prod.name}</h3>
                        <p className="text-primary font-bold">{prod.price}</p>
                        <button className="mt-3 w-full bg-teal-500 text-white py-1.5 rounded-lg text-xs font-bold">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileProducts;
