export type Domain = 'career' | 'health' | 'learning' | 'relationships' | 'money' | 'decisions';

export interface Memory {
  id: string;
  date: string;
  fullDate: string;
  domains: Domain[];
  text: string;
}

export const memories: Memory[] = [
  {
    id: 'm1',
    date: 'Today · 8:14 PM',
    fullDate: 'Wed, May 7 · 8:14 PM',
    domains: ['career', 'decisions'],
    text: 'Pitched Kairō to two classmates today. They got the RAM-vs-ROM metaphor immediately. The forgetting-curve framing landed harder than I expected. Note for the deck: lead with the metaphor, not the architecture.',
  },
  {
    id: 'm2',
    date: 'Yesterday · 9:02 PM',
    fullDate: 'Tue, May 6 · 9:02 PM',
    domains: ['learning'],
    text: 'Spent the afternoon comparing BGE vs Nomic embeddings on my journal corpus. Nomic feels faster locally but BGE retrieves better on personal domain text. Going with hybrid retrieval — BGE for semantic, BM25 for exact recall.',
  },
  {
    id: 'm3',
    date: 'Mon · 7:45 PM',
    fullDate: 'Mon, May 5 · 7:45 PM',
    domains: ['career'],
    text: 'Figured out that standup goes way faster when I write my updates the night before. Less rambling, more clarity. Should keep doing this — front-loading clarity is a pattern that keeps paying off.',
  },
  {
    id: 'm4',
    date: 'Sun · 10:11 PM',
    fullDate: 'Sun, May 4 · 10:11 PM',
    domains: ['health'],
    text: 'Slept 7.5 hours last night. Felt sharp through the morning sprint. The pattern is obvious — anything under 7 hours and I lose the first hour of the day to brain fog.',
  },
  {
    id: 'm5',
    date: 'Sat · 6:30 PM',
    fullDate: 'Sat, May 3 · 6:30 PM',
    domains: ['relationships'],
    text: 'Long call with mom. She asked about graduation plans and what comes after. I deflected and changed the subject. I should sit with why I deflected — it is not because I do not know, it is because I am not sure she will like the answer.',
  },
  {
    id: 'm6',
    date: 'Fri · 3:20 PM',
    fullDate: 'Fri, May 2 · 3:20 PM',
    domains: ['money', 'decisions'],
    text: 'Did a rough runway calculation for Kairō at $50K seed. 14 months at lean burn (no salary, just infra and tools). Tighter than I want but workable. Need to pad it with one freelance contract.',
  },
  {
    id: 'm7',
    date: 'Thu · 9:18 PM',
    fullDate: 'Thu, May 1 · 9:18 PM',
    domains: ['learning', 'decisions'],
    text: 'Read about Duolingo retention tactics. The streak freeze is genius — it removes loss aversion without removing the streak signal. Adding this to Kairō. Once-per-week freeze, no questions asked.',
  },
  {
    id: 'm8',
    date: 'Apr 28 · 11:02 PM',
    fullDate: 'Mon, Apr 28 · 11:02 PM',
    domains: ['career'],
    text: 'New Venture Championship pitch went well. Judges asked sharp questions about defensibility. My answer about compounding switching cost from accumulated personal data landed. Need to tighten the moat slide.',
  },
  {
    id: 'm9',
    date: 'Apr 25 · 8:30 AM',
    fullDate: 'Fri, Apr 25 · 8:30 AM',
    domains: ['health'],
    text: 'Tried morning coffee an hour later than usual. Energy held steadier through the late morning. Going to keep testing. The default 8AM coffee might be too early for me.',
  },
];

// Theme-aware domain colors — light/dark variants applied via Tailwind dark: prefix in components
export const domainColors: Record<Domain, { light: string; dark: string }> = {
  career:        { light: 'bg-blue-100 text-blue-800',         dark: 'dark:bg-blue-950/40 dark:text-blue-300' },
  health:        { light: 'bg-emerald-100 text-emerald-800',   dark: 'dark:bg-emerald-950/40 dark:text-emerald-300' },
  learning:      { light: 'bg-violet-100 text-violet-800',     dark: 'dark:bg-violet-950/40 dark:text-violet-300' },
  relationships: { light: 'bg-pink-100 text-pink-800',         dark: 'dark:bg-pink-950/40 dark:text-pink-300' },
  money:         { light: 'bg-amber-100 text-amber-900',       dark: 'dark:bg-amber-950/40 dark:text-amber-300' },
  decisions:     { light: 'bg-teal-100 text-teal-800',         dark: 'dark:bg-teal-950/40 dark:text-teal-300' },
};

export const recallAnswers: Record<string, { q: string; a: string; sources: { date: string; domain: Domain; snippet: string }[] }> = {
  standup: {
    q: 'Why does my standup feel smoother lately?',
    a: 'Two threads in your memory point at the same answer. On May 5 you wrote that prepping standup updates the night before makes them faster and clearer. Earlier in April you flagged that morning ambiguity costs you the first hour of work. Same root cause, both times: front-loading clarity. The standup change is one expression of a habit you have been building for weeks.',
    sources: [
      { date: 'Mon, May 5', domain: 'career', snippet: 'standup goes way faster when I write my updates the night before' },
      { date: 'Mon, Apr 28', domain: 'career', snippet: 'judges asked sharp questions about defensibility' },
      { date: 'Fri, Apr 25', domain: 'health', snippet: 'tried morning coffee an hour later than usual' },
    ],
  },
  sleep: {
    q: 'When did I sleep best last month?',
    a: 'Your best sleep stretch was the first weekend of May. You logged 7.5+ hours and described mornings as "sharp" and unblocked. The pattern in your memory is consistent — anything under 7 hours costs you the first hour of the next day. That is your line.',
    sources: [
      { date: 'Sun, May 4', domain: 'health', snippet: 'slept 7.5 hours last night, felt sharp through the morning' },
      { date: 'Fri, Apr 25', domain: 'health', snippet: 'morning coffee an hour later than usual' },
    ],
  },
  learning: {
    q: 'What did I learn about RAG this week?',
    a: 'You decided on a hybrid retrieval approach — BGE for semantic search, BM25 for exact recall — after testing both on your own journal corpus. Nomic was faster but BGE retrieved better on personal domain text. The connecting thread you noted earlier in the week: small frictionless wins drive long-term behavior, which is also why you adopted the streak freeze idea from Duolingo.',
    sources: [
      { date: 'Tue, May 6', domain: 'learning', snippet: 'BGE retrieves better on personal domain text' },
      { date: 'Thu, May 1', domain: 'learning', snippet: 'streak freeze is genius — removes loss aversion' },
    ],
  },
};
