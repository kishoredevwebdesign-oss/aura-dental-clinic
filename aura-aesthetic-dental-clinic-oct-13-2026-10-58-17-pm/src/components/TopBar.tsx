import React from 'react';
import { Phone, Clock, MapPin, Globe } from 'lucide-react';
import { CLINIC_CONTACT, Language } from '../data/clinicData';

interface TopBarProps {
  language: Language;
  onLanguageToggle: (lang: Language) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ language, onLanguageToggle }) => {
  const isTa = language === 'ta';

  return (
    <div className="bg-slate-900 text-slate-200 text-xs border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
          
          {/* Location & Hours */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-slate-300">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Anna Nagar West, Chennai</span>
            </span>
            <span className="hidden md:inline text-slate-600">·</span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>{isTa ? CLINIC_CONTACT.workingHoursWeekdayTa : CLINIC_CONTACT.workingHoursWeekday}</span>
            </span>
          </div>

          {/* Emergency Hotline & Language Toggle */}
          <div className="flex items-center justify-center sm:justify-end gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${CLINIC_CONTACT.phoneTel}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-teal-300 transition-colors whitespace-nowrap py-1 px-2 rounded hover:bg-slate-800/80"
              title="Direct Clinic Dental Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span className="font-medium text-slate-100">{CLINIC_CONTACT.phoneDisplay}</span>
            </a>

            <div className="h-3 w-px bg-slate-700 hidden sm:block" />

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-800/90 rounded-md p-0.5 border border-slate-700/80">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" />
              <button
                type="button"
                onClick={() => onLanguageToggle('en')}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap min-h-[30px] flex items-center ${
                  language === 'en'
                    ? 'bg-teal-500 text-slate-950 font-semibold shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                English
              </button>
              <button
                type="button"
                onClick={() => onLanguageToggle('ta')}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap min-h-[30px] flex items-center ${
                  language === 'ta'
                    ? 'bg-teal-500 text-slate-950 font-semibold shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                aria-label="தமிழுக்கு மாறவும்"
              >
                தமிழ்
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
