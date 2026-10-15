export const site = {
  name: "MyIntel",
  legalName: "MyIntel Co.",
  tagline: "Stay in the home you love",
  description:
    "MyIntel helps older adults in the Denver area stay safely at home. We check the home for fall risks, set up simple sensors and a help button for free, and a 24/7 monitoring center answers when help is needed.",
  url: "https://myintelhome.com",
  phone: "(720) 989-1123",
  phoneHref: "tel:+17209891123",
  email: "info@myintelhome.com",
  emailHref: "mailto:info@myintelhome.com",
  homeCheckUrl: "https://homecheck.myintelhome.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=61572203865392",
  serviceArea: "the Denver metro area",
  referralHref: "mailto:info@myintelhome.com?subject=Client%20referral%20or%20partnership",
};

export const nav = [
  { label: "For families", href: "/families" },
  { label: "For professionals", href: "/partners" },
  { label: "Packages", href: "/solutions" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Questions", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  ...nav,
  { label: "Home safety visits", href: "/assessments" },
];

// Claims we can stand behind. Keep every line true: they appear on several pages.
export const trust = [
  { key: "monitoring", title: "Help answered 24/7", body: "Help button calls go to a UL-listed professional monitoring center, day and night." },
  { key: "ots", title: "Licensed, insured OTs", body: "Home safety visits are done by licensed, insured occupational therapists with CAPS certification." },
  { key: "cameras", title: "No cameras", body: "Room sensors notice movement, not faces. Nobody watches on video." },
  { key: "local", title: "Local to Denver", body: "We set up every home ourselves, show you how it works and check back after." },
];

// Public figures with their sources. Only add numbers from a named, checkable source.
export const fallStats = [
  { stat: "1 in 4", label: "adults 65 and older falls each year", source: "CDC" },
  { stat: "Every 11 seconds", label: "an older adult is treated in an emergency room for a fall", source: "NCOA" },
  { stat: "No. 1", label: "cause of injury death for adults 65 and older is a fall", source: "CDC" },
];
