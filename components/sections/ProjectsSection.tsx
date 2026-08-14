'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Cpu, Layers, AlertCircle } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROJECTS } from '@/lib/data';
import Image from 'next/image';

/* Decorative placeholder image for each project */
function ProjectImagePlaceholder({ accent, category }: { accent: string; category: string }) {
  return (
    <div
      className="relative h-44 rounded-xl overflow-hidden mb-6 flex items-center justify-center shrink-0"
      style={{ background: `linear-gradient(135deg, ${accent}10, ${accent}05)` }}
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(${accent}30 1px, transparent 1px), linear-gradient(90deg, ${accent}30 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      {/* Center dot */}
      <div
        className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-display font-black"
        style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}40` }}
      >
        {category.charAt(0)}
      </div>
      {/* Corner accent */}
      <div
        className="absolute top-3 right-3 text-xs font-mono tracking-widest"
        style={{ color: accent }}
      >
        {category.toUpperCase()}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'challenges'>('overview');

  const selectedProject = PROJECTS.find((p) => p.id === selectedId);

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="// 03. projects"
        title="Things I've Built"
        subtitle="A selection of academic and personal projects that demonstrate my technical range."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`card-container-${project.id}`}
            onClick={() => {
              setSelectedId(project.id);
              setActiveTab('overview');
            }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-2xl p-6 border border-border-subtle hover:border-accent-cyan/30 transition-all duration-300 group flex flex-col cursor-pointer"
            id={`project-${project.id}`}
          >
            {/* Project Image / Placeholder */}
            {project.image ? (
              <motion.div 
                layoutId={`card-image-${project.id}`}
                className="relative h-44 rounded-xl overflow-hidden mb-6 shrink-0"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
              </motion.div>
            ) : (
              <motion.div layoutId={`card-image-${project.id}`}>
                <ProjectImagePlaceholder
                  accent={project.accent}
                  category={project.category}
                />
              </motion.div>
            )}

            <div className="flex items-center justify-between mb-3">
              <span
                className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border"
                style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}10` }}
              >
                {project.category}
              </span>
              {project.featured && (
                <span className="text-[10px] font-mono tracking-widest text-accent-teal">
                  ★ FEATURED
                </span>
              )}
            </div>

            <motion.h3 
              layoutId={`card-title-${project.id}`}
              className="font-display font-bold text-text-primary text-lg mb-3 leading-tight group-hover:text-accent-cyan transition-colors"
            >
              {project.title}
            </motion.h3>

            <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono text-text-muted bg-bg-elevated px-2 py-0.5 rounded border border-border-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span className="text-xs font-semibold text-accent-cyan flex items-center gap-1 mt-auto">
              Read Technical Case Study &rarr;
            </span>
          </motion.div>
        ))}
      </div>

      {/* Shared Layout Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Expanded Modal Box */}
            <motion.div
              layoutId={`card-container-${selectedProject.id}`}
              className="relative w-full max-w-2xl bg-bg-primary border border-border-subtle rounded-2xl overflow-hidden shadow-card-hover z-10 flex flex-col max-h-[85vh]"
            >
              {/* Image banner or decorative top bar */}
              {selectedProject.image ? (
                <motion.div 
                  layoutId={`card-image-${selectedProject.id}`}
                  className="relative h-60 w-full shrink-0"
                >
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/45 to-transparent" />
                </motion.div>
              ) : (
                <motion.div layoutId={`card-image-${selectedProject.id}`} className="shrink-0">
                  <div
                    className="h-28 w-full"
                    style={{ background: `linear-gradient(135deg, ${selectedProject.accent}15, ${selectedProject.accent}05)` }}
                  />
                </motion.div>
              )}

              {/* Close Button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black/90 border border-border-subtle hover:border-accent-cyan text-text-secondary hover:text-accent-cyan rounded-full transition-all duration-200"
              >
                <X size={18} />
              </button>

              {/* Content Panel */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
                <div>
                  <span
                    className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border inline-block mb-3"
                    style={{ color: selectedProject.accent, borderColor: `${selectedProject.accent}40`, background: `${selectedProject.accent}10` }}
                  >
                    {selectedProject.category}
                  </span>
                  <motion.h3 
                    layoutId={`card-title-${selectedProject.id}`}
                    className="font-display font-bold text-text-primary text-2xl md:text-3xl leading-tight"
                  >
                    {selectedProject.title}
                  </motion.h3>
                </div>

                {/* Tab select bar */}
                <div className="flex border-b border-border-subtle gap-4 text-xs font-mono select-none shrink-0">
                  {[
                    { id: 'overview', label: 'Overview', icon: Cpu },
                    { id: 'architecture', label: 'Architecture', icon: Layers },
                    { id: 'challenges', label: 'Challenges', icon: AlertCircle },
                  ].map((tab) => {
                    const TabIcon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`pb-3 flex items-center gap-1.5 relative ${
                          activeTab === tab.id ? 'text-accent-cyan font-bold' : 'text-text-muted hover:text-text-secondary'
                        }`}
                      >
                        <TabIcon size={14} />
                        {tab.label}
                        {activeTab === tab.id && (
                          <motion.div
                            layoutId="activeTabIndicator"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-cyan"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Tab content output */}
                <div className="text-text-secondary text-sm leading-relaxed min-h-[140px]">
                  {activeTab === 'overview' && (
                    <div className="space-y-4">
                      <p>{selectedProject.description}</p>
                      {selectedProject.details && <p className="border-l-2 border-accent-cyan/30 pl-4 italic text-xs">{selectedProject.details.overview}</p>}
                    </div>
                  )}
                  {activeTab === 'architecture' && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-text-primary">System Composition:</h4>
                      <p>{selectedProject.details?.architecture || 'Detailed system design specification coming soon.'}</p>
                    </div>
                  )}
                  {activeTab === 'challenges' && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-text-primary">Key Roadblocks & Solutions:</h4>
                      <p>{selectedProject.details?.challenges || 'Refined details on algorithmic complexity solutions coming soon.'}</p>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 shrink-0">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-text-muted bg-bg-elevated px-2 py-0.5 rounded border border-border-subtle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action bar */}
              <div className="p-4 bg-bg-elevated/40 border-t border-border-subtle flex gap-4 shrink-0">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-text-primary border border-border-subtle px-4 py-2.5 rounded-lg hover:border-text-muted transition-all duration-200"
                >
                  <Github size={14} /> GitHub
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold flex-1 justify-center transition-all duration-200 rounded-lg py-2.5 px-4"
                  style={{ color: selectedProject.accent, background: `${selectedProject.accent}15`, border: `1px solid ${selectedProject.accent}30` }}
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
