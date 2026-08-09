import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return ["clinics", "hospitals", "dental", "front-desks"].map((slug) => ({
      source: `/solutions/${slug}`,
      destination: "/solutions/healthcare",
      permanent: true,
    }));
  },
};

export default nextConfig;
