import Image from "next/image";

export function EditorialImage({ src, alt, className = "", priority = false, sizes = "(min-width: 1024px) 50vw, 100vw" }: { src: string; alt: string; className?: string; priority?: boolean; sizes?: string }) {
  return <div className={`relative overflow-hidden bg-sand ${className}`}><Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={80} className="object-cover" /></div>;
}
