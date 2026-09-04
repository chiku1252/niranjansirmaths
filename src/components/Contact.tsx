import { useState, useEffect, type FormEvent } from 'react';
import { Mail, Phone, MessageSquare, MapPin, CheckCircle2, ExternalLink, Copy, Check, ArrowRight } from 'lucide-react';
import { FACULTY_DATA } from '../data/contentData';

interface ContactProps {
  selectedProgram?: string;
}

export default function Contact({ selectedProgram }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    currentClass: 'Class 11',
    mode: 'Offline (Dwarka Sector 13 Center)',
    prepLevel: 'JEE Main & Advanced',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    if (selectedProgram) {
      if (selectedProgram === 'class-11') {
        setFormData((prev) => ({ ...prev, currentClass: 'Class 11', prepLevel: 'JEE Main & Advanced' }));
      } else if (selectedProgram === 'class-12') {
        setFormData((prev) => ({ ...prev, currentClass: 'Class 12', prepLevel: 'JEE Main & Advanced' }));
      } else if (selectedProgram === 'droppers') {
        setFormData((prev) => ({ ...prev, currentClass: 'Dropper (12th Passed)', prepLevel: 'JEE Main & Advanced' }));
      }
    }
  }, [selectedProgram]);

  // Construct structured lead text for WhatsApp
  const generateLeadMessage = () => {
    return [
      `*New JEE Mathematics Admission Enquiry*`,
      `--------------------------------`,
      `*Student Name:* ${formData.name.trim()}`,
      `*Contact Number:* ${formData.phone.trim()}`,
      `*Email:* ${formData.email.trim()}`,
      `*Class / Cohort:* ${formData.currentClass}`,
      `*Target Exam:* ${formData.prepLevel}`,
      `*Preferred Learning Mode:* ${formData.mode}`,
      `*Demo Classes:* Requesting 2 Demo Classes`,
      formData.message.trim() ? `*Student Notes/Challenges:* ${formData.message.trim()}` : null,
      `--------------------------------`,
      `Sent via Niranjan Naik Official Mathematics Portal`,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const getWhatsAppDispatchUrl = () => {
    const encoded = encodeURIComponent(generateLeadMessage());
    return `https://wa.me/91${FACULTY_DATA.whatsapp}?text=${encoded}`;
  };

  const getEmailDispatchUrl = () => {
    const subject = encodeURIComponent(`JEE Mathematics Enquiry - ${formData.name.trim() || 'New Student'}`);
    const body = encodeURIComponent(generateLeadMessage());
    return `mailto:${FACULTY_DATA.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const dispatchUrl = getWhatsAppDispatchUrl();
    try {
      // Trigger WhatsApp directly in a new window/tab
      window.open(dispatchUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // If blocked by iframe or browser popup blocker, the fallback UI handles it seamlessly
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="relative py-16 lg:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="absolute inset-0 math-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="h-1 w-6 bg-sky-600"></span>
            <span className="text-[10px] text-sky-800 font-bold uppercase tracking-widest">
              Direct Admissions &amp; Enquiries
            </span>
            <span className="h-1 w-6 bg-sky-600"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Connect for Online &amp; Offline Batches
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Submit your profile below to dispatch your enquiry directly to <span className="text-slate-900 font-bold">{FACULTY_DATA.name}</span> on WhatsApp, or call the academic desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Contact & Learning Center Details */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-sm bg-white border border-slate-200 border-l-4 border-l-sky-600 p-6 sm:p-7 space-y-5 shadow-sm">
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-slate-900 tracking-tight">
                  Academic Helpdesk
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Reach out directly for batch schedule confirmations, personal diagnostic evaluation, and seat bookings.
                </p>
              </div>

              {/* Mode Availability Tag */}
              <div className="p-3.5 rounded-sm bg-sky-50 border border-sky-200 text-xs text-sky-950 flex flex-col gap-1.5">
                <div className="font-bold text-sky-900 flex items-center gap-1.5 uppercase text-[11px] tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>Available Learning Modes</span>
                </div>
                <p className="text-[11px] text-slate-700 leading-relaxed">
                  <strong>Offline Center:</strong> 305 Metroview Apartments, Dwarka Sector 13, New Delhi.<br />
                  <strong>Online Cohorts:</strong> Live interactive digital sessions with pan-India access.
                </p>
              </div>

              {/* Verified Contact Channels */}
              <div className="space-y-3">
                {/* Phone */}
                <div className="p-3.5 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                        Direct Phone / Call
                      </div>
                      <a
                        href={`tel:${FACULTY_DATA.phone}`}
                        className="text-xs font-mono font-bold text-slate-900 hover:text-sky-700 transition-colors"
                      >
                        {FACULTY_DATA.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`tel:${FACULTY_DATA.phone}`}
                      className="text-[10px] font-mono font-semibold text-sky-700 hover:text-sky-800 px-2 py-1 rounded-sm bg-white border border-slate-200 shadow-2xs cursor-pointer"
                    >
                      Call
                    </a>
                    <button
                      onClick={() => handleCopy(FACULTY_DATA.phone, 'phone')}
                      className="text-[10px] font-mono font-semibold text-slate-600 hover:text-slate-900 px-2 py-1 rounded-sm bg-white border border-slate-200 shadow-2xs cursor-pointer flex items-center gap-1"
                    >
                      {copiedField === 'phone' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-3.5 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                        WhatsApp Instant Enquiry
                      </div>
                      <a
                        href={FACULTY_DATA.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                      >
                        {FACULTY_DATA.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={FACULTY_DATA.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] font-mono font-semibold text-emerald-700 hover:text-emerald-800 px-2.5 py-1 rounded-sm bg-emerald-50 border border-emerald-200 shadow-2xs cursor-pointer flex items-center gap-1"
                    >
                      <span>Chat</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="p-3.5 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                        Email Desk
                      </div>
                      <a
                        href={`mailto:${FACULTY_DATA.email}`}
                        className="text-xs font-mono font-semibold text-slate-900 hover:text-sky-700 truncate max-w-[160px] sm:max-w-none block"
                      >
                        {FACULTY_DATA.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(FACULTY_DATA.email, 'email')}
                    className="text-[10px] font-mono font-semibold text-slate-600 hover:text-slate-900 px-2 py-1 rounded-sm bg-white border border-slate-200 shadow-2xs cursor-pointer flex items-center gap-1"
                  >
                    {copiedField === 'email' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Offline Classroom Address */}
                <div className="p-3.5 rounded-sm bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                        Dwarka Offline Classroom
                      </div>
                      <a
                        href={FACULTY_DATA.offlineAddress.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] font-mono font-semibold text-sky-700 hover:underline flex items-center gap-1"
                      >
                        <span>Directions</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                    <div className="text-xs font-medium text-slate-900 mt-1 leading-relaxed">
                      {FACULTY_DATA.offlineAddress.full}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      Sector 13 Metro Station nearby • In-person small cohorts
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Promise */}
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-600 space-y-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                  <span className="font-semibold text-slate-900">2 Demo Classes are Given before enrollment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Personal conceptual assessment before batch placement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Direct mentor access with Mr. Niranjan Naik</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Direct WhatsApp Lead Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="rounded-sm bg-white border border-slate-200 border-t-4 border-t-emerald-600 p-6 sm:p-8 shadow-sm relative">
              
              {submitted ? (
                <div className="py-6 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 mx-auto flex items-center justify-center text-emerald-700">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div>
                    <span className="px-2.5 py-0.5 rounded-sm bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-bold uppercase tracking-wider">
                      Lead Dispatch Prepared
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-slate-900 tracking-tight mt-2">
                      Ready to Send on WhatsApp
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed mt-1">
                      Your admission enquiry has been formatted for <span className="font-semibold text-slate-900">{FACULTY_DATA.name}</span>. Click below to launch WhatsApp and transmit your details directly.
                    </p>
                  </div>

                  {/* Primary Direct WhatsApp Action Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppDispatchUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest shadow-sm transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send to Sir on WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={getEmailDispatchUrl()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest border border-slate-200 transition-all"
                    >
                      <Mail className="w-4 h-4 text-slate-600" />
                      <span>Send via Email</span>
                    </a>
                  </div>

                  {/* Structured Lead Preview Card */}
                  <div className="text-left mt-6 p-4 rounded-sm bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                        Generated WhatsApp Message
                      </span>
                      <button
                        onClick={() => handleCopy(generateLeadMessage(), 'msg')}
                        className="text-[10px] font-mono text-sky-700 hover:text-sky-800 flex items-center gap-1 font-semibold cursor-pointer"
                      >
                        {copiedField === 'msg' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedField === 'msg' ? 'Copied Message' : 'Copy Message'}</span>
                      </button>
                    </div>

                    <pre className="text-[11px] font-mono text-slate-700 whitespace-pre-wrap leading-relaxed">
                      {generateLeadMessage()}
                    </pre>
                  </div>

                  {/* Reset form */}
                  <div className="pt-2 text-center">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-slate-500 hover:text-slate-800 underline uppercase tracking-wider cursor-pointer"
                    >
                      ← Edit or Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider">
                        <MessageSquare className="w-3 h-3 text-emerald-600" />
                        Direct WhatsApp Lead Dispatch
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-slate-900 tracking-tight">
                      Student Academic Registration
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Fill out your details below. <strong className="text-emerald-800 font-semibold">2 Demo Classes are Given</strong> to evaluate the teaching methodology before enrollment. Submitting will compile and open your enquiry directly on <span className="font-semibold text-slate-900">Mr. Niranjan Naik's WhatsApp</span> ({FACULTY_DATA.phoneDisplay}).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Aryan Sharma"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="student@example.com"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                      />
                    </div>

                    {/* Preferred Mode */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 mb-1">
                        Preferred Learning Mode *
                      </label>
                      <select
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                      >
                        <option value="Offline (Dwarka Sector 13 Center)">Offline (Dwarka Sector 13 Center)</option>
                        <option value="Online Live Interactive Batch">Online Live Interactive Batch</option>
                        <option value="Both / Open to Advice">Both / Open to Advice</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Current Class */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 mb-1">
                        Current Class / Cohort *
                      </label>
                      <select
                        value={formData.currentClass}
                        onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                      >
                        <option value="Class 11">Class 11 (2-Year JEE Foundation)</option>
                        <option value="Class 12">Class 12 (Targeting JEE 2026)</option>
                        <option value="Dropper (12th Passed)">Dropper / Repeater Batch</option>
                      </select>
                    </div>

                    {/* Target Examination */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 mb-1">
                        Target Examination *
                      </label>
                      <select
                        value={formData.prepLevel}
                        onChange={(e) => setFormData({ ...formData, prepLevel: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                      >
                        <option value="JEE Main & Advanced">JEE Main &amp; Advanced (Complete)</option>
                        <option value="JEE Advanced Focus">JEE Advanced (Rank Booster Focus)</option>
                        <option value="JEE Main Focus">JEE Main Focus</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 mb-1">
                      Mathematics Challenges / Questions for Sir
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your goals, current conceptual challenges, or specific queries regarding online or Dwarka offline classes..."
                      className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="btn-send-whatsapp-lead"
                    className="w-full py-3.5 px-5 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-sm transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Submit &amp; Dispatch via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase tracking-wider pt-1">
                    <span>Direct WhatsApp: {FACULTY_DATA.phoneDisplay}</span>
                    <span>Direct Review by Mr. Niranjan Naik</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
