import React from 'react';
import { ArrowRight, Star, ShieldCheck, CheckCircle2, Calculator, Sparkles, Activity, Award } from 'lucide-react';
import { CLINIC_FEATURES, Language } from '../data/clinicData';

interface HeroProps {
  language: Language;
  onBookClick: () => void;
  onEstimatorClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onBookClick, onEstimatorClick }) => {
  const isTa = language === 'ta';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-slate-200/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition, Trust & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Unboxed Location & Accreditation Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-4">
              <span>Anna Nagar West, Chennai</span>
              <span aria-hidden="true" className="text-teal-400">·</span>
              <span>NABH Pre-Accredited Clinic</span>
              <span aria-hidden="true" className="text-teal-400">·</span>
              <span>IDA Certified Specialists</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.15] mb-5">
              {isTa ? (
                <>
                  சென்னையில் <span className="text-teal-700 underline decoration-teal-300 decoration-wavy underline-offset-6">வலியற்ற</span> அதிநவீன பல் & அழகியல் சிகிச்சை
                </>
              ) : (
                <>
                  Painless Dental Treatments in <span className="text-teal-700 underline decoration-teal-300 decoration-wavy underline-offset-6">Chennai</span>
                </>
              )}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl">
              {isTa
                ? 'அண்ணா நகரில் 14 வருட அனுபவம் வாய்ந்த முதுநிலை பல் மருத்துவர்களால் வழங்கப்படும் அதிநவீன லேசர் ரூட் கெனால், கிளியர் அலைனர்ஸ் மற்றும் சினிமா புன்னகை சீரமைப்பு சிகிச்சைகள். ஊசி மற்றும் வலி இல்லாத கம்ப்யூட்டர் தொழில்நுட்பம்.'
                : 'Experience zero-anxiety dentistry in Anna Nagar. From computerized single-sitting laser root canals to invisible clear aligners and smile makeovers—delivered by premier MDS specialists in a sterile, calming wellness suite.'}
            </p>

            {/* Unboxed Social Proof Metrics Strip */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-700 mb-8 py-2 border-y border-slate-200/80 w-full sm:w-auto">
              <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>4.9 / 5.0</span>
              </div>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="font-medium text-slate-600">850+ Google Reviews</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="font-semibold text-teal-800">14,500+ Happy Smiles</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600">0% Interest EMI</span>
            </div>

            {/* High Contrast Primary & Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-slate-900 hover:bg-teal-700 active:bg-teal-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-150 min-h-[48px] focus-visible:outline-teal-600 focus-visible:outline-2"
              >
                <span>{isTa ? 'உடனடி அப்பாயின்ட்மென்ட்' : 'Book Instant Consultation'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onEstimatorClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 hover:border-teal-400 rounded-xl shadow-xs transition-colors min-h-[48px] focus-visible:outline-teal-600 focus-visible:outline-2"
              >
                <Calculator className="w-4 h-4 text-teal-600" />
                <span>{isTa ? 'கட்டணம் கணக்கிட' : 'Calculate Treatment Cost'}</span>
              </button>
            </div>

            {/* Quick trust reassurance */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{isTa ? 'இலவச ஆரம்ப டிஜிட்டல் ஆலோசனை · அதே நாளில் சந்திப்பு கிடைக்கும்' : 'Includes Digital X-Ray Checkup · Same-Day Appointments Available'}</span>
            </div>

          </div>

          {/* Right Column: Visual Medical Wellness Studio Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-lg shadow-slate-200/50">
              
              {/* Studio Showcase Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">Aura Clinical Suite</h2>
                    <p className="text-xs text-slate-500">Anna Nagar 2nd Avenue, Chennai</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
                  <Activity className="w-3.5 h-3.5 text-teal-600" />
                  <span>Open Today</span>
                </div>
              </div>

              {/* Graphic Medical Studio Mockup Container */}
              <div className="my-5 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-teal-300">
                      Standard of Excellence
                    </span>
                    <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-white/90">
                      NABH Quality Audit: 100%
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {isTa ? 'வலி இல்லாத நவீன சிகிச்சை அனுபவம்' : 'Zero-Anxiety Precision Dentistry'}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Equipped with Zeiss micro-optics, painless computerized anesthesia wands, and German Class-B autoclaves for uncompromising patient safety.
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-white/15 text-xs">
                    <div className="bg-white/10 rounded-lg p-2.5 backdrop-blur-xs">
                      <div className="text-[11px] text-slate-300">Avg. RCT Duration</div>
                      <div className="text-sm font-bold text-teal-300 tabular-nums">45 Mins (Single Sitting)</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2.5 backdrop-blur-xs">
                      <div className="text-[11px] text-slate-300">Smile Scan Time</div>
                      <div className="text-sm font-bold text-teal-300 tabular-nums">5 Mins (3D iTero)</div>
                    </div>
                  </div>
                </div>

                {/* Subtle graphic wave background */}
                <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" />
              </div>

              {/* Doctors on Duty Quick Preview */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Lead MDS Dental Specialists
                </div>
                
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-700 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      KS
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Dr. K. Soundarya MDS</div>
                      <div className="text-[11px] text-slate-500">Chief Aesthetic Dentist & Endodontist (14 Yrs Exp)</div>
                    </div>
                  </div>
                  <Award className="w-4 h-4 text-teal-600 shrink-0" />
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      RV
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Dr. R. Vignesh MDS</div>
                      <div className="text-[11px] text-slate-500">Orthodontist & Clear Aligner Specialist (11 Yrs Exp)</div>
                    </div>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                </div>
              </div>

              {/* Bottom Quick Action */}
              <button
                type="button"
                onClick={onBookClick}
                className="mt-4 w-full py-2.5 text-xs font-semibold text-teal-800 hover:text-teal-950 bg-teal-50/80 hover:bg-teal-100/80 rounded-lg text-center transition-colors min-h-[44px] flex items-center justify-center"
              >
                {isTa ? 'இன்றைய நேரடி ஆலோசனைக்கு பதிவு செய் →' : 'Check Today’s Available Slots →'}
              </button>

            </div>
          </div>

        </div>

        {/* Full-width 4-Column Feature Strip Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLINIC_FEATURES.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-teal-300 transition-colors"
              >
                <div className="text-xs font-mono text-teal-600 font-semibold mb-1">
                  0{idx + 1}. {isTa ? 'தொழில்நுட்பம்' : 'Pillar'}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {isTa ? feat.titleTa : feat.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isTa ? feat.descTa : feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
