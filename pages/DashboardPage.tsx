import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from '../types';
import PatientDashboard from '../components/dashboards/PatientDashboard';
import DoctorDashboard from '../components/dashboards/DoctorDashboard';
import NurseDashboard from '../components/dashboards/NurseDashboard';
import AIAssistant from '../components/AIAssistant';

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case UserRole.PATIENT:
        return <PatientDashboard user={user} />;
      case UserRole.DOCTOR:
        return <DoctorDashboard user={user} />;
      case UserRole.NURSE:
        return <NurseDashboard user={user} />;
      default:
        return <p>Invalid user role.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
       <header className="bg-white shadow-sm">
         <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            <span className="text-primary">Drepto</span> Dashboard
          </h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderDashboard()}
      </main>
      <AIAssistant />
    </div>
  );
};

export default DashboardPage;