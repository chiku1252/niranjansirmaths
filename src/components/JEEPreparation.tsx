import { motion } from 'motion/react';
import { Zap, BrainCircuit, CheckCircle2, ArrowRightLeft } from 'lucide-react';

export default function JEEPreparation() {
  const mainPillars = [
    { title: 'Speed', desc: 'Developing rapid calculation intuition and minimizing arithmetic latency.' },
    { title: 'Accuracy', desc: 'Zero tolerance for negative marks through disciplined checking habits.' },
    { title: 'Question Selection', desc: 'Instant identification of high-yield and low-risk questions.' },
    { title: 'Formula Application', desc: 'Precise recall and contextual mapping of mathematical identities.' },
    { title: 'Time Management', desc: 'Strategic allocation of seconds per question to maximize score density.' },
    { title: 'Pattern Recognition', desc: 'Spotting standard question archetypes and shortcut trajectories.' },
  ];

  const advancedPillars = [
    { title: 'Conceptual Depth', desc: 'Understanding why formulas work from first principles and limit derivations.' },
    { title: 'Mathematical Reasoning', desc: 'Constructing rigorous step-by-step proofs and logical deduction.' },
    { title: 'Multi-Concept Problems', desc: 'Bridging Calculus with Coordinate Geometry and Vectors seamlessly.' },
    { title: 'Creative Problem Solving', desc: 'Approaching problems from alternative geometric and algebraic angles.' },
    { title: 'Unfamiliar Problems', desc: 'Overcoming exam anxiety when confronted with novel question designs.' },
    { title: 'Advanced Applications', desc: 'Evaluating real-world and complex matrix/calculus boundary conditions.' },
  ];

  return (
    <section id="jee-prep" className="relative py-16 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="absolute inset-0 math-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="h-1 w-6 bg-sky-600"></span>
            <span className="text-[10px] text-sky-800 font-bold uppercase tracking-widest">
              Examination Strategy
            </span>
            <span className="h-1 w-6 bg-sky-600"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Preparing for the Questions That Matter
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A dual-track pedagogical strategy calibrated separately for the distinct challenges of JEE Main and JEE Advanced.
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative">
          
          {/* Left: JEE Main */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 rounded-sm bg-slate-50 border border-slate-200 border-t-4 border-t-slate-400 p-6 sm:p-8 flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-sm text-[10px] font-mono font-bold bg-slate-200 text-slate-700 uppercase tracking-wider">
                  Velocity &amp; Precision
                </span>
                <Zap className="w-4 h-4 text-sky-600" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight">
                JEE MAIN
              </h3>

              <p className="text-xs text-slate-600 mt-1.5">
                Focused on rapid execution, zero negative marking, and exhaustive syllabus coverage.
              </p>

              <div className="mt-6 space-y-2.5">
                {mainPillars.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-sm bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">{item.title}</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-200 text-[10px] text-slate-500 font-mono uppercase tracking-wider font-semibold">
              Target: 99.5+ Percentile in Mathematics
            </div>
          </motion.div>

          {/* Right: JEE Advanced */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 rounded-sm bg-white border border-slate-200 border-t-4 border-t-sky-600 p-6 sm:p-8 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-sm text-[10px] font-mono font-bold bg-sky-50 text-sky-800 border border-sky-200 uppercase tracking-wider">
                  Intellectual Depth
                </span>
                <BrainCircuit className="w-4 h-4 text-sky-600" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight">
                JEE ADVANCED
              </h3>

              <p className="text-xs text-slate-600 mt-1.5">
                Focused on conceptual mastery, multi-layered problem architectures, and intellectual resilience.
              </p>

              <div className="mt-6 space-y-2.5">
                {advancedPillars.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-sm bg-slate-50 border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">{item.title}</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-200 text-[10px] text-amber-700 font-mono uppercase tracking-wider font-bold">
              Target: Top All India Ranks (AIR) in JEE Advanced
            </div>
          </motion.div>

        </div>

        {/* Center Statement */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-sm bg-slate-100 border border-slate-200 shadow-xs text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
            <ArrowRightLeft className="w-3.5 h-3.5 text-sky-600" />
            <span>From Fundamentals to Advanced Problem Solving</span>
          </div>
        </div>

      </div>
    </section>
  );
}
