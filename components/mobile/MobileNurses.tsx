import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileHeader from './MobileHeader';

const nurses = [
    { id: 1, name: 'Nurse Jessica', type: 'Home Care', rating: 4.9, image: 'https://placehold.co/100x100?text=Nurse+Jess' },
    { id: 2, name: 'Nurse Robert', type: 'Critical Care', rating: 4.7, image: 'https://placehold.co/100x100?text=Nurse+Rob' },
];

const MobileNurses: React.FC = () => {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [selectedNurse, setSelectedNurse] = useState<string | null>(null);

    const handleBook = (name: string) => {
        setSelectedNurse(name);
        setShowForm(true);
    };

    const handleBack = () => {
        if (showForm) {
            setShowForm(false);
        } else {
            navigate(-1);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <MobileHeader title="Nursing Services" onBack={handleBack} />

            {!showForm ? (
                <div className="p-4 space-y-4">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4">
                        <h3 className="font-bold text-blue-800 mb-1">Need a Nurse?</h3>
                        <p className="text-sm text-blue-600">Professional nursing care at your doorstep.</p>
                    </div>

                    {nurses.map((nurse) => (
                        <div key={nurse.id} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
                            <img src={nurse.image} alt={nurse.name} className="w-16 h-16 rounded-full object-cover" />
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-800">{nurse.name}</h3>
                                <p className="text-sm text-gray-600">{nurse.type}</p>
                                <div className="text-xs text-yellow-500 mt-1">★ {nurse.rating} Rating</div>
                            </div>
                            <button
                                onClick={() => handleBook(nurse.name)}
                                className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-pink-600"
                            >
                                Book
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="p-4 animate-fade-in-up">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-bold mb-4">Book {selectedNurse}</h2>
                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Booking Request Sent!'); setShowForm(false); }}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                                <input type="text" className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500 outline-none" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                <input type="date" className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500 outline-none" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                <textarea className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500 outline-none" rows={3} required></textarea>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button type="button" onClick={() => setShowForm(false)} className="flex-1 border border-gray-300 py-2 rounded-lg font-semibold">Cancel</button>
                                <button type="submit" className="flex-1 bg-pink-500 text-white py-2 rounded-lg font-semibold">Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNurses;
