/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
        port: "",
        pathname: "/api/top-langs/",
      },
      {
        protocol: "https",
        hostname: "github-readme-streak-stats.herokuapp.com",
        port: "",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "aldrincleetus.com",
        port: "",
        pathname: "/",
      },
    ],
  },
}

export default nextConfig
