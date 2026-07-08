import Link from "next/link";
import { nav, site } from "@/lib/site";
import { LogoLockup } from "@/components/Logo";
import { Facebook, Mail, MapPin, Phone } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <LogoLockup dark className="h-14 w-auto" />
          <p className="mt-5 max-w-sm text-cream/70">
            Safer, smarter care. Privacy-first sensors and routine-learning AI
            that help older adults stay independent, stay safe, and stay home.
          </p>
          <a
            href={site.waitlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light mt-6 text-sm"
          >
            Join the Waitlist
          </a>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Get in touch</h3>
          <ul className="mt-4 space-y-3.5">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-cream/70 transition-colors hover:text-cream"
              >
                <Phone className="h-5 w-5 shrink-0 text-gold" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="flex items-center gap-3 text-cream/70 transition-colors hover:text-cream"
              >
                <Mail className="h-5 w-5 shrink-0 text-gold" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-cream/70">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>Serving {site.serviceAreas.join(", ")}</span>
            </li>
            <li>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/70 transition-colors hover:text-cream"
              >
                <Facebook className="h-5 w-5 shrink-0 text-gold" />
                Follow us on Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-cream/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName} All rights reserved.
          </p>
          <Link href="/privacy" className="transition-colors hover:text-cream">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
