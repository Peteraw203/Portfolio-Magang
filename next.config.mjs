/** @type {import('next').NextConfig} */

const basePath = "";

const nextConfig = {
  // output: "export", // Disabled to allow API routes (Chatbot)
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
