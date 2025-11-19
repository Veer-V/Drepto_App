
import React from 'react';
import { User } from '../../../types';

// Icons
const DoctorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 0 0 5 2.5h14a.2.2 0 0 0 .2-.2V2a.2.2 0 0 0-.2-.2H5a.2.2 0 0 0-.2.2v.3zM6 15h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"/><path d="M11 2v3.38a1.5 1.5 0 0 0 1.5 1.5h1.72"/><path d="M5.5 14.5A2.5 2.5 0 0 1 8 12h8a2.5 2.5 0 0 1 2.5 2.5v2.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-2.5z"/><path d="M12 12v4"/><path d="M12 8v1"/><circle cx="12" cy="6" r="2"/></svg>
);

const NurseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a4 4 0 0 0-4-4Z"/><path d="M8 22v-5h8v5"/><path d="M12 7v4"/><path d="M10 9h4"/></svg>
);

const PharmacyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.5 20.5 10 22l-4-2.5V9l4-2.5L10.5 8"/><path d="M13.5 3.5 14 2l4 2.5V15l-4 2.5-3.5-1.5"/><path d="m14 2-4 2.5V15l4 2.5V2"/><path d="M10 22v-6.5l-4-2.5"/><path d="M2 9.5 6 12"/><path d="M20 14.5 14 12"/><path d="M10 8l4-2.5"/><path d="M10 15.5l4-2.5"/></svg>
);

const LabIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v5h6V3"/><path d="M10 14.5a6 6 0 0 0-3.3 5H3"/><path d="M21 19.5a6 6 0 0 0-3.3-5"/><path d="M14 19.5a6 6 0 0 0-3.3-5"/><path d="M12 8v6"/><circle cx="12" cy="17" r="3"/></svg>
);

const ProductIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
);

const AmbulanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 10h4"/><path d="M12 8v4"/><rect width="16" height="12" x="4" y="5" rx="2"/><path d="M2 9h2"/><path d="M20 9h2"/><path d="M15 17v2"/><path d="M9 17v2"/></svg>
);

const SettingsIcon = () => (
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
    className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 group relative overflow-hidden"
  >
    {/* Hover Background Effect */}
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${color}`}></div>
    
    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gray-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
    
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${color} text-white shadow-lg shadow-${color.replace('bg-', '')}/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
      {icon}
    </div>
    
    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{description}</p>
    
    <div className="mt-6 flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
      <span>Access Service</span>
      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
    </div>
  </div>
);

interface PatientHomeProps {
  user: User;
  onNavigate: (page: string) => void;
}

const PatientHome: React.FC<PatientHomeProps> = ({ user, onNavigate }) => {
  const modules = [
    { id: "doctor", title: "Doctor Appointment", description: "Browse specialists, book slots & manage consultations.", icon: <DoctorIcon />, color: "bg-blue-500" },
    { id: "nurse", title: "Nurse Appointment", description: "Home care, elderly support & professional nursing.", icon: <NurseIcon />, color: "bg-emerald-500" },
    { id: "pharmacy", title: "Pharmacy", description: "Order medicines & upload prescriptions.", icon: <PharmacyIcon />, color: "bg-purple-500" },
    { id: "lab", title: "Lab Tests", description: "Book diagnostics & view reports online.", icon: <LabIcon />, color: "bg-indigo-500" },
    { id: "products", title: "Drepto Store", description: "Healthcare devices & wellness products.", icon: <ProductIcon />, color: "bg-orange-500" },
    { id: "ambulance", title: "Ambulance", description: "Emergency 24/7 road & air ambulance.", icon: <AmbulanceIcon />, color: "bg-red-500" },
    { id: "profile", title: "My Profile", description: "Medical records, history & settings.", icon: <SettingsIcon />, color: "bg-gray-700" },
  ];

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="space-y-8 animate-fade-in-up pb-10">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 md:p-10 rounded-3xl shadow-2xl text-white overflow-hidden flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400 opacity-10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-blue-100 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                System Operational
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
                {getTimeBasedGreeting()}, <span className="text-blue-200">{user.firstName}!</span>
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed opacity-90">
                Your health journey starts here. What would you like to do today?
            </p>
        </div>
        
        <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl text-center min-w-[140px]">
             <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold mb-1">Today</p>
             <p className="text-xl font-bold">{new Date().toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {[
             { label: 'Upcoming', value: '0', sub: 'Appointments', color: 'text-blue-600', bg: 'bg-blue-50' },
             { label: 'Pending', value: '0', sub: 'Lab Results', color: 'text-purple-600', bg: 'bg-purple-50' },
             { label: 'Active', value: '0', sub: 'Orders', color: 'text-orange-600', bg: 'bg-orange-50' },
             { label: 'Balance', value: '₹0.00', sub: 'Wallet', color: 'text-emerald-600', bg: 'bg-emerald-50' }
         ].map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                    <div className={`w-2 h-2 rounded-full ${stat.color.replace('text', 'bg')}`}></div>
                </div>
                <div className="mt-4">
                    <span className={`text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</span>
                    <span className="text-sm text-gray-400 block mt-1">{stat.sub}</span>
                </div>
            </div>
         ))}
      </div>

      {/* Services Grid */}
      <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-8 bg-primary rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-800">Health Services</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

export default PatientHome;
