import Image from "next/image";

/**
 * Official MyIntel logo (fingerprint house + wordmark + "Safer — Smarter Care").
 * The source PNG is black; `dark` renders it white for dark backgrounds.
 */
export function Logo({
  dark = false,
  className = "h-11 w-auto",
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
