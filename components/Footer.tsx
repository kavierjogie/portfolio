'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL } from '@/lib/data';
import BrandLockup from '@/components/ui/BrandLockup';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-border-subtle mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <BrandLockup compact />
            <p className="mt-1 font-mono text-xs text-text-muted">
              Software Developer | CAPACITI Demand Academy
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6 text-xs font-mono text-text-muted">
            {[
              { label: 'about', href: '#about' },
              { label: 'skills', href: '#skills' },
              { label: 'projects', href: '#projects' },
              { label: 'Timeline', href: '#timeline' },
              { label: 'contact', href: '#contact' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="hover:text-accent-cyan transition-colors capitalize"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social + back-to-top */}
          <div className="flex items-center gap-4">
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
                className="text-text-muted hover:text-accent-cyan transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 p-1.5 text-text-muted hover:text-accent-cyan border border-border-subtle hover:border-accent-cyan/30 rounded transition-all duration-200"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border-subtle text-center">
          <p className="text-xs text-text-muted font-mono">
            © {new Date().getFullYear()} {PERSONAL.name}. Built with Next.js & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
