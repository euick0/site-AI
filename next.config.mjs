/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/luxemburgo",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "loremflickr.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
