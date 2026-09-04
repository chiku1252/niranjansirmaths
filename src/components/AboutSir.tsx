import { motion } from 'motion/react';
import { Award, GraduationCap, CheckCircle, Quote, Compass, BookOpen, Clock, Building2, MapPin, Globe } from 'lucide-react';
import { FACULTY_DATA } from '../data/contentData';

export default function AboutSir() {
  return (
    <section id="about" className="relative py-16 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
      {/* Subtle math grid */}
      <div className="absolute inset-0 math-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="h-1 w-6 bg-sky-600"></span>
            <span className="text-[10px] text-sky-800 font-bold uppercase tracking-widest">
              Faculty Profile &amp; Pedagogy
            </span>
            <span className="h-1 w-6 bg-sky-600"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Meet Your Mathematics Mentor
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Dedicated to cultivating deep mathematical reasoning for JEE Main &amp; JEE Advanced.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Portrait & Academic Insignia */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-sm bg-slate-50 border border-slate-200 border-l-4 border-l-sky-600 p-6 sm:p-8 shadow-md space-y-6">
                
                {/* Academic Crest Frame */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 mx-auto rounded-sm bg-white border border-slate-200 flex flex-col items-center justify-center p-4 shadow-xs">
                  <div className="w-24 h-24 rounded-sm bg-slate-50 border border-sky-300 flex items-center justify-center relative shadow-inner">
                    <Compass className="w-12 h-12 text-sky-600 stroke-[1.25]" />
                    <div className="absolute inset-0 border border-dashed border-sky-400/40" />
                  </div>
                  
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-sm bg-amber-50 border border-amber-300 text-amber-900 text-[10px] font-bold uppercase tracking-wider shadow-2xs">
                    <Award className="w-3 h-3 text-amber-700" />
                    <span>IIT Delhi Alumni</span>
                  </div>
                </div>

                {/* Faculty Name & Core Specs */}
                <div className="text-center space-y-1">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                    {FACULTY_DATA.name}
                  </h3>
                  <p className="text-xs font-mono text-sky-700 uppercase tracking-wide font-semibold">
                    {FACULTY_DATA.designation} • {FACULTY_DATA.qualification}
                  </p>
                </div>

                {/* Verified Faculty Badges */}
                <div className="pt-4 border-t border-slate-200 space-y-2.5 text-xs">
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <Clock className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span><strong>15+ Years</strong> of competitive JEE Mathematics teaching</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <Building2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span>Ex-Senior Faculty: <strong>FIITJEE</strong> &amp; <strong>Sri Chaitanya</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <Compass className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span><strong>3+ Years</strong> Independent conceptual teaching &amp; mentorship</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <MapPin className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Offline Centre:</strong> 305 Metroview Apartments, Sector 13, Dwarka, New Delhi</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <Globe className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Online Batches:</strong> Live Interactive Sessions for Pan-India students</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-sm bg-white border border-slate-200 text-center shadow-2xs">
                  <span className="text-[10px] font-mono text-slate-600 uppercase tracking-wider">
                    Target Cohorts: <strong className="text-slate-900">Class 11</strong> • <strong className="text-slate-900">Class 12</strong> • <strong className="text-slate-900">Droppers</strong>
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Detailed Biography & Philosophy Quote */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
                {FACULTY_DATA.bio[0]}
              </p>

              <p>
                {FACULTY_DATA.bio[1]}
              </p>

              <p>
                {FACULTY_DATA.bio[2]}
              </p>

              <p>
                {FACULTY_DATA.bio[3]}
              </p>
            </div>

            {/* Highlighted Quote Box */}
            <div className="relative rounded-sm bg-sky-50/70 border-l-4 border-l-sky-600 border border-sky-200 p-5 sm:p-6 my-4 shadow-xs">
              <Quote className="w-6 h-6 text-sky-600/50 mb-2" />
              <blockquote className="text-base sm:text-lg italic font-semibold text-slate-900 leading-snug">
                "{FACULTY_DATA.quote}"
              </blockquote>
              <div className="mt-2 text-[10px] font-mono tracking-widest text-sky-800 uppercase font-semibold">
                — Mr. Niranjan Naik, IIT Delhi Alumni
              </div>
            </div>

            {/* Core Teaching Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                'Derivations from first principles',
                'Visualizing loci and geometric transformations',
                'Systematic approach to multi-concept problems',
                'Small batches with direct personal doubt resolution',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-sm bg-slate-50 border border-slate-200 text-xs text-slate-700 shadow-2xs">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
