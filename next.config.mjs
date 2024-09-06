/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "assets.aceternity.com"],
  },
};

export default nextConfig;
