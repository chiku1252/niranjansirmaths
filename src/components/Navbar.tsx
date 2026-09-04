import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { FACULTY_DATA } from '../data/contentData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'results', 'about', 'experience', 'why-learn', 'programs', 'mathematics', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'Results', target: 'results', highlight: true },
    { label: 'About Sir', target: 'about' },
    { label: 'Experience', target: 'experience' },
    { label: 'Programs', target: 'programs' },
    { label: 'Mathematics', target: 'mathematics' },
    { label: 'Contact & Centre', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-slate-200 py-2.5 shadow-sm'
          : 'bg-white/85 backdrop-blur-sm border-slate-200/80 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleLinkClick('home')}
          className="text-left group flex items-center gap-3 cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-sm bg-sky-600 border border-sky-700 flex items-center justify-center text-white shadow-xs">
            <span className="font-mono font-bold text-sm tracking-wider">NN</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 uppercase group-hover:text-sky-600 transition-colors">
                NIRANJAN NAIK
              </h1>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-amber-50 border border-amber-300 text-amber-800 rounded-sm">
                IIT Delhi
              </span>
            </div>
            <p className="text-[10px] text-sky-700 font-semibold tracking-[0.16em] uppercase">
              JEE Mathematics Faculty • Online &amp; Offline
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.target}
              id={`nav-link-${item.target}`}
              onClick={() => handleLinkClick(item.target)}
              className={`text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer py-1 ${
                activeSection === item.target
                  ? 'text-sky-700 border-b-2 border-sky-600 font-bold'
                  : item.highlight
                  ? 'text-amber-700 hover:text-amber-800 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
              {item.highlight && (
                <span className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-amber-500" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Action: Call / WhatsApp & Enquire CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Quick Call */}
          <a
            id="nav-call-link"
            href={`tel:${FACULTY_DATA.phone}`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-mono font-medium border border-slate-200 transition-colors"
            title="Call Mr. Niranjan Naik"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600" />
            <span>{FACULTY_DATA.phoneDisplay}</span>
          </a>

          {/* Quick WhatsApp */}
          <a
            id="nav-whatsapp-link"
            href={FACULTY_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-sm bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <button
            id="nav-cta-enquire"
            onClick={() => handleLinkClick('contact')}
            className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 text-[11px] font-bold uppercase tracking-widest rounded-sm transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Enquire</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-sm text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer border border-slate-200"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <div className="py-2 border-b border-slate-100 mb-2 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
              Navigation
            </span>
            <span className="text-[10px] text-sky-700 font-mono font-bold">NIRANJAN NAIK</span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.target}
              id={`mobile-nav-${item.target}`}
              onClick={() => handleLinkClick(item.target)}
              className={`w-full text-left px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-between ${
                activeSection === item.target
                  ? 'bg-sky-50 text-sky-800 border-l-2 border-sky-600'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span>{item.label}</span>
              {item.highlight && (
                <span className="text-[9px] px-2 py-0.5 rounded-sm bg-amber-100 text-amber-800 border border-amber-200 uppercase tracking-wider font-bold">
                  Highlight
                </span>
              )}
            </button>
          ))}

          {/* Mobile Direct Dial & WhatsApp */}
          <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
            <a
              href={`tel:${FACULTY_DATA.phone}`}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-sm bg-slate-100 text-slate-800 text-xs font-mono font-semibold border border-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>{FACULTY_DATA.phoneDisplay}</span>
            </a>
            <a
              href={FACULTY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-sm bg-emerald-50 text-emerald-800 text-xs font-mono font-semibold border border-emerald-200"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="pt-2">
            <button
              id="mobile-nav-enquire"
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-sm bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-xs"
            >
              <span>Enquire Now for Batches</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
