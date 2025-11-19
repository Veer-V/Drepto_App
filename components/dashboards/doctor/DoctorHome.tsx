
import React from 'react';
import { User } from '../../../types';

// --- Icons ---
const AppointmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const PatientIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const RxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14 2z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13h6"/><path d="M12 10v6"/></svg>
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
    
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${color} text-white shadow-lg shadow-${color.replace('bg-', '')}/30 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
      {icon}
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{description}</p>
    
    <div className="flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
      <span>Open Module</span>
      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
    </div>
  </div>
);

interface DoctorHomeProps {
  user: User;
  onNavigate: (page: string) => void;
}

const DoctorHome: React.FC<DoctorHomeProps> = ({ user, onNavigate }) => {
  const modules = [
    {
      id: "appointments",
      title: "Appointments",
      description: "Manage schedule, view upcoming visits & request changes.",
      icon: <AppointmentIcon />,
      color: "bg-blue-500"
    },
    {
      id: "patients",
      title: "Patient Records",
      description: "Access medical history, notes, and contact info.",
      icon: <PatientIcon />,
      color: "bg-emerald-500"
    },
    {
      id: "prescriptions",
      title: "E-Prescriptions",
      description: "Issue digital Rx and manage medication history.",
      icon: <RxIcon />,
      color: "bg-purple-500"
    },
    {
      id: "profile",
      title: "Doctor Profile",
      description: "Update availability, specialty details & settings.",
      icon: <ProfileIcon />,
      color: "bg-gray-700"
    },
  ];

  const stats = [
     { label: 'Today', value: '0', sub: 'Appointments', color: 'text-blue-600', bg: 'bg-blue-50' },
     { label: 'Total', value: '0', sub: 'Patients', color: 'text-emerald-600', bg: 'bg-emerald-50' },
     { label: 'Pending', value: '0', sub: 'Reviews', color: 'text-orange-600', bg: 'bg-orange-50' },
     { label: 'Earnings', value: '$0', sub: 'This Month', color: 'text-purple-600', bg: 'bg-purple-50' }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up pb-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 md:p-10 rounded-3xl shadow-2xl text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-400 opacity-10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-blue-100 mb-4">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Live Status: Online
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
                    Hello, <span className="text-blue-200">Dr. {user.lastName}</span>
                </h2>
                <p className="text-blue-100 text-lg opacity-90 max-w-xl">
                    You have a clear schedule right now. Use the dashboard to manage your practice efficiently.
                </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl min-w-[160px] text-center">
                 <p className="text-xs text-blue-200 uppercase tracking-wider font-bold mb-1">Current Date</p>
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
            <div className="w-1.5 h-8 bg-primary rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-800">Practice Management</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default DoctorHome;
