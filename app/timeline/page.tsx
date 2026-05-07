'use client';

import { useState } from 'react';
import { memories, Domain } from '../lib/data';
import DomainTag from '../components/DomainTag';

const filters: ('all' | Domain)[] = ['all', 'career', 'health', 'learning', 'relationships', 'money', 'decisions'];

export default function TimelinePage() {
  const [active, setActive] = useState<'all' | Domain>('all');
  const filtered = active === 'all' ? memories : memories.filter((m) => m.domains.includes(active as Domain));

  return (
    <div className="animate-fade-up">
      <div className="mb-10">
        <h1 className="font-serif text-4xl md:text-5xl mb-2 leading-tight">Memory timeline</h1>
        <p className="text-ink-secondary text-base">
          Every check-in, chronologically. {memories.length} memories so far.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all capitalize ${
              active === f
                ? 'bg-amber-glow text-bg-base'
                : 'bg-bg-surface border border-bg-border text-ink-secondary hover:border-amber-deep/40'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="relative pl-7">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-bg-border" />
        {filtered.map((mem, i) => (
          <div key={mem.id} className="relative mb-5 animate-fade-up" style={{ animationDelay: `${i * 40}ms` }}>
            <div className="absolute -left-[27px] top-3 w-3 h-3 rounded-full bg-amber-glow ring-4 ring-bg-base" />
            <div className="text-[10px] uppercase tracking-wider text-ink-tertiary mb-1.5 font-medium">
              {mem.fullDate}
            </div>
            <div className="bg-bg-surface border border-bg-border rounded-xl p-5 hover:border-amber-deep/30 transition-colors">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {mem.domains.map((d) => <DomainTag key={d} domain={d} />)}
              </div>
              <p className="text-[15px] leading-relaxed text-ink-secondary">{mem.text}</p>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-ink-tertiary text-sm">No memories in this domain yet.</div>
        )}
      </div>
    </div>
  );
}
