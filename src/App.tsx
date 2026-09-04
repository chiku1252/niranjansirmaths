import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Credentials from './components/Credentials';
import Results from './components/Results';
import AboutSir from './components/AboutSir';
import ExperienceTimeline from './components/ExperienceTimeline';
import WhyLearn from './components/WhyLearn';
import Programs from './components/Programs';
import JEEPreparation from './components/JEEPreparation';
import MathematicsTopics from './components/MathematicsTopics';
import TeachingPhilosophy from './components/TeachingPhilosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedProgramForEnquiry, setSelectedProgramForEnquiry] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectProgram = (programId: string) => {
    setSelectedProgramForEnquiry(programId);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-sky-500/20 selection:text-sky-900">
      {/* 00 — Sticky Navbar */}
      <Navbar onNavigate={scrollToSection} />

      <main className="flex-1">
        {/* 01 — HERO */}
        <Hero onNavigate={scrollToSection} />

        {/* 02 — CREDENTIALS STRIP */}
        <Credentials />

        {/* 03 — RESULTS (MAJOR WEBSITE HIGHLIGHT) */}
        <Results onNavigate={scrollToSection} />

        {/* 04 — ABOUT SIR */}
        <AboutSir />

        {/* 05 — EXPERIENCE */}
        <ExperienceTimeline />

        {/* 06 — WHY LEARN FROM SIR? */}
        <WhyLearn />

        {/* 07 — PROGRAMS */}
        <Programs onSelectProgram={handleSelectProgram} />

        {/* 08 — JEE MAIN & ADVANCED */}
        <JEEPreparation />

        {/* 09 — MATHEMATICS */}
        <MathematicsTopics />

        {/* 10 — TEACHING PHILOSOPHY */}
        <TeachingPhilosophy />

        {/* 11 — CONTACT */}
        <Contact selectedProgram={selectedProgramForEnquiry} />
      </main>

      {/* 12 — FOOTER */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
