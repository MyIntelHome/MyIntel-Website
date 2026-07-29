import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import {
  EyeOff,
  Heart,
  Home,
  Quote,
  Users,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "MyIntel started when our founder wanted to know his own grandparents were okay, without calling five times a day and without putting a camera in their living room.",
};

const values = [
  {
    icon: EyeOff,
    title: "Privacy comes first",
    body: "No cameras, no wearables, nobody watching. Safety should never cost someone their dignity, and we won't build anything that asks them to make that trade.",
  },
  {
    icon: Heart,
    title: "It's their home, not a facility",
    body: "Nearly nine in ten older adults want to stay in their own home. Our job is to make that a safe choice instead of a risky one.",
  },
  {
    icon: Users,
    title: "The whole family, not just one person",
    body: "The person aging at home, the daughter three states away, the caregiver who shows up on Tuesdays. All of them are carrying something. We build for all of them.",
  },
  {
    icon: Home,
    title: "Regular people should be able to afford it",
    body: "Staying safe at home shouldn't be something only wealthy families get. We keep it practical, for real houses and real budgets.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MyIntel"
        title="It started with two grandparents and a promise"
        body="MyIntel exists because our founder wanted to know his grandparents were safe and comfortable, even from miles away."
      />

      {/* Story */}
      <section className="container-x section">
        <div className="grid items-start gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-clay">
            <h2 className="statement">Our story</h2>
            <p>
              Like millions of families, ours faced a hard question: how do you
              support aging loved ones who want to stay in the home they love
              when you can&apos;t be there every day?
            </p>
            <p>
              Founder Austin Gough built the first intelligent home systems for
              his own grandparents, so he could make sure they were comfortable
              and safe from a distance. No cameras pointed at them. Nothing
              they had to wear or remember to charge. Just a home that quietly
              understood their routines and spoke up when something changed.
            </p>
            <p>
              What started as one family&apos;s fix turned into the whole
              company. Today MyIntel does the same two things for other
              families: make the house itself safer, and keep an eye on the
              everyday patterns that tell you how someone is really doing.
            </p>
          </div>

          <div className="space-y-6">
            <Photo
              src="/photos/family-couch.jpg"
              alt="An adult daughter and her mother talking together at home"
              label="Family photo"
              className="aspect-[4/3] rounded-3xl shadow-[0_20px_60px_-20px_rgba(20,36,60,0.3)]"
            />
            <figure className="rounded-3xl bg-navy p-10 text-cream">
              <Quote className="h-10 w-10 text-gold" />
              <blockquote className="mt-6 font-display text-xl font-semibold leading-snug">
                &ldquo;I built the first version of this for my own
                grandparents. I wanted to know they were okay without calling
                five times a day, and without putting a camera in their living
                room. Everything since is just a better version of that.&rdquo;
              </blockquote>
              <figcaption className="mt-8 font-extrabold text-cream/80">
                Austin Gough
                <span className="block text-sm font-semibold text-cream/60">
                  Founder &amp; CEO
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand">
        <div className="container-x section">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">What we believe</p>
            <h2 className="statement mt-4">The values behind the technology</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map(({ icon: ValueIcon, title, body }) => (
              <div key={title} className="card p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky text-navy">
                  <ValueIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-clay">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Join us in redefining aging in place"
        body="Whether you're planning ahead for yourself or caring for someone you love, we'd be honored to help."
      />
    </>
  );
}
