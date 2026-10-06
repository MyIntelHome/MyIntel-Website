"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { Close, Menu } from "@/components/icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" onClick={() => setOpen(false)} aria-label="MyIntel home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap text-[15px] font-bold transition-colors hover:text-navy ${item.href === "/assessments" ? "rounded-full bg-sky px-4 py-2 ring-1 ring-blue/25" : ""} ${
                pathname === item.href ? "text-navy" : "text-ink/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <a
            href={site.homeCheckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap !px-4 !py-2.5 text-sm"
          >
            Start a free home check
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink xl:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-ink/8 bg-cream px-5 pb-6 pt-2 xl:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-ink/5 py-3.5 text-lg font-bold ${item.href === "/assessments" ? "mt-2 rounded-xl bg-sky px-4 ring-1 ring-blue/25" : ""} ${
                    pathname === item.href ? "text-navy" : "text-ink/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.homeCheckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5 w-full"
          >
            Start a free home check
          </a>
        </nav>
      )}
    </header>
  );
}

