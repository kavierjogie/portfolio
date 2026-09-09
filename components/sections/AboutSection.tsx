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
    title: 'Lab Assistant',
    description: 'Mentoring fellow students in programming labs, building communication and teaching skills.',
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
            subtitle="Honours graduate focused on building impactful software and intuitive digital experiences."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4 text-text-secondary leading-relaxed"
          >
           {[
  `I am a Bachelor of Science Honours graduate in Computer Science and Information Systems from Nelson Mandela University, with a strong focus on mobile development, software engineering, and data-driven problem solving. I thrive at the intersection of clean code, thoughtful design, and analytical thinking.`,

  `My core work involves building Android applications in Java, designing intuitive user experiences, and exploring how data mining techniques can uncover meaningful insights. I bring the same level of discipline and creativity to both academic research and real-world software development.`,

  `Beyond development, I worked as a lab assistant where I guided students through programming concepts and practical challenges. Teaching strengthened my technical communication and problem-solving abilities while reinforcing my passion for continuous learning.`,

  `I am actively seeking graduate opportunities, internships, and junior developer roles where I can contribute to impactful projects, collaborate with talented teams, and continue growing as a software engineer.`,
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
            {['Java','Android',
  'C#',
  'Supabase',
  'Firebase',
  'SQLite',
  'F#',
  'UI/UX'
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
