/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;
const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const NEXT_PUBLIC_GA_ID = process.env.NEXT_PUBLIC_GA_ID;

module.exports = {
  images: {
    domains: [
      "www.notion.so",
      "images.unsplash.com",
      "s3.us-west-2.amazonaws.com",
    ],
    format: ["image/png", "image/webp", "image/jpeg"],
  },
};
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/portfolios",
        destination: `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
      },
    ];
  },
};
