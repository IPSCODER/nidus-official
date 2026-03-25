import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output:'export',
   turbopack: {},
  images: {
    // unoptimized:true,
    domains: ['media.istockphoto.com','images.pexels.com','images.unsplash.com','acelerolearning.com','www.cevalogistics.com'], // Add your CDN domain here
  },
  
};

export default nextConfig;
