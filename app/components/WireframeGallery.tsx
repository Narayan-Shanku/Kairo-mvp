'use client';

import { Mic, Search, ArrowUp, ChevronRight, Sparkles, Flame, Clock, MessageCircle } from 'lucide-react';

// ─── WIREFRAME PRIMITIVES ────────────────────────────────────────────────
// These are the building blocks that make wireframes look like wireframes —
// dashed borders, hatched fills, label tags, content lines.

const WFBox = ({ label, children, className = '', dashed = true }: any) => (
  <div
    className={`relative rounded-md ${
      dashed ? 'border border-dashed border-ink-tertiary/50' : 'border border-ink-tertiary/40'
    } bg-bg-surface/40 ${className}`}
  >
    {label && (
      <div className="absolute -top-2 left-2 px-1.5 bg-bg-base text-[7px] uppercase tracking-wider text-ink-tertiary font-medium">
        {label}
      </div>
    )}
    {children}
  </div>
);

const WFLine = ({ width = 'w-full', strong = false }: { width?: string; strong?: boolean }) => (
  <div className={`h-1.5 rounded-sm ${strong ? 'bg-ink-tertiary/60' : 'bg-ink-tertiary/30'} ${width}`} />
);

const WFCircle = ({ size = 24, label }: { size?: number; label?: string }) => (
  <div
    className="rounded-full border border-dashed border-ink-tertiary/60 bg-amber-soft/30 flex items-center justify-center text-[7px] uppercase tracking-wider text-ink-tertiary"
    style={{ width: size, height: size }}
  >
    {label}
  </div>
);

// Hatched pattern fill — classic wireframe "image goes here"
const WFHatch = ({ className = '' }: { className?: string }) => (
  <div
    className={`relative overflow-hidden ${className}`}
    style={{
      backgroundImage:
        'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(168, 138, 99, 0.18) 4px, rgba(168, 138, 99, 0.18) 5px)',
    }}
  />
);

// ─── INDIVIDUAL WIREFRAME LAYOUTS ────────────────────────────────────────

function HomeWireframe() {
  return (
    <div className="h-full p-3 space-y-2.5 bg-bg-base">
      <WFBox label="Header" className="p-2 space-y-1">
        <WFLine width="w-1/3" />
        <WFLine width="w-3/4" strong />
      </WFBox>
      <WFBox label="Streak strip" className="p-2 space-y-1.5">
        <div className="flex items-center justify-between">
          <WFLine width="w-1/3" />
          <WFLine width="w-1/4" />
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className={`flex-1 h-3 rounded-sm ${i <= 6 ? 'bg-amber-soft' : 'bg-amber-glow'}`}
            />
          ))}
        </div>
      </WFBox>
      <WFBox label="Day-3 recall card" className="p-2 space-y-1">
        <div className="flex items-center gap-1">
          <Sparkles size={8} className="text-amber-glow" />
          <WFLine width="w-1/3" />
        </div>
        <WFLine />
        <WFLine width="w-5/6" />
        <div className="flex justify-between items-center pt-1">
          <div className="h-2.5 w-10 rounded-full bg-amber-soft" />
          <ChevronRight size={9} className="text-ink-tertiary" />
        </div>
      </WFBox>
      <div className="grid grid-cols-3 gap-1.5">
        {['Memories', 'Streak', 'Domains'].map((s) => (
          <WFBox key={s} className="p-1.5 text-center space-y-1">
            <div className="h-3 mx-auto w-6 rounded-sm bg-ink-tertiary/40" />
            <div className="text-[6px] uppercase tracking-wider text-ink-tertiary">{s}</div>
          </WFBox>
        ))}
      </div>
      <BottomNavWF active={0} />
    </div>
  );
}

function RecordWireframe() {
  return (
    <div className="h-full p-3 flex flex-col bg-bg-base">
      <WFBox className="p-1.5 mb-3 flex items-center gap-1.5">
        <ChevronRight size={9} className="rotate-180 text-ink-tertiary" />
        <WFLine width="w-1/3" strong />
      </WFBox>
      <div className="flex-1 flex flex-col items-center justify-center gap-3">
        <div className="w-20 h-20 rounded-full border-2 border-dashed border-amber-glow/60 bg-amber-soft flex items-center justify-center">
          <Mic size={26} className="text-amber-glow" />
        </div>
        <WFLine width="w-20" strong />
        <WFLine width="w-24" />
        <WFBox label="Live transcript" className="w-full p-2 mt-2 space-y-1 min-h-[40px]">
          <WFLine />
          <WFLine width="w-5/6" />
          <WFLine width="w-3/4" />
        </WFBox>
        <div className="self-start flex gap-1 mt-1">
          <div className="h-2.5 w-10 rounded-full bg-amber-soft" />
          <div className="h-2.5 w-10 rounded-full bg-amber-soft" />
        </div>
      </div>
      <BottomNavWF active={1} />
    </div>
  );
}

