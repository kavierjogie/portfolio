'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, CalendarDays, ExternalLink } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { CERTIFICATIONS } from '@/lib/data';
import { fadeUp, staggerContainer } from '@/lib/utils';

const FILTERS = ['All', 'AI', 'Cloud', 'Development', 'Data', 'Agile', 'DevOps', 'Security', 'Design'] as const;
type CertificationFilter = (typeof FILTERS)[number];

function getCategory(name: string, platform: string): Exclude<CertificationFilter, 'All'> {
  const searchableText = `${name} ${platform}`.toLowerCase();

  if (searchableText.includes('ai') || searchableText.includes('openai')) return 'AI';
  if (searchableText.includes('power bi') || searchableText.includes('data')) return 'Data';
  if (searchableText.includes('github') || searchableText.includes('software')) return 'Development';
  return 'Development';
}

export default function CertificationsSection() {
  const [activeFilter, setActiveFilter] = useState<CertificationFilter>('All');
  const visibleFilters = FILTERS.filter(
    (filter) => filter === 'All' || CERTIFICATIONS.some((cert) => getCategory(cert.name, cert.platform) === filter),
  );
  const filteredCertifications = CERTIFICATIONS.filter((cert) => {
    return activeFilter === 'All' || getCategory(cert.name, cert.platform) === activeFilter;
  });

  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        label="// 05. certifications"
        title="Certifications & Credentials"
        subtitle="Continual learning across AI, software engineering, data analytics, and project management."
      />

      <div className="mb-8 overflow-x-auto pb-2">
        <div className="flex min-w-max gap-2" role="group" aria-label="Filter certifications by category">
          {visibleFilters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70 ${
                  isActive
                    ? 'border-accent-cyan bg-accent-cyan text-bg-primary shadow-[0_0_18px_rgba(0,229,255,0.18)]'
                    : 'border-border-subtle bg-bg-secondary/50 text-text-secondary hover:border-accent-cyan/50 hover:text-text-primary'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredCertifications.map((cert) => {
            const category = getCategory(cert.name, cert.platform);

            return (
            <motion.a
              key={cert.name}
              variants={fadeUp}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              layout
              transition={{ duration: 0.25 }}
              whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0, 229, 255, 0.08)' }}
              href={cert.verification}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[204px] flex-col rounded-xl border border-border-subtle/80 bg-bg-card/90 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/60 hover:bg-bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70 sm:p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-teal/30 bg-accent-teal/10 text-accent-cyan transition-colors group-hover:border-accent-cyan/40 group-hover:bg-accent-cyan/10">
                  <Award size={19} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <ExternalLink size={16} className="mt-1 text-text-muted transition-colors group-hover:text-accent-cyan" aria-hidden="true" />
              </div>

              <div className="mt-4 min-w-0">
                <h3 className="break-words font-display text-lg font-semibold leading-tight text-text-primary">
                {cert.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                  <span className="font-medium text-text-primary/90">{cert.issuer}</span>
                  <span className="mx-1.5 text-text-muted">·</span>
                  {cert.platform}
                </p>
              </div>

              <div className="mt-auto flex items-end justify-between gap-3 border-t border-border-subtle/70 pt-4 text-[11px]">
                <span className="rounded-full border border-accent-teal/25 bg-accent-teal/10 px-2.5 py-1 font-medium text-accent-teal">
                  {category}
                </span>
                {cert.earned && (
                  <span className="flex flex-col items-end gap-0.5 text-text-muted" aria-label={`Date earned ${cert.earned}`}>
                    <span className="flex items-center gap-1.5 uppercase tracking-wider text-[9px] text-text-muted/80">
                      <CalendarDays size={12} aria-hidden="true" />
                      Earned
                    </span>
                    <span className="font-medium text-text-secondary">{cert.earned}</span>
                  </span>
                )}
              </div>
            </motion.a>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
