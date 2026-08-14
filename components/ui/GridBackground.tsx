'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Decorative dot-grid background with three radial gradient orbs
 * giving the page depth and atmosphere.
 * Includes a hidden Matrix rain canvas overlay easter egg.
 */
export default function GridBackground() {
  const [showMatrix, setShowMatrix] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleTrigger = () => setShowMatrix((prev) => !prev);
    window.addEventListener('trigger-matrix', handleTrigger);
    return () => window.removeEventListener('trigger-matrix', handleTrigger);
  }, []);

  useEffect(() => {
    if (!showMatrix) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize) + 1;
    const YPositions = Array(columns).fill(0).map(() => Math.floor(Math.random() * -100));

    const chars = '0101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()_+{}|:<>?';

    const draw = () => {
      // Semi-transparent dark background to create trail
      ctx.fillStyle = 'rgba(8, 11, 18, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < YPositions.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = YPositions[i];

        // Cyan coloring with random bright white leading drops
        if (Math.random() > 0.98) {
          ctx.fillStyle = '#FFFFFF';
        } else {
          ctx.fillStyle = '#00E5FF';
        }

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          YPositions[i] = 0;
        } else {
          YPositions[i] = y + fontSize;
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [showMatrix]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-bg-primary" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #1E2D3D 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent-cyan/5 blur-[120px]" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-accent-purple/5 blur-[80px]" />

      {/* Matrix Rain Canvas */}
      {showMatrix && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-45 pointer-events-none"
        />
      )}
    </div>
  );
}
