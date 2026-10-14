import type { ReactNode } from "react";
import { EditorialImage } from "@/components/EditorialImage";

export function EditorialHero({ eyebrow, title, body, image, alt, children, imageFit = "cover" }: { eyebrow: string; title: ReactNode; body: string; image: string; alt: string; children?: ReactNode; imageFit?: "cover" | "contain" }) {
  return <section className="container-x grid items-center gap-10 pb-16 pt-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:pb-24 lg:pt-16">
    <div><p className="eyebrow">{eyebrow}</p><h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-6 max-w-xl text-xl leading-relaxed text-clay">{body}</p>{children}</div>
    <EditorialImage src={image} alt={alt} fit={imageFit} priority className="aspect-[4/3] rounded-[2rem] lg:aspect-[4/3]" />
  </section>;
}
