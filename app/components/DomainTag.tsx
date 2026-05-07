import { Domain, domainColors } from '../lib/data';

export default function DomainTag({ domain }: { domain: Domain }) {
  const c = domainColors[domain];
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider ${c.light} ${c.dark}`}>
      {domain}
    </span>
  );
}
