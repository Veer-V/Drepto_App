
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MobileCard: React.FC<{
    title: string;
    icon: React.ReactNode;
    color: string;
    onClick: () => void;
}> = ({ title, icon, color, onClick }) => (
    <div
        onClick={onClick}
        className={`${color} p - 3 rounded - xl shadow - md active: scale - 95 transition - transform duration - 200 flex flex - col items - center justify - center h - 28 text - center relative overflow - hidden`}
    >
        <div className="text-white mb-2 opacity-90">{icon}</div>
        <h3 className="font-bold text-white text-xs leading-tight">{title}</h3>
    </div>
);

const MobileHome: React.FC = () => {
    const navigate = useNavigate();

    const cards = [
        {
            title: 'Patient Login',
            color: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>,
            action: () => navigate('/auth')
        },
        {
            title: 'Doctor Login',
            color: 'bg-gradient-to-br from-blue-400 to-blue-600',
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
            action: () => navigate('/auth')
        },
        {
            title: 'Find Doctors',
            color: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>,
            action: () => navigate('/mobile/doctors')
        },
        {
            title: 'Pharmacy',
            color: 'bg-gradient-to-br from-orange-400 to-orange-600',
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>,
            action: () => navigate('/medicines')
        },
        {
            title: 'Lab Tests',
            color: 'bg-gradient-to-br from-purple-400 to-purple-600',
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>,
            action: () => navigate('/lab-tests')
        },
        {
            title: 'Nurses',
            color: 'bg-gradient-to-br from-pink-400 to-pink-600',
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>,
            action: () => navigate('/mobile/nurses')
        },
        {
            title: 'Drepto Products',
            color: 'bg-gradient-to-br from-teal-400 to-teal-600',
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>,
            action: () => navigate('/mobile/products')
        },
        {
            title: 'Video Consult',
            color: 'bg-gradient-to-br from-red-400 to-red-600',
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>,
            action: () => { } // Placeholder
        },
        {
            title: 'Records',
            color: 'bg-gradient-to-br from-gray-500 to-gray-700',
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>,
            action: () => { } // Placeholder
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Mobile Header */}
            <div className="bg-white p-6 rounded-b-3xl shadow-sm mb-6">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="text-gray-500 text-sm font-medium">Welcome back,</p>
                        <h1 className="text-2xl font-bold text-dark-blue">Drepto Health</h1>
                    </div>
                    <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    </div>
                </div>
                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search medicines, doctors..."
                        className="w-full bg-gray-100 border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50"
                    />
                    <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="px-4">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Explore Services</h2>
                <div className="grid grid-cols-3 gap-3">
                    {cards.map((card, index) => (
                        <MobileCard key={index} {...card} onClick={card.action} />
                    ))}
                </div>
            </div>

            {/* Promo Banner */}
            <div className="px-4 mt-6">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="font-bold text-lg mb-1">Free Health Checkup</h3>
                        <p className="text-sm opacity-90 mb-3">For all new users this month.</p>
                        <button className="bg-white text-indigo-600 text-xs font-bold px-4 py-2 rounded-lg">Book Now</button>
                    </div>
                    <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-4 translate-y-4">
                        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileHome;

