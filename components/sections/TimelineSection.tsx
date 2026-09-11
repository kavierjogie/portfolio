'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  Wrench,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { CERTIFICATIONS, TIMELINE } from '@/lib/data';
import { cn } from '@/lib/utils';

type TimelineItemData = {
  id: string;
  title: string;
  organization: string;
  date: string;
  meta?: string;
  location?: string;
  status?: string;
  description?: string;
  bullets?: string[];
  technologies?: string[];
  link?: string;
  icon: 'work' | 'education' | 'certification';
};

function buildTimelineData() {
  const work: TimelineItemData[] = TIMELINE.flatMap((phase) =>
    (phase.experiences ?? []).map((experience) => ({
      id: `${phase.year}-${experience.title}`,
      title: experience.title,
      organization: experience.organization ?? 'Nelson Mandela University',
      date: experience.period,
      meta: experience.type,
      location: experience.location,
      status: experience.status,
      description: experience.description,
      bullets: experience.bullets,
      technologies: experience.skills,
      icon: 'work' as const,
    })),
  ).reverse();

  const educationByKey = new Map<string, TimelineItemData>();
  TIMELINE.forEach((phase) => {
    if (!phase.education) return;

    const education = phase.education;
    const key = `${education.institution}-${education.qualification}-${education.period}`;
    const existing = educationByKey.get(key);
    const phaseDescription = `${phase.label}: ${phase.summary}`;
    const modules = [...(education.modules ?? [])];

    if (existing) {
      existing.description = `${existing.description} ${phaseDescription}`;
      existing.bullets = Array.from(new Set([...(existing.bullets ?? []), ...modules]));
      existing.technologies = Array.from(new Set([...(existing.technologies ?? []), ...phase.tools.map((tool) => tool.name)]));
    } else {
      educationByKey.set(key, {
        id: key,
        title: education.qualification,
        organization: education.institution,
        date: education.period,
        meta: education.location,
        description: phaseDescription,
        bullets: education.activities ? [education.activities, ...modules] : modules,
        technologies: phase.tools.map((tool) => tool.name),
        icon: 'education',
      });
    }
  });

  const education = Array.from(educationByKey.values()).reverse();
  const excludedTimelineCertifications = new Set([
    'Artificial Intelligence Bootcamp (AI)',
    'Google AI Essentials',
    'Working with the OpenAI API',
    'Introduction to Power BI',
    'Introduction to GitHub Concepts',
    'AI for Project Managers',
    'AI for Software Engineering',
    'AI for Business Analysts',
    'AI Skills Fest 2026',
  ]);

  const certifications: TimelineItemData[] = CERTIFICATIONS.filter(
    (certification) => !excludedTimelineCertifications.has(certification.name),
  ).map((certification) => ({
    id: certification.name,
    title: certification.name,
    organization: `${certification.issuer} · ${certification.platform}`,
    date: 'Credential',
    link: certification.verification,
    icon: 'certification',
  }));

  return { work, education: [...education, ...certifications] };
}

function TimelineItem({ item, defaultExpanded = false }: { item: TimelineItemData; defaultExpanded?: boolean }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const detailsId = `${item.id.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}-details`;
  const Icon = item.icon === 'work' ? BriefcaseBusiness : item.icon === 'education' ? BookOpen : Award;

  const toggle = () => setIsExpanded((expanded) => !expanded);

  return (
    <article
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-controls={detailsId}
      onClick={toggle}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggle();
        }
      }}
      className={cn(
        'group relative ml-5 cursor-pointer rounded-2xl border border-transparent py-1 pl-7 pr-2 outline-none transition-all duration-300',
        'hover:border-border-subtle/70 hover:bg-bg-elevated/30 focus-visible:border-accent-cyan/60 focus-visible:bg-bg-elevated/30',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute -left-[7px] top-4 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-bg-primary bg-accent-cyan shadow-[0_0_12px_rgba(0,229,255,0.6)] transition-all duration-300',
          isExpanded && 'scale-125 bg-accent-green shadow-[0_0_16px_rgba(16,185,129,0.65)]',
        )}
      />

      <div className="flex items-start gap-3">
        <div className="mt-0.5 hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent-cyan/15 bg-accent-cyan/5 text-accent-cyan sm:flex">
          <Icon size={15} strokeWidth={1.8} />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-display text-sm font-bold leading-snug text-text-primary transition-colors group-hover:text-accent-cyan sm:text-base">
            {item.title}
          </h4>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <p className="text-xs font-medium text-text-secondary">{item.organization}</p>
            {item.status && (
              <span className="rounded-full border border-accent-green/30 bg-accent-green/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent-green">
                {item.status}
              </span>
            )}
          </div>
          {item.meta && <p className="mt-1 text-[11px] text-text-muted">{item.meta}</p>}
          {item.location && <p className="mt-1 text-[11px] text-text-muted">{item.location}</p>}
          <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-text-muted">{item.date}</p>
        </div>
        <ChevronDown
          aria-hidden="true"
          size={17}
          className={cn('mt-2 shrink-0 text-text-muted transition-transform duration-300', isExpanded && 'rotate-180 text-accent-cyan')}
        />
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={detailsId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pb-3 pl-0 pt-4 text-xs leading-relaxed text-text-secondary sm:pl-11">
              {item.description && <p>{item.description}</p>}

              {item.bullets && item.bullets.length > 0 && (
                <ul className="space-y-1.5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <Wrench size={13} className="mr-1 text-accent-cyan" />
                  {item.technologies.map((technology) => (
                    <span key={technology} className="rounded-md border border-border-subtle bg-bg-primary/60 px-2 py-1 font-mono text-[10px] text-text-secondary">
                      {technology}
                    </span>
                  ))}
                </div>
              )}

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent-cyan underline-offset-4 hover:underline"
                >
                  View credential <ExternalLink size={12} />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

function TimelineColumn({ title, items, icon: ColumnIcon }: { title: string; items: TimelineItemData[]; icon: typeof BriefcaseBusiness }) {
  return (
    <div className="min-w-0">
      <div className="mb-7 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan">
          <ColumnIcon size={17} />
        </div>
        <h3 className="font-display text-lg font-bold text-text-primary">{title}</h3>
      </div>

      <div className="relative space-y-3 border-l border-accent-cyan/20 pb-2">
        {items.map((item, index) => (
          <TimelineItem key={item.id} item={item} defaultExpanded={title === 'Work Experience' && index === 0} />
        ))}
      </div>
    </div>
  );
}

export default function TimelineSection() {
  const { work, education } = buildTimelineData();

  return (
    <SectionWrapper id="timeline" className="relative">
      <SectionHeading
        label="// 04. career timeline"
        title="My Journey & Growth"
        subtitle="A concise view of my experience, education, and credentials. Select any entry to explore the details."
      />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
        <TimelineColumn title="Work Experience" items={work} icon={BriefcaseBusiness} />
        <TimelineColumn title="Education" items={education} icon={GraduationCap} />
      </div>
    </SectionWrapper>
  );
}
