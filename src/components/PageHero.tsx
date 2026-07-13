import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-sand">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue/5 blur-3xl"
      />
      <div className="container-x relative py-24 sm:py-28">
        <div className="max-w-3xl reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="statement mt-4">{title}</h1>
          <p className="lead mt-6 max-w-2xl">{body}</p>
          {children && <div className="mt-9">{children}</div>}
        </div>
      </div>
    </section>
  );
}