function AskWireframe() {
  return (
    <div className="h-full p-3 flex flex-col bg-bg-base">
      <WFBox className="p-1.5 mb-2.5 flex items-center gap-1.5">
        <ChevronRight size={9} className="rotate-180 text-ink-tertiary" />
        <WFLine width="w-1/3" strong />
      </WFBox>
      <div className="flex-1 space-y-2">
        {/* User bubble */}
        <div className="flex justify-end">
          <div className="bg-amber-glow/80 rounded-lg rounded-tr-sm px-2 py-1.5 max-w-[70%] space-y-1">
            <div className="h-1.5 w-16 bg-bg-base/40 rounded-sm" />
            <div className="h-1.5 w-12 bg-bg-base/40 rounded-sm" />
          </div>
        </div>
        {/* AI bubble */}
        <WFBox label="Answer" className="p-2 max-w-[85%] space-y-1">
          <div className="flex items-center gap-1 mb-1">
            <Sparkles size={7} className="text-amber-glow" />
            <div className="h-1 w-10 bg-amber-glow/50 rounded" />
          </div>
          <WFLine />
          <WFLine width="w-11/12" />
          <WFLine width="w-3/4" />
        </WFBox>
        {/* Source cards */}
        <div className="ml-1 space-y-1">
          {[1, 2].map((i) => (
            <WFBox key={i} className="p-1.5 space-y-0.5">
              <div className="flex justify-between items-center">
                <div className="h-2 w-8 rounded-full bg-amber-soft" />
                <div className="h-1 w-8 bg-ink-tertiary/30 rounded-sm" />
              </div>
              <WFLine width="w-5/6" />
            </WFBox>
          ))}
        </div>
      </div>
      <WFBox label="Input" className="p-1.5 mt-2 flex items-center gap-1.5">
        <Search size={9} className="text-ink-tertiary" />
        <WFLine width="flex-1" />
        <div className="w-4 h-4 rounded-full bg-amber-glow flex items-center justify-center">
          <ArrowUp size={7} className="text-bg-base" strokeWidth={3} />
        </div>
      </WFBox>
      <BottomNavWF active={2} />
    </div>
  );
}

