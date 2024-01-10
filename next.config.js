/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#configuration
  output: 'export',
  images: {
    unoptimized: true,
  },
  // distDir: 'dist',
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

