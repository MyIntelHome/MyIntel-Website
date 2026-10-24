import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80, 85],
  },
  // Retired pages. Permanent redirects pass their search ranking on to /solutions.
  async redirects() {
    return [
      { source: "/how-it-works", destination: "/solutions", permanent: true },
      { source: "/visual-review", destination: "/solutions", permanent: true },
    ];
  },
};

export default nextConfig;
