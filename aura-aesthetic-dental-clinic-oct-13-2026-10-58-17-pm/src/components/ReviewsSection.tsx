import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS, Language } from '../data/clinicData';

interface ReviewsSectionProps {
  language: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  const isTa = language === 'ta';

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
              {isTa ? 'நோயாளி அனுபவங்கள்' : 'Patient Testimonials'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {isTa ? '14,000+ புன்னகைகளின் நம்பிக்கை' : 'Real Stories from Chennai Patients'}
            </h2>
          </div>

          {/* Google Review Scorecard */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs shrink-0">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center font-bold text-amber-700 text-lg tabular-nums">
              4.9
            </div>
            <div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs font-bold text-slate-900 mt-0.5">
                850+ Verified Google Reviews
              </div>
              <div className="text-[11px] text-slate-500">
                Anna Nagar, Chennai Location
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-teal-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{rev.date}</span>
                </div>

                {/* Treatment context */}
                <div className="text-xs font-semibold text-teal-700 mb-2">
                  {rev.treatment}
                </div>

                {/* Patient quote */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{isTa ? rev.commentTa : rev.comment}"
                </p>
              </div>

              {/* Patient info */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{rev.patientName}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {rev.location}
                  </div>
                </div>

                <div className="text-[11px] font-medium text-slate-400">
                  Verified Visit
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
