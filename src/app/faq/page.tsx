import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about aging in place, home safety, smart home technology for seniors, financial assistance, and caregiver support.",
};

const faqGroups: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: "Aging in place",
    items: [
      {
        q: "What are the benefits of home automation for aging in place?",
        a: "Home automation offers increased safety and security, improved accessibility and convenience, and enhanced monitoring of health and wellness, all of which help older adults live independently longer.",
      },
      {
        q: "How can I prevent falls at home as I age?",
        a: "Remove tripping hazards, improve lighting, install grab bars and handrails, use non-slip mats, wear supportive footwear, and stay active with balance-focused exercise. A professional Home Safety Assessment can identify risks you might not notice.",
      },
      {
        q: "What are the essential features of an age-friendly home?",
        a: "Single-floor living, wide doorways and hallways for accessibility, no-step entries, lever-style door handles, and low-maintenance surroundings all make a home safer and easier to live in as needs change.",
      },
      {
        q: "How can technology help seniors age in place independently?",
        a: "Smart home devices for security, fall detection systems, medication management tools, and remote health monitoring let seniors stay independent while keeping family and care teams informed, without constant check-ins.",
      },
    ],
  },
  {
    category: "Technology & smart home devices",
    items: [
      {
        q: "Can smart home devices be customized to individual needs?",
        a: "Yes. Devices offer customizable features like voice commands, personalized app settings, and routines tailored to how each person actually lives. MyIntel systems are configured specifically to each home during installation.",
      },
      {
        q: "What are the top smart home devices for older adults?",
        a: "Smart door locks, video doorbells for security, smart thermostats, motion sensor lighting, smart medication dispensers, and smart home assistants are among the most valuable, alongside passive monitoring like MyIntel's sensor platform.",
      },
      {
        q: "Does MyIntel use cameras or wearables?",
        a: "No. MyIntel is built privacy-first: discreet in-home sensors learn daily routines without recording video or requiring anything to be worn or charged. Families see calm summaries and alerts, never surveillance footage.",
      },
    ],
  },
  {
    category: "Financial assistance & insurance",
    items: [
      {
        q: "Are there grants or funding available for home modifications for seniors?",
        a: "Yes. Government programs, nonprofit organizations, and private foundations offer grants and funding for senior home modifications. We help clients identify and apply for programs they qualify for.",
      },
      {
        q: "Are there insurance policies that cover home modifications?",
        a: "Some long-term care insurance policies and Medicare Advantage plans may provide coverage for home modifications. Review your policy details, or ask us. We're happy to help you navigate it.",
      },
      {
        q: "How can I use Medicare or Medicaid to help with home modifications?",
        a: "Medicaid may cover certain home adaptations through Home and Community-Based Services (HCBS) waivers, which vary by state. Our team can point you toward the right resources for your situation.",
      },
    ],
  },
  {
    category: "Home modifications & safety",
    items: [
      {
        q: "What are the best home safety modifications for seniors?",
        a: "Installing grab bars in bathrooms, adding handrails on staircases, removing tripping hazards like loose rugs, and improving lighting are the highest-impact modifications for most homes.",
      },
      {
        q: "How do I make a bathroom more accessible?",
        a: "Install grab bars near the toilet and in the shower, add a shower seat or bench, and consider replacing a traditional bathtub with a walk-in tub or curbless shower.",
      },
      {
        q: "How do I create a senior-friendly kitchen?",
        a: "Lower countertops and cabinets, lever-style faucets, non-slip flooring, good lighting, pull-out shelves, and smart appliances all make kitchens safer and easier to use.",
      },
      {
        q: "How do I assess my home for safety hazards?",
        a: "Walk through each room looking for trip hazards, poor lighting, and hard-to-reach essentials, then have a professional confirm. Our CAPS-certified specialists perform comprehensive Home Safety Assessments in Denver CO, Lake of the Ozarks MO, and Corpus Christi TX.",
      },
    ],
  },
  {
    category: "Family & caregiver support",
    items: [
      {
        q: "How can family members best support aging loved ones at home?",
        a: "Offer practical help and emotional support, advocate for their needs, encourage independence rather than taking over, and use community resources. Tools like MyIntel help you stay informed without hovering.",
      },
      {
        q: "Are there training programs for family caregivers?",
        a: "Yes. Many organizations offer workshops, webinars, and resources covering caregiving techniques, stress management, and self-care for caregivers.",
      },
    ],
  },
  {
    category: "Legal planning",
    items: [
      {
        q: "What legal documents should seniors have in place?",
        a: "A will, advance directives (living will and durable power of attorney for healthcare), a durable power of attorney for finances, and a HIPAA authorization form are the core documents to plan for the future.",
      },
      {
        q: "Are there legal resources to help seniors with estate planning?",
        a: "Yes. Local bar associations, legal aid clinics, senior legal helplines, and reputable online legal services can all help seniors navigate estate planning affordably.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions families ask us every day"
        body="Everything you need to know about aging in place, home safety, and how MyIntel works. Don't see your question? Reach out. A real person will answer."
      />

      <section className="mx-auto max-w-4xl px-5 py-20">
        {faqGroups.map(({ category, items }) => (
          <div key={category} className="mb-14">
            <h2 className="display text-3xl">{category}</h2>
            <div className="mt-6 space-y-4">
              {items.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-2xl border border-ink/8 bg-white shadow-sm open:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                    {q}
                    <span
                      aria-hidden="true"
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky text-navy transition-transform duration-200 group-open:rotate-45"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 leading-relaxed text-clay">{a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-3xl bg-sand p-8 text-center">
          <p className="font-display text-2xl font-semibold text-ink">
            Still have questions?
          </p>
          <p className="mt-2 font-semibold text-clay">
            Call {site.phone} or email {site.email}. We&apos;re happy to talk
            it through.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
