'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Mic, MessageCircle, Clock, Sparkles, Smartphone } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const nav = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/journal', label: 'Voice journal', icon: Mic },
  { href: '/recall', label: 'Ask memory', icon: MessageCircle },
  { href: '/timeline', label: 'Timeline', icon: Clock },
  { href: '/mobile', label: 'iOS preview', icon: Smartphone },
  { href: '/pricing', label: 'Pricing', icon: Sparkles },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex fixed top-0 left-0 h-screen w-60 bg-bg-surface border-r border-bg-border flex-col p-5 z-50">
      <Link href="/" className="font-serif text-3xl mb-10 px-2 tracking-wide text-ink-primary">
        Kair<span className="text-amber-glow">ō</span>
      </Link>

      <nav className="flex flex-col gap-1">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                active
                  ? 'bg-amber-soft text-amber-glow font-medium'
                  : 'text-ink-secondary hover:bg-bg-raised hover:text-ink-primary'
              }`}
            >
              <Icon size={17} strokeWidth={1.75} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-bg-border space-y-3">
        <ThemeToggle />
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-amber-glow text-bg-base flex items-center justify-center text-sm font-medium">
            AS
          </div>
          <div>
            <div className="text-sm font-medium text-ink-primary">Achyuth</div>
            <div className="text-xs text-amber-glow">Pro plan</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
