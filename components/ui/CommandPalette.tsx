'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Hash, FileText, CornerDownLeft, Sparkles, Mail, Github, Linkedin } from 'lucide-react';
import { PERSONAL, PROJECTS } from '@/lib/data';

interface CommandItem {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  category: 'Navigation' | 'Actions' | 'Social' | 'Fun';
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Toggle Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const items: CommandItem[] = [
    // Navigation
    { icon: Hash, title: 'Go to About', subtitle: 'Who I am and my traits', category: 'Navigation', action: () => scrollToSection('about') },
    { icon: Hash, title: 'Go to Skills', subtitle: 'What technologies I use', category: 'Navigation', action: () => scrollToSection('skills') },
    { icon: Hash, title: 'Go to Projects', subtitle: 'Explore things I\'ve built', category: 'Navigation', action: () => scrollToSection('projects') },
    { icon: Hash, title: 'Go to Timeline', subtitle: 'My academic & career growth', category: 'Navigation', action: () => scrollToSection('timeline') },
    { icon: Hash, title: 'Go to Contact', subtitle: 'Get in touch with me', category: 'Navigation', action: () => scrollToSection('contact') },
    
    // Actions
    { icon: FileText, title: 'Download CV', subtitle: 'Get Kavier\'s latest resume', category: 'Actions', action: () => triggerCVDownload(), shortcut: 'DL' },
    { icon: Mail, title: 'Send Email', subtitle: 'kavier.jogie@gmail.com', category: 'Actions', action: () => window.open(`mailto:${PERSONAL.email}`) },
    
    // Social
    { icon: Github, title: 'Visit GitHub', subtitle: 'kavierjogie007', category: 'Social', action: () => window.open(PERSONAL.github, '_blank') },
    { icon: Linkedin, title: 'Visit LinkedIn', subtitle: 'Professional Profile', category: 'Social', action: () => window.open(PERSONAL.linkedin, '_blank') },
    
    // Fun
    { icon: Sparkles, title: '/coffee', subtitle: 'Buy me a virtual coffee', category: 'Fun', action: () => alert('☕ Coffee brewed! Thank you for visiting!') },
    { icon: Sparkles, title: '/matrix', subtitle: 'Unleash the terminal grid rain', category: 'Fun', action: () => triggerMatrixRain() },
  ];

  // Add project search results dynamically
  PROJECTS.forEach(project => {
    items.push({
      icon: FileText,
      title: `View Project: ${project.title}`,
      subtitle: `Built with ${project.tags.join(', ')}`,
      category: 'Projects' as any,
      action: () => {
        scrollToSection('projects');
        setTimeout(() => {
          const el = document.getElementById(`project-${project.id}`);
          el?.classList.add('ring-2', 'ring-accent-cyan', 'duration-500');
          setTimeout(() => el?.classList.remove('ring-2', 'ring-accent-cyan'), 2000);
        }, 800);
      }
    });
  });

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const triggerCVDownload = () => {
    setIsOpen(false);
    const link = document.createElement('a');
    link.href = PERSONAL.cvUrl;
    link.download = 'Kavier_Jogie_CV.pdf';
    link.click();
  };

  const triggerMatrixRain = () => {
    setIsOpen(false);
    // Dispatches custom event to trigger a digital rain background layer
    window.dispatchEvent(new CustomEvent('trigger-matrix'));
  };

  // Keyboard navigation inside list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  // Keep selected item visible in scroll view
  useEffect(() => {
    if (listRef.current) {
      const selectedElement = listRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  return (
    <>
      {/* Floating search button in screen corner */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 p-3.5 bg-bg-elevated/80 border border-border-subtle hover:border-accent-cyan/45 text-text-secondary hover:text-accent-cyan rounded-full shadow-cyan-glow backdrop-blur-md transition-all duration-300 group"
        title="Search Command Palette (Ctrl+K)"
      >
        <Search size={20} className="group-hover:scale-110 transition-transform duration-200" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 sm:px-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-lg glass-card border border-border-subtle rounded-2xl overflow-hidden shadow-card-hover z-10"
            >
              {/* Input Bar */}
              <div className="flex items-center gap-3 px-4 border-b border-border-subtle py-3.5 bg-bg-elevated/40">
                <Search className="text-text-muted shrink-0 animate-pulse" size={18} />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command or search sections..."
                  className="w-full bg-transparent border-0 text-text-primary placeholder:text-text-muted outline-none text-sm font-sans"
                />
                <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-0.5 rounded border border-border-subtle bg-bg-elevated px-1.5 font-mono text-[9px] font-medium text-text-muted leading-none">
                  ESC
                </kbd>
              </div>

              {/* Suggestions List */}
              <div className="max-h-[320px] overflow-y-auto p-2" ref={listRef}>
                {filteredItems.length === 0 ? (
                  <div className="py-12 text-center text-sm text-text-muted">
                    No results found for &ldquo;<span className="text-text-secondary">{query}</span>&rdquo;
                  </div>
                ) : (
                  filteredItems.map((item, idx) => {
                    const Icon = item.icon;
                    const isSelected = idx === selectedIndex;
                    return (
                      <div
                        key={item.title}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                          isSelected
                            ? 'bg-accent-cyan/10 border-l-2 border-accent-cyan pl-4'
                            : 'bg-transparent border-l-2 border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg transition-colors ${
                            isSelected ? 'bg-accent-cyan/20 text-accent-cyan' : 'bg-bg-elevated text-text-muted'
                          }`}>
                            <Icon size={16} />
                          </div>
                          <div>
                            <p className={`text-xs font-semibold ${isSelected ? 'text-accent-cyan' : 'text-text-primary'}`}>
                              {item.title}
                            </p>
                            <p className="text-[10px] text-text-secondary mt-0.5">{item.subtitle}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {item.shortcut && (
                            <span className="text-[9px] font-mono text-text-muted px-1.5 py-0.5 bg-bg-elevated rounded border border-border-subtle">
                              {item.shortcut}
                            </span>
                          )}
                          {isSelected && (
                            <span className="text-[10px] text-accent-cyan flex items-center gap-1 font-mono">
                              run <CornerDownLeft size={10} />
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Status Footer */}
              <div className="px-4 py-2 bg-bg-elevated/65 border-t border-border-subtle flex items-center justify-between text-[10px] text-text-muted font-mono">
                <span className="flex items-center gap-1">
                  Use keys <span className="font-bold">↑↓</span> to navigate
                </span>
                <span>
                  Hit <kbd className="border border-border-subtle px-1 rounded">Enter</kbd> to select
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
