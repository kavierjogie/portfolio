'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { PRODUCTIVITY_TOOLS, SECONDARY_SKILLS, SKILLS } from '@/lib/data';
import { staggerContainer, fadeUp } from '@/lib/utils';

/* Group skills by category */
const grouped = SKILLS.reduce<Record<string, typeof SKILLS>>((acc, skill) => {
  acc[skill.category] = acc[skill.category] ?? [];
  acc[skill.category].push(skill);
  return acc;
}, {});

function SkillBar({ name, icon, delay }: { name: string; icon: string; delay: number }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center justify-between py-2 px-3 rounded-lg bg-bg-elevated/40 hover:bg-bg-elevated transition"
    >
      <div className="flex items-center gap-2">
        <span role="img" aria-label={name}>{icon}</span>
        <span className="text-sm font-medium text-text-primary">{name}</span>
      </div>
    </motion.div>
  );
}

/* Tech badge for category header */
function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono tracking-widest uppercase text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full mb-4">
      {label}
    </span>
  );
}

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        label="// 02. skills"
        title="What I Work With"
        subtitle="Technologies and tools I use to bring ideas to life."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {Object.entries(grouped).map(([category, skills], catIdx) => (
          <motion.div
            key={category}
            variants={fadeUp}
            whileHover={{ borderColor: 'rgba(0,229,255,0.2)' }}
            className="glass-card rounded-2xl p-4 sm:p-6 border border-border-subtle transition-all duration-300"
          >
            <CategoryBadge label={category} />
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={catIdx * 0.1 + i * 0.08}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-6 text-xs text-text-secondary">
        Also worked with: {SECONDARY_SKILLS.map((skill) => skill.name).join(', ')}.
        {' '}Productivity: {PRODUCTIVITY_TOOLS.join(', ')}.
      </p>
    </SectionWrapper>
  );
}
