'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { PERSONAL } from '@/lib/data';
import { fadeUp, staggerContainer } from '@/lib/utils';

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    description: 'Best way to reach me',
    accent: '#00E5FF',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kavier-jogie-2a9614319',
    href: PERSONAL.linkedin,
    description: 'Professional network',
    accent: '#2979FF',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/kavierjogie',
    href: PERSONAL.github,
    description: 'See my code',
    accent: '#00BFA5',
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch("https://formspree.io/f/xwvzyeyj", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("idle");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("idle");
      alert("Network error. Please try again.");
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        label="// 06. contact"
        title="Let&apos;s Work Together"
        subtitle="Open to internships, junior roles, and interesting collaborations. I&apos;d love to hear from you."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left: contact methods */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {CONTACT_METHODS.map(({ icon: Icon, label, value, href, description, accent }) => (
            <motion.a
              key={label}
              variants={fadeUp}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 6, borderColor: `${accent}40` }}
              className="flex items-center gap-5 glass-card rounded-xl p-5 border border-border-subtle transition-all duration-300 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
              >
                <Icon size={20} style={{ color: accent }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-text-muted mb-0.5">{description}</p>
                <p className="font-medium text-text-primary group-hover:text-accent-cyan transition-colors truncate">
                  {value}
                </p>
              </div>
              <span className="text-text-muted group-hover:text-accent-cyan text-lg transition-colors">↗</span>
            </motion.a>
          ))}

          <motion.div
            variants={fadeUp}
            className="p-5 rounded-xl border border-border-subtle bg-bg-elevated"
          >
            <p className="text-xs font-mono text-text-muted mb-2 tracking-widest">RESPONSE TIME</p>
            <p className="text-text-secondary text-sm leading-relaxed">
              I typically respond within <span className="text-text-primary font-medium">24–48 hours</span>.
              For urgent inquiries please use email directly.
            </p>
          </motion.div>
        </motion.div>

        {/* Right: Contact form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 border border-border-subtle"
        >
          {status === 'sent' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-8"
            >
              <CheckCircle2 size={48} className="text-accent-teal mb-4" />
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">Message Sent!</h3>
              <p className="text-text-secondary text-sm">Thank you for reaching out. I&apos;ll get back to you soon.</p>
              <button
                onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}
                className="mt-6 text-sm text-accent-cyan hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                {['name', 'email'].map((field) => (
                  <div key={field}>
                    <label className="block text-xs font-mono text-text-muted mb-1.5 tracking-wider uppercase">
                      {field}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      required
                      value={form[field as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                      className="w-full bg-bg-elevated border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan/50 transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-mono text-text-muted mb-1.5 tracking-wider uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What&apos;s this about?"
                  className="w-full bg-bg-elevated border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-text-muted mb-1.5 tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, role, or just say hi..."
                  className="w-full bg-bg-elevated border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan/50 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 font-display font-semibold text-bg-primary bg-accent-cyan rounded-lg hover:bg-accent-teal transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-cyan-glow"
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-bg-primary border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-xs text-center text-text-muted">
                Or email directly:{' '}
                <a href={`mailto:${PERSONAL.email}`} className="text-accent-cyan hover:underline">
                  {PERSONAL.email}
                </a>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
