'use client';

import { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { recallAnswers } from '../lib/data';
import DomainTag from '../components/DomainTag';

export default function RecallPage() {
  const [query, setQuery] = useState('');
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [thinking, setThinking] = useState(false);

  const ask = (key: string) => {
    setQuery(recallAnswers[key].q);
    setThinking(true);
    setActiveKey(null);
    setTimeout(() => {
      setActiveKey(key);
      setThinking(false);
    }, 700);
  };

  const answer = activeKey ? recallAnswers[activeKey] : null;

  return (
    <div className="animate-fade-up">
      <div className="mb-10">
        <h1 className="font-serif text-4xl md:text-5xl mb-2 leading-tight">Ask your memory</h1>
        <p className="text-ink-secondary text-base">
          Query your own history in plain language. Answers come grounded in what you actually said.
        </p>
      </div>

      <div className="relative mb-5">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-tertiary" strokeWidth={1.75} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full bg-bg-surface border border-bg-border rounded-xl pl-12 pr-4 py-3.5 text-[15px] text-ink-primary placeholder:text-ink-tertiary focus:outline-none focus:border-amber-deep transition-colors"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-xs text-ink-tertiary self-center mr-1">Try:</span>
        {Object.entries(recallAnswers).map(([key, val]) => (
          <button
            key={key}
            onClick={() => ask(key)}
            className="px-3.5 py-1.5 bg-bg-surface border border-bg-border rounded-full text-xs text-ink-secondary hover:bg-amber-soft hover:text-amber-glow hover:border-amber-deep/40 transition-all"
          >
            {val.q}
          </button>
        ))}
      </div>

      {thinking && (
        <div className="bg-bg-surface border border-bg-border rounded-2xl p-6 flex items-center gap-3 animate-fade-up">
          <Sparkles size={16} className="text-amber-glow animate-pulse" />
          <span className="text-sm text-ink-secondary">Searching your memory…</span>
        </div>
      )}

      {answer && !thinking && (
        <div className="bg-bg-surface border border-bg-border rounded-2xl overflow-hidden animate-fade-up">
          <div className="border-l-2 border-amber-glow bg-bg-raised/40 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-amber-glow" />
              <span className="text-[10px] uppercase tracking-wider text-amber-glow font-medium">Kairō remembers</span>
            </div>
            <p className="text-[15px] leading-[1.75] text-ink-primary">{answer.a}</p>
          </div>
          <div className="p-6 border-t border-bg-border">
            <div className="text-[10px] uppercase tracking-wider text-ink-tertiary mb-3 font-medium">
              Grounded in {answer.sources.length} memories
            </div>
            <div className="space-y-2">
              {answer.sources.map((src, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-bg-base rounded-lg border border-bg-border/60">
                  <div className="flex-shrink-0 mt-0.5">
                    <DomainTag domain={src.domain} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-ink-secondary italic truncate">"{src.snippet}"</p>
                  </div>
                  <span className="text-xs text-ink-tertiary flex-shrink-0">{src.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {!answer && !thinking && (
        <div className="text-center py-16 text-ink-tertiary text-sm">
          Pick a question above to see how Kairō reasons over your history.
        </div>
      )}
    </div>
  );
}
