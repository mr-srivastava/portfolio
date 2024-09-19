/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ik.imagekit.io", "assets.aceternity.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@tabler/icons-react"],
  },
};

export default nextConfig;
