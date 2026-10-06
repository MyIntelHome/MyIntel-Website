import { site } from "@/lib/site";
import { ArrowRight, Phone } from "@/components/icons";

export function CtaBand({
  title = "Stay independent. Stay safe. Stay home.",
  body = "Answer a few simple questions about the home and get a clear starting point. It's free, and there's no payment to see your results. You can also call and talk it through with a real person.",
}: {
  title?: string;
  body?: string;
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
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/75">
          {body}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={site.homeCheckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            Start a free home check
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
