
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-light-blue pt-24 md:pt-32 pb-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-dark-blue leading-tight">
              Quality Healthcare, <span className="text-primary">Anytime, Anywhere.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Connect with certified doctors and manage your health with ease. Our platform provides secure, confidential, and convenient virtual consultations.
            </p>
          </div>
          <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => navigate('/auth')}
              className="bg-primary text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-lg"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 relative flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <img src="\public\images\aboutus.jpg" alt="Telemedicine Dashboard" className="rounded-2xl shadow-2xl max-w-4xl w-full object-cover h-64 md:h-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
