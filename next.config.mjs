/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
      images: {
        domains: ["source.unsplash.com",
         "dummyimage.com", 
         "source.unsplash.com/random", 
         "avatars.githubusercontent.com",
         "lh3.googleusercontent.com"
        ],
      },
    
  }  

export default nextConfig;
