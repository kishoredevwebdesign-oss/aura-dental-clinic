import React, { useState } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';
import { CLINIC_CONTACT, Language } from '../data/clinicData';

interface NavbarProps {
  language: Language;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isTa = language === 'ta';

  const navLinks = [
    { href: '#treatments', label: isTa ? 'சிகிச்சைகள்' : 'Treatments' },
    { href: '#estimator', label: isTa ? 'கட்டண கணக்கீடு' : 'Cost Estimator' },
    { href: '#dentists', label: isTa ? 'மருத்துவர்கள்' : 'Dentists' },
    { href: '#reviews', label: isTa ? 'மதிப்புரைகள்' : 'Reviews' },
    { href: '#contact', label: isTa ? 'தொடர்புக்கு' : 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element with clean mark) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0 focus-visible:outline-teal-600 focus-visible:outline-2 rounded-lg py-1 px-1"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-sm group-hover:bg-teal-700 transition-colors">
              <Sparkles className="w-5 h-5 text-teal-100" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                Aura Dental
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-teal-700 -mt-0.5">
                Anna Nagar, Chennai
              </span>
            </div>
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 py-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-teal-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_CONTACT.phoneTel}`}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-teal-700 transition-colors px-3 py-2.5 rounded-lg border border-slate-200 hover:border-teal-300 min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>{CLINIC_CONTACT.landlineDisplay}</span>
            </a>

            <button
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 active:bg-teal-800 rounded-lg shadow-sm transition-colors whitespace-nowrap min-h-[48px] focus-visible:outline-teal-600 focus-visible:outline-2"
            >
              {isTa ? 'நேரடி முன்பதிவு' : 'Call Clinic / Book'}
            </button>
          </div>

          {/* Mobile Hamburger Button (>=48px touch target) */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${CLINIC_CONTACT.phoneTel}`}
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-50 text-teal-700 border border-teal-200 active:bg-teal-100"
              aria-label="Call clinic directly"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-12 h-12 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-teal-700 hover:bg-teal-50/60 px-3 py-3 rounded-lg min-h-[48px] flex items-center transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full min-h-[48px] flex items-center justify-center font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg text-sm transition-colors shadow-sm"
            >
              {isTa ? 'ஆன்லைன் முன்பதிவு செய்க' : 'Book Dental Consultation'}
            </button>

            <a
              href={`tel:${CLINIC_CONTACT.phoneTel}`}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 font-medium text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>{isTa ? 'கிளினிக் அழைக்க: ' : 'Call Hotline: '} {CLINIC_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
