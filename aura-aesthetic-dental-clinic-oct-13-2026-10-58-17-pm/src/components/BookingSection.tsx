import React, { useState, useEffect } from 'react';
import { Send, Phone, Calendar, Clock, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { CLINIC_CONTACT, TREATMENTS, Language } from '../data/clinicData';

interface BookingSectionProps {
  language: Language;
  prefilledTreatment?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  language,
  prefilledTreatment,
}) => {
  const isTa = language === 'ta';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('Laser Root Canal Therapy');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM - 1:00 PM)');
  const [concern, setConcern] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    treatment: string;
    date: string;
    timeSlot: string;
  } | null>(null);

  // Sync prefilledTreatment if supplied
  useEffect(() => {
    if (prefilledTreatment) {
      setTreatment(prefilledTreatment);
    }
  }, [prefilledTreatment]);

  // Set min date to today formatted as YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = isTa ? 'தயவுசெய்து சரியான பெயரை உள்ளிடவும்' : 'Please enter your full name';
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length !== 10 || !/^[6-9]/.test(cleanPhone)) {
      newErrors.phone = isTa
        ? 'சரியான 10 இலக்க இந்திய மொபைல் எண்ணை உள்ளிடவும்'
        : 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!date) {
      newErrors.date = isTa ? 'தயவுசெய்து தேதியைத் தேர்ந்தெடுக்கவும்' : 'Please select your preferred date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const cleanPhone = phone.replace(/\D/g, '');
    
    // Construct WhatsApp message
    const message = `*Dental Appointment Request - Aura Clinic (Anna Nagar, Chennai)*%0A%0A` +
      `*Patient Name:* ${encodeURIComponent(name.trim())}%0A` +
      `*Phone Number:* +91 ${cleanPhone}%0A` +
      `*Requested Treatment:* ${encodeURIComponent(treatment)}%0A` +
      `*Preferred Date:* ${encodeURIComponent(date)}%0A` +
      `*Preferred Slot:* ${encodeURIComponent(timeSlot)}%0A` +
      (concern.trim() ? `*Dental Concerns/Notes:* ${encodeURIComponent(concern.trim())}%0A%0A` : '%0A') +
      `_Please confirm availability for this slot. Thank you!_`;

    const whatsappUrl = `https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Show on-screen confirmation
    setSubmittedData({
      name: name.trim(),
      phone: cleanPhone,
      treatment,
      date,
      timeSlot,
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Column: Direct Call Reassurance & Clinic Value Props */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              {isTa ? 'எளிதான முன்பதிவு' : 'Instant Lead Booking'}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
              {isTa
                ? 'உங்கள் பல் மருத்துவ ஆலோசனையை இப்போதே பதிவு செய்யுங்கள்'
                : 'Book Your Consultation in 60 Seconds'}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isTa
                ? 'எங்கள் வாட்ஸ்அப் அல்லது தொலைபேசி மூலம் உடனடியாக முன்பதிவு செய்யுங்கள். எந்த முன்பணமும் தேவையில்லை; மருத்துவர் உங்களை பரிசோதித்து தெளிவான வழிகாட்டல் வழங்குவார்.'
                : 'Submit the form to connect directly with our front desk team via WhatsApp. No advance payment required online. Same-day appointments available for acute pain.'}
            </p>

            {/* Direct Call Card */}
            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 text-teal-950">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                    {isTa ? 'அவசர சிகிச்சை உதவி' : 'Direct Clinic Phone Line'}
                  </div>
                  <a
                    href={`tel:${CLINIC_CONTACT.phoneTel}`}
                    className="text-lg font-bold text-teal-950 hover:underline block"
                  >
                    {CLINIC_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>
              <p className="text-xs text-teal-800 mt-2">
                {isTa
                  ? 'பல் வலி, உடைந்த பற்கள் அல்லது உடனடி ஆலோசனைக்கு நேரடியாக அழைக்கவும்.'
                  : 'For acute tooth pain, broken teeth, or emergency treatment, call our emergency hotline directly.'}
              </p>
            </div>

            {/* Clinic Perks Checklist */}
            <div className="space-y-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Zero wait time for pre-booked appointments</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Comprehensive digital intraoral photography & X-Ray</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Dedicated free car parking in Anna Nagar West</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Lead Generation Form or Confirmation State */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-sm relative">
              
              {submittedData ? (
                /* Success Confirmation State */
                <div className="text-center py-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {isTa ? 'முன்பதிவு கோரிக்கை அனுப்பப்பட்டது!' : 'Appointment Request Generated!'}
                  </h3>
                  
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                    {isTa
                      ? `நன்றி ${submittedData.name}. உங்கள் விவரங்கள் வாட்ஸ்அப் மூலம் ஆரா கிளினிக் வரவேற்பறைக்கு அனுப்பப்பட்டுள்ளன.`
                      : `Thank you, ${submittedData.name}! Your request has been opened in WhatsApp with our clinic coordinator.`}
                  </p>

                  <div className="max-w-md mx-auto bg-white rounded-xl border border-slate-200 p-4 text-left text-xs space-y-2 mb-6">
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">Treatment:</span>
                      <span className="font-semibold text-slate-900">{submittedData.treatment}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">Preferred Date:</span>
                      <span className="font-semibold text-slate-900">{submittedData.date}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">Slot:</span>
                      <span className="font-semibold text-slate-900">{submittedData.timeSlot}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Patient Phone:</span>
                      <span className="font-semibold text-slate-900">+91 {submittedData.phone}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`tel:${CLINIC_CONTACT.phoneTel}`}
                      className="w-full sm:w-auto min-h-[48px] px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-teal-400" />
                      <span>{isTa ? 'கிளினிக் அழைக்க' : 'Call Clinic Directly'}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="w-full sm:w-auto min-h-[48px] px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs rounded-xl"
                    >
                      {isTa ? 'மற்றொரு முன்பதிவு செய்ய' : 'Book Another Appointment'}
                    </button>
                  </div>
                </div>
              ) : (
                /* The Booking Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-sm font-bold text-slate-900">
                      {isTa ? 'நோயாளி முன்பதிவு படிவம்' : 'Consultation Booking Form'}
                    </span>
                    <span className="text-xs text-teal-700 font-medium">
                      Direct WhatsApp Dispatch
                    </span>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="patient-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {isTa ? 'முழு பெயர் *' : 'Full Name *'}
                    </label>
                    <input
                      id="patient-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder={isTa ? 'உதா: கார்த்திக் சுப்ரமணியன்' : 'e.g. Karthik Subramanian'}
                      className={`w-full min-h-[48px] px-4 py-2.5 rounded-xl border text-sm bg-white text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-all ${
                        errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="patient-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {isTa ? 'வாட்ஸ்அப் / மொபைல் எண் *' : 'WhatsApp / Mobile Number *'}
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 text-xs font-bold text-slate-500 select-none">
                        🇮🇳 +91
                      </span>
                      <input
                        id="patient-phone"
                        type="tel"
                        maxLength={10}
                        value={phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setPhone(val);
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="98401 23456"
                        className={`w-full min-h-[48px] pl-16 pr-4 py-2.5 rounded-xl border text-sm bg-white text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-all tabular-nums ${
                          errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {errors.phone ? (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    ) : (
                      <p className="mt-1 text-[11px] text-slate-500">
                        {isTa ? 'முன்பதிவு விவரங்கள் இந்த எண்ணுக்கு அனுப்பப்படும்' : 'Used solely to coordinate appointment slot and directions.'}
                      </p>
                    )}
                  </div>

                  {/* Treatment Dropdown */}
                  <div>
                    <label htmlFor="patient-treatment" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {isTa ? 'தேவைப்படும் சிகிச்சை *' : 'Select Treatment / Concern *'}
                    </label>
                    <select
                      id="patient-treatment"
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-all cursor-pointer"
                    >
                      {TREATMENTS.map((t) => (
                        <option key={t.id} value={isTa ? t.nameTa : t.name}>
                          {isTa ? t.nameTa : t.name} (from ₹{t.startingPrice.toLocaleString('en-IN')})
                        </option>
                      ))}
                      <option value="General Dental Checkup & Consultation">
                        {isTa ? 'பொது பல் பரிசோதனை & ஆலோசனை' : 'General Dental Checkup & Consultation'}
                      </option>
                      <option value="Severe Tooth Pain / Emergency Treatment">
                        {isTa ? 'கடுமையான பல் வலி / அவசர சிகிச்சை' : 'Severe Tooth Pain / Emergency Treatment'}
                      </option>
                    </select>
                  </div>

                  {/* Date & Time Slot Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Preferred Date */}
                    <div>
                      <label htmlFor="patient-date" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-teal-600" />
                        <span>{isTa ? 'விருப்பமான தேதி *' : 'Preferred Date *'}</span>
                      </label>
                      <input
                        id="patient-date"
                        type="date"
                        min={todayStr}
                        value={date}
                        onChange={(e) => {
                          setDate(e.target.value);
                          if (errors.date) setErrors({ ...errors, date: '' });
                        }}
                        className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border text-sm bg-white text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-all ${
                          errors.date ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.date && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.date}</span>
                        </p>
                      )}
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label htmlFor="patient-slot" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-teal-600" />
                        <span>{isTa ? 'நேர இடைவெளி *' : 'Preferred Time Slot *'}</span>
                      </label>
                      <select
                        id="patient-slot"
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-all cursor-pointer"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">
                          {isTa ? 'காலை (10:00 - 1:00)' : 'Morning (10:00 AM - 1:00 PM)'}
                        </option>
                        <option value="Afternoon (2:00 PM - 5:00 PM)">
                          {isTa ? 'மதியம் (2:00 - 5:00)' : 'Afternoon (2:00 PM - 5:00 PM)'}
                        </option>
                        <option value="Evening (5:00 PM - 8:30 PM)">
                          {isTa ? 'மாலை (5:00 - 8:30)' : 'Evening (5:00 PM - 8:30 PM)'}
                        </option>
                      </select>
                    </div>

                  </div>

                  {/* Optional Notes / Symptoms */}
                  <div>
                    <label htmlFor="patient-concern" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {isTa ? 'குறிப்புகள் / அறிகுறிகள் (விரும்பினால்)' : 'Dental Concern or Symptoms (Optional)'}
                    </label>
                    <textarea
                      id="patient-concern"
                      rows={2}
                      value={concern}
                      onChange={(e) => setConcern(e.target.value)}
                      placeholder={isTa ? 'உதா: கீழ் தாடை கடவாய்ப்பல்லில் லேசான வலி அல்லது கறை...' : 'e.g., Lower molar sensitivity with cold water, or chipped front tooth...'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button (Opens WhatsApp Web/App with Pre-filled Text) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full min-h-[52px] px-6 py-3.5 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5 focus-visible:outline-teal-600"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isTa ? 'வாட்ஸ்அப் மூலம் உடனடியாக பதிவு செய்ய' : 'Book Appointment via WhatsApp'}</span>
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-2">
                      {isTa
                        ? 'உடனடி உறுதிப்படுத்தல் · முன்பணம் இல்லை · கிளினிக் வரவேற்பறை நேரடி தொடர்பு'
                        : 'Instant WhatsApp chat initiation · Zero spam · Direct coordinator contact'}
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
