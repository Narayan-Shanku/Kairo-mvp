'use client';

import { Mic, MessageCircle, Clock, Sparkles, Flame, ChevronRight, Search, ArrowUp, BarChart3 } from 'lucide-react';
import { Domain, domainColors } from '../lib/data';

const Tag = ({ d }: { d: Domain }) => {
  const c = domainColors[d];
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider ${c.light} ${c.dark}`}>
      {d}
    </span>
  );
};

// ─── HOME SCREEN ──────────────────────────────────────────────────────────
export function MobileHome({ onNav }: { onNav: (s: string) => void }) {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const today = 6;

  return (
    <div className="h-full flex flex-col bg-bg-base">
      <div className="flex-1 overflow-y-auto px-5 pb-24">
        <div className="pt-4 pb-6">
          <p className="text-xs text-ink-tertiary uppercase tracking-wider mb-1">Wednesday, May 7</p>
          <h1 className="font-serif text-3xl leading-tight text-ink-primary">
            Good evening,<br /><span className="text-amber-glow">Achyuth</span>
          </h1>
        </div>

        {/* Streak strip */}
        <div className="bg-bg-surface border border-bg-border rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Flame size={14} className="text-amber-glow" />
              <span className="text-xs font-medium text-ink-primary">7-day streak</span>
            </div>
            <span className="text-[10px] text-ink-tertiary">Keep it alive</span>
          </div>
          <div className="flex gap-1.5">
            {days.map((d, i) => (
              <div
                key={i}
                className={`flex-1 h-7 rounded-md flex items-center justify-center text-[10px] font-medium ${
                  i === today ? 'bg-amber-glow text-bg-base' : i < today ? 'bg-amber-soft text-amber-glow' : 'bg-bg-raised text-ink-tertiary'
                }`}
              >
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* Day-3 recall hero card */}
        <button
          onClick={() => onNav('ask')}
          className="w-full text-left bg-bg-surface border border-bg-border rounded-2xl p-4 mb-4 active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-1.5 mb-2">
            <Sparkles size={12} className="text-amber-glow" />
            <span className="text-[10px] uppercase tracking-wider text-amber-glow font-medium">From 3 days ago</span>
          </div>
          <p className="text-[13px] leading-relaxed text-ink-secondary mb-3">
            "I figured out that standup goes way faster when I write my updates the night before. Less rambling, more clarity."
          </p>
          <div className="flex items-center justify-between">
            <div className="flex gap-1"><Tag d="career" /></div>
            <ChevronRight size={14} className="text-ink-tertiary" />
          </div>
        </button>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { l: 'Memories', v: '247' },
            { l: 'Streak', v: '7' },
            { l: 'Domains', v: '6' },
          ].map((s) => (
            <div key={s.l} className="bg-bg-surface border border-bg-border rounded-xl p-3 text-center">
              <div className="font-serif text-xl text-ink-primary">{s.v}</div>
              <div className="text-[9px] text-ink-tertiary uppercase tracking-wider mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="space-y-2">
          <ActionRow icon={Mic} label="Today's check-in" sub="5 minutes · keeps streak alive" onClick={() => onNav('record')} primary />
          <ActionRow icon={MessageCircle} label="Ask your memory" sub="Query in plain language" onClick={() => onNav('ask')} />
          <ActionRow icon={Clock} label="Browse timeline" sub="247 memories" onClick={() => onNav('timeline')} />
        </div>
      </div>

      <BottomNav active="home" onNav={onNav} />
    </div>
  );
}

function ActionRow({ icon: Icon, label, sub, onClick, primary }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-3.5 rounded-xl active:scale-[0.98] transition-transform ${
        primary ? 'bg-amber-glow text-bg-base' : 'bg-bg-surface border border-bg-border text-ink-primary'
      }`}
    >
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${primary ? 'bg-bg-base/20' : 'bg-amber-soft'}`}>
        <Icon size={16} className={primary ? 'text-bg-base' : 'text-amber-glow'} />
      </div>
      <div className="flex-1 text-left">
        <div className="text-[13px] font-medium">{label}</div>
        <div className={`text-[10px] ${primary ? 'opacity-70' : 'text-ink-tertiary'}`}>{sub}</div>
      </div>
      <ChevronRight size={14} className={primary ? 'opacity-70' : 'text-ink-tertiary'} />
    </button>
  );
}

// ─── RECORD SCREEN ────────────────────────────────────────────────────────
export function MobileRecord({ onNav }: { onNav: (s: string) => void }) {
  return (
    <div className="h-full flex flex-col bg-bg-base">
      <MobileHeader title="Voice journal" onBack={() => onNav('home')} />
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
        <div className="w-32 h-32 rounded-full bg-amber-soft border-2 border-amber-deep flex items-center justify-center mb-6 recording-pulse">
          <Mic size={44} className="text-amber-glow" strokeWidth={1.75} />
        </div>
        <div className="font-mono text-3xl tabular-nums mb-1 text-ink-primary">0:34 <span className="text-ink-tertiary text-lg">/ 5:00</span></div>
        <p className="text-xs text-ink-secondary mb-6">Listening… tap mic to stop</p>
        <div className="w-full bg-bg-surface border border-bg-border rounded-2xl p-4 min-h-[120px]">
          <p className="text-[13px] leading-relaxed text-ink-primary">
            Today I realized the day-three recall mechanic might be the single most important thing in this product. If users hit day three and Kairō surfaces something they actually said
            <span className="inline-block w-[2px] h-3 bg-amber-glow align-middle ml-1 cursor-blink" />
          </p>
        </div>
        <div className="flex items-center gap-2 mt-4 self-start">
          <span className="text-[10px] text-ink-secondary">Auto-detected:</span>
          <Tag d="career" />
          <Tag d="decisions" />
        </div>
      </div>
      <BottomNav active="record" onNav={onNav} />
    </div>
  );
}

// ─── ASK SCREEN ───────────────────────────────────────────────────────────
export function MobileAsk({ onNav }: { onNav: (s: string) => void }) {
  return (
    <div className="h-full flex flex-col bg-bg-base">
      <MobileHeader title="Ask memory" onBack={() => onNav('home')} />
      <div className="flex-1 overflow-y-auto px-4 pb-32">
        {/* User question bubble */}
        <div className="flex justify-end mb-3 mt-2">
          <div className="bg-amber-glow text-bg-base rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] text-[13px]">
            Why does my standup feel smoother lately?
          </div>
        </div>
        {/* AI answer bubble */}
        <div className="flex justify-start mb-2">
          <div className="bg-bg-surface border border-bg-border rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
            <div className="flex items-center gap-1.5 mb-2">
              <Sparkles size={11} className="text-amber-glow" />
              <span className="text-[9px] uppercase tracking-wider text-amber-glow font-medium">Kairō remembers</span>
            </div>
            <p className="text-[13px] leading-relaxed text-ink-primary">
              Two threads in your memory point at the same answer. On May 5 you wrote that prepping standup updates the night before makes them faster. Earlier in April you flagged that morning ambiguity costs you the first hour. Same root cause, both times: front-loading clarity.
            </p>
          </div>
        </div>
        {/* Sources */}
        <div className="ml-2 space-y-1.5 mb-4">
          <SourceCard date="Mon, May 5" snippet="standup goes way faster when I write..." domain="career" />
          <SourceCard date="Mon, Apr 28" snippet="judges asked sharp questions about defensibility..." domain="career" />
        </div>
      </div>
      {/* Input bar */}
      <div className="absolute bottom-16 left-0 right-0 px-4 pb-3 bg-bg-base">
        <div className="flex items-center gap-2 bg-bg-surface border border-bg-border rounded-full pl-4 pr-1 py-1">
          <Search size={13} className="text-ink-tertiary flex-shrink-0" />
          <input
            type="text"
            placeholder="Ask anything..."
            className="flex-1 bg-transparent text-[12px] text-ink-primary placeholder:text-ink-tertiary outline-none py-2"
            readOnly
          />
          <button className="w-7 h-7 bg-amber-glow rounded-full flex items-center justify-center flex-shrink-0">
            <ArrowUp size={12} className="text-bg-base" strokeWidth={2.5} />
          </button>
        </div>
      </div>
      <BottomNav active="ask" onNav={onNav} />
    </div>
  );
}

function SourceCard({ date, snippet, domain }: { date: string; snippet: string; domain: Domain }) {
  return (
    <div className="bg-bg-surface/60 border border-bg-border rounded-lg p-2.5">
      <div className="flex items-center justify-between mb-1">
        <Tag d={domain} />
        <span className="text-[9px] text-ink-tertiary">{date}</span>
      </div>
      <p className="text-[11px] text-ink-secondary italic truncate">"{snippet}"</p>
    </div>
  );
}

// ─── TIMELINE SCREEN ──────────────────────────────────────────────────────
export function MobileTimeline({ onNav }: { onNav: (s: string) => void }) {
  const items = [
    { date: 'Today · 8:14 PM', domains: ['career', 'decisions'] as Domain[], text: 'Pitched Kairō to two classmates today. They got the RAM-vs-ROM metaphor immediately.' },
    { date: 'Yesterday · 9:02 PM', domains: ['learning'] as Domain[], text: 'Compared BGE vs Nomic embeddings on my journal corpus. Going with hybrid retrieval.' },
    { date: 'Mon · 7:45 PM', domains: ['career'] as Domain[], text: 'Standup goes way faster when I write my updates the night before. Less rambling.' },
    { date: 'Sun · 10:11 PM', domains: ['health'] as Domain[], text: 'Slept 7.5 hours last night. Felt sharp through the morning sprint.' },
  ];

  return (
    <div className="h-full flex flex-col bg-bg-base">
      <MobileHeader title="Timeline" onBack={() => onNav('home')} />
      {/* Filter pills */}
      <div className="px-4 pb-3 flex gap-1.5 overflow-x-auto">
        {['All', 'Career', 'Health', 'Learning', 'Money'].map((f, i) => (
          <button
            key={f}
            className={`px-3 py-1 rounded-full text-[10px] font-medium whitespace-nowrap ${
              i === 0 ? 'bg-amber-glow text-bg-base' : 'bg-bg-surface border border-bg-border text-ink-secondary'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-24">
        {items.map((item, i) => (
          <div key={i} className="bg-bg-surface border border-bg-border rounded-xl p-3.5 mb-2.5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-1.5">
                {item.domains.map((d) => <Tag key={d} d={d} />)}
              </div>
              <span className="text-[9px] text-ink-tertiary">{item.date}</span>
            </div>
            <p className="text-[12px] leading-relaxed text-ink-secondary">{item.text}</p>
          </div>
        ))}
      </div>
      <BottomNav active="timeline" onNav={onNav} />
    </div>
  );
}

