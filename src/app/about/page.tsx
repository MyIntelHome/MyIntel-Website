import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
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
    "MyIntel was founded by Austin Gough to help his own grandparents live safely at home. Today we bring privacy-first aging-in-place technology to families everywhere.",
};

const values = [
  {
    icon: EyeOff,
    title: "Privacy first",
    body: "No cameras, no wearables, no surveillance. Technology should protect dignity, not trade it away for safety.",
  },
  {
    icon: Heart,
    title: "Dignity & independence",
    body: "90% of seniors want to age in their own homes. Our job is to make that choice safe, confident, and sustainable.",
  },
  {
    icon: Users,
    title: "The whole circle of care",
    body: "Older adults, families, caregivers, and communities all deserve calm and clarity — we design for every one of them.",
  },
  {
    icon: Home,
    title: "Accessible to everyone",
    body: "Smart, safe living shouldn't be a luxury. We build practical solutions for real homes and real budgets.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MyIntel"
        title="It started with two grandparents and a promise"
        body="MyIntel exists because our founder wanted to know his grandparents were safe and comfortable — even from miles away."
      />

      {/* Story */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-start gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-clay">
            <h2 className="display text-4xl sm:text-5xl">Our story</h2>
            <p>
              Like millions of families, ours faced a hard question: how do you
              support aging loved ones who want to stay in the home they love —
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
              What began as one family&apos;s solution became a mission: to
              share the benefits of smart, safe living with everyone. Today,
              MyIntel combines privacy-first sensors with routine-learning AI
              to give older adults calm confidence at home — and give families
              and care teams the clarity they need to help.
            </p>
          </div>

          <figure className="rounded-3xl bg-pine p-10 text-cream">
            <Quote className="h-10 w-10 text-gold" />
            <blockquote className="mt-6 font-display text-2xl font-medium leading-snug">
              &ldquo;Revolutionize everyday living with responsive smart home
              technology. MyIntel provides innovative solutions that enhance
              safety, convenience, and efficiency for a smarter, more connected
              world.&rdquo;
            </blockquote>
            <figcaption className="mt-8 font-extrabold text-cream/80">
              Austin Gough
              <span className="block text-sm font-semibold text-cream/60">
                Founder &amp; CEO
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">What we believe</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              The values behind the technology
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map(({ icon: ValueIcon, title, body }) => (
              <div key={title} className="rounded-3xl bg-white p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage text-pine">
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
