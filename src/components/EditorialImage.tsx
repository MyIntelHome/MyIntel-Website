import Image from "next/image";

export function EditorialImage({ src, alt, className = "", priority = false, sizes = "(min-width: 1024px) 50vw, 100vw", fit = "cover" }: { src: string; alt: string; className?: string; priority?: boolean; sizes?: string; fit?: "cover" | "contain" }) {
  return <div className={`relative overflow-hidden bg-sand ${className}`}><Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={80} className={fit === "contain" ? "object-contain" : "object-cover"} /></div>;
}