// ─── WEEKLY DIGEST SCREEN ─────────────────────────────────────────────────
export function MobileDigest({ onNav }: { onNav: (s: string) => void }) {
  return (
    <div className="h-full flex flex-col bg-bg-base">
      <MobileHeader title="Weekly digest" onBack={() => onNav('home')} />
      <div className="flex-1 overflow-y-auto px-5 pb-24">
        <div className="pt-1 pb-4">
          <p className="text-[10px] uppercase tracking-wider text-ink-tertiary mb-1">Sun, May 4 — Sat, May 10</p>
          <h2 className="font-serif text-2xl text-ink-primary leading-tight">A week of clarity emerging</h2>
        </div>
        <DigestCard label="Pattern detected" body="You consistently performed better the day after sleeping 7.5+ hours. Your line is clear." domain="health" />
        <DigestCard label="Open question" body="You deflected when your mom asked about post-graduation plans. Worth revisiting." domain="relationships" />
        <DigestCard label="Decision made" body="Going with hybrid retrieval (BGE + BM25) for Kairō. Choice grounded in your own corpus tests." domain="learning" />
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[{ l: 'Check-ins', v: '7' }, { l: 'Memories', v: '12' }, { l: 'Domains', v: '5' }].map((s) => (
            <div key={s.l} className="bg-bg-surface border border-bg-border rounded-xl p-2.5 text-center">
              <div className="font-serif text-lg text-ink-primary">{s.v}</div>
              <div className="text-[9px] text-ink-tertiary uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="home" onNav={onNav} />
    </div>
  );
}

function DigestCard({ label, body, domain }: { label: string; body: string; domain: Domain }) {
  return (
    <div className="bg-bg-surface border border-bg-border rounded-2xl p-4 mb-2.5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] uppercase tracking-wider text-amber-glow font-medium">{label}</span>
        <Tag d={domain} />
      </div>
      <p className="text-[12px] leading-relaxed text-ink-primary">{body}</p>
    </div>
  );
}

// ─── DOMAIN INSIGHTS SCREEN ──────────────────────────────────────────────
export function MobileInsights({ onNav }: { onNav: (s: string) => void }) {
  const domains: { d: Domain; count: number }[] = [
    { d: 'career', count: 68 },
    { d: 'learning', count: 54 },
    { d: 'health', count: 42 },
    { d: 'decisions', count: 35 },
    { d: 'money', count: 28 },
    { d: 'relationships', count: 20 },
  ];
  const max = Math.max(...domains.map((x) => x.count));

  return (
    <div className="h-full flex flex-col bg-bg-base">
      <MobileHeader title="Domain insights" onBack={() => onNav('home')} />
      <div className="flex-1 overflow-y-auto px-5 pb-24">
        <div className="pt-1 pb-4">
          <p className="text-[10px] uppercase tracking-wider text-ink-tertiary mb-1">Last 30 days</p>
          <h2 className="font-serif text-2xl text-ink-primary">Where your mind goes</h2>
        </div>
        {domains.map(({ d, count }) => {
          const pct = (count / max) * 100;
          return (
            <div key={d} className="mb-3.5">
              <div className="flex items-center justify-between mb-1.5">
                <Tag d={d} />
                <span className="text-[11px] text-ink-secondary font-medium">{count}</span>
              </div>
              <div className="h-2 bg-bg-raised rounded-full overflow-hidden">
                <div className="h-full bg-amber-glow rounded-full transition-all" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
      <BottomNav active="home" onNav={onNav} />
    </div>
  );
}

// ─── SHARED CHROME ────────────────────────────────────────────────────────
function MobileHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="px-4 pt-2 pb-3 flex items-center gap-3">
      <button onClick={onBack} className="w-8 h-8 rounded-full bg-bg-surface border border-bg-border flex items-center justify-center active:scale-95 transition-transform">
        <ChevronRight size={14} className="text-ink-secondary rotate-180" />
      </button>
      <h1 className="font-serif text-xl text-ink-primary">{title}</h1>
    </div>
  );
}

function BottomNav({ active, onNav }: { active: string; onNav: (s: string) => void }) {
  const items = [
    { id: 'home', icon: Sparkles, label: 'Home' },
    { id: 'record', icon: Mic, label: 'Record' },
    { id: 'ask', icon: MessageCircle, label: 'Ask' },
    { id: 'timeline', icon: Clock, label: 'Timeline' },
  ];
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-bg-surface/95 backdrop-blur border-t border-bg-border flex items-center justify-around" style={{ paddingBottom: '20px', paddingTop: '8px' }}>
      {items.map((it) => {
        const Icon = it.icon;
        const isActive = active === it.id;
        return (
          <button key={it.id} onClick={() => onNav(it.id)} className="flex flex-col items-center gap-1 px-3 py-1.5">
            <Icon size={18} className={isActive ? 'text-amber-glow' : 'text-ink-tertiary'} strokeWidth={isActive ? 2 : 1.5} />
            <span className={`text-[9px] ${isActive ? 'text-amber-glow font-medium' : 'text-ink-tertiary'}`}>{it.label}</span>
          </button>
        );
      })}
    </div>
  );
}
