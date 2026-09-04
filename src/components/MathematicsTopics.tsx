import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MATH_TOPICS_DATA } from '../data/contentData';
import { MathCategory } from '../types';
import { Compass, Activity, Binary, Waves, Boxes, Dice5, ChevronRight, Sparkles } from 'lucide-react';

export default function MathematicsTopics() {
  const [activeCategory, setActiveCategory] = useState<MathCategory>(MATH_TOPICS_DATA[1]); // Default to Calculus

  // Custom interactive visualizer for the selected mathematical category
  const renderVisualizer = (id: string) => {
    switch (id) {
      case 'calculus':
        return (
          <div className="relative w-full h-64 bg-[#070D18] rounded-2xl border border-cyan-500/30 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-xs text-cyan-300 font-math">
              <span>f(x) = x³ - 3x + 2</span>
              <span>∫ f(x) dx Area &amp; Tangents</span>
            </div>

            {/* SVG Interactive Calculus Curve */}
            <div className="relative flex-1 flex items-center justify-center">
              <svg viewBox="0 0 400 180" className="w-full h-full">
                {/* Axes */}
                <line x1="20" y1="90" x2="380" y2="90" stroke="#334155" strokeWidth="1.5" />
                <line x1="200" y1="10" x2="200" y2="170" stroke="#334155" strokeWidth="1.5" />
                {/* Axis Labels */}
                <text x="370" y="85" fill="#64748B" fontSize="10" fontFamily="monospace">x</text>
                <text x="205" y="20" fill="#64748B" fontSize="10" fontFamily="monospace">y</text>

                {/* Shaded Area Under Curve */}
                <path
                  d="M 120,90 Q 160,30 200,90 Q 240,150 280,90 Z"
                  fill="rgba(6, 182, 212, 0.15)"
                />

                {/* Function Curve */}
                <motion.path
                  d="M 40,150 C 100,10 160,170 200,90 S 300,10 360,90"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Tangent Line at x=160 */}
                <line x1="100" y1="160" x2="220" y2="20" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 3" />
                <circle cx="160" cy="90" r="4" fill="#F59E0B" />
                <text x="170" y="80" fill="#FBBF24" fontSize="9" fontFamily="monospace">dy/dx (Slope)</text>
              </svg>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center justify-between font-math">
              <span>Continuity • Mean Value Theorem • Leibniz Rule</span>
              <span className="text-cyan-400">JEE Advanced Core</span>
            </div>
          </div>
        );

      case 'coordinate':
        return (
          <div className="relative w-full h-64 bg-[#070D18] rounded-2xl border border-cyan-500/30 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-xs text-cyan-300 font-math">
              <span>Parabola: y² = 4ax</span>
              <span>Focus: (a, 0) | Directrix: x = -a</span>
            </div>

            {/* SVG Parabola and Coordinate Plane */}
            <div className="relative flex-1 flex items-center justify-center">
              <svg viewBox="0 0 400 180" className="w-full h-full">
                {/* Axes */}
                <line x1="20" y1="90" x2="380" y2="90" stroke="#334155" strokeWidth="1.5" />
                <line x1="140" y1="10" x2="140" y2="170" stroke="#334155" strokeWidth="1.5" />
                {/* Directrix */}
                <line x1="80" y1="15" x2="80" y2="165" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x="85" y="30" fill="#EF4444" fontSize="9" fontFamily="monospace">x = -a</text>

                {/* Parabola Curve */}
                <motion.path
                  d="M 340,10 Q 140,90 340,170"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2 }}
                />

                {/* Focus S(a,0) */}
                <circle cx="200" cy="90" r="4" fill="#F59E0B" />
                <text x="195" y="80" fill="#FBBF24" fontSize="9" fontFamily="monospace">S(a,0)</text>

                {/* Tangent at P */}
                <line x1="160" y1="170" x2="360" y2="10" stroke="#34D399" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="260" cy="90" r="3.5" fill="#34D399" />
              </svg>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center justify-between font-math">
              <span>Parametric Coordinates: (at², 2at)</span>
              <span className="text-cyan-400">Conic Sections</span>
            </div>
          </div>
        );

      case 'algebra':
        return (
          <div className="relative w-full h-64 bg-[#070D18] rounded-2xl border border-cyan-500/30 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-xs text-cyan-300 font-math">
              <span>Polynomial Roots &amp; Matrices</span>
              <span>det(A - λI) = 0</span>
            </div>

            <div className="relative flex-1 flex flex-col items-center justify-center gap-3">
              {/* Matrix Layout */}
              <div className="flex items-center gap-3 font-math text-sm sm:text-base text-cyan-200">
                <span className="text-2xl text-slate-500">[</span>
                <div className="grid grid-cols-3 gap-x-4 gap-y-1 text-center">
                  <span className="text-amber-300">cos θ</span>
                  <span className="text-slate-300">-sin θ</span>
                  <span className="text-slate-400">0</span>
                  <span className="text-slate-300">sin θ</span>
                  <span className="text-amber-300">cos θ</span>
                  <span className="text-slate-400">0</span>
                  <span className="text-slate-400">0</span>
                  <span className="text-slate-400">0</span>
                  <span className="text-cyan-400">1</span>
                </div>
                <span className="text-2xl text-slate-500">]</span>
              </div>

              {/* Transformation equation */}
              <div className="px-4 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 font-math text-xs text-slate-300">
                α + β = -b/a <span className="text-cyan-400 mx-2">•</span> αβ = c/a <span className="text-cyan-400 mx-2">•</span> z = re^(iθ)
              </div>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center justify-between font-math">
              <span>Complex Numbers • Binomial Expansion • Determinants</span>
              <span className="text-cyan-400">Structural Foundations</span>
            </div>
          </div>
        );

      case 'vector-3d':
        return (
          <div className="relative w-full h-64 bg-[#070D18] rounded-2xl border border-cyan-500/30 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-xs text-cyan-300 font-math">
              <span>3D Spatial Vectors: a × b</span>
              <span>Scalar Triple: [a b c] = a · (b × c)</span>
            </div>

            <div className="relative flex-1 flex items-center justify-center">
              <svg viewBox="0 0 400 180" className="w-full h-full">
                {/* 3D Origin and Axes */}
                <line x1="200" y1="100" x2="340" y2="100" stroke="#64748B" strokeWidth="1.5" />
                <line x1="200" y1="100" x2="200" y2="20" stroke="#64748B" strokeWidth="1.5" />
                <line x1="200" y1="100" x2="100" y2="160" stroke="#64748B" strokeWidth="1.5" />
                <text x="345" y="105" fill="#64748B" fontSize="9" fontFamily="monospace">X</text>
                <text x="205" y="25" fill="#64748B" fontSize="9" fontFamily="monospace">Z</text>
                <text x="90" y="165" fill="#64748B" fontSize="9" fontFamily="monospace">Y</text>

                {/* Vector a */}
                <line x1="200" y1="100" x2="290" y2="50" stroke="#38BDF8" strokeWidth="2.5" />
                <polygon points="290,50 280,53 285,60" fill="#38BDF8" />
                <text x="295" y="50" fill="#38BDF8" fontSize="10" fontFamily="monospace">vector a</text>

                {/* Vector b */}
                <line x1="200" y1="100" x2="130" y2="70" stroke="#34D399" strokeWidth="2.5" />
                <polygon points="130,70 140,70 135,78" fill="#34D399" />
                <text x="110" y="65" fill="#34D399" fontSize="10" fontFamily="monospace">vector b</text>

                {/* Cross Product Normal Vector a x b */}
                <line x1="200" y1="100" x2="200" y2="35" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
                <polygon points="200,35 196,43 204,43" fill="#F59E0B" />
                <text x="208" y="45" fill="#FBBF24" fontSize="9" fontFamily="monospace">a × b (Normal)</text>
              </svg>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center justify-between font-math">
              <span>Lines &amp; Planes in Space • Shortest Distance</span>
              <span className="text-cyan-400">High-Scoring Section</span>
            </div>
          </div>
        );

      case 'trigonometry':
        return (
          <div className="relative w-full h-64 bg-[#070D18] rounded-2xl border border-cyan-500/30 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-xs text-cyan-300 font-math">
              <span>Sine Wave &amp; Unit Circle</span>
              <span>sin²θ + cos²θ = 1</span>
            </div>

            <div className="relative flex-1 flex items-center justify-center">
              <svg viewBox="0 0 400 180" className="w-full h-full">
                {/* Unit Circle Left */}
                <circle cx="90" cy="90" r="50" fill="none" stroke="#334155" strokeWidth="1.5" />
                <line x1="30" y1="90" x2="150" y2="90" stroke="#1E293B" strokeWidth="1" />
                <line x1="90" y1="30" x2="90" y2="150" stroke="#1E293B" strokeWidth="1" />
                <line x1="90" y1="90" x2="125" y2="55" stroke="#F59E0B" strokeWidth="2" />
                <circle cx="125" cy="55" r="3.5" fill="#F59E0B" />
                <text x="130" y="55" fill="#FBBF24" fontSize="8" fontFamily="monospace">(cos θ, sin θ)</text>

                {/* Connecting wave Right */}
                <line x1="160" y1="90" x2="380" y2="90" stroke="#334155" strokeWidth="1.5" />
                <motion.path
                  d="M 160,90 Q 215,20 270,90 T 380,90"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5 }}
                />
              </svg>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center justify-between font-math">
              <span>Inverse Trigonometric Functions • Telescopic Sums</span>
              <span className="text-cyan-400">Calculus Enabler</span>
            </div>
          </div>
        );

      case 'probability':
      default:
        return (
          <div className="relative w-full h-64 bg-[#070D18] rounded-2xl border border-cyan-500/30 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-xs text-cyan-300 font-math">
              <span>Conditional Probability &amp; Bayes Theorem</span>
              <span>P(A|B) = [P(B|A)P(A)] / P(B)</span>
            </div>

            <div className="relative flex-1 flex items-center justify-center">
              <svg viewBox="0 0 400 180" className="w-full h-full">
                {/* Venn Diagram Circles */}
                <circle cx="160" cy="90" r="55" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" strokeWidth="1.5" />
                <circle cx="240" cy="90" r="55" fill="rgba(6, 182, 212, 0.15)" stroke="#06B6D4" strokeWidth="1.5" />
                
                {/* Labels */}
                <text x="130" y="95" fill="#93C5FD" fontSize="11" fontWeight="bold">Event A</text>
                <text x="250" y="95" fill="#67E8F9" fontSize="11" fontWeight="bold">Event B</text>
                <text x="185" y="95" fill="#FBBF24" fontSize="10" fontWeight="bold">A ∩ B</text>
              </svg>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center justify-between font-math">
              <span>Total Probability • Binomial Distribution</span>
              <span className="text-cyan-400">Analytical Rigor</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="mathematics" className="relative py-16 lg:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="absolute inset-0 math-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="h-1 w-6 bg-sky-600"></span>
            <span className="text-[10px] text-sky-800 font-bold uppercase tracking-widest">
              Curricular Architecture
            </span>
            <span className="h-1 w-6 bg-sky-600"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Explore the World of Mathematics
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Click or hover over any core mathematical domain to inspect topics, governing identities, and dynamic geometric models.
          </p>
        </div>

        {/* Categories Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {MATH_TOPICS_DATA.map((cat) => {
            const isSelected = activeCategory.id === cat.id;

            return (
              <button
                key={cat.id}
                id={`math-cat-btn-${cat.id}`}
                onClick={() => setActiveCategory(cat)}
                onMouseEnter={() => setActiveCategory(cat)}
                className={`p-3 rounded-sm text-left transition-all duration-150 cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div>
                  <div className={`text-[9px] font-mono uppercase tracking-widest mb-1 ${
                    isSelected ? 'text-slate-400' : 'text-slate-400'
                  }`}>
                    Domain
                  </div>
                  <div className={`text-xs sm:text-sm font-bold uppercase tracking-tight ${
                    isSelected ? 'text-sky-400' : 'text-slate-900'
                  }`}>
                    {cat.name}
                  </div>
                </div>

                <div className={`mt-2.5 pt-2 border-t flex items-center justify-between text-[10px] font-mono ${
                  isSelected ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
                }`}>
                  <span>{cat.topics.length} Topics</span>
                  <ChevronRight className={`w-3 h-3 ${isSelected ? 'text-sky-400' : 'text-slate-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Inspector Panel for Selected Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="rounded-sm bg-white border border-slate-200 border-l-4 border-l-sky-600 p-6 sm:p-8 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Topics and Concept Explanation */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] text-sky-800 font-mono font-bold uppercase tracking-widest mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                    <span>Domain Mastery</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight">
                    {activeCategory.name}
                  </h3>

                  <p className="text-xs font-mono text-sky-700 uppercase tracking-wide mt-0.5 font-semibold">
                    {activeCategory.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {activeCategory.description}
                  </p>
                </div>

                {/* Key Formula / Notation */}
                <div className="p-3 rounded-sm bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 shadow-2xs">
                  <span className="text-slate-500 mr-2 uppercase text-[10px] font-semibold">Governing Identity:</span>
                  <span className="text-amber-700 font-bold">{activeCategory.keyFormula}</span>
                </div>

                {/* Topics Covered */}
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2 font-mono">
                    Key Topics Covered Under Mr. Niranjan Naik:
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    {activeCategory.topics.map((topic, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 rounded-sm bg-slate-50 border border-slate-200 text-xs text-slate-700 shadow-2xs"
                      >
                        <div className="w-1.5 h-1.5 rounded-sm bg-sky-600" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Concept Focus */}
                <div className="text-xs text-slate-600 border-l-2 border-sky-600 pl-3 italic">
                  {activeCategory.conceptHighlight}
                </div>
              </div>

              {/* Right Column: Visualizer */}
              <div className="lg:col-span-6">
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2 flex items-center justify-between">
                  <span>Interactive Mathematical Representation</span>
                  <span className="text-sky-700 font-semibold">Live Graph Engine</span>
                </div>

                {renderVisualizer(activeCategory.id)}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
