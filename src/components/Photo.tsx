"use client";

import { useEffect, useRef, useState } from "react";
import { ImageIcon } from "@/components/icons";

/**
 * Renders a photo when a real image exists at `src`, otherwise a tasteful
 * on-brand placeholder. Drop an image at the referenced /public path and it
 * appears automatically on the next deploy — no code change needed.
 *
 * Handles the SSR case where a missing image finishes loading (broken) before
 * React attaches handlers, via a post-mount ref check.
 *
 * Note: Client Component — props must be serializable (no icon components).
 */
export function Photo({
  src,
  alt,
  className = "",
  label = "Photo coming soon",
}: {
  src?: string;
  alt: string;
  className?: string;
  label?: string;
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setFailed(false);
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  const showPhoto = src && !failed;

  return (
    <div className={`relative overflow-hidden bg-sky ${className}`}>
      {showPhoto ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          onLoad={(e) => {
            if ((e.currentTarget.naturalWidth || 0) === 0) setFailed(true);
          }}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky via-cream to-blue/20">
          <div className="flex flex-col items-center gap-3 text-center text-navy/50">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/70 text-blue shadow-sm">
              <ImageIcon className="h-7 w-7" />
            </span>
            <span className="text-xs font-extrabold uppercase tracking-[0.18em]">
              {label}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
