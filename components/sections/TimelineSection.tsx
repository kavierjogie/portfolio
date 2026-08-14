'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, Code, ChevronRight } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { TIMELINE } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function TimelineSection() {
  const [activeYearIndex, setActiveYearIndex] = useState<number>(TIMELINE.length - 2); // Start with 2025 (Honours & Tech Lead Focus)
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll linked animation setup for the timeline path line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 15,
    restDelta: 0.001,
  });

  const activePhase = TIMELINE[activeYearIndex];

  return (
    <SectionWrapper id="timeline" className="relative">
      <SectionHeading
        label="// 04. academic growth timeline"
        title="My Journey & Growth"
        subtitle="An interactive roadmap of my education, academic leadership roles, and technical development at Nelson Mandela University and beyond."
      />

      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative min-h-[550px]">
        
        {/* Left Side: Timeline Navigation Nodes (Desktop: 4 cols, Mobile: Top row) */}
        <div className="lg:col-span-4 flex flex-col items-stretch justify-start relative">
          
          {/* Desktop Vertical Path */}
          <div className="hidden lg:block absolute left-[31px] top-6 bottom-6 w-0.5 bg-border-subtle/50 rounded-full">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-purple rounded-full shadow-[0_0_12px_#00E5FF]"
            />
          </div>

          {/* Desktop Navigation Nodes */}
          <div className="hidden lg:flex flex-col gap-6 relative z-10">
            {TIMELINE.map((phase, idx) => {
              const isActive = idx === activeYearIndex;
              const isPast = idx < activeYearIndex;

              return (
                <button
                  key={phase.year}
                  onClick={() => setActiveYearIndex(idx)}
                  className="flex items-center gap-6 group text-left outline-none cursor-pointer"
                >
                  {/* Node Circle */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.25 : 1,
                      borderColor: isActive
                        ? '#00E5FF'
                        : isPast
                        ? 'rgba(0, 229, 255, 0.4)'
                        : 'rgba(30, 45, 61, 0.8)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={cn(
                      'w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border-2 bg-bg-primary transition-all duration-300',
                      isActive 
                        ? 'shadow-[0_0_15px_rgba(0,229,255,0.25)] border-accent-cyan bg-bg-elevated' 
                        : 'border-border-subtle group-hover:border-accent-cyan/60'
                    )}
                  >
                    <span className={cn(
                      'font-display font-bold text-sm tracking-tight transition-colors',
                      isActive ? 'text-accent-cyan' : 'text-text-secondary group-hover:text-text-primary'
                    )}>
                      {phase.year}
                    </span>
                  </motion.div>

                  {/* Phase Summary Label */}
                  <div className="flex-1">
                    <p className={cn(
                      'text-xs font-mono tracking-wider transition-colors',
                      isActive ? 'text-accent-cyan' : 'text-text-muted group-hover:text-text-secondary'
                    )}>
                      {phase.label}
                    </p>
                    <h4 className={cn(
                      'font-display font-semibold text-base mt-0.5 leading-snug transition-colors',
                      isActive ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
                    )}>
                      {phase.focus}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile Horizontal Timeline Nav */}
          <div className="lg:hidden w-full overflow-x-auto pb-4 scrollbar-none flex gap-4 snap-x relative z-10">
            {/* Background line running behind mobile nodes */}
            <div className="absolute left-4 right-4 top-6 h-0.5 bg-border-subtle/40 -z-10" />
            
            {TIMELINE.map((phase, idx) => {
              const isActive = idx === activeYearIndex;
              return (
                <button
                  key={phase.year}
                  onClick={() => setActiveYearIndex(idx)}
                  className="snap-center shrink-0 flex flex-col items-center gap-2 focus:outline-none cursor-pointer"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.15 : 1,
                      borderColor: isActive ? '#00E5FF' : 'rgba(30, 45, 61, 0.8)',
                    }}
                    className={cn(
                      'w-12 h-12 rounded-xl border-2 flex items-center justify-center bg-bg-primary',
                      isActive ? 'border-accent-cyan bg-bg-elevated shadow-cyan-glow' : 'border-border-subtle'
                    )}
                  >
                    <span className={cn(
                      'font-display font-bold text-xs',
                      isActive ? 'text-accent-cyan' : 'text-text-secondary'
                    )}>
                      {phase.year}
                    </span>
                  </motion.div>
                  <span className={cn(
                    'text-[10px] font-mono whitespace-nowrap',
                    isActive ? 'text-accent-cyan font-semibold' : 'text-text-muted'
                  )}>
                    {phase.year === '2021' ? 'Matric' : phase.year === '2026' ? 'Graduate' : `BSc Y${parseInt(phase.year) - 2021}`}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Right Side: Active Phase Details Display (Desktop: 8 cols, Mobile: Full width) */}
        <div className="lg:col-span-8 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYearIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-3xl p-6 md:p-8 border border-border-subtle relative overflow-hidden flex flex-col h-full justify-between"
            >
              {/* Background ambient radial glow depending on the year category */}
              <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent-purple/5 blur-3xl pointer-events-none" />

              <div>
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-border-subtle/50 pb-6 mb-6">
                  <div>
                    <span className="text-xs font-mono text-accent-cyan tracking-widest uppercase">
                      Phase Focus — {activePhase.year}
                    </span>
                    <h3 className="font-display font-bold text-text-primary text-2xl md:text-3xl mt-1 leading-snug">
                      {activePhase.tagline}
                    </h3>
                  </div>
                  <div className="px-4 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan font-mono text-xs font-semibold self-start md:self-center shrink-0">
                    {activePhase.label}
                  </div>
                </div>

                {/* Summary Text */}
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                  {activePhase.summary}
                </p>

                {/* Content Details Grid */}
                <div className="space-y-6">
                  
                  {/* Education details */}
                  {activePhase.education && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border border-border-subtle/80 bg-bg-elevated/30 rounded-2xl p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan shrink-0">
                          <GraduationCap size={20} />
                        </div>
                        <div className="flex-1">
                          <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Education</span>
                          <h5 className="font-display font-bold text-text-primary text-lg mt-0.5">
                            {activePhase.education.institution}
                          </h5>
                          <p className="text-accent-cyan text-sm mt-0.5">
                            {activePhase.education.qualification}
                          </p>
                          <div className="flex items-center gap-4 mt-2.5 text-xs text-text-secondary font-mono">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} className="text-text-muted" />
                              {activePhase.education.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={12} className="text-text-muted" />
                              {activePhase.education.location}
                            </span>
                          </div>

                          {/* Modules List */}
                          {activePhase.education.modules && (
                            <div className="mt-4 pt-4 border-t border-border-subtle/40">
                              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block mb-2">
                                Modules & Focus Areas
                              </span>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {activePhase.education.modules.map((mod) => (
                                  <div key={mod} className="flex items-center gap-1.5 text-xs text-text-secondary font-mono">
                                    <ChevronRight size={12} className="text-accent-cyan/60 shrink-0" />
                                    <span className="truncate">{mod}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Experiences list */}
                  {activePhase.experiences && activePhase.experiences.length > 0 && (
                    <div className="space-y-4">
                      {activePhase.experiences.map((exp) => (
                        <motion.div
                          key={exp.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="border border-border-subtle/80 bg-bg-elevated/30 rounded-2xl p-5"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-accent-blue/10 border border-accent-blue/20 text-accent-blue shrink-0">
                              <Briefcase size={20} />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                <div>
                                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Academic Assistant Role</span>
                                  <h5 className="font-display font-bold text-text-primary text-base mt-0.5">
                                    {exp.title}
                                  </h5>
                                </div>
                                <span className="text-[10px] font-mono text-text-secondary bg-bg-elevated px-2 py-0.5 rounded border border-border-subtle self-start sm:self-center shrink-0">
                                  {exp.period}
                                </span>
                              </div>
                              <p className="text-text-secondary text-xs leading-relaxed mt-2.5">
                                {exp.description}
                              </p>
                              
                              {/* Skills developed */}
                              <div className="flex flex-wrap gap-1.5 mt-3.5">
                                {exp.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="text-[9px] font-mono text-text-muted bg-bg-primary/60 px-2 py-0.5 rounded border border-border-subtle hover:text-accent-cyan transition-colors"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                </div>
              </div>

              {/* Tools learned in this year (Badges) */}
              <div className="mt-8 pt-6 border-t border-border-subtle/50">
                <div className="flex items-center gap-2 mb-3">
                  <Code size={16} className="text-accent-cyan" />
                  <span className="text-xs font-mono uppercase tracking-wider text-text-secondary">
                    Primary Tools & Languages Mastered in {activePhase.year}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {activePhase.tools.map((tool) => (
                    <motion.div
                      key={tool.name}
                      whileHover={{ scale: 1.06, borderColor: 'rgba(0, 229, 255, 0.4)' }}
                      className="flex items-center gap-1.5 px-3 py-1 bg-bg-elevated border border-border-subtle rounded-xl text-xs font-medium text-text-primary shadow-sm hover:shadow-cyan-glow/10 transition-shadow cursor-default"
                    >
                      <span className="text-sm shrink-0">{tool.icon}</span>
                      <span>{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </SectionWrapper>
  );
}
