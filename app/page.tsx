'use client';

import Link from 'next/link';
import { Sparkles, Flame, ArrowRight } from 'lucide-react';
import DomainTag from './components/DomainTag';

export default function Home() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const today = 6; // Sunday

  return (
    <div className="animate-fade-up">
      <div className="mb-10">
        <h1 className="font-serif text-4xl md:text-5xl mb-2 leading-tight">
          Good evening, <span className="text-amber-glow">Achyuth</span>
        </h1>
        <p className="text-ink-secondary text-base">
          You have a 7-day streak. Your memory is growing.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <Stat label="Memories captured" value="247" />
        <Stat label="Current streak" value="7" suffix="days" accent />
        <Stat label="Domains tracked" value="6" />
      </div>

      {/* Day-3 recall card */}
      <div className="bg-bg-surface border border-bg-border rounded-2xl p-6 mb-4 hover:border-amber-deep/40 transition-colors group">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles size={16} className="text-amber-glow" strokeWidth={1.75} />
          <h3 className="text-sm font-medium">A memory from 3 days ago</h3>
        </div>
        <div className="flex gap-2 mb-3">
          <DomainTag domain="career" />
          <DomainTag domain="decisions" />
          <span className="text-xs text-ink-tertiary self-center">Mon, May 5</span>
        </div>
        <p className="text-ink-secondary text-[15px] leading-relaxed mb-4">
          "I figured out that the standup goes way faster when I write my updates the night before. Less rambling, more clarity. Should keep doing this — front-loading clarity is a pattern that keeps paying off."
        </p>
        <Link
          href="/recall"
          className="inline-flex items-center gap-1.5 text-sm text-amber-glow hover:text-amber-glow/80 transition-colors"
        >
          Ask Kairō about this
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Streak card */}
      <div className="bg-bg-surface border border-bg-border rounded-2xl p-6 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Flame size={16} className="text-amber-glow" strokeWidth={1.75} />
          <h3 className="text-sm font-medium">This week's streak</h3>
        </div>
        <div className="flex gap-2 mb-4">
          {days.map((d, i) => (
            <div
              key={i}
              className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-medium transition-colors ${
                i === today
                  ? 'bg-amber-glow text-bg-base'
                  : i < today
                  ? 'bg-amber-soft text-amber-glow'
                  : 'bg-bg-raised text-ink-tertiary'
              }`}
            >
              {d}
            </div>
          ))}
        </div>
        <p className="text-xs text-ink-tertiary mb-4">
          5 minutes today keeps the streak alive.
        </p>
        <Link
          href="/journal"
          className="inline-block bg-amber-glow text-bg-base px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-amber-glow/90 transition-colors"
        >
          Start today's check-in
        </Link>
      </div>

      {/* Weekly digest preview */}
      <div className="bg-bg-surface border border-bg-border rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium">This week's digest</h3>
          <span className="text-xs text-ink-tertiary">Sunday · Auto-generated</span>
        </div>
        <div className="space-y-3 text-[14px] text-ink-secondary leading-relaxed">
          <DigestLine
            label="Pattern detected"
            text="You consistently performed better the day after sleeping 7.5+ hours."
          />
          <DigestLine
            label="Open question"
            text="You deflected when your mom asked about post-graduation plans. Worth revisiting."
          />
          <DigestLine
            label="Decision made"
            text="Going with hybrid retrieval (BGE + BM25) for Kairō. Choice grounded in your own corpus tests."
          />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, suffix, accent }: { label: string; value: string; suffix?: string; accent?: boolean }) {
  return (
    <div className="bg-bg-surface border border-bg-border rounded-xl p-4">
      <div className="text-xs text-ink-tertiary mb-2">{label}</div>
      <div className="font-serif text-3xl">
        <span className={accent ? 'text-amber-glow' : ''}>{value}</span>
        {suffix && <span className="text-base text-ink-secondary ml-1.5 font-sans">{suffix}</span>}
      </div>
    </div>
  );
}

function DigestLine({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex gap-3">
      <span className="text-[10px] uppercase tracking-wider text-amber-glow/80 font-medium pt-1 min-w-[100px]">
        {label}
      </span>
      <span className="flex-1">{text}</span>
    </div>
  );
}
