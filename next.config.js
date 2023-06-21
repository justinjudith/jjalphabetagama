/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.pexels.com',
        port: '',
        pathname: '/photo/**',
      },
    ],
  },
 
};

module.exports = nextConfig;
