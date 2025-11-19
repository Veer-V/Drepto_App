
import React, { useState } from 'react';
import { User } from '../../types';
import DoctorHome from './doctor/DoctorHome';
import DoctorAppointments from './doctor/DoctorAppointments';
import DoctorPatients from './doctor/DoctorPatients';
import DoctorPrescriptions from './doctor/DoctorPrescriptions';
import DoctorProfile from './doctor/DoctorProfile';

interface DoctorDashboardProps {
  user: User;
}

// Icons
const HomeIcon = ({ active }: { active: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);

const CalendarIcon = ({ active }: { active: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const PatientsIcon = ({ active }: { active: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const RxIcon = ({ active }: { active: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14 2z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13h6"/><path d="M12 10v6"/></svg>
);

const SettingsIcon = ({ active }: { active: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const DoctorDashboard: React.FC<DoctorDashboardProps> = ({ user }) => {
  const [currentView, setCurrentView] = useState<string>('home');

  const navItems = [
    { id: 'home', label: 'Overview', icon: HomeIcon },
    { id: 'appointments', label: 'Appointments', icon: CalendarIcon },
    { id: 'patients', label: 'My Patients', icon: PatientsIcon },
    { id: 'prescriptions', label: 'Prescriptions', icon: RxIcon },
    { id: 'profile', label: 'Profile', icon: SettingsIcon },
  ];

  const renderView = () => {
    switch (currentView) {
      case 'appointments':
        return <DoctorAppointments onBack={() => setCurrentView('home')} />;
      case 'patients':
        return <DoctorPatients onBack={() => setCurrentView('home')} />;
      case 'prescriptions':
        return <DoctorPrescriptions onBack={() => setCurrentView('home')} />;
      case 'profile':
        return <DoctorProfile user={user} onBack={() => setCurrentView('home')} />;
      default:
        return <DoctorHome user={user} onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-6rem)] bg-gray-50 rounded-xl overflow-hidden border border-gray-200 shadow-sm mt-4 mb-4">
      {/* --- Desktop Sidebar --- */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-6">
           <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Doctor Portal</h2>
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
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                {user.firstName.charAt(0)}{user.lastName.charAt(0)}
             </div>
             <div className="overflow-hidden">
                <p className="text-sm font-bold text-gray-900 truncate">Dr. {user.lastName}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
             </div>
          </div>
        </div>
      </aside>

      {/* --- Mobile Bottom Navigation --- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 pb-safe">
        <div className="flex justify-around items-center p-2">
           {navItems.map((item) => (
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

export default DoctorDashboard;
