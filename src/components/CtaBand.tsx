import { site } from "@/lib/site";
import { ArrowRight, Phone } from "@/components/icons";

export function CtaBand({
  title = "Ready for calm confidence at home?",
  body = "Join the waitlist for early access to the MyIntel platform, or talk with a home safety expert about your family's needs.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-pine-dark">
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pine opacity-60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-terracotta/40 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center">
        <h2 className="display text-4xl text-cream sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/75">
          {body}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={site.waitlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            Join the Waitlist
            <ArrowRight className="h-5 w-5" />
          </a>
          <a href={site.phoneHref} className="btn-light">
            <Phone className="h-5 w-5" />
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
