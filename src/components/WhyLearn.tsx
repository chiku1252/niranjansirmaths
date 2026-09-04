import { motion } from 'motion/react';
import { WHY_LEARN_CARDS } from '../data/contentData';
import { GraduationCap, Clock, Lightbulb, Cpu, Target, UserCheck } from 'lucide-react';

export default function WhyLearn() {
  const iconMap: Record<string, any> = {
    GraduationCap,
    Clock,
    Lightbulb,
    Cpu,
    Target,
    UserCheck,
  };

  return (
    <section id="why-learn" className="relative py-16 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="absolute inset-0 math-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="h-1 w-6 bg-sky-600"></span>
            <span className="text-[10px] text-sky-800 font-bold uppercase tracking-widest">
              Pedagogical Strengths
            </span>
            <span className="h-1 w-6 bg-sky-600"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">
            What Makes His Teaching Different?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A disciplined mathematical pedagogy designed to elevate analytical ability from school fundamentals to JEE Advanced benchmarks.
          </p>
        </div>

        {/* 6 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {WHY_LEARN_CARDS.map((card, index) => {
            const IconComponent = iconMap[card.icon] || Lightbulb;
            const isHighlighted = card.id === 'iit-delhi' || card.id === 'concept-first';

            return (
              <motion.div
                key={card.id}
                id={`why-card-${card.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative rounded-sm p-5 sm:p-6 transition-all duration-200 group hover:-translate-y-0.5 border ${
                  isHighlighted
                    ? 'bg-slate-50 border-slate-200 border-l-4 border-l-sky-600 hover:border-slate-300 hover:bg-white shadow-xs'
                    : 'bg-white border-slate-200 border-l-4 border-l-slate-300 hover:border-slate-400 hover:bg-slate-50 shadow-2xs'
                }`}
              >
                {/* Number indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-sky-700 shadow-2xs group-hover:border-sky-300 transition-all">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold uppercase text-slate-900 group-hover:text-sky-700 transition-colors">
                  {card.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {card.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[10px] text-slate-400 font-mono uppercase group-hover:text-sky-700 transition-colors font-medium">
                  <span>Core Teaching Pillar</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
