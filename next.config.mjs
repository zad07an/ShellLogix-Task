/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "swapi.dev",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
