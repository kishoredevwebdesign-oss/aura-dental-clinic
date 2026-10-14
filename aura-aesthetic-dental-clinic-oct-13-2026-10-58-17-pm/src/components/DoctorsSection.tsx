import React from 'react';
import { Award, GraduationCap, ShieldCheck, Calendar } from 'lucide-react';
import { DOCTORS, Language } from '../data/clinicData';

interface DoctorsSectionProps {
  language: Language;
  onBookWithDoctor: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ language, onBookWithDoctor }) => {
  const isTa = language === 'ta';

  return (
    <section id="dentists" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
            {isTa ? 'எங்கள் சிறப்பு மருத்துவர்கள்' : 'Board-Certified Dental Specialists'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {isTa ? '10+ ஆண்டுகள் அனுபவம் வாய்ந்த முதுநிலை மருத்துவர்கள்' : 'Meet Our Senior MDS Dental Specialists'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {isTa
              ? 'அனைத்து சிகிச்சைகளும் சென்னை அரசு பல் மருத்துவக் கல்லூரி மற்றும் சவீதாவில் பயிற்சி பெற்ற முதுநிலை நிபுணர்களால் நேரடியாக வழங்கப்படுகின்றன.'
              : 'Our chief clinicians hold master degrees in specialized dentistry and have performed over 14,000 successful restorative and aesthetic procedures in Tamil Nadu.'}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 flex flex-col justify-between hover:border-teal-400 transition-all shadow-xs"
            >
              <div>
                {/* Doctor Avatar / Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-teal-700 text-white font-bold text-lg flex items-center justify-center shadow-xs">
                      {doc.name.split(' ')[1]?.[0] || 'D'}S
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {isTa ? doc.nameTa : doc.name}
                      </h3>
                      <p className="text-xs font-semibold text-teal-700">
                        {isTa ? doc.specialtyTa : doc.specialty}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-900 block tabular-nums">
                      {doc.experienceYears}+ Yrs
                    </span>
                    <span className="text-[11px] text-slate-500">Clinical Exp</span>
                  </div>
                </div>

                {/* Qualification & Registration */}
                <div className="space-y-2 py-3 border-y border-slate-200/80 text-xs text-slate-600 my-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{doc.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{doc.almaMater}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Tamil Nadu Dental Council Reg: {doc.regNumber}</span>
                  </div>
                </div>

                {/* Clinical Bio */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isTa ? doc.bioTa : doc.bio}
                </p>
              </div>

              {/* Consultation trigger */}
              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <button
                  type="button"
                  onClick={() => onBookWithDoctor(isTa ? doc.nameTa : doc.name)}
                  className="w-full min-h-[48px] py-2.5 px-4 text-xs font-semibold text-slate-900 bg-white hover:bg-teal-50 hover:text-teal-900 active:bg-teal-100 border border-slate-300 hover:border-teal-400 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  <span>{isTa ? 'இவர்களிடம் முன்பதிவு செய்ய' : `Consult with ${doc.name.split(' ')[1]}`}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
