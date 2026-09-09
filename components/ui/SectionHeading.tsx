'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/utils';

interface SectionHeadingProps {
  label: string;       // Small mono label above the title
  title: string;       // Main heading
  subtitle?: string;   // Optional paragraph below
}

/**
 * Consistent section heading used across all major sections.
 */
export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-14 lg:mb-20">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        {label}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      {/* Decorative accent line */}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 h-px w-16 bg-gradient-to-r from-accent-cyan to-transparent"
      />
    </div>
  );
}
