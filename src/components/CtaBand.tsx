import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowRight } from "@/components/icons";

export function CtaBand({
  title = "Stay in the home you love.",
  body = "Take a free home check. See what may need a closer look. You can choose what to do next.",
  primary = "home-check",
}: {
  title?: string;
  body?: string;
  primary?: "home-check" | "contact";
}) {
  return (
    <section className="relative overflow-hidden bg-navy-dark">
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center">
        <h2 className="display text-4xl !text-cream sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/90">
          {body}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {primary === "contact" && <Link href="/contact" className="btn-accent">Talk about a system <ArrowRight className="h-5 w-5" /></Link>}
          <a
            href={site.homeCheckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={primary === "contact" ? "btn-light" : "btn-accent"}
          >
            Start a free home check
            <ArrowRight className="h-5 w-5" />
          </a>
          {primary === "home-check" && <Link href="/contact" className="btn-light">Talk about a system <ArrowRight className="h-5 w-5" /></Link>}
        </div>
        <p className="mt-5 text-sm text-cream/75">
          Prefer to talk?{" "}
          <a href={site.phoneHref} className="font-bold text-cream underline underline-offset-4">
            Call {site.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
