import React, { useState, useEffect } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Clock, Calendar, CreditCard, Sparkles } from 'lucide-react';
import { ESTIMATOR_DATA, Language } from '../data/clinicData';

interface CostEstimatorProps {
  language: Language;
  presetTreatmentId?: string;
  onBookAtEstimate: (details: { treatmentName: string; tierName: string; estimatedPrice: number }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  language,
  presetTreatmentId,
  onBookAtEstimate,
}) => {
  const isTa = language === 'ta';

  const [selectedTreatmentIndex, setSelectedTreatmentIndex] = useState(0);
  const [selectedTierIndex, setSelectedTierIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Sync with presetTreatmentId if provided
  useEffect(() => {
    if (presetTreatmentId) {
      const idx = ESTIMATOR_DATA.findIndex((t) => t.id === presetTreatmentId);
      if (idx !== -1) {
        setSelectedTreatmentIndex(idx);
        setSelectedTierIndex(0);
        setQuantity(1);
      }
    }
  }, [presetTreatmentId]);

  const currentTreatment = ESTIMATOR_DATA[selectedTreatmentIndex] || ESTIMATOR_DATA[0];
  const currentTier = currentTreatment.tiers[selectedTierIndex] || currentTreatment.tiers[0];

  // Supports multiple teeth calculation for veneers, implants, or single units
  const allowsMultiple = ['laser-rct', 'dental-implants', 'smile-makeover'].includes(currentTreatment.id);
  const effectiveQty = allowsMultiple ? quantity : 1;
  const totalPrice = currentTier.price * effectiveQty;

  const handleBook = () => {
    onBookAtEstimate({
      treatmentName: isTa ? currentTreatment.nameTa : currentTreatment.name,
      tierName: `${isTa ? currentTier.nameTa : currentTier.name} (${effectiveQty} ${isTa ? 'பல்/அலகு' : 'unit(s)'})`,
      estimatedPrice: totalPrice,
    });
  };

  return (
    <section id="estimator" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            <Calculator className="w-3.5 h-3.5 text-teal-600" />
            <span>{isTa ? 'வெளிப்படையான விலை கணிப்பான்' : '100% Transparent Price Guide'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {isTa ? 'உங்கள் சிகிச்சைக்கான கட்டணத்தை கணக்கிடுங்கள்' : 'Interactive Dental Cost & Time Estimator'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {isTa
              ? 'மறைமுக கட்டணங்கள் இல்லை. உங்கள் சிகிச்சை வகையை தேர்ந்தெடுத்து கட்டணம், காலம் மற்றும் தவணைத் தொகையை உடனடியாக தெரிந்து கொள்ளுங்கள்.'
              : 'Select your desired treatment to review estimated costs, duration, warranty coverage, and 0% EMI monthly installments in Anna Nagar, Chennai.'}
          </p>
        </div>

        {/* Estimator Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
          
          {/* Step 1: Select Treatment Radio / Horizontal Tabs */}
          <div className="p-6 sm:p-8 border-b border-slate-200 bg-slate-50/70">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              1. {isTa ? 'சிகிச்சை வகையைத் தேர்ந்தெடுக்கவும்' : 'Select Treatment Category'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {ESTIMATOR_DATA.map((item, idx) => {
                const isSelected = selectedTreatmentIndex === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedTreatmentIndex(idx);
                      setSelectedTierIndex(0);
                      setQuantity(1);
                    }}
                    className={`p-3.5 rounded-xl text-left border transition-all text-xs font-semibold min-h-[58px] flex flex-col justify-center ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-teal-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className="leading-snug">{isTa ? item.nameTa : item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2 & 3: Treatment Options & Live Calculation Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Grade/Tier Selection & Quantity Slider */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  2. {isTa ? 'தரம் மற்றும் பிராண்ட் தேர்வு' : 'Choose Treatment Specification & Grade'}
                </label>
                <div className="space-y-2.5">
                  {currentTreatment.tiers.map((tier, idx) => {
                    const isSelected = selectedTierIndex === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedTierIndex(idx)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-teal-50/70 border-teal-500 ring-1 ring-teal-500'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-3" />}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900">
                              {isTa ? tier.nameTa : tier.name}
                            </div>
                            <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                              <span>{tier.duration}</span>
                              <span aria-hidden="true">·</span>
                              <span>{tier.sessions}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-sm font-bold text-slate-900 tabular-nums">
                            ₹{tier.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-[11px] block text-slate-500">
                            {allowsMultiple ? (isTa ? 'ஒரு பல்லுக்கு' : '/ unit') : (isTa ? 'முழு சிகிச்சை' : 'total')}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Optional Quantity Counter if applicable */}
              {allowsMultiple && (
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      3. {isTa ? 'பற்களின் எண்ணிக்கை' : 'Number of Units / Teeth'}
                    </label>
                    <span className="text-sm font-bold text-teal-800 tabular-nums">
                      {quantity} {quantity === 1 ? 'Tooth' : 'Teeth'}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="6"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                    />
                    <div className="flex items-center gap-1.5 shrink-0">
                      {[1, 2, 4, 6].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setQuantity(num)}
                          className={`w-9 h-9 rounded-lg text-xs font-semibold border transition-colors ${
                            quantity === num
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* What is Included Notice */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1.5">
                <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  <span>{isTa ? 'இந்த மதிப்பீட்டில் சேர்க்கப்பட்டுள்ளவை:' : 'Included at Zero Extra Charge:'}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-500">
                  <div>✓ Pre-procedure Digital OPG X-Ray</div>
                  <div>✓ Computerized Anesthesia Wand</div>
                  <div>✓ 1-Year Follow-up Checkups</div>
                  <div>✓ 0% Interest EMI with Bajaj / HDFC</div>
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Price Summary & Instant CTA */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between">
              
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-teal-300 mb-1">
                  {isTa ? 'மதிப்பிடப்பட்ட கட்டணம்' : 'Estimated Investment'}
                </div>
                
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums my-2">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </div>

                <div className="text-xs text-slate-300 pb-5 border-b border-slate-800">
                  {isTa
                    ? 'வரி மற்றும் ஆரம்ப ஆலோசனைக் கட்டணம் உட்பட'
                    : 'Transparent clinic rate with all materials included'}
                </div>

                {/* Turnaround & Warranty Strip */}
                <div className="py-5 space-y-3 border-b border-slate-800 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-teal-400" />
                      <span>{isTa ? 'கால அளவு:' : 'Turnaround Time:'}</span>
                    </span>
                    <span className="font-semibold text-white">{currentTier.duration}</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-teal-400" />
                      <span>{isTa ? 'அமர்வுகளின் எண்ணிக்கை:' : 'Clinic Visits:'}</span>
                    </span>
                    <span className="font-semibold text-white">{currentTier.sessions}</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-teal-400" />
                      <span>{isTa ? 'வாரண்டி:' : 'Material Warranty:'}</span>
                    </span>
                    <span className="font-semibold text-teal-300">10-Year to Lifetime</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <CreditCard className="w-4 h-4 text-teal-400" />
                      <span>{isTa ? '0% EMI தவணை:' : 'Zero-Cost EMI:'}</span>
                    </span>
                    <span className="font-semibold text-white">{currentTier.emi}</span>
                  </div>
                </div>

                <div className="mt-4 text-[11px] text-slate-400 leading-relaxed">
                  {isTa
                    ? '* மருத்துவ பரிசோதனை மற்றும் பற்களின் நிலையைப் பொறுத்து இறுதி கட்டணம் துல்லியமாக உறுதி செய்யப்படும்.'
                    : '* Final treatment plan confirmed after clinical intraoral examination and digital X-ray.'}
                </div>
              </div>

              {/* Book at This Estimate CTA */}
              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={handleBook}
                  className="w-full min-h-[50px] px-6 py-3.5 text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 active:bg-teal-500 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 focus-visible:outline-white"
                >
                  <span>{isTa ? 'இந்த கட்டணத்தில் பதிவு செய்ய' : 'Book at this Estimate'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center text-[11px] text-slate-400 mt-2">
                  {isTa ? 'முன்பணம் செலுத்த தேவையில்லை' : 'Zero advance payment required online'}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
