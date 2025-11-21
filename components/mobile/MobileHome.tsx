
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MEDICINES as DEFAULT_MEDICINES, LAB_TESTS_DATA } from '../../constants';

const MobileCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}> = ({ title, icon, color, onClick }) => (
  <button
    onClick={onClick}
    className={`${color} p-3 rounded-xl shadow-md active:scale-95 transition-transform duration-200 flex flex-col items-center justify-center h-28 text-center relative overflow-hidden`}
  >
    <div className="text-white mb-2 opacity-90">{icon}</div>
    <h3 className="font-bold text-white text-xs leading-tight">{title}</h3>
  </button>
);

const MobileHome: React.FC = () => {
  const navigate = useNavigate();

  const cards = [
    { title: 'Patient Login', color: 'bg-gradient-to-br from-emerald-400 to-emerald-600', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>, action: () => navigate('/auth') },
    { title: 'Doctor Login', color: 'bg-gradient-to-br from-blue-400 to-blue-600', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, action: () => navigate('/auth') },
    { title: 'Find Doctors', color: 'bg-gradient-to-br from-indigo-400 to-indigo-600', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>, action: () => navigate('/mobile/doctors') },
    { title: 'Pharmacy', color: 'bg-gradient-to-br from-orange-400 to-orange-600', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>, action: () => navigate('/medicines') },
    { title: 'Lab Tests', color: 'bg-gradient-to-br from-purple-400 to-purple-600', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>, action: () => navigate('/lab-tests') },
    { title: 'Nurses', color: 'bg-gradient-to-br from-pink-400 to-pink-600', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>, action: () => navigate('/mobile/nurses') },
  ];

  const medicines = DEFAULT_MEDICINES.slice(0, 10);
  const tests = LAB_TESTS_DATA.slice(0, 10);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header + Search */}
      <div className="bg-white p-4 rounded-b-3xl shadow-sm mb-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-gray-500 text-xs font-medium">Welcome</p>
            <h1 className="text-xl font-bold text-dark-blue">Drepto</h1>
          </div>
          <div className="h-9 w-9 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search medicines, tests..."
            className="w-full bg-gray-100 border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50"
          />
          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="px-4">
        <div className="bg-[#0f3460] rounded-2xl p-4 text-white shadow-lg mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs opacity-90 font-semibold">Save 25%</p>
              <p className="text-sm opacity-80">On first medicine order</p>
            </div>
            <button onClick={() => navigate('/medicines')} className="bg-white text-[#0f3460] text-xs font-bold px-3 py-2 rounded-lg">Order Now</button>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-4">
        <div className="grid grid-cols-3 gap-3">
          <MobileCard title="Lab Tests" color="bg-gradient-to-br from-purple-400 to-purple-600" onClick={() => navigate('/lab-tests')} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>} />
          <MobileCard title="Medicines" color="bg-gradient-to-br from-orange-400 to-orange-600" onClick={() => navigate('/medicines')} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>} />
          <MobileCard title="Consult" color="bg-gradient-to-br from-emerald-400 to-emerald-600" onClick={() => navigate('/auth')} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>} />
        </div>
      </div>

      {/* Featured Lab Tests */}
      <section className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-gray-800">Popular Lab Tests</h2>
          <button onClick={() => navigate('/lab-tests')} className="text-xs text-primary font-semibold">See all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
          {tests.map((t) => (
            <div key={t.id} className="min-w-[180px] snap-start bg-white rounded-xl border border-gray-200 p-3 shadow-sm">
              <p className="text-sm font-bold text-gray-900 line-clamp-2">{t.name}</p>
              <p className="text-[10px] text-gray-500 mb-2">{t.alias}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900">₹{t.price}</span>
                <button onClick={() => navigate('/lab-tests')} className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-lg">Book</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Medicines */}
      <section className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-gray-800">Popular Medicines</h2>
          <button onClick={() => navigate('/medicines')} className="text-xs text-primary font-semibold">See all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
          {DEFAULT_MEDICINES.slice(0, 10).map((m) => (
            <div key={m.id} className="min-w-[160px] snap-start bg-white rounded-xl border border-gray-200 p-3 shadow-sm">
              <div className="h-24 bg-gray-50 rounded-lg mb-2 flex items-center justify-center">
                {m.imageUrl ? <img src={m.imageUrl} alt={m.name} className="h-20 object-contain" /> : <div className="w-12 h-12 bg-gray-200 rounded" />}
              </div>
              <p className="text-xs font-bold text-gray-900 line-clamp-2 min-h-[2.5rem]">{m.name}</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-sm font-bold text-gray-900">₹{m.price.toFixed(0)}</span>
                <span className="text-[10px] text-gray-400 line-through">₹{m.mrp.toFixed(0)}</span>
              </div>
              <button onClick={() => navigate('/medicines')} className="mt-2 w-full py-1.5 bg-teal-600 text-white text-xs font-bold rounded-lg">Add</button>
            </div>
          ))}
        </div>
      </section>

      {/* Offer Strip */}
      <div className="px-4 mt-6">
        <div className="bg-yellow-100 rounded-xl p-3 text-yellow-800 text-sm font-semibold text-center">
          Free home sample collection on select lab tests
        </div>
      </div>
    </div>
  );
};

export default MobileHome;

