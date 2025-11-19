
import React, { useState, useEffect, RefObject } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  sectionRefs: {
    [key: string]: RefObject<HTMLDivElement>;
  };
}

const Navbar: React.FC<NavbarProps> = ({ sectionRefs }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Home', ref: sectionRefs.home, path: '/' },
    { name: 'Medicines', path: '/medicines' },
    { name: 'Lab Tests', path: '/lab-tests' },
    { name: 'Features', ref: sectionRefs.product, path: '/' },
    { name: 'About Us', ref: sectionRefs.about, path: '/' },
    { name: 'Contact', ref: sectionRefs.contact, path: '/' },
  ];

  const handleNavigation = (link: typeof navLinks[0]) => {
    setIsMobileMenuOpen(false);
    if (link.path && link.path !== '/') {
        navigate(link.path);
        return;
    }

    if (!isHomePage) {
        navigate('/');
        // Optional: Logic to scroll after navigation could be added here using a context or global state
        return;
    }

    if (link.ref) {
        link.ref.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (link.name === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
             {/* 
                To use your uploaded image file, uncomment the img tag below and set the src to your image path.
                <img src="/path/to/your/logo.png" alt="Drepto Logo" className="h-12" />
             */}
             
             {/* Logo Simulation matching the provided image */}
             <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 flex items-center justify-center">
                   {/* Simulated Cross Logo Icon */}
                   <svg className="w-full h-full text-primary" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M20 4V36M4 20H36" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                       <path d="M10 30C10 30 15 35 20 30C25 25 30 30 30 30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                   </svg>
                </div>
                <div className="flex flex-col justify-center">
                    <span className="text-3xl font-bold text-primary tracking-tighter leading-none">Drepto</span>
                    <span className="text-[10px] font-bold text-gray-600 tracking-[0.2em] uppercase leading-none mt-0.5">Biodevices Pvt.Ltd.</span>
                </div>
             </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavigation(link)} 
                className={`text-gray-600 hover:text-primary transition-colors font-medium ${location.pathname === link.path && link.path !== '/' ? 'text-primary font-bold' : ''}`}
              >
                {link.name}
              </button>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => navigate('/auth')} className="text-primary font-semibold hover:opacity-80 transition-opacity">
              Sign In
            </button>
            <button onClick={() => navigate('/auth')} className="bg-primary text-white px-5 py-2.5 rounded-full font-bold hover:bg-teal-700 transition-colors shadow-md">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-gray-600" onClick={() => setIsMobileMenuOpen(true)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 animate-fade-in-up">
              <button className="absolute top-6 right-6 text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              {navLinks.map((link) => (
                  <button 
                    key={link.name} 
                    onClick={() => handleNavigation(link)} 
                    className="text-2xl font-bold text-gray-800 hover:text-primary"
                  >
                      {link.name}
                  </button>
              ))}
              <div className="flex flex-col space-y-4 mt-8">
                  <button onClick={() => { navigate('/auth'); setIsMobileMenuOpen(false); }} className="text-primary font-bold text-xl">Sign In</button>
                  <button onClick={() => { navigate('/auth'); setIsMobileMenuOpen(false); }} className="bg-primary text-white px-8 py-3 rounded-full font-bold text-xl shadow-lg">Sign Up</button>
              </div>
          </div>
      )}
    </>
  );
};

export default Navbar;
