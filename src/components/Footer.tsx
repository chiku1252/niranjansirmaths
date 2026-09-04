import { FACULTY_DATA } from '../data/contentData';
import { MapPin, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const footerLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Experience', target: 'experience' },
    { label: 'Results', target: 'results' },
    { label: 'Programs', target: 'programs' },
    { label: 'Mathematics', target: 'mathematics' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-300 py-12 sm:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Faculty Brand Info */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xl font-black tracking-tight text-white uppercase">
                NIRANJAN NAIK
              </span>
              <span className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest bg-sky-500/20 border border-sky-400/40 text-sky-300 rounded-sm">
                IIT Delhi Alumni
              </span>
            </div>
            <p className="text-xs text-slate-300">
              JEE Mathematics Faculty <span className="text-sky-400">•</span> Class 11, Class 12 &amp; Droppers
            </p>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              15+ years of dedicated teaching experience including FIITJEE &amp; Sri Chaitanya. Teaching independently for 3+ years both Online and Offline.
            </p>
            
            {/* Quick Contact Chips in Footer */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <a
                href={`tel:${FACULTY_DATA.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-mono">{FACULTY_DATA.phoneDisplay}</span>
              </a>
              <a
                href={FACULTY_DATA.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
              <span className="inline-flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Dwarka Sector 13, New Delhi</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              Quick Navigation
            </div>
            <nav className="flex flex-col gap-2 text-xs font-mono font-medium">
              {footerLinks.map((item) => (
                <button
                  key={item.target}
                  id={`footer-link-${item.target}`}
                  onClick={() => onNavigate(item.target)}
                  className="text-left text-slate-300 hover:text-sky-300 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Center Address Details */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              Classroom Center
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              305 Metroview Apartments,<br />
              Sector 13, Pocket B, Dwarka,<br />
              New Delhi, Delhi 110078
            </p>
            <p className="text-[11px] text-sky-400">
              Available Online &amp; Offline
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-slate-500 uppercase tracking-wider text-center sm:text-left">
          <div>
            © 2026 Niranjan Naik. All Rights Reserved.
          </div>
          <div>
            IIT Delhi Alumni • Conceptual Clarity • Dwarka Center &amp; Online
          </div>
        </div>
      </div>
    </footer>
  );
}
