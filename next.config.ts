import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/#about",
        permanent: false,
      },
      {
        source: "/solutions",
        destination: "/#solutions",
        permanent: false,
      },
      {
        source: "/products",
        destination: "/#products",
        permanent: false,
      },
      {
        source: "/projects",
        destination: "/#projects",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
