export function LinkedinIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden className={className}>
      <rect x="1.5" y="1.5" width="21" height="21" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="5.6" y="9.6" width="2.6" height="8.4" fill="currentColor" />
      <circle cx="6.9" cy="6.6" r="1.6" fill="currentColor" />
      <path d="M10.8 9.6h2.5v1.2c.5-.9 1.5-1.4 2.7-1.4 2.2 0 3 1.4 3 3.6V18h-2.6v-4.3c0-1-.3-1.8-1.4-1.8s-1.6.8-1.6 1.9V18h-2.6z" fill="currentColor" />
    </svg>
  );
}

