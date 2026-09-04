import { motion } from 'motion/react';
import { TIMELINE_DATA } from '../data/contentData';
import { Compass, GraduationCap, Building2, CheckCircle, Clock } from 'lucide-react';

export default function ExperienceTimeline() {
  const icons = [Compass, Building2, GraduationCap, Clock];

  return (
    <section id="experience" className="relative py-16 lg:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="absolute inset-0 math-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="h-1 w-6 bg-sky-600"></span>
            <span className="text-[10px] text-sky-800 font-bold uppercase tracking-widest">
              Pedagogical Evolution
            </span>
            <span className="h-1 w-6 bg-sky-600"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">
            15+ Years of Teaching Mathematics
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A continuous track record of academic dedication, premier institutional leadership, and independent student mentoring.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical central connecting line */}
          <div className="hidden md:block absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-px bg-slate-200" />

          <div className="space-y-8 sm:space-y-10">
            {TIMELINE_DATA.map((item, index) => {
              const Icon = icons[index % icons.length];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.stage}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left / Right Card */}
                  <div className="w-full md:w-1/2 px-0 md:px-6">
                    <div className="rounded-sm bg-white border border-slate-200 border-l-4 border-l-sky-600 p-5 sm:p-6 hover:border-slate-300 transition-all duration-200 shadow-xs group">
                      
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200">
                          {item.tag}
                        </span>
                        <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                          Phase {item.stage}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold uppercase text-slate-900 group-hover:text-sky-700 transition-colors">
                        {item.title}
                      </h3>

                      <div className="text-[11px] font-mono text-sky-700 font-semibold mt-0.5">
                        {item.subtitle}
                      </div>

                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node on Timeline */}
                  <div className="my-3 md:my-0 flex-shrink-0 z-20">
                    <div className="w-9 h-9 rounded-sm bg-white border-2 border-sky-600 flex items-center justify-center text-sky-700 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Empty placeholder for the other side */}
                  <div className="hidden md:block w-1/2 px-6" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
