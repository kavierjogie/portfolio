import { cn } from '@/lib/utils';

type BrandVariant = 'joined' | 'frame' | 'monoline';

type BrandLockupProps = {
  variant?: BrandVariant;
  className?: string;
  compact?: boolean;
};

const MARKS: Record<BrandVariant, JSX.Element> = {
  joined: (
    <>
      <path d="M3 3v18M3 12 12.5 3M3 12l9.5 9" />
      <path d="M12.5 3H21v12.5A5.5 5.5 0 0 1 15.5 21h-3" />
    </>
  ),
  frame: (
    <>
      <path d="M3 3v18M3 12 12.5 3M3 12l9.5 9" />
      <path d="M12.5 3H21v13a5 5 0 0 1-5 5h-2.5" />
      <path d="M13 12h5" />
    </>
  ),
  monoline: (
    <>
      <path d="M3 3v18M3 12 12.5 3M3 12l9.5 9" />
      <path d="M12.5 3H21v12.5A5.5 5.5 0 0 1 15.5 21h-3l-2.5-2.5" />
    </>
  ),
};

export default function BrandLockup({ variant = 'joined', className, compact = false }: BrandLockupProps) {
  return (
    <span className={cn('inline-flex items-center text-text-primary', compact ? 'gap-1.5' : 'gap-2', className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className={cn('shrink-0 text-accent-cyan', compact ? 'h-6 w-6' : 'h-7 w-7')}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        {MARKS[variant]}
      </svg>
      <span className="font-display text-[1.05rem] font-semibold tracking-[-0.02em]">
        Jogie<span className="text-accent-cyan">.</span>K
      </span>
    </span>
  );
}