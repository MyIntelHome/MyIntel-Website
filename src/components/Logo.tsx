export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="14" fill="var(--color-pine)" />
      <path
        d="M13 25.5 24 16l11 9.5"
        fill="none"
        stroke="var(--color-cream)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 24.5V33a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-8.5"
        fill="none"
        stroke="var(--color-cream)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M19.5 29h2l1.2-2.6 2.2 4.6 1.4-2h2.2"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-9 w-9" />
      <span
        className={`font-display text-2xl font-semibold tracking-tight ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        MyIntel
      </span>
    </span>
  );
}
