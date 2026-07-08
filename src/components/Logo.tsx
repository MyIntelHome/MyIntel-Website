import Image from "next/image";

/**
 * Compact logo for the nav bar: fingerprint-house mark + "MyIntel" wordmark.
 * Legible at small sizes; `dark` inverts the mark for dark backgrounds.
 */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/myintel-mark.png"
        alt=""
        width={175}
        height={256}
        priority
        className={`h-9 w-auto ${dark ? "brightness-0 invert" : ""}`}
      />
      <span
        className={`font-display text-2xl font-extrabold tracking-tight ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        MyIntel
      </span>
    </span>
  );
}

/**
 * Full brand lockup (mark + wordmark + "Safer — Smarter Care" tagline).
 * The source PNG is black; `dark` renders it white for dark backgrounds.
 */
export function LogoLockup({
  dark = false,
  className = "h-14 w-auto",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <Image
      src="/myintel-logo.png"
      alt="MyIntel — Safer, Smarter Care"
      width={447}
      height={210}
      priority
      className={`${className} ${dark ? "brightness-0 invert" : ""}`}
    />
  );
}
