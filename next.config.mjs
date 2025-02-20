/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/404",
        destination: "/not-found",
        permanent: false,
      },
    ];
  },
  eslint: {
    dirs: ["pages", "components", "utils", "src"], // Adjust based on your project structure
    ignoreDuringBuilds: false, // Set to true if you want to ignore lint errors during builds
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "subscription-public.s3.us-west-2.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "s3.mordorintelligence.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.gravatar.com",
        pathname: "**",
      },
      //https://i.ibb.co/TDLJdcN2/
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
