export const site = {
  name: "MyIntel",
  legalName: "MyIntel Co.",
  tagline: "Stay in the home you love",
  description:
    "MyIntel helps you stay in the home you love. Take a free home check or choose a plan with free setup and help after setup.",
  url: "https://myintelhome.com",
  phone: "(720) 989-1123",
  phoneHref: "tel:+17209891123",
  email: "info@myintelhome.com",
  emailHref: "mailto:info@myintelhome.com",
  homeCheckUrl: "https://homecheck.myintelhome.com",
  waitlistUrl: "https://form.typeform.com/to/qC7nbQod",
  facebookUrl: "https://www.facebook.com/profile.php?id=61572203865392",
  serviceAreas: ["Denver, CO", "Lake of the Ozarks, MO"],
};

export const nav = [
  { label: "For families", href: "/families" },
  { label: "For professionals", href: "/partners" },
  { label: "Packages", href: "/solutions" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  ...nav,
  { label: "Home checks and visits", href: "/assessments" },
  { label: "About MyIntel", href: "/about" },
  { label: "Common questions", href: "/faq" },
];
