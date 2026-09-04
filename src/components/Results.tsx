import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Sparkles, Filter, CheckCircle2, ArrowRight, Compass, ShieldAlert, GraduationCap, Trophy, ChevronRight } from 'lucide-react';
import { StudentResult, ResultCategory } from '../types';
import { INITIAL_RESULTS_DATA } from '../data/resultsData';

interface ResultsProps {
  onNavigate: (sectionId: string) => void;
}

export default function Results({ onNavigate }: ResultsProps) {
  const [selectedCategory, setSelectedCategory] = useState<ResultCategory>('All');
  const [resultsList] = useState<StudentResult[]>(INITIAL_RESULTS_DATA);

  const categories: ResultCategory[] = [
    'All',
    'JEE Advanced',
    'JEE Main',
    'IIT Selections',
    'Top Ranks',
  ];

  const filteredResults = resultsList.filter((item) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'JEE Advanced') return item.exam === 'JEE Advanced';
    if (selectedCategory === 'JEE Main') return item.exam === 'JEE Main';
    if (selectedCategory === 'IIT Selections') return item.exam === 'IIT Selections' || item.achievementType === 'Admission';
    if (selectedCategory === 'Top Ranks') return item.category === 'Top Ranks' || item.exam === 'Top Ranks';
    return true;
  });

  const featuredResults = resultsList.filter((item) => item.featured);

  // From Classroom to IIT journey steps
  const journeySteps = [
    {
      step: '01',
      title: 'Concepts',
      sub: 'First Principles',
      desc: 'Rigorous derivation of every mathematical formula and theorem.',
      symbol: 'f(x)',
    },
    {
      step: '02',
      title: 'Understanding',
      sub: 'Geometric & Algebraic Intuition',
      desc: 'Visualizing graphs, loci, and multi-concept relationships.',
      symbol: '∫ dx',
    },
    {
      step: '03',
      title: 'Problem Solving',
      sub: 'Unfamiliar Scenarios',
      desc: 'Deconstructing complex, Olympiad & Advanced difficulty problems.',
      symbol: 'Σ',
    },
    {
      step: '04',
      title: 'JEE Main & Advanced',
      sub: 'Speed & Accuracy',
      desc: 'Exam temperament, time allocation, and high-percentile precision.',
      symbol: 'AIR',
    },
    {
      step: '05',
      title: 'IIT',
      sub: 'Premier Engineering',
      desc: 'Earning admission to India’s top Indian Institutes of Technology.',
      symbol: 'IIT',
    },
  ];

  return (
    <section
      id="results"
      className="relative py-16 lg:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden"
    >
      {/* Background Math Dot Grid */}
      <div className="absolute inset-0 math-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="h-1 w-6 bg-amber-500"></span>
            <span className="text-[10px] text-amber-700 font-bold uppercase tracking-widest">
              Proven Track Record • 15+ Years Pedagogy
            </span>
            <span className="h-1 w-6 bg-amber-500"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Results That Speak for Themselves
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            15+ years of teaching. Countless problems solved. Multiple journeys to the IITs.
          </p>
        </div>

        {/* 10. RESULTS SECTION — HERO TREATMENT CENTERPIECE */}
        <div className="relative mb-16 rounded-sm bg-white border border-slate-200 border-l-4 border-l-amber-500 p-6 sm:p-10 text-center shadow-md overflow-hidden">
          {/* Subtle surrounding geometric diagram SVG */}
          <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
            <svg width="600" height="200" viewBox="0 0 600 200" fill="none" stroke="#0284c7" strokeWidth="0.75">
              <circle cx="300" cy="100" r="80" strokeDasharray="4 4" />
              <circle cx="300" cy="100" r="140" stroke="#f59e0b" strokeDasharray="6 6" />
              <line x1="50" y1="100" x2="550" y2="100" stroke="#475569" strokeDasharray="3 3" />
              <line x1="300" y1="0" x2="300" y2="200" stroke="#475569" strokeDasharray="3 3" />
            </svg>
          </div>

          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-amber-50 border border-amber-200 text-[10px] font-bold text-amber-900 tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Consistently Mentoring Top Performers</span>
            </div>

            <div className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-500 uppercase font-semibold">
              Dedicated Mentorship Under Mr. Niranjan Naik
            </div>

            {/* Large Typography Centerpiece */}
            <div className="py-1">
              <h3 className="font-mono text-4xl sm:text-6xl md:text-7xl font-black tracking-wider text-amber-600 uppercase">
                IITians
              </h3>
              <div className="mt-1 text-lg sm:text-2xl font-bold text-slate-900 tracking-wide uppercase">
                MULTIPLE IITians MENTORED &amp; PRODUCED
              </div>
            </div>

            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed">
              Guiding students across premier engineering entrances with uncompromising focus on conceptual depth, mathematical intuition, and disciplined execution.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-600 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Admissions to Premier IITs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ex-FIITJEE &amp; Sri Chaitanya Top Batches</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Dwarka Classroom &amp; Live Online Mentorship</span>
              </div>
            </div>
          </div>
        </div>

        {/* 11. FEATURED RESULTS */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-sky-700">
                Major Highlights
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-tight mt-0.5">
                Featured Results
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Representative verified formats for student ranks, percentiles, and IIT allotments.
              </p>
            </div>

            {/* Direct Mentorship Note */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white border border-slate-200 text-[10px] text-slate-700 font-mono shadow-2xs">
              <Sparkles className="w-3 h-3 text-amber-600 flex-shrink-0" />
              <span>Direct Mentorship • 2 Demo Classes Provided</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredResults.map((res, index) => (
              <motion.div
                key={res.id}
                id={`featured-card-${res.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative rounded-sm bg-white border border-slate-200 border-l-4 border-l-amber-500 p-4 sm:p-5 flex flex-col justify-between hover:border-amber-300 hover:shadow-md transition-all duration-200 shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                      {res.exam}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-sm border border-emerald-200 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      <span>Verified</span>
                    </span>
                  </div>

                  {/* Large Achievement Badge */}
                  <div className="py-1">
                    <div className="font-mono text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-amber-700 transition-colors">
                      {res.achievement}
                    </div>
                    <div className="text-[10px] font-mono text-sky-700 mt-0.5 font-medium">
                      {res.achievementType === 'Rank' && 'All India Rank (AIR)'}
                      {res.achievementType === 'Percentile' && 'NTA Percentile Score'}
                      {res.achievementType === 'Admission' && 'Final IIT Admission'}
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 space-y-1">
                    <div className="text-xs font-bold text-slate-800">
                      {res.studentName}
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5 uppercase tracking-tighter">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                      <span>{res.college}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-slate-400 italic">
                  {res.note}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 12 & 13. RESULTS DASHBOARD & FILTERS */}
        <div className="mb-16 rounded-sm bg-white border border-slate-200 p-5 sm:p-6 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wide">
                Results Dashboard
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Structured categories covering JEE Advanced, JEE Main, and IIT Admissions
              </p>
            </div>

            {/* Filter Tabs matching Geometric Balance snippet */}
            <div className="flex flex-wrap items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-slate-400 mr-1 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`filter-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-sm transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Grid under selected filter */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <AnimatePresence mode="wait">
              {filteredResults.map((item) => {
                const isAdv = item.exam === 'JEE Advanced' || item.achievementType === 'Admission';

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className={`rounded-sm bg-slate-50 border border-slate-200 border-l-4 ${
                      isAdv ? 'border-l-amber-500' : 'border-l-sky-600'
                    } p-3.5 sm:p-4 hover:border-slate-300 hover:bg-white transition-colors group flex flex-col justify-between shadow-2xs`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] mb-2">
                        <span className={`font-bold uppercase tracking-wider ${
                          isAdv ? 'text-amber-700' : 'text-sky-700'
                        }`}>
                          {item.exam}
                        </span>
                        <span className="font-mono text-slate-500 font-semibold uppercase text-[9px] tracking-wider">
                          {item.achievementType === 'Rank' ? 'Rank Holder' : 'Qualified'}
                        </span>
                      </div>

                      <div className="font-mono text-xl sm:text-2xl font-black text-slate-900 group-hover:text-sky-700 transition-colors">
                        {item.achievement}
                      </div>

                      <div className="mt-1.5 text-xs font-bold text-slate-800">
                        {item.studentName}
                      </div>

                      <div className="mt-0.5 text-[10px] text-slate-500 uppercase tracking-tighter">
                        {item.college}
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span>{item.achievementType}</span>
                      <span className="text-amber-700 font-bold">Verified Format</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {filteredResults.length === 0 && (
            <div className="py-10 text-center text-slate-500 text-xs font-mono uppercase">
              No results found in this category.
            </div>
          )}
        </div>

        {/* 16. "FROM CLASSROOM TO IIT" VISUAL JOURNEY */}
        <div className="mb-16 rounded-sm bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sky-700">
              The Pedagogy Pipeline
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mt-1">
              From the Classroom to IIT
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              A structured, step-by-step mathematical transition from initial foundations to peak JEE Advanced performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {journeySteps.map((step, idx) => (
              <div key={step.step} className="relative group">
                <div className="h-full rounded-sm bg-slate-50 border border-slate-200 p-4 flex flex-col justify-between group-hover:border-sky-400 group-hover:bg-white transition-all shadow-2xs">
                  <div>
                    {/* Step number and mathematical notation */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-6 h-6 rounded-sm bg-sky-100 border border-sky-300 flex items-center justify-center text-[10px] font-mono font-bold text-sky-800">
                        {step.step}
                      </span>
                      <span className="text-[10px] font-mono text-slate-600 px-1.5 py-0.5 rounded-sm bg-white border border-slate-200">
                        {step.symbol}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold uppercase text-slate-900 group-hover:text-sky-700 transition-colors">
                      {step.title}
                    </h4>

                    <div className="text-[11px] font-mono text-sky-700 mt-0.5 font-medium">
                      {step.sub}
                    </div>

                    <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-200 flex items-center text-[10px] text-slate-400 font-mono uppercase">
                    <span>Stage {step.step}</span>
                  </div>
                </div>

                {/* Arrow connector between stages on desktop */}
                {idx < journeySteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2.5 -translate-y-1/2 z-20 w-5 h-5 rounded-sm bg-white border border-slate-300 items-center justify-center text-slate-500 shadow-2xs">
                    <ChevronRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 17. RESULTS CTA */}
        <div className="rounded-sm bg-sky-50 border border-sky-200 border-l-4 border-l-sky-600 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-amber-700" />
              <span>2 Demo Classes are Given</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-tight">
              Want to Be the Next Success Story?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700">
              Build your Mathematics foundation with <span className="text-slate-900 font-bold">Mr. Niranjan Naik</span> — 2 Demo Classes are given so students and parents can evaluate the teaching depth. Available Online &amp; Offline at Dwarka Sector 13.
            </p>
          </div>

          <button
            id="results-cta-programs"
            onClick={() => onNavigate('programs')}
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-xs flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
