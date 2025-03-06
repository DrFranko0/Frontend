/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    output: 'standalone', // Ensures all dependencies are bundled
  };
  
  export default nextConfig;