
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
               <div className="relative h-10 w-10 flex items-center justify-center bg-white/10 rounded-lg p-1">
                   <svg className="w-full h-full text-white" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M20 4V36M4 20H36" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                   </svg>
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-3xl font-bold text-white tracking-tighter leading-none">Drepto</span>
                    <span className="text-[10px] font-bold text-teal-200 tracking-[0.2em] uppercase leading-none mt-0.5">Biodevices Pvt.Ltd.</span>
                </div>
            </div>
            <p className="text-teal-100 opacity-80 max-w-xs">Modern telemedicine platform connecting patients with top healthcare professionals.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
              <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-white mb-1">Services</h4>
                  <a href="#" className="text-teal-100 hover:text-white hover:underline">Consultations</a>
                  <a href="#" className="text-teal-100 hover:text-white hover:underline">Pharmacy</a>
                  <a href="#" className="text-teal-100 hover:text-white hover:underline">Lab Tests</a>
              </div>
              <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-white mb-1">Company</h4>
                  <a href="#" className="text-teal-100 hover:text-white hover:underline">About Us</a>
                  <a href="#" className="text-teal-100 hover:text-white hover:underline">Contact</a>
                  <a href="#" className="text-teal-100 hover:text-white hover:underline">Careers</a>
              </div>
              <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-white mb-1">Legal</h4>
                  <a href="#" className="text-teal-100 hover:text-white hover:underline">Privacy Policy</a>
                  <a href="#" className="text-teal-100 hover:text-white hover:underline">Terms of Use</a>
              </div>
          </div>
        </div>
        <div className="border-t border-teal-700/50 mt-10 pt-6 text-center text-teal-200 text-xs">
          &copy; {new Date().getFullYear()} Drepto Biodevices Pvt.Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
