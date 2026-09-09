import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jogie.K | Software Developer',
  description:
    'Computer Science Honours student at Nelson Mandela University specialising in Java, Android Development, and modern software engineering.',
  keywords: ['portfolio', 'computer science', 'android developer', 'java', 'mobile developer', 'NMU'],
  openGraph: {
    title: 'Jogie.K | CS Student & Mobile Developer',
    description: 'Computer Science Honours student at Nelson Mandela University',
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
