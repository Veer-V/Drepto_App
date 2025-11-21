

import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

const AuthPage: React.FC = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const navigate = useNavigate();

  const toggleView = () => setIsLoginView(!isLoginView);

  return (
    <div className="min-h-screen bg-light-blue flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -ml-20 -mb-20"></div>


      <div className="w-full max-w-md relative z-10">
        <div className="mb-4">
          <BackButton className="text-white hover:text-white/80" />
        </div>
        <div className="text-center mb-8 animate-fade-in-up flex flex-col items-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative h-12 w-12 flex items-center justify-center bg-white rounded-xl shadow-sm p-1">
              <svg className="w-full h-full text-primary" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4V36M4 20H36" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-4xl font-bold text-primary tracking-tighter leading-none">Drepto</span>
              <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase leading-none mt-0.5">Biodevices Pvt.Ltd.</span>
            </div>
          </div>
          <p className="text-gray-500 mt-2 font-medium">Quality Healthcare, Anytime, Anywhere.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-primary/5 p-8 transition-all duration-500 border border-gray-100">
          {isLoginView ? (
            <Login onToggleView={toggleView} />
          ) : (
            <Register onToggleView={toggleView} />
          )}
        </div>

        {/* Admin Login Shortcut */}
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate('/admin/login')}
            className="text-sm text-primary font-semibold hover:underline"
          >
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
