import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import { CLINIC_CONTACT, Language } from '../data/clinicData';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isTa = language === 'ta';

  return (
    <footer id="contact-info" className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Map Embed & Clinic Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Left Column: Brand & Physical Clinic Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5 text-teal-100" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Aura Dental Clinic
                </span>
                <span className="block text-[11px] uppercase tracking-widest text-teal-400 font-semibold">
                  Anna Nagar, Chennai
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              {isTa
                ? 'சென்னை அண்ணா நகரில் வலியற்ற மற்றும் சர்வதேச தரம் வாய்ந்த பல் சிகிச்சைகள். உங்கள் மற்றும் உங்கள் குடும்பத்தின் புன்னகையை பாதுகாக்கும் நம்பிக்கையான மருத்துவமனை.'
                : 'Painless, gentle laser dentistry and aesthetic smile transformations in Anna Nagar West, Chennai. Managed by premier IDA and NABH certified clinicians.'}
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">
                    {isTa ? CLINIC_CONTACT.addressTa : CLINIC_CONTACT.address}
                  </div>
                  <div className="text-[11px] text-teal-400 mt-0.5">
                    {isTa ? CLINIC_CONTACT.landmarkTa : CLINIC_CONTACT.landmark}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <div className="flex items-center gap-3">
                  <a href={`tel:${CLINIC_CONTACT.phoneTel}`} className="hover:text-white transition-colors">
                    {CLINIC_CONTACT.phoneDisplay}
                  </a>
                  <span className="text-slate-600">·</span>
                  <a href={`tel:04426214455`} className="hover:text-white transition-colors">
                    {CLINIC_CONTACT.landlineDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${CLINIC_CONTACT.email}`} className="hover:text-white transition-colors">
                  {CLINIC_CONTACT.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div>{isTa ? CLINIC_CONTACT.workingHoursWeekdayTa : CLINIC_CONTACT.workingHoursWeekday}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {isTa ? CLINIC_CONTACT.workingHoursSundayTa : CLINIC_CONTACT.workingHoursSunday}
                  </div>
                </div>
              </div>
            </div>

            {/* Regulatory and council accreditation */}
            <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>
                Reg No: <strong className="text-slate-300">{CLINIC_CONTACT.regNo}</strong> · {CLINIC_CONTACT.nabhStatus}
              </span>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Placeholder & Directions */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-inner">
              
              <div className="flex items-center justify-between mb-3 text-xs">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <MapPin className="w-4 h-4 text-teal-400" />
                  <span>Clinic Location (Anna Nagar Roundtana)</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Anna+Nagar+Roundtana+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 font-medium transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Styled interactive map canvas preview */}
              <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 group">
                
                {/* Visual stylized street grid map */}
                <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                  
                  {/* Grid lines representing Anna Nagar Avenue layout */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:32px_32px]" />
                  
                  {/* Road representations */}
                  <div className="absolute top-1/2 left-0 right-0 h-4 bg-slate-800 -translate-y-1/2 flex items-center justify-center">
                    <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                      2nd Avenue Road, Anna Nagar
                    </span>
                  </div>
                  <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-slate-800 -translate-x-1/2 flex items-center justify-center">
                    <span className="text-[9px] text-slate-500 font-mono -rotate-90 whitespace-nowrap">
                      Roundtana Radial Rd
                    </span>
                  </div>

                  {/* Metro Landmark */}
                  <div className="absolute top-4 right-6 bg-slate-800/90 border border-slate-700 text-slate-300 text-[10px] px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Anna Nagar Tower Metro (350m)</span>
                  </div>

                  {/* Clinic Location Pin */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-teal-600 text-white p-2.5 rounded-full shadow-lg ring-4 ring-teal-400/30 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="mt-2 bg-slate-950/95 border border-teal-500/80 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg text-center backdrop-blur-xs">
                      <div>Aura Dental Clinic</div>
                      <div className="text-[10px] text-teal-400 font-normal">Plot 1244, 2nd Avenue</div>
                    </div>
                  </div>

                  {/* Live Directions Overlay CTA */}
                  <a
                    href="https://maps.google.com/?q=Anna+Nagar+Roundtana+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md transition-colors flex items-center gap-1.5"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3 text-slate-700" />
                  </a>

                </div>

              </div>

              {/* Transit hints */}
              <div className="grid grid-cols-2 gap-2 mt-3 text-[11px] text-slate-400">
                <div>🚇 4 mins walk from Anna Nagar Tower Metro</div>
                <div>🚗 Free Valet & Patient Car Parking available</div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Quick Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Aura Aesthetic & Dental Clinic. All Rights Reserved.
          </div>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#treatments" className="hover:text-teal-400 transition-colors">Treatments</a>
            <a href="#estimator" className="hover:text-teal-400 transition-colors">Cost Estimator</a>
            <a href="#dentists" className="hover:text-teal-400 transition-colors">Dentists</a>
            <a href="#reviews" className="hover:text-teal-400 transition-colors">Patient Reviews</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Book Visit</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
