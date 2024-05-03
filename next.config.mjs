/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-streak-stats.herokuapp.com",
        port: "",
        pathname: "/",
      },
    ],
  },
}

export default nextConfig
