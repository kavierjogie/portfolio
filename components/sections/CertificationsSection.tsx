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

function getYear(name: string) {
  return name.match(/\b20\d{2}\b/)?.[0] ?? '—';
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
        label="// 04. certifications"
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
              className="group flex min-h-[214px] flex-col rounded-xl border border-accent-teal/25 bg-bg-card/90 p-5 transition-all duration-300 hover:border-accent-cyan/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70"
            >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent-teal/25 bg-accent-teal/10 text-accent-cyan">
                <Award size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <ExternalLink size={16} className="mt-1 text-text-muted transition-colors group-hover:text-accent-cyan" aria-hidden="true" />
            </div>

            <div className="mt-5 min-w-0">
              <h3 className="break-words font-display text-base font-semibold leading-snug text-text-primary">
                {cert.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                {cert.issuer} <span className="text-text-muted">· {cert.platform}</span>
              </p>
            </div>

            <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-[11px]">
              <span className="rounded-full border border-accent-teal/25 bg-accent-teal/10 px-2.5 py-1 font-medium text-accent-teal">
                {category}
              </span>
              <span className="flex items-center gap-1.5 text-text-muted" aria-label={`Year ${getYear(cert.name)}`}>
                <CalendarDays size={13} aria-hidden="true" />
                {getYear(cert.name)}
              </span>
            </div>
            </motion.a>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
