'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { fadeUp, staggerContainer } from '@/lib/utils';

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Left: Text */}
        <div>
          <SectionHeading
            label="// 01. about"
            title="Who I Am"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4 text-text-secondary leading-relaxed"
          >
            {[
              "I'm a Computer Science Honours graduate from Nelson Mandela University, currently completing CAPACITI's 12-month Demand Academy as a Software Developer Candidate in Cape Town. My degree focused on mobile development, software engineering, and data systems — including four semesters as a lab assistant and research work in UI/UX evaluation and data mining.",
              "At CAPACITI I'm building full-stack web and AI-integrated applications with React, Next.js, TypeScript, and Supabase. I'm looking for a junior developer role where I can keep building production-grade software and go deeper into AI-assisted tooling.",
            ].map((para, i) => (
              <motion.p key={i} variants={fadeUp}>
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Right: Photo (original file, sized via CSS only) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-xs lg:max-w-sm aspect-[4/5] overflow-hidden rounded-lg border border-border-subtle shadow-cyan-glow"
        >
          <Image
            src="/kavier-jogie-graduation.jpeg"
            alt="Kavier Jogie at his Nelson Mandela University graduation"
            fill
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 280px"
            className="object-cover object-[50%_25%]"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
