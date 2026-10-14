import React, { useState } from 'react';
import { Zap, Sparkles, ShieldCheck, Smile, Sun, HeartHandshake, ArrowRight, Check } from 'lucide-react';
import { TREATMENTS, TreatmentItem, Language } from '../data/clinicData';

interface ServicesSectionProps {
  language: Language;
  onEnquirePrice: (treatmentId: string) => void;
  onDirectBook: (treatmentName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  language,
  onEnquirePrice,
  onDirectBook,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'restorative' | 'cosmetic'>('all');
  const isTa = language === 'ta';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-teal-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-teal-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-teal-600" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-teal-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-teal-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal-600" />;
    }
  };

  const filteredTreatments = TREATMENTS.filter((t) => {
    if (activeFilter === 'restorative') {
      return ['laser-rct', 'dental-implants', 'pediatric-preventive'].includes(t.id);
    }
    if (activeFilter === 'cosmetic') {
      return ['clear-aligners', 'smile-makeover', 'laser-whitening'].includes(t.id);
    }
    return true;
  });

  return (
    <section id="treatments" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
              {isTa ? 'அதிநவீன பல் சிகிச்சைகள்' : 'Specialized Clinical Services'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {isTa ? 'உங்கள் தேவைக்கேற்ற துல்லியமான சிகிச்சைகள்' : 'Advanced Dental & Smile Treatments'}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              {isTa
                ? 'அனைத்து சிகிச்சைகளும் ஐரோப்பிய தர கிருமி நீக்கம் மற்றும் கம்ப்யூட்டர் வழிகாட்டப்பட்ட வலியற்ற முறைகளில் செய்யப்படுகின்றன.'
                : 'Every procedure is executed with painless anesthesia, Zeiss micro-magnification, and sterile international clinical protocols.'}
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start md:self-auto border border-slate-200/80">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap min-h-[40px] ${
                activeFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isTa ? 'அனைத்தும்' : 'All Treatments'}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('restorative')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap min-h-[40px] ${
                activeFilter === 'restorative'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isTa ? 'ரூட் கெனால் & இம்ப்ளான்ட்' : 'Restorative Care'}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('cosmetic')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap min-h-[40px] ${
                activeFilter === 'cosmetic'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isTa ? 'அழகியல் & அலைனர்ஸ்' : 'Smile & Cosmetic'}
            </button>
          </div>
        </div>

        {/* Services Grid (6 cards, >=4 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTreatments.map((treatment: TreatmentItem) => (
            <div
              key={treatment.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-teal-400 hover:shadow-md transition-all duration-200 group"
            >
              {/* Card Top: Icon & Category */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    {getIcon(treatment.icon)}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-slate-500 block">
                      {isTa ? 'ஆரம்ப விலை' : 'Starting From'}
                    </span>
                    <span className="text-sm font-bold text-slate-900 tabular-nums">
                      ₹{treatment.startingPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-medium text-teal-700 mb-1">
                  {treatment.category}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-teal-800 transition-colors">
                  {isTa ? treatment.nameTa : treatment.name}
                </h3>

                {/* 2-line concise description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                  {isTa ? treatment.descriptionTa : treatment.description}
                </p>

                {/* Key clinical highlights */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-5">
                  {(isTa ? treatment.highlightsTa : treatment.highlights).slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Metadata & Enquire Price Button */}
              <div className="pt-3 border-t border-slate-100 mt-2">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span>{isTa ? treatment.turnaroundTa : treatment.turnaround}</span>
                  <span aria-hidden="true">·</span>
                  <span>{isTa ? treatment.warrantyTa : treatment.warranty}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onEnquirePrice(treatment.id)}
                    className="min-h-[48px] px-3 py-2 text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 active:bg-teal-200 border border-teal-200 rounded-xl transition-colors flex items-center justify-center gap-1 focus-visible:outline-teal-600"
                  >
                    <span>{isTa ? 'கட்டணம் பார்' : 'Enquire Price'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onDirectBook(isTa ? treatment.nameTa : treatment.name)}
                    className="min-h-[48px] px-3 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-teal-700 active:bg-teal-800 rounded-xl transition-colors flex items-center justify-center focus-visible:outline-teal-600"
                  >
                    {isTa ? 'முன்பதிவு செய்' : 'Book Consult'}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
