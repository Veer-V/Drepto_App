
import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    home: homeRef,
    product: productRef,
    about: aboutRef,
    contact: contactRef,
  };

  return (
    <div className="relative">
      <Navbar sectionRefs={sectionRefs} />
      <main>
        <div ref={homeRef}><HeroSection /></div>
        <div ref={productRef}><ProductSection /></div>
        <div ref={aboutRef}><AboutSection /></div>
        <div ref={contactRef}><ContactSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
