'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { CERTIFICATIONS } from '@/lib/data';
import { fadeUp, staggerContainer } from '@/lib/utils';

export default function CertificationsSection() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        label="// 04. certifications"
        title="Certifications & Credentials"
        subtitle="Continual learning across AI, software engineering, data analytics, and project management."
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {CERTIFICATIONS.map((cert) => (
          <motion.div
            key={cert.name}
            variants={fadeUp}
            whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
            className="glass-card rounded-xl p-6 border border-border-subtle transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
                {cert.name}
              </h3>
              <p className="text-sm text-text-secondary mb-4">{cert.issuer} ({cert.platform})</p>
            </div>
            <a
              href={cert.verification}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-center text-xs font-medium text-accent-cyan border border-accent-cyan/30 rounded px-3 py-1.5 hover:bg-accent-cyan/10 transition-colors"
            >
              Verify Credential
            </a>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
