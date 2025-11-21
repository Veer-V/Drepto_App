
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Medicines from '../components/medicines/Medicines';
import MedicineDetail from '../components/medicines/MedicineDetail';
import { Medicine } from '../types';
import { useLocation } from 'react-router-dom';
import MobileHeader from '../components/mobile/MobileHeader';

const MedicinesPage: React.FC = () => {
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);
  const location = useLocation();

  // Create dummy refs for Navbar since we are reusing it but not on Landing Page
  const dummyRefs = {
    home: { current: null },
    product: { current: null },
    about: { current: null },
    contact: { current: null },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedMedicine, location]);


  // ...

  const handleMobileBack = () => {
    if (selectedMedicine) {
      setSelectedMedicine(null);
    } else {
      window.history.back();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="md:hidden">
        <MobileHeader
          title={selectedMedicine ? "Details" : "Pharmacy"}
          showBack={true}
          onBack={handleMobileBack}
        />
      </div>
      <div className="hidden md:block">
        <Navbar sectionRefs={dummyRefs as any} />
      </div>
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-6">
          <BackButton />
        </div>
        {selectedMedicine ? (
          <MedicineDetail
            medicine={selectedMedicine}
            onBack={() => setSelectedMedicine(null)}
          />
        ) : (
          <Medicines onViewDetails={setSelectedMedicine} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MedicinesPage;
