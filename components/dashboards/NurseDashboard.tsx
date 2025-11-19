
import React, { useState } from 'react';
import { User } from '../../types';
import NurseHome from './nurse/NurseHome';
import NurseAppointments from './nurse/NurseAppointments';
import NurseTasks from './nurse/NurseTasks';
import NurseProfile from './nurse/NurseProfile';

interface NurseDashboardProps {
  user: User;
}

// Icons
const HomeIcon = ({ active }: { active: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);

const VisitIcon = ({ active }: { active: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="M8 15h8"/></svg>
);

const TaskIcon = ({ active }: { active: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
);

const SettingsIcon = ({ active }: { active: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "text-white" : "text-gray-500"}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const NurseDashboard: React.FC<NurseDashboardProps> = ({ user }) => {
  const [currentView, setCurrentView] = useState<string>('home');

  const navItems = [
    { id: 'home', label: 'Overview', icon: HomeIcon },
    { id: 'appointments', label: 'Visits', icon: VisitIcon },
    { id: 'tasks', label: 'Tasks', icon: TaskIcon },
    { id: 'profile', label: 'Profile', icon: SettingsIcon },
  ];

  const renderView = () => {
    switch (currentView) {
      case 'appointments':
        return <NurseAppointments onBack={() => setCurrentView('home')} />;
      case 'tasks':
        return <NurseTasks onBack={() => setCurrentView('home')} />;
      case 'profile':
        return <NurseProfile user={user} onBack={() => setCurrentView('home')} />;
      default:
        return <NurseHome user={user} onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-6rem)] bg-gray-50 rounded-xl overflow-hidden border border-gray-200 shadow-sm mt-4 mb-4">
      {/* --- Desktop Sidebar --- */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-6">
           <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Nurse Portal</h2>
           <div className="space-y-2">
             {navItems.map((item) => (
               <button
                 key={item.id}
                 onClick={() => setCurrentView(item.id)}
                 className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                   currentView === item.id
                     ? 'bg-emerald-500 text-white shadow-md shadow-emerald-200'
                     : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
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
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">
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
           {navItems.map((item) => (
             <button
               key={item.id}
               onClick={() => setCurrentView(item.id)}
               className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
                 currentView === item.id ? 'text-emerald-500' : 'text-gray-400'
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

export default NurseDashboard;
