import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Compass, Award, MapPin, Globe, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { FACULTY_DATA } from '../data/contentData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  // Slow-floating mathematical symbols and equations
  const mathFloatingSymbols = [
    { text: '∫ f(x) dx', x: '8%', y: '18%', duration: 18, delay: 0 },
    { text: 'lim (x→0) sin(x)/x = 1', x: '78%', y: '14%', duration: 22, delay: 2 },
    { text: 'Σ (n=1 to ∞) 1/n²', x: '12%', y: '72%', duration: 25, delay: 4 },
    { text: '∇ × B = μ₀J', x: '82%', y: '68%', duration: 20, delay: 1 },
    { text: 'e^(iπ) + 1 = 0', x: '45%', y: '85%', duration: 24, delay: 3 },
    { text: 'y² = 4ax', x: '2%', y: '45%', duration: 19, delay: 5 },
    { text: 'det(A - λI) = 0', x: '68%', y: '82%', duration: 21, delay: 2.5 },
    { text: '∂²u/∂t² = c² ∇²u', x: '24%', y: '28%', duration: 26, delay: 6 },
    { text: 'P(A|B) = [P(B|A)P(A)]/P(B)', x: '74%', y: '42%', duration: 23, delay: 3.5 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-center bg-white border-b border-slate-200"
    >
      {/* Mathematical Coordinate Dot Grid Background */}
      <div className="absolute inset-0 math-grid opacity-35 pointer-events-none" />

      {/* Floating Mathematical Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {mathFloatingSymbols.map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute font-math text-xs text-sky-700/25 font-semibold tracking-wider hidden sm:block"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: ['0px', '-14px', '0px'],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: item.delay,
            }}
          >
            {item.text}
          </motion.div>
        ))}

        {/* Geometric Balance SVG Coordinate wireframe */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,550 Q 450,220 900,520 T 1800,480"
            fill="none"
            stroke="#0284c7"
            strokeWidth="1.2"
            strokeDasharray="6 4"
          />
          <path
            d="M-50,320 C 320,120 620,600 1180,320 S 1780,180 2000,420"
            fill="none"
            stroke="#0369a1"
            strokeWidth="1"
          />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-left space-y-5">
            
            {/* Geometric Overline Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="h-1 w-6 bg-sky-600"></span>
              <span className="text-[11px] text-sky-800 font-bold uppercase tracking-widest">
                IIT Delhi Alumni • 15+ Years Pedagogy
              </span>
            </motion.div>

            {/* Large Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] uppercase"
            >
              Master JEE Mathematics.<br />
              <span className="text-sky-600">Build the Logic.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed max-w-2xl"
            >
              Learn Mathematics with <span className="text-slate-900 font-bold">Mr. Niranjan Naik</span> — IIT Delhi Alumni with 15+ years of JEE teaching experience.
            </motion.p>

            {/* Learning Modes Banner: Online & Offline with Dwarka address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="p-3.5 rounded-sm bg-sky-50/80 border border-sky-200 text-slate-800 space-y-2"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 font-bold text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-sm bg-sky-600 text-white text-[10px] uppercase tracking-wider">
                    Teaching Modes
                  </span>
                  <span className="text-sky-900 font-bold">
                    Online &amp; Offline Batches Available
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-mono font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>2 Demo Classes Given</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                <div className="flex items-start gap-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Offline Classroom Centre:</strong>
                    <span className="text-slate-600">305 Metroview Apartments, Sector 13, B, Dwarka, New Delhi 110078</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-slate-700">
                  <Globe className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Live Online Batches:</strong>
                    <span className="text-slate-600">Interactive live problem-solving sessions across India</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl"
            >
              Focused preparation for Class 11, Class 12 and Droppers — JEE Main &amp; JEE Advanced.
            </motion.p>

            {/* Key Pillars Badge Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              {['2 Demo Classes Given', 'Conceptual Rigor', 'Multi-Concept Problems', 'Dwarka Offline Batches', 'Live Online Classes', 'Independent Mentorship'].map((pill, i) => (
                <span
                  key={i}
                  className={`px-2.5 py-1 text-[11px] font-mono font-medium rounded-sm ${
                    i === 0
                      ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                      : 'text-slate-700 bg-slate-100 border border-slate-200'
                  }`}
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                id="hero-cta-programs"
                onClick={() => onNavigate('programs')}
                className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-cta-call"
                href={`tel:${FACULTY_DATA.phone}`}
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>Call: {FACULTY_DATA.phoneDisplay}</span>
              </a>

              <a
                id="hero-cta-whatsapp"
                href={FACULTY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                id="hero-cta-about"
                onClick={() => onNavigate('about')}
                className="text-slate-600 hover:text-sky-700 text-xs font-bold uppercase tracking-wider px-2 py-3 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                <span>About Sir</span>
              </button>
            </motion.div>

            {/* Teaching Institutions Credibility note */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-600">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Ex-Faculty:</span>
              <span className="font-semibold text-slate-800 px-2 py-0.5 rounded-sm bg-slate-100 border border-slate-200 text-xs">FIITJEE</span>
              <span className="font-semibold text-slate-800 px-2 py-0.5 rounded-sm bg-slate-100 border border-slate-200 text-xs">Sri Chaitanya</span>
              <span className="text-slate-400">•</span>
              <span className="text-sky-700 font-mono text-xs font-semibold">3+ Years Independent Teaching</span>
            </div>

          </div>

          {/* Right Column: Geometric Faculty Panel */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              <div className="relative rounded-sm bg-white border border-slate-200 border-l-4 border-l-sky-600 p-6 sm:p-7 shadow-lg overflow-hidden">
                {/* Background coordinate equations */}
                <div className="absolute top-2 right-2 p-2 font-mono text-[9px] text-slate-400 leading-tight select-none text-right">
                  dx/dt = σ(y - x)<br />
                  dy/dt = x(ρ - z) - y<br />
                  dz/dt = xy - βz
                </div>

                {/* Portrait Display Container */}
                <div className="relative mx-auto w-44 h-44 sm:w-48 sm:h-48 rounded-sm bg-slate-50 border border-slate-200 p-2 flex flex-col items-center justify-center shadow-inner group">
                  {/* Geometric Grid Texture */}
                  <div className="absolute inset-1 math-grid opacity-25 rounded-sm" />

                  {/* Geometric Faculty Emblem & Portrait Framing */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-sm bg-white border border-sky-200 flex items-center justify-center shadow-xs">
                    <Compass className="w-12 h-12 text-sky-600 stroke-[1.25]" />
                    <div className="absolute inset-0 border border-dashed border-sky-300/60" />
                  </div>

                  {/* Verification & Alumni Tag */}
                  <div className="relative mt-2.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-amber-50 border border-amber-300 text-amber-900 text-[10px] font-bold uppercase tracking-wider shadow-2xs">
                    <Award className="w-3 h-3 text-amber-700" />
                    <span>IIT Delhi Alumni</span>
                  </div>
                </div>

                {/* Faculty Details Card Footer */}
                <div className="mt-5 text-center space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight uppercase">
                    Mr. Niranjan Naik
                  </h2>
                  <p className="text-xs font-mono text-sky-700 uppercase tracking-wider font-semibold">
                    JEE Mathematics Faculty
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-around text-center">
                    <div>
                      <div className="font-mono text-lg font-bold text-slate-900">15+</div>
                      <div className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Years Teaching</div>
                    </div>
                    <div className="h-7 w-px bg-slate-200" />
                    <div>
                      <div className="font-mono text-lg font-bold text-amber-700">IIT Delhi</div>
                      <div className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Alumni</div>
                    </div>
                    <div className="h-7 w-px bg-slate-200" />
                    <div>
                      <div className="font-mono text-lg font-bold text-sky-700">Online/Offline</div>
                      <div className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Dwarka &amp; Live</div>
                    </div>
                  </div>

                  {/* Location badge on the card */}
                  <div className="pt-2 px-2 py-1.5 rounded-sm bg-slate-50 border border-slate-200 text-[10px] text-slate-600 flex items-center justify-center gap-1.5">
                    <MapPin className="w-3 h-3 text-sky-600 flex-shrink-0" />
                    <span className="truncate">305 Metroview Apts, Sec 13 Dwarka</span>
                  </div>

                  <div className="pt-1 text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                    Official Personal Faculty Portal • Class 11, 12 &amp; Droppers
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
