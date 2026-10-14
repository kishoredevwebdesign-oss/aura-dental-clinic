import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_CONTACT, Language } from '../data/clinicData';

interface MobileBottomBarProps {
  language: Language;
  onBookClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ language, onBookClick }) => {
  const isTa = language === 'ta';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        
        {/* Direct Call Clinic */}
        <a
          href={`tel:${CLINIC_CONTACT.phoneTel}`}
          className="min-h-[48px] flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-slate-800 bg-slate-100 active:bg-slate-200 border border-slate-200 rounded-xl transition-colors"
        >
          <Phone className="w-4 h-4 text-teal-600" />
          <span>{isTa ? 'அழைக்க' : 'Call Clinic'}</span>
        </a>

        {/* Instant Book CTA */}
        <button
          type="button"
          onClick={onBookClick}
          className="min-h-[48px] flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-white bg-slate-900 active:bg-teal-800 rounded-xl shadow-xs transition-colors"
        >
          <Calendar className="w-4 h-4 text-teal-400" />
          <span>{isTa ? 'முன்பதிவு செய்ய' : 'Book Visit'}</span>
        </button>

      </div>
    </div>
  );
};
