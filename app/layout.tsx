import type { Metadata } from 'next';
// The stylesheet is processed by Next.js at build time; TypeScript may not
// have a declaration for CSS side-effect imports in some configurations.
// @ts-ignore -- handled by Next.js' CSS loader
import './globals.css';

export const metadata: Metadata = {
  title: 'Jogie.K | Software Developer',

  description:
    'Software Developer Candidate at CAPACITI, specialising in full-stack web development, AI integration, and modern software engineering.',

  keywords: [
    'portfolio',
    'software developer',
    'full-stack developer',
    'AI integration',
    'web development',
    'CAPACITI',
    'Java',
    'TypeScript',
    'React',
    'Next.js',
  ],

  openGraph: {
    title: 'Jogie.K | Software Developer',
    description:
      'Software Developer Candidate at CAPACITI, specialising in full-stack web development, AI integration, and modern software engineering.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-body bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
