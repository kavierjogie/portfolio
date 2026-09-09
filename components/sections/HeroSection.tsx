'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { PERSONAL } from '@/lib/data';

/* Animated typing cursor */
function BlinkCursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1.2, repeat: Infinity }}
      className="inline-block w-0.5 h-[1em] bg-accent-cyan ml-1 align-middle"
    />
  );
}

/* Individual letter with stagger animation */
function AnimatedName({ name }: { name: string }) {
  return (
    <span aria-label={name} className="inline-flex flex-wrap">
      {name.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={char === ' ' ? 'mr-4' : ''}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-start px-4 pt-28 pb-16 sm:min-h-screen sm:justify-center sm:px-6 sm:pt-20 sm:pb-0 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex max-w-full items-center gap-2 px-3 py-1.5 mb-6 sm:mb-8 rounded-full border border-accent-teal/30 bg-accent-teal/5 text-[10px] sm:text-xs font-mono tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal" />
            </span>
            AVAILABLE FOR INTERNSHIPS & JUNIOR ROLES
          </motion.div>

          {/* Main heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5 sm:mb-6">
            <AnimatedName name={PERSONAL.name} />
            <BlinkCursor />
          </h1>

          {/* Role / title line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <div className="h-px w-8 bg-accent-cyan" />
            <p className="font-mono text-accent-cyan text-sm tracking-widest uppercase">
              {PERSONAL.role}
            </p>
          </motion.div>

{/* Intro paragraph */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.6, duration: 0.6 }}
  className="text-text-secondary text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-8 sm:mb-12"
>
  Computer Science graduate at{' '}
  <span className="text-text-primary font-medium">Nelson Mandela University</span>,
  building mobile applications and exploring the intersection of{' '}
  <span className="text-text-primary font-medium">software engineering</span>,{' '}
  <span className="text-text-primary font-medium">UX research</span>, and{' '}
  <span className="text-text-primary font-medium">data science</span>.
</motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="flex flex-col gap-3 mb-10 sm:flex-row sm:flex-wrap sm:gap-4 sm:mb-16"
          >
            <a
              href="#projects"
              className="group relative w-full px-6 py-3 text-center font-display font-semibold text-bg-primary bg-accent-cyan rounded hover:bg-accent-teal transition-all duration-300 clip-tech shadow-cyan-glow sm:w-auto"
            >
              View Projects
              <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>

            <a
              href={PERSONAL.cvUrl}
              download
              className="flex w-full items-center justify-center gap-2 px-6 py-3 font-display font-semibold text-accent-cyan border border-accent-cyan/40 rounded hover:bg-accent-cyan/10 transition-all duration-300 clip-tech sm:w-auto"
            >
              <Download size={16} />
              Download CV
            </a>

            <a
              href="#contact"
              className="w-full px-6 py-3 text-center font-display font-semibold text-text-secondary border border-border-subtle rounded hover:text-text-primary hover:border-text-muted transition-all duration-300 sm:w-auto"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <span className="text-text-muted text-xs font-mono tracking-widest">FIND ME ON</span>
            <div className="flex gap-4">
              {[
                { icon: Github, href: PERSONAL.github, label: 'GitHub' },
                { icon: Linkedin, href: PERSONAL.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${PERSONAL.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-muted hover:text-accent-cyan border border-transparent hover:border-border-subtle rounded transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-muted sm:flex"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      {/* Decorative large text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-display font-black text-white/[0.015] select-none pointer-events-none leading-none hidden xl:block"
        aria-hidden="true"
      >
        DEV
      </div>
    </section>
  );
}