function TimelineWireframe() {
  return (
    <div className="h-full p-3 flex flex-col bg-bg-base">
      <WFBox className="p-1.5 mb-2 flex items-center gap-1.5">
        <ChevronRight size={9} className="rotate-180 text-ink-tertiary" />
        <WFLine width="w-1/3" strong />
      </WFBox>
      <div className="flex gap-1 mb-2 overflow-hidden">
        {['All', 'Career', 'Health', 'Money'].map((f, i) => (
          <div
            key={f}
            className={`h-3 px-2 rounded-full flex items-center text-[6px] uppercase tracking-wider whitespace-nowrap ${
              i === 0 ? 'bg-amber-glow text-bg-base' : 'border border-dashed border-ink-tertiary/50 text-ink-tertiary'
            }`}
          >
            {f}
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-1.5">
        {[1, 2, 3, 4].map((i) => (
          <WFBox key={i} className="p-2 space-y-1">
            <div className="flex justify-between items-center">
              <div className="flex gap-0.5">
                <div className="h-2 w-7 rounded-full bg-amber-soft" />
                {i % 2 === 0 && <div className="h-2 w-7 rounded-full bg-amber-soft" />}
              </div>
              <div className="h-1 w-10 bg-ink-tertiary/30 rounded-sm" />
            </div>
            <WFLine />
            <WFLine width="w-4/5" />
          </WFBox>
        ))}
      </div>
      <BottomNavWF active={3} />
    </div>
  );
}

function DigestWireframe() {
  return (
    <div className="h-full p-3 flex flex-col bg-bg-base">
      <WFBox className="p-1.5 mb-3 flex items-center gap-1.5">
        <ChevronRight size={9} className="rotate-180 text-ink-tertiary" />
        <WFLine width="w-1/3" strong />
      </WFBox>
      <div className="space-y-1 mb-3">
        <div className="h-1 w-1/3 bg-ink-tertiary/40 rounded" />
        <WFLine width="w-3/4" strong />
      </div>
      <div className="flex-1 space-y-1.5">
        {['Pattern', 'Question', 'Decision'].map((label) => (
          <WFBox key={label} className="p-2 space-y-1">
            <div className="flex justify-between items-center">
              <div className="text-[7px] uppercase tracking-wider text-amber-glow font-medium">{label}</div>
              <div className="h-2 w-7 rounded-full bg-amber-soft" />
            </div>
            <WFLine />
            <WFLine width="w-5/6" />
          </WFBox>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1 mt-2">
        {['Check-ins', 'Memories', 'Domains'].map((s) => (
          <WFBox key={s} className="p-1 text-center">
            <div className="h-2 w-4 mx-auto rounded-sm bg-ink-tertiary/40 mb-0.5" />
            <div className="text-[5px] uppercase tracking-wider text-ink-tertiary">{s}</div>
          </WFBox>
        ))}
      </div>
      <BottomNavWF active={0} />
    </div>
  );
}

function InsightsWireframe() {
  const bars = [85, 70, 55, 42, 30, 22];
  return (
    <div className="h-full p-3 flex flex-col bg-bg-base">
      <WFBox className="p-1.5 mb-3 flex items-center gap-1.5">
        <ChevronRight size={9} className="rotate-180 text-ink-tertiary" />
        <WFLine width="w-1/3" strong />
      </WFBox>
      <div className="space-y-1 mb-3">
        <div className="h-1 w-1/3 bg-ink-tertiary/40 rounded" />
        <WFLine width="w-2/3" strong />
      </div>
      <div className="flex-1 space-y-2.5">
        {bars.map((w, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between items-center">
              <div className="h-2.5 w-10 rounded-full bg-amber-soft" />
              <div className="h-1.5 w-3 bg-ink-tertiary/40 rounded-sm" />
            </div>
            <div className="h-1.5 bg-bg-raised rounded-full overflow-hidden">
              <div className="h-full bg-amber-glow rounded-full" style={{ width: `${w}%` }} />
            </div>
          </div>
        ))}
      </div>
      <BottomNavWF active={0} />
    </div>
  );
}

// Bottom nav primitive — used by every wireframe
function BottomNavWF({ active }: { active: number }) {
  const items = [
    { I: Sparkles, label: 'Home' },
    { I: Mic, label: 'Record' },
    { I: MessageCircle, label: 'Ask' },
    { I: Clock, label: 'Time' },
  ];
  return (
    <WFBox label="Tab bar" className="mt-2 p-1.5 flex items-center justify-around">
      {items.map(({ I, label }, i) => (
        <div key={label} className="flex flex-col items-center gap-0.5">
          <I size={10} className={i === active ? 'text-amber-glow' : 'text-ink-tertiary'} />
          <div className={`text-[6px] uppercase tracking-wider ${i === active ? 'text-amber-glow font-medium' : 'text-ink-tertiary'}`}>
            {label}
          </div>
        </div>
      ))}
    </WFBox>
  );
}

// ─── ANNOTATED WIREFRAME CARD ────────────────────────────────────────────
// One card per screen — wireframe on left, design notes on right

interface AnnotatedWireframeProps {
  number: string;
  title: string;
  purpose: string;
  notes: { label: string; text: string }[];
  children: React.ReactNode;
}

function AnnotatedWireframe({ number, title, purpose, notes, children }: AnnotatedWireframeProps) {
  return (
    <div className="bg-bg-surface border border-bg-border rounded-2xl overflow-hidden">
      <div className="grid md:grid-cols-[260px,1fr] gap-0">
        {/* Wireframe pane */}
        <div className="bg-bg-raised/40 border-b md:border-b-0 md:border-r border-bg-border p-6 flex items-center justify-center">
          <div className="relative">
            {/* iPhone outline (simplified for wireframes — no chrome) */}
            <div
              className="rounded-[28px] border-2 border-ink-tertiary/40 overflow-hidden bg-bg-base"
              style={{ width: '200px', height: '400px' }}
            >
              {children}
            </div>
            {/* Screen number badge */}
            <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-amber-glow text-bg-base flex items-center justify-center text-xs font-medium">
              {number}
            </div>
          </div>
        </div>

        {/* Annotation pane */}
        <div className="p-6">
          <div className="text-[10px] uppercase tracking-wider text-amber-glow font-medium mb-1">
            Screen {number}
          </div>
          <h3 className="font-serif text-xl mb-2 leading-tight text-ink-primary">{title}</h3>
          <p className="text-sm text-ink-secondary leading-relaxed mb-5">{purpose}</p>

          <div className="space-y-3">
            {notes.map((n, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex-shrink-0 w-1 bg-amber-glow rounded-full" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-ink-tertiary font-medium mb-0.5">
                    {n.label}
                  </div>
                  <div className="text-[13px] text-ink-secondary leading-relaxed">{n.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── EXPORTED WIREFRAME GALLERY ─────────────────────────────────────────

export default function WireframeGallery() {
  const screens = [
    {
      number: '01',
      title: 'Home — your second memory at a glance',
      purpose:
        'The first thing the user sees every day. Streak status, day-3 recall card, and quick stats. The recall card is the single most important UI element on this screen — it is where retention happens.',
      notes: [
        { label: 'Reading order', text: 'Greeting → streak → recall → stats → primary action.' },
        { label: 'Primary CTA', text: '"Today\'s check-in" button anchors the bottom of the scroll. Always reachable by thumb.' },
        { label: 'Hierarchy decision', text: 'Streak comes before recall because loss-aversion drives the open. Recall is what makes them stay.' },
      ],
      wireframe: <HomeWireframe />,
    },
    {
      number: '02',
      title: 'Voice journal — friction-free capture',
      purpose:
        'Single-purpose screen. One large microphone button is the entire UI. Live transcript appears as user speaks. Auto-detected domain tags surface after recording stops.',
      notes: [
        { label: 'Constraint', text: 'No text fields, no menus. Speaking is the only input. Stop is the only action.' },
        { label: 'Feedback loop', text: 'Pulse animation while recording. Live transcript proves Whisper is working in real time.' },
        { label: 'Post-capture', text: 'Domain tags appear after stop — confirming the system understood, before the user navigates away.' },
      ],
      wireframe: <RecordWireframe />,
    },
    {
      number: '03',
      title: 'Ask memory — RAG with receipts',
      purpose:
        'The differentiator screen. Chat-style interface for natural language queries. Every answer cites the specific past memories that informed it. This is what separates Kairō from generic chatbots.',
      notes: [
        { label: 'Trust mechanic', text: 'Source cards under every answer make the AI auditable. User can tap any source to see the original memory.' },
        { label: 'Input position', text: 'Input bar floats above the tab bar — ergonomic for one-handed use, follows iOS conventions.' },
        { label: 'Empty state', text: 'When user has nothing yet, suggested questions seed the experience. Becomes the second-day onboarding.' },
      ],
      wireframe: <AskWireframe />,
    },
    {
      number: '04',
      title: 'Timeline — every memory, browsable',
      purpose:
        'Chronological feed of every check-in. Filter pills at top let users drill into a single domain (career, health, etc). Cards show domain tags, timestamp, and snippet preview.',
      notes: [
        { label: 'Default view', text: '"All" filter active by default. Most recent at top. Infinite scroll.' },
        { label: 'Tap target', text: 'Whole card is tappable — opens full memory detail with playback option.' },
        { label: 'Visual rhythm', text: 'Cards are uniform width but variable height to handle short and long entries gracefully.' },
      ],
      wireframe: <TimelineWireframe />,
    },
    {
      number: '05',
      title: 'Weekly digest — patterns the user missed',
      purpose:
        'Auto-generated every Sunday. Three categories: patterns detected (e.g. sleep correlation), open questions (deflections, unresolved threads), decisions made. Sent as push notification.',
      notes: [
        { label: 'Cadence', text: 'Weekly — frequent enough to feel alive, rare enough to feel curated.' },
        { label: 'AI voice', text: 'Written in second person ("you"). Reflective tone. Never prescriptive — surfaces patterns, does not tell user what to do.' },
        { label: 'Stats footer', text: 'Three numbers reinforce habit formation: check-ins, memories captured, domains touched.' },
      ],
      wireframe: <DigestWireframe />,
    },
    {
      number: '06',
      title: 'Domain insights — where your mind goes',
      purpose:
        'Visualizes how the user\'s memory distributes across life domains. Horizontal bar chart with counts per domain over the last 30 days. Helps users notice imbalance.',
      notes: [
        { label: 'Insight, not judgment', text: 'No "you should journal more about X" prompts. The visualization itself is the insight.' },
        { label: 'Time range', text: 'Default 30 days. Tappable to switch to 7-day, 90-day, all-time.' },
        { label: 'Animation', text: 'Bars grow from 0 on screen open — small detail that makes the data feel alive.' },
      ],
      wireframe: <InsightsWireframe />,
    },
  ];

  return (
    <div className="space-y-5">
      {screens.map((s) => (
        <AnnotatedWireframe
          key={s.number}
          number={s.number}
          title={s.title}
          purpose={s.purpose}
          notes={s.notes}
        >
          {s.wireframe}
        </AnnotatedWireframe>
      ))}
    </div>
  );
}
