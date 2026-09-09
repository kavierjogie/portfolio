'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, FlaskConical, Users } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { fadeUp, staggerContainer } from '@/lib/utils';

const TRAITS = [
  {
    icon: Code2,
    title: 'Software Engineer',
    description: 'Building clean, efficient mobile and desktop applications using Java, Android Studio, and C#.',
  },
  {
    icon: FlaskConical,
    title: 'Researcher',
    description: 'Conducting UI/UX evaluations, data mining studies, and academic research projects.',
  },
  {
    icon: Cpu,
    title: 'Problem Solver',
    description: 'Applying data structures, algorithms, and analytical thinking to real-world challenges.',
  },
  {
    icon: Users,
    title: 'Developer in Training',
    description: 'Currently enrolled in CAPACITI\'s Demand Academy, enhancing full-stack web development and AI integration skills.',
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left: Text */}
        <div>
          <SectionHeading
            label="// 01. about"
            title="Who I Am"
            subtitle="Software Developer Candidate at CAPACITI's Demand Academy, building on a foundation in Computer Science and Information Systems from Nelson Mandela University."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4 text-text-secondary leading-relaxed"
          >
           {[
  `I hold a BSc Honours in Computer Science and Information Systems from Nelson Mandela University, with a background spanning mobile development, software engineering, and data-driven problem solving. I now bring that foundation into CAPACITI's 12-month Demand Academy in Cape Town, where I'm deepening my skills across full-stack web development, AI integration, and modern engineering practices through structured training, industry mentorship, and real-world project exposure.`,

  `My project work reflects where I'm headed — I've built AI-powered web applications using React, Next.js, TypeScript, and Supabase, and I'm particularly drawn to the intersection of clean architecture, thoughtful UX, and practical AI. I approach every project with the same discipline I developed through academic research and four semesters of lab assistance at NMU.`,

  `I'm preparing for industry placement through CAPACITI and am open to collaborations, junior opportunities, and projects where I can contribute meaningfully and keep growing.`,
            ].map((para, i) => (
              <motion.p key={i} variants={fadeUp}>
                {para}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {['React','Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Java',
  'Android',
  'Supabase',
  'AI Integration',
  'Git',
].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: Trait cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3 sm:gap-4"
        >
          {TRAITS.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -4, borderColor: 'rgba(0,229,255,0.3)' }}
              className="glass-card rounded-xl p-4 sm:p-5 border border-border-subtle transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center mb-4 group-hover:bg-accent-cyan/20 transition-colors">
                <Icon size={20} className="text-accent-cyan" />
              </div>
              <h3 className="font-display font-semibold text-text-primary text-sm mb-2">{title}</h3>
              <p className="text-text-secondary text-xs leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
