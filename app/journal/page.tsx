'use client';

import { useState, useEffect, useRef } from 'react';
import { Mic, Square, Check } from 'lucide-react';
import DomainTag from '../components/DomainTag';

const sampleTranscript =
  "Today I realized the day-three recall mechanic might be the single most important thing in this product. If users hit day three and Kairō surfaces something they actually said on day one, the wow moment lands before churn. That is the entire retention strategy in one interaction. Everything else is supporting infrastructure.";

export default function JournalPage() {
  const [recording, setRecording] = useState(false);
  const [done, setDone] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [transcript, setTranscript] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const charRef = useRef(0);

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  const start = () => {
    setRecording(true);
    setDone(false);
    setSeconds(0);
    setTranscript('');
    charRef.current = 0;
    intervalRef.current = setInterval(() => {
      setSeconds((s) => {
        const next = s + 1;
        if (next >= 35) { stop(); return next; }
        return next;
      });
      if (charRef.current < sampleTranscript.length) {
        charRef.current = Math.min(sampleTranscript.length, charRef.current + 5);
        setTranscript(sampleTranscript.slice(0, charRef.current));
      }
    }, 200);
  };

  const stop = () => {
    setRecording(false);
    setDone(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTranscript(sampleTranscript);
  };

  const reset = () => {
    setRecording(false);
    setDone(false);
    setSeconds(0);
    setTranscript('');
    charRef.current = 0;
  };

  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, '0');

  return (
    <div className="animate-fade-up">
      <div className="mb-10">
        <h1 className="font-serif text-4xl md:text-5xl mb-2 leading-tight">Voice journal</h1>
        <p className="text-ink-secondary text-base">
          Speak freely for up to 5 minutes. Kairō transcribes, tags, and remembers.
        </p>
      </div>

      <div className="bg-bg-surface border border-bg-border rounded-2xl p-10 flex flex-col items-center">
        <button
          onClick={recording ? stop : (done ? reset : start)}
          className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
            recording
              ? 'bg-amber-glow recording-pulse'
              : done
              ? 'bg-emerald-50 border-2 border-emerald-400 dark:bg-emerald-950 dark:border-emerald-700'
              : 'bg-amber-soft border-2 border-amber-deep hover:scale-105'
          }`}
          aria-label={recording ? 'Stop recording' : 'Start recording'}
        >
          {recording ? (
            <Square size={36} className="text-bg-base" fill="currentColor" />
          ) : done ? (
            <Check size={42} className="text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
          ) : (
            <Mic size={42} className="text-amber-glow" strokeWidth={1.75} />
          )}
        </button>

        <div className="font-mono text-3xl mt-6 mb-1 tabular-nums">
          {m}:{s} <span className="text-ink-tertiary text-xl">/ 5:00</span>
        </div>

        <p className="text-sm text-ink-secondary mb-6">
          {recording ? 'Listening… tap to stop' : done ? 'Saved. Memory tagged and embedded.' : 'Tap the microphone to begin'}
        </p>

        <div className="w-full max-w-xl bg-bg-base rounded-xl p-5 min-h-[100px] border border-bg-border">
          {transcript ? (
            <p className="text-[15px] leading-relaxed">
              {transcript}
              {recording && <span className="inline-block w-[2px] h-[15px] bg-amber-glow align-middle ml-1 cursor-blink" />}
            </p>
          ) : (
            <p className="text-ink-tertiary text-sm italic">Your live transcript will appear here…</p>
          )}
        </div>

        {done && (
          <div className="w-full max-w-xl mt-6 flex items-center gap-2 animate-fade-up">
            <span className="text-xs text-ink-secondary mr-2">Auto-detected:</span>
            <DomainTag domain="career" />
            <DomainTag domain="decisions" />
            <DomainTag domain="learning" />
          </div>
        )}
      </div>

      <div className="mt-6 text-center text-xs text-ink-tertiary">
        Demo mode · transcript is simulated. Real Whisper integration ships in v1.
      </div>
    </div>
  );
}
