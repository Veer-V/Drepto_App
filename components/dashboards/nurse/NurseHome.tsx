
import React from 'react';
import { User } from '../../../types';

// Icons
const VisitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="M8 15h8"/></svg>
);

const TaskIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
);

const ProfileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

interface DashboardCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
  color: string;
  onClick?: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, icon, color, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 group relative overflow-hidden h-full flex flex-col"
  >
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${color}`}></div>
    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gray-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
    
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${color} text-white shadow-lg shadow-${color.replace('bg-', '')}/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
      {icon}
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{description}</p>
    
    <div className="flex items-center text-sm font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
      <span>Access Module</span>
      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
    </div>
  </div>
);

interface NurseHomeProps {
  user: User;
  onNavigate: (page: string) => void;
}

const NurseHome: React.FC<NurseHomeProps> = ({ user, onNavigate }) => {
  const modules = [
    {
      id: "appointments",
      title: "Home Visits",
      description: "Manage assigned patient visits, view routes, and update status.",
      icon: <VisitIcon />,
      color: "bg-emerald-500"
    },
    {
      id: "tasks",
      title: "Daily Tasks",
      description: "Track nursing procedures, vitals checks, and medication Admin.",
      icon: <TaskIcon />,
      color: "bg-orange-500"
    },
    {
      id: "profile",
      title: "Nurse Profile",
      description: "Update your service area, shift availability, and credentials.",
      icon: <ProfileIcon />,
      color: "bg-teal-600"
    },
  ];

  const stats = [
     { label: 'Scheduled', value: '0', sub: 'Visits Today', color: 'text-emerald-600', bg: 'bg-emerald-50' },
     { label: 'Pending', value: '0', sub: 'Tasks', color: 'text-orange-600', bg: 'bg-orange-50' },
     { label: 'Completed', value: '0', sub: 'This Week', color: 'text-blue-600', bg: 'bg-blue-50' },
     { label: 'Hours', value: '0h', sub: 'On Duty', color: 'text-teal-600', bg: 'bg-teal-50' }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up pb-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-teal-800 p-8 md:p-10 rounded-3xl shadow-2xl text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-emerald-400 opacity-10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-emerald-100 mb-4">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Shift Status: Active
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
                    Nurse <span className="text-emerald-200">{user.lastName}</span>
                </h2>
                <p className="text-emerald-50 text-lg opacity-90 max-w-xl leading-relaxed">
                    Your care makes a difference. Check your assigned visits for today.
                </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl min-w-[160px] text-center">
                 <p className="text-xs text-emerald-200 uppercase tracking-wider font-bold mb-1">Today's Date</p>
                 <p className="text-xl font-bold">{new Date().toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}</p>
            </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {stats.map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="flex justify-between items-start mb-3">
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">{stat.label}</span>
                    <div className={`w-2 h-2 rounded-full ${stat.color.replace('text', 'bg')} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                </div>
                <span className={`text-3xl font-bold ${stat.color} block mb-1 group-hover:scale-105 transition-transform origin-left`}>{stat.value}</span>
                <span className="text-xs text-gray-400 font-medium">{stat.sub}</span>
            </div>
         ))}
      </div>

      {/* Modules Grid */}
      <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-8 bg-emerald-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-800">Care Management</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
                <DashboardCard 
                    key={m.id} 
                    {...m} 
                    onClick={() => onNavigate(m.id)}
                />
            ))}
          </div>
      </div>
    </div>
  );
};

export default NurseHome;
