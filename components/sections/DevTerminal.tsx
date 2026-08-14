'use client';

import { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu } from 'lucide-react';
import { PERSONAL, SKILLS, PROJECTS } from '@/lib/data';

interface LogLine {
  type: 'input' | 'output' | 'error' | 'success';
  text: string;
}

export default function DevTerminal() {
  const [history, setHistory] = useState<LogLine[]>([
    { type: 'output', text: 'Welcome to KavierJogie CLI v1.0.0' },
    { type: 'output', text: 'Type "help" to see list of available commands.' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    const newLogs = [...history, { type: 'input' as const, text: `guest@kavier-jogie:~$ ${cmdStr}` }];

    if (!trimmed) {
      setHistory(newLogs);
      return;
    }

    const args = trimmed.split(' ');
    const command = args[0];

    switch (command) {
      case 'help':
        newLogs.push(
          { type: 'output', text: 'Available commands:' },
          { type: 'success', text: '  about      — Display brief biography & info' },
          { type: 'success', text: '  skills     — Show technical skills matrix' },
          { type: 'success', text: '  projects   — List key academic and mobile projects' },
          { type: 'success', text: '  contact    — Print email, GitHub, and LinkedIn links' },
          { type: 'success', text: '  clear      — Clean the command screen history' },
          { type: 'success', text: '  matrix     — Trigger neon background matrix' }
        );
        break;
      case 'about':
        newLogs.push(
          { type: 'output', text: `Honours Graduate: ${PERSONAL.name}` },
          { type: 'output', text: `Degree: ${PERSONAL.degree}` },
          { type: 'output', text: `Focus: Mobile development, software engineering, and data science.` }
        );
        break;
      case 'skills':
        const skillList = SKILLS.map(s => `${s.icon} ${s.name}`).join(' | ');
        newLogs.push({ type: 'output', text: `Tech Stack: ${skillList}` });
        break;
      case 'projects':
        newLogs.push({ type: 'output', text: 'Key Projects Developed:' });
        PROJECTS.forEach(proj => {
          newLogs.push({ type: 'success', text: `• [${proj.category}] ${proj.title} (Built using: ${proj.tags.join(', ')})` });
        });
        break;
      case 'contact':
        newLogs.push(
          { type: 'output', text: `Email: ${PERSONAL.email}` },
          { type: 'output', text: `GitHub: ${PERSONAL.github}` },
          { type: 'output', text: `LinkedIn: ${PERSONAL.linkedin}` }
        );
        break;
      case 'clear':
        setHistory([]);
        setInputValue('');
        return;
      case 'matrix':
        window.dispatchEvent(new CustomEvent('trigger-matrix'));
        newLogs.push({ type: 'success', text: 'Matrix mode toggled. Look at the background!' });
        break;
      case 'sudo':
        if (args[1] === 'rm' && trimmed.includes('-rf')) {
          newLogs.push(
            { type: 'error', text: '⚠️ [SYSTEM ALERT] CRITICAL ACTION REFUSED' },
            { type: 'error', text: 'Permission denied: Cannot delete developer assets. Nice try though!' }
          );
        } else {
          newLogs.push({ type: 'error', text: 'Access denied. You are not in the sudoers file. This incident will be reported.' });
        }
        break;
      default:
        newLogs.push({ type: 'error', text: `Command not found: "${command}". Try typing "help" for a list of actions.` });
    }

    setHistory(newLogs);
    setInputValue('');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Terminal className="text-accent-cyan" size={22} />
        <h2 className="font-display font-bold text-xl text-text-primary">Interactive Sandbox CLI</h2>
      </div>

      <div className="w-full h-[400px] rounded-2xl glass-card border border-border-subtle flex flex-col overflow-hidden font-mono text-xs shadow-card-hover">
        {/* Terminal Header */}
        <div className="bg-bg-elevated px-4 py-3 flex items-center justify-between border-b border-border-subtle select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-text-muted text-[10px] tracking-wider uppercase font-semibold flex items-center gap-1.5">
            <Cpu size={12} className="text-accent-teal" /> kavier-terminal.sh
          </span>
          <div className="w-14" />
        </div>

        {/* Console logs output */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 select-text scrollbar-thin">
          {history.map((line, idx) => (
            <div
              key={idx}
              className={
                line.type === 'input'
                  ? 'text-text-primary font-bold'
                  : line.type === 'error'
                  ? 'text-red-400 font-medium'
                  : line.type === 'success'
                  ? 'text-accent-teal'
                  : 'text-text-secondary'
              }
            >
              {line.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input prompt bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputValue);
          }}
          className="flex items-center border-t border-border-subtle bg-bg-elevated/35 px-4 py-3 gap-2"
        >
          <span className="text-accent-cyan font-bold select-none">guest@kavier-jogie:~$</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-transparent text-text-primary border-none outline-none caret-accent-cyan w-full font-mono text-xs"
            placeholder="Type a command (e.g. skills, projects)..."
            autoFocus={false}
          />
        </form>
      </div>
    </section>
  );
}
