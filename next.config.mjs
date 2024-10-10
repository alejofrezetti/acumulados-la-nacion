/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com',
          port: '',
          pathname: '/public/**',
        },
      ],
    },
  };
  
  export default nextConfig;