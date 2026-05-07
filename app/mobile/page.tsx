'use client';

import { useState, useEffect } from 'react';
import { Smartphone, Bell, Lock, Mic, Apple, ArrowRight, Check } from 'lucide-react';
import PhoneFrame from '../components/PhoneFrame';
import WireframeGallery from '../components/WireframeGallery';
import {
  MobileHome,
  MobileRecord,
  MobileAsk,
  MobileTimeline,
  MobileDigest,
  MobileInsights,
} from '../components/MobileScreens';

type Screen = 'home' | 'record' | 'ask' | 'timeline' | 'digest' | 'insights';

export default function MobilePage() {
  const [screen, setScreen] = useState<Screen>('home');
  const [scale, setScale] = useState(0.78);

  // Responsive scale
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) setScale(0.62);
      else if (w < 1024) setScale(0.7);
      else setScale(0.78);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const renderScreen = () => {
    const onNav = (s: string) => setScreen(s as Screen);
    switch (screen) {
      case 'home': return <MobileHome onNav={onNav} />;
      case 'record': return <MobileRecord onNav={onNav} />;
      case 'ask': return <MobileAsk onNav={onNav} />;
      case 'timeline': return <MobileTimeline onNav={onNav} />;
      case 'digest': return <MobileDigest onNav={onNav} />;
      case 'insights': return <MobileInsights onNav={onNav} />;
      default: return <MobileHome onNav={onNav} />;
    }
  };

  const screenButtons: { id: Screen; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'record', label: 'Voice journal' },
    { id: 'ask', label: 'Ask memory' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'digest', label: 'Weekly digest' },
    { id: 'insights', label: 'Insights' },
  ];

  return (
    <div className="animate-fade-up">
      {/* Hero */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Apple size={14} className="text-ink-tertiary" />
          <span className="text-xs uppercase tracking-wider text-amber-glow font-medium">Coming to iOS · Q4 2026</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl mb-2 leading-tight">Kairō, on your wrist and in your pocket</h1>
        <p className="text-ink-secondary text-base max-w-2xl">
          The web demo proves the concept. The iPhone app makes it a habit. Voice capture lives where your voice already does — not at a desk.
        </p>
      </div>

      {/* Interactive phone + screen picker */}
      <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-start mb-16">
        {/* Phone */}
        <div className="bg-bg-raised/40 border border-bg-border rounded-3xl p-8 md:p-12 flex justify-center">
          <PhoneFrame scale={scale}>
            {renderScreen()}
          </PhoneFrame>
        </div>

        {/* Screen picker */}
        <div className="lg:w-64">
          <div className="text-[10px] uppercase tracking-wider text-ink-tertiary font-medium mb-3">Tap to preview</div>
          <div className="space-y-1.5">
            {screenButtons.map((s) => (
              <button
                key={s.id}
                onClick={() => setScreen(s.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between ${
                  screen === s.id
                    ? 'bg-amber-soft text-amber-glow font-medium'
                    : 'bg-bg-surface border border-bg-border text-ink-secondary hover:border-amber-deep/40 hover:text-ink-primary'
                }`}
              >
                {s.label}
                {screen === s.id && <ArrowRight size={13} />}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-ink-tertiary mt-4 leading-relaxed">
            The phone is fully interactive. Tap inside it to navigate the app naturally, or use this list to jump.
          </p>
        </div>
      </div>

      {/* Why mobile matters */}
      <div className="mb-12">
        <h2 className="font-serif text-2xl mb-2 leading-tight">Why mobile is where Kairō lives</h2>
        <p className="text-ink-secondary text-sm mb-6 max-w-2xl">
          A 5-minute daily habit fails on a laptop. Phones are with you when the thought happens — walking home, between classes, after the meeting that mattered.
        </p>
        <div className="grid md:grid-cols-3 gap-3">
          <Differentiator
            icon={Mic}
            title="Voice-first capture"
            body="Hold-to-talk on the lock screen. Whisper transcribes on-device. The thought leaves your head and enters Kairō without you breaking stride."
          />
          <Differentiator
            icon={Bell}
            title="Day-3 push recall"
            body="At 7 PM on day three, a notification surfaces something you said on day one. The wow moment lands before churn typically would."
          />
          <Differentiator
            icon={Lock}
            title="On-device processing"
            body="Voice never leaves your phone. Whisper runs locally on Apple Neural Engine. ChromaDB stores vectors in the app sandbox. Privacy is the architecture."
          />
        </div>
      </div>

      {/* Wireframe gallery */}
      <div className="mb-12">
        <h2 className="font-serif text-2xl mb-2 leading-tight">Wireframes & design rationale</h2>
        <p className="text-ink-secondary text-sm mb-6 max-w-2xl">
          Six core screens, annotated. Each one has a single primary purpose, a deliberate reading order, and design decisions documented for engineers and judges alike.
        </p>
        <WireframeGallery />
      </div>

      {/* Roadmap */}
      <div className="bg-bg-surface border border-bg-border rounded-2xl p-6 mb-8">
        <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
          <Smartphone size={15} className="text-amber-glow" />
          iOS roadmap
        </h3>
        <div className="space-y-3">
          <Milestone
            phase="Q3 2026"
            label="TestFlight beta"
            features={['Voice capture (Whisper Core ML)', 'Local ChromaDB index', 'Day-3 push recall', '50 UC beta testers']}
            done
          />
          <Milestone
            phase="Q4 2026"
            label="App Store launch"
            features={['Universal app (iPhone + iPad)', 'Apple Watch quick capture', 'iCloud encrypted sync', 'Pro tier in-app purchase']}
          />
          <Milestone
            phase="Q1 2027"
            label="Platform expansion"
            features={['Android (Pixel + Samsung)', 'Mac menu bar app', 'Siri shortcut integration', 'Widget for home screen']}
          />
        </div>
      </div>

      <div className="text-center text-xs text-ink-tertiary pb-4">
        Wireframes are interactive demos · Real Whisper + ChromaDB integration ships with TestFlight beta.
      </div>
    </div>
  );
}

function Differentiator({ icon: Icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="bg-bg-surface border border-bg-border rounded-2xl p-5">
      <div className="w-9 h-9 rounded-lg bg-amber-soft flex items-center justify-center mb-3">
        <Icon size={16} className="text-amber-glow" strokeWidth={1.75} />
      </div>
      <h3 className="text-sm font-medium mb-1.5 text-ink-primary">{title}</h3>
      <p className="text-xs leading-relaxed text-ink-secondary">{body}</p>
    </div>
  );
}

function Milestone({ phase, label, features, done }: { phase: string; label: string; features: string[]; done?: boolean }) {
  return (
    <div className="flex gap-4 py-2">
      <div className="flex-shrink-0 w-20">
        <div className="text-[10px] uppercase tracking-wider text-amber-glow font-medium">{phase}</div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-sm font-medium text-ink-primary">{label}</span>
          {done && (
            <span className="text-[9px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
              In progress
            </span>
          )}
        </div>
        <ul className="space-y-1">
          {features.map((f) => (
            <li key={f} className="text-xs text-ink-secondary flex items-start gap-2">
              <Check size={11} className="text-amber-glow mt-1 flex-shrink-0" strokeWidth={2.5} />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
