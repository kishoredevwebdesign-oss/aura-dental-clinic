import React, { useState } from 'react';
import { Language } from './data/clinicData';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CostEstimator } from './components/CostEstimator';
import { DoctorsSection } from './components/DoctorsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [estimatorPresetId, setEstimatorPresetId] = useState<string | undefined>(undefined);
  const [prefilledBookingTreatment, setPrefilledBookingTreatment] = useState<string | undefined>(undefined);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquirePrice = (treatmentId: string) => {
    setEstimatorPresetId(treatmentId);
    scrollToSection('estimator');
  };

  const handleDirectBook = (treatmentName: string) => {
    setPrefilledBookingTreatment(treatmentName);
    scrollToSection('contact');
  };

  const handleBookAtEstimate = (details: { treatmentName: string; tierName: string; estimatedPrice: number }) => {
    const formatted = `${details.treatmentName} - ${details.tierName} (Est: ₹${details.estimatedPrice.toLocaleString('en-IN')})`;
    setPrefilledBookingTreatment(formatted);
    scrollToSection('contact');
  };

  const handleBookWithDoctor = (doctorName: string) => {
    setPrefilledBookingTreatment(`Consultation with ${doctorName}`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 pb-16 md:pb-0">
      {/* 1. Top Announcement Bar */}
      <TopBar language={language} onLanguageToggle={setLanguage} />

      {/* 2. Sticky Header */}
      <Navbar
        language={language}
        onBookClick={() => scrollToSection('contact')}
      />

      {/* 3. Hero Section */}
      <Hero
        language={language}
        onBookClick={() => scrollToSection('contact')}
        onEstimatorClick={() => scrollToSection('estimator')}
      />

      {/* 4. Services Grid / Carousel */}
      <ServicesSection
        language={language}
        onEnquirePrice={handleEnquirePrice}
        onDirectBook={handleDirectBook}
      />

      {/* 5. Interactive Cost Estimator */}
      <CostEstimator
        language={language}
        presetTreatmentId={estimatorPresetId}
        onBookAtEstimate={handleBookAtEstimate}
      />

      {/* Verified Doctors Section */}
      <DoctorsSection
        language={language}
        onBookWithDoctor={handleBookWithDoctor}
      />

      {/* Patient Reviews Section */}
      <ReviewsSection language={language} />

      {/* 6. Lead Generation Booking Form */}
      <BookingSection
        language={language}
        prefilledTreatment={prefilledBookingTreatment}
      />

      {/* 7. Footer with Google Maps embed placeholder, clinic address, and registration */}
      <Footer language={language} />

      {/* Mobile Sticky Quick-Action Bar */}
      <MobileBottomBar
        language={language}
        onBookClick={() => scrollToSection('contact')}
      />
    </div>
  );
}
