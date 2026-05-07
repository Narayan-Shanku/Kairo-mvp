import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from './components/ThemeProvider';

const serif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kairō — your second memory',
  description: 'A voice-first personal AI that remembers everything you choose to say. Built on RAG, runs privately.',
  openGraph: {
    title: 'Kairō — your second memory',
    description: 'Speak 5 minutes a day. Get a memory that compounds.',
    type: 'website',
  },
};

// Inline script — runs before React hydrates to prevent theme flash
const themeInitScript = `
  (function() {
    try {
      var t = localStorage.getItem('kairo-theme');
      if (t === 'dark') document.documentElement.classList.add('dark');
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="grain min-h-screen">
        <ThemeProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-0 md:ml-60 px-6 md:px-12 py-8 md:py-12 max-w-5xl">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
