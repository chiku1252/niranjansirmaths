import { motion } from 'motion/react';
import { ArrowRight, Check, BookOpen, Layers, Sparkles } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/contentData';

interface ProgramsProps {
  onSelectProgram: (programId: string) => void;
}

export default function Programs({ onSelectProgram }: ProgramsProps) {
  return (
    <section id="programs" className="relative py-16 lg:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="absolute inset-0 math-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="h-1 w-6 bg-sky-600"></span>
            <span className="text-[10px] text-sky-800 font-bold uppercase tracking-widest">
              Targeted Cohorts
            </span>
            <span className="h-1 w-6 bg-sky-600"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Programs for Every Stage of Your JEE Journey
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Meticulously structured courses designed to build conceptual depth, analytical speed, and exam confidence. Available Online &amp; Offline at Dwarka.
          </p>
        </div>

        {/* 2 Demo Classes Highlight Banner */}
        <div className="max-w-2xl mx-auto mb-10 p-3.5 sm:p-4 rounded-sm bg-amber-50 border border-amber-200 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 shadow-2xs">
          <span className="px-2.5 py-1 rounded-sm bg-amber-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 flex-shrink-0 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            Admissions Open
          </span>
          <span className="text-xs sm:text-sm text-amber-950 font-medium">
            <strong className="font-bold text-amber-900">2 Demo Classes are given</strong> before enrollment — evaluate the teaching style, rigor, and clarity firsthand.
          </span>
        </div>

        {/* 3 Large Premium Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PROGRAMS_DATA.map((prog, index) => {
            const isDropper = prog.id === 'droppers';
            const isClass12 = prog.id === 'class-12';

            return (
              <motion.div
                key={prog.id}
                id={`program-card-${prog.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative rounded-sm p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group hover:-translate-y-0.5 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md ${
                  isDropper
                    ? 'border-t-4 border-t-sky-600 shadow-sm'
                    : isClass12
                    ? 'border-t-4 border-t-sky-600 shadow-xs'
                    : 'border-t-4 border-t-slate-400 shadow-xs'
                }`}
              >
                {/* Highlight Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`px-2.5 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider ${
                      isDropper
                        ? 'bg-sky-50 text-sky-800 border border-sky-200'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {prog.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                    Batch 2025–26
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight">
                    {prog.title}
                  </h3>

                  <div className="text-xs font-mono text-sky-700 uppercase tracking-wide mt-1 font-semibold">
                    {prog.subtitle}
                  </div>

                  <div className="text-[11px] text-slate-500 mt-1 italic">
                    {prog.targetAudience}
                  </div>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {prog.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 font-mono">
                      Key Highlights:
                    </div>
                    {prog.keyHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Syllabus / Topics Covered Pills */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2 flex items-center justify-between font-mono">
                      <span>Curriculum Topics:</span>
                      <span className="text-sky-700 font-semibold">
                        {prog.topics.length} Areas
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 max-h-44 overflow-y-auto pr-1">
                      {prog.topics.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] font-mono rounded-sm bg-slate-50 text-slate-700 border border-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <button
                    id={`btn-explore-${prog.id}`}
                    onClick={() => onSelectProgram(prog.id)}
                    className={`w-full py-2.5 px-4 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      isDropper
                        ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-xs'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{prog.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
