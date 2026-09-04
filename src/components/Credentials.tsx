import { motion } from 'motion/react';
import { Award, GraduationCap, Calendar, Compass, Sparkles } from 'lucide-react';

export default function Credentials() {
  const credentials = [
    {
      id: 'cred-1',
      metric: '15+',
      label: 'Years of Teaching',
      sublabel: 'Dedicated JEE Mathematics Pedagogy',
      icon: Calendar,
      accent: 'cyan',
    },
    {
      id: 'cred-2',
      metric: 'IIT Delhi',
      label: 'Alumni Faculty',
      sublabel: 'Prestigious Academic Pedigree',
      icon: GraduationCap,
      accent: 'amber',
    },
    {
      id: 'cred-3',
      metric: 'Online & Offline',
      label: 'Dual Learning Modes',
      sublabel: 'Dwarka Sec 13 Centre & Live Online',
      icon: Compass,
      accent: 'cyan',
    },
    {
      id: 'cred-4',
      metric: 'JEE Main & Adv',
      label: 'Class 11, 12 & Droppers',
      sublabel: 'Rigorous Multi-Concept Depth',
      icon: Award,
      accent: 'blue',
    },
    {
      id: 'cred-5',
      metric: 'IITians',
      label: 'Mentored & Produced',
      sublabel: 'Consistent Track Record of Ranks',
      icon: Sparkles,
      accent: 'amber',
    },
  ];

  return (
    <section id="credentials" className="relative bg-white border-b border-slate-200 py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {credentials.map((item, index) => {
            const Icon = item.icon;
            const isGold = item.accent === 'amber';
            const isCyan = item.accent === 'cyan';

            return (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative rounded-sm p-4 border transition-all duration-200 group hover:-translate-y-0.5 bg-slate-50/60 border-slate-200 hover:border-slate-300 hover:bg-white shadow-xs ${
                  isGold
                    ? 'hover:border-amber-400'
                    : 'hover:border-sky-400'
                }`}
              >
                {/* Crisp top indicator accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2.5px] ${
                    isGold ? 'bg-amber-500' : isCyan ? 'bg-sky-600' : 'bg-sky-700'
                  }`}
                />

                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-7 h-7 rounded-sm flex items-center justify-center border ${
                      isGold
                        ? 'bg-amber-50 border-amber-200 text-amber-700'
                        : 'bg-sky-50 border-sky-200 text-sky-700'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                    0{index + 1}
                  </span>
                </div>

                {/* Primary Metric */}
                <div
                  className={`font-mono text-lg sm:text-xl font-bold tracking-tight ${
                    isGold ? 'text-amber-800' : 'text-slate-900'
                  }`}
                >
                  {item.metric}
                </div>

                {/* Main Label */}
                <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-800 group-hover:text-sky-700 transition-colors">
                  {item.label}
                </div>

                {/* Sub-label */}
                <p className="mt-0.5 text-[10px] text-slate-500 leading-snug">
                  {item.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
