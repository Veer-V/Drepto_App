import React from 'react';
import MobileHeader from './MobileHeader';

const doctors = [
    { id: 1, name: 'Dr. Sarah Smith', specialty: 'Cardiologist', exp: '10 yrs', rating: 4.8, image: 'https://placehold.co/100x100?text=Dr+Sarah' },
    { id: 2, name: 'Dr. John Doe', specialty: 'General Physician', exp: '8 yrs', rating: 4.5, image: 'https://placehold.co/100x100?text=Dr+John' },
    { id: 3, name: 'Dr. Emily White', specialty: 'Dermatologist', exp: '5 yrs', rating: 4.9, image: 'https://placehold.co/100x100?text=Dr+Emily' },
    { id: 4, name: 'Dr. Michael Brown', specialty: 'Pediatrician', exp: '12 yrs', rating: 4.7, image: 'https://placehold.co/100x100?text=Dr+Mike' },
];

const MobileDoctors: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <MobileHeader title="Find Doctors" />
            <div className="p-4 space-y-4">
                {doctors.map((doc) => (
                    <div key={doc.id} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
                        <img src={doc.image} alt={doc.name} className="w-16 h-16 rounded-full object-cover" />
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800">{doc.name}</h3>
                            <p className="text-sm text-primary font-medium">{doc.specialty}</p>
                            <div className="flex items-center text-xs text-gray-500 mt-1">
                                <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded mr-2">{doc.exp} Exp</span>
                                <span className="flex items-center text-yellow-500">
                                    ★ {doc.rating}
                                </span>
                            </div>
                        </div>
                        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
                            Book
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileDoctors;
