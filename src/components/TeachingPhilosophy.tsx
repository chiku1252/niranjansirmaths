import { motion } from 'motion/react';
import { PHILOSOPHY_STAGES } from '../data/contentData';
import { Lightbulb, Network, PenTool, Brain, Trophy, ChevronRight } from 'lucide-react';

export default function TeachingPhilosophy() {
  const icons = [Lightbulb, Network, PenTool, Brain, Trophy];

  return (
    <section id="philosophy" className="relative py-16 lg:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="absolute inset-0 math-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="h-1 w-6 bg-sky-600"></span>
            <span className="text-[10px] text-sky-800 font-bold uppercase tracking-widest">
              Core Pedagogy
            </span>
            <span className="h-1 w-6 bg-sky-600"></span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase text-slate-900 tracking-tight">
            Concept <span className="text-sky-600">→</span> Logic <span className="text-sky-600">→</span> Practice <span className="text-sky-600">→</span> Problem Solving <span className="text-sky-600">→</span> Mastery
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            JEE Mathematics preparation is not simply about memorising formulas. It is about understanding the fundamental logic that enables you to invent the solution path on the spot.
          </p>
        </div>

        {/* 5 Stages Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 relative">
          {PHILOSOPHY_STAGES.map((stage, idx) => {
            const Icon = icons[idx];
            const isMastery = idx === 4;

            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative group"
              >
                <div
                  className={`h-full rounded-sm p-5 flex flex-col justify-between transition-all duration-200 group hover:-translate-y-0.5 bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 ${
                    isMastery
                      ? 'border-t-4 border-t-amber-500'
                      : 'border-t-4 border-t-sky-600'
                  }`}
                >
                  <div>
                    {/* Header: Stage Number and Icon */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span
                        className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm ${
                          isMastery
                            ? 'bg-amber-50 text-amber-800 border border-amber-200'
                            : 'bg-sky-50 text-sky-800 border border-sky-200'
                        }`}
                      >
                        STAGE {stage.step}
                      </span>
                      <Icon
                        className={`w-4 h-4 ${
                          isMastery ? 'text-amber-600' : 'text-sky-600'
                        }`}
                      />
                    </div>

                    <h3 className="text-base font-bold uppercase text-slate-900 group-hover:text-sky-700 transition-colors">
                      {stage.name}
                    </h3>

                    <div className="text-[11px] font-mono text-sky-700 font-semibold uppercase tracking-wide mt-0.5">
                      {stage.sub}
                    </div>

                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase">
                    <span>Principle {stage.step}</span>
                    <span>JEE Calibrated</span>
                  </div>
                </div>

                {/* Arrow connector between stages on desktop */}
                {idx < PHILOSOPHY_STAGES.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2.5 -translate-y-1/2 z-20 w-5 h-5 rounded-sm bg-white border border-slate-200 items-center justify-center text-slate-400 shadow-2xs">
                    <ChevronRight className="w-3 h-3" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Supporting Quote Banner */}
        <div className="mt-12 p-6 rounded-sm bg-white border border-slate-200 border-l-4 border-l-sky-600 text-center max-w-3xl mx-auto shadow-xs">
          <p className="text-base sm:text-lg text-slate-800 italic">
            "When a student masters the first principles, any novel question in JEE Advanced transforms from an obstacle into an intellectual challenge waiting to be disassembled."
          </p>
          <div className="mt-2.5 text-[10px] font-mono font-bold text-sky-800 uppercase tracking-widest">
            — Niranjan Naik, JEE Mathematics Faculty
          </div>
        </div>

      </div>
    </section>
  );
}
