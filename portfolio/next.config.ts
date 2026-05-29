import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/akash-mishra",
  assetPrefix: "/akash-mishra/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;