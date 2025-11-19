
import React, { useState } from 'react';
import { User } from '../../types';
import PatientHome from './patient/PatientHome';
import DoctorAppointment from './patient/DoctorAppointment';
import NurseAppointment from './patient/NurseAppointment';
import Pharmacy from './patient/Pharmacy';
import LabTests from './patient/LabTests';
import DreptoProducts from './patient/DreptoProducts';
import Ambulance from './patient/Ambulance';
import Profile from './patient/Profile';

interface PatientDashboardProps {
  user: User;
}

// --- Icons for Navigation ---
const HomeIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const DoctorIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}>
    <path d="M4.8 2.3A.3.3 0 0 0 5 2.5h14a.2.2 0 0 0 .2-.2V2a.2.2 0 0 0-.2-.2H5a.2.2 0 0 0-.2.2v.3zM6 15h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"/><path d="M11 2v3.38a1.5 1.5 0 0 0 1.5 1.5h1.72"/><path d="M5.5 14.5A2.5 2.5 0 0 1 8 12h8a2.5 2.5 0 0 1 2.5 2.5v2.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-2.5z"/><path d="M12 12v4"/><path d="M12 8v1"/><circle cx="12" cy="6" r="2"/>
  </svg>
);

const NurseIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}>
    <path d="M12 2a4 4 0 0 0-4 4v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a4 4 0 0 0-4-4Z"/><path d="M8 22v-5h8v5"/><path d="M12 7v4"/><path d="M10 9h4"/>
  </svg>
);

const PharmacyIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}>
    <path d="M10.5 20.5 10 22l-4-2.5V9l4-2.5L10.5 8"/><path d="M13.5 3.5 14 2l4 2.5V15l-4 2.5-3.5-1.5"/><path d="m14 2-4 2.5V15l4 2.5V2"/><path d="M10 22v-6.5l-4-2.5"/><path d="M2 9.5 6 12"/><path d="M20 14.5 14 12"/><path d="M10 8l4-2.5"/><path d="M10 15.5l4-2.5"/>
  </svg>
);

const LabIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}>
    <path d="M9 3v5h6V3"/><path d="M10 14.5a6 6 0 0 0-3.3 5H3"/><path d="M21 19.5a6 6 0 0 0-3.3-5"/><path d="M14 19.5a6 6 0 0 0-3.3-5"/><path d="M12 8v6"/><circle cx="12" cy="17" r="3"/>
  </svg>
);

const ProductIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}>
    <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
);

const AmbulanceIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}>
    <path d="M10 10h4"/><path d="M12 8v4"/><rect width="16" height="12" x="4" y="5" rx="2"/><path d="M2 9h2"/><path d="M20 9h2"/><path d="M15 17v2"/><path d="M9 17v2"/>
  </svg>
);

const SettingsIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const PatientDashboard: React.FC<PatientDashboardProps> = ({ user }) => {
  const [currentView, setCurrentView] = useState<string>('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'doctor', label: 'Doctors', icon: DoctorIcon },
    { id: 'lab', label: 'Lab Tests', icon: LabIcon }, // Moved up for better visibility
    { id: 'pharmacy', label: 'Pharmacy', icon: PharmacyIcon },
    { id: 'nurse', label: 'Nurse', icon: NurseIcon },
    { id: 'products', label: 'Drepto Store', icon: ProductIcon },
    { id: 'ambulance', label: 'Ambulance', icon: AmbulanceIcon },
    { id: 'profile', label: 'Profile', icon: SettingsIcon },
  ];

  const renderView = () => {
    switch (currentView) {
      case 'doctor':
        return <DoctorAppointment onBack={() => setCurrentView('home')} />;
      case 'nurse':
        return <NurseAppointment onBack={() => setCurrentView('home')} />;
      case 'pharmacy':
        return <Pharmacy onBack={() => setCurrentView('home')} />;
      case 'lab':
        return <LabTests onBack={() => setCurrentView('home')} />;
      case 'products':
        return <DreptoProducts onBack={() => setCurrentView('home')} />;
      case 'ambulance':
        return <Ambulance onBack={() => setCurrentView('home')} />;
      case 'profile':
        return <Profile user={user} onBack={() => setCurrentView('home')} />;
      default:
        return <PatientHome user={user} onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-6rem)] bg-gray-50 rounded-xl overflow-hidden border border-gray-200 shadow-sm mt-4 mb-4">
      {/* --- Desktop Sidebar --- */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-6">
           <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Menu</h2>
           <div className="space-y-2">
             {navItems.map((item) => (
               <button
                 key={item.id}
                 onClick={() => setCurrentView(item.id)}
                 className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                   currentView === item.id
                     ? 'bg-primary text-white shadow-md shadow-blue-200'
                     : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                 }`}
               >
                 <item.icon active={currentView === item.id} />
                 {item.label}
               </button>
             ))}
           </div>
        </div>
        
        <div className="mt-auto p-6 border-t border-gray-100">
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => setCurrentView('profile')}>
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold">
                {user.firstName.charAt(0)}{user.lastName.charAt(0)}
             </div>
             <div className="overflow-hidden">
                <p className="text-sm font-bold text-gray-900 truncate">{user.firstName} {user.lastName}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
             </div>
          </div>
        </div>
      </aside>

      {/* --- Mobile Bottom Navigation --- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 pb-safe">
        <div className="flex justify-around items-center p-2">
           {navItems.slice(0, 5).map((item) => (
             <button
               key={item.id}
               onClick={() => setCurrentView(item.id)}
               className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
                 currentView === item.id ? 'text-primary' : 'text-gray-400'
               }`}
             >
               <item.icon active={currentView === item.id} />
               <span className="text-[10px] font-medium mt-1">{item.label}</span>
             </button>
           ))}
        </div>
      </nav>

      {/* --- Main Content Area --- */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto h-[calc(100vh-6rem-4rem)] md:h-[calc(100vh-6rem)] scrollbar-hide pb-24 md:pb-8">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
           {renderView()}
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
