'use client';

import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    tagline: 'Try the habit',
    features: ['30-day memory window', 'Voice journal', '5 queries per day', 'Basic domain tagging'],
  },
  {
    name: 'Pro',
    price: '$12',
    tagline: 'Memory that compounds',
    features: ['Unlimited memory', 'Weekly AI digest', 'Habit streaks + freezes', 'All domain insights', 'Day-3 recall mechanic', 'Priority support'],
    featured: true,
  },
  {
    name: 'Power',
    price: '$29',
    tagline: 'Privacy as architecture',
    features: ['Everything in Pro', 'Local LLM via Ollama', 'Custom reflection modes', 'Full data export', 'Personal API access', 'Multi-modal capture'],
  },
];

export default function PricingPage() {
  return (
    <div className="animate-fade-up">
      <div className="mb-10">
        <h1 className="font-serif text-4xl md:text-5xl mb-2 leading-tight">Choose your plan</h1>
        <p className="text-ink-secondary text-base">
          Start free. Upgrade when your memory becomes irreplaceable.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-2xl p-6 transition-all ${
              t.featured
                ? 'bg-bg-surface border-2 border-amber-glow'
                : 'bg-bg-surface border border-bg-border hover:border-amber-deep/30'
            }`}
          >
            {t.featured && (
              <div className="absolute -top-3 left-6 bg-amber-glow text-bg-base text-[10px] font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                Most loved
              </div>
            )}
            <div className="mb-1 text-sm font-medium">{t.name}</div>
            <div className="text-xs text-ink-tertiary mb-4">{t.tagline}</div>
            <div className="mb-6">
              <span className="font-serif text-4xl">{t.price}</span>
              <span className="text-sm text-ink-secondary ml-1">/mo</span>
            </div>
            <button
              className={`w-full py-2.5 rounded-lg text-sm font-medium transition-colors mb-5 ${
                t.featured
                  ? 'bg-amber-glow text-bg-base hover:bg-amber-glow/90'
                  : 'bg-bg-raised border border-bg-border text-ink-primary hover:border-amber-deep/40'
              }`}
            >
              {t.name === 'Free' ? 'Start journaling' : `Go ${t.name}`}
            </button>
            <ul className="space-y-2.5">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[13px] text-ink-secondary">
                  <Check size={14} className="text-amber-glow mt-0.5 flex-shrink-0" strokeWidth={2} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-bg-surface border border-bg-border rounded-2xl p-6 text-center">
        <div className="text-sm font-medium mb-1">Enterprise — coming Year 2</div>
        <p className="text-xs text-ink-secondary max-w-md mx-auto leading-relaxed">
          Team memory systems, audit trails, SSO/RBAC, and custom retention policies for organizations that want their collective knowledge to compound.
        </p>
      </div>
    </div>
  );
}
