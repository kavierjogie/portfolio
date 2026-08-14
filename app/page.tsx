'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import DevTerminal from '@/components/sections/DevTerminal';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/ui/CursorGlow';
import GridBackground from '@/components/ui/GridBackground';
import CommandPalette from '@/components/ui/CommandPalette';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Ambient background effects */}
      <GridBackground />
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Keyboard navigation command palette */}
      <CommandPalette />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <DevTerminal />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
