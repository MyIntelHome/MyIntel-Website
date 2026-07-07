export function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="relative overflow-hidden bg-sand">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sage opacity-70 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="prose-warm mt-6 max-w-2xl">{body}</p>
      </div>
    </section>
  );
}
