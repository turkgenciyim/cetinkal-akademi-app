const prod = process.env.NODE_ENV == "production";
const ContentSecurityPolicy = `
   default-src 'self' vercel.live;
   script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-ingights.com vercel.live;
   style-src 'self' 'unsafe-inline';
   img-src * 'self' data: https:; 
   connect-src 'self' vitals.vercel-insights.com vercel.live;
   font-src 'self' data:;
   frame-src data: www.google.com;
   media-src * data:;
`;
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ["preact"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "static.ghost.org",
      },
      {
        protocol: "https",
        hostname: process.env.GHOST_IP,
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
