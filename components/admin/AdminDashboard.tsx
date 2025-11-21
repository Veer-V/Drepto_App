// @ts-nocheck
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MedicineCRUD from './MedicineCRUD';
import LabTestCRUD from './LabTestCRUD';
import { ADMIN_AUTH_KEY } from './adminData';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('medicines');

  const logout = () => {
    localStorage.removeItem(ADMIN_AUTH_KEY);
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Admin Dashboard</h1>
          <div className="flex items-center gap-3">
            <button onClick={() => setTab('medicines')} className={`px-3 py-1.5 rounded ${tab === 'medicines' ? 'bg-primary text-white' : 'border'}`}>Medicines</button>
            <button onClick={() => setTab('labtests')} className={`px-3 py-1.5 rounded ${tab === 'labtests' ? 'bg-primary text-white' : 'border'}`}>Lab Tests</button>
            <button onClick={logout} className="ml-4 text-red-600">Logout</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {tab === 'medicines' ? <MedicineCRUD /> : <LabTestCRUD />}
      </main>
    </div>
  );
};

export default AdminDashboard;
