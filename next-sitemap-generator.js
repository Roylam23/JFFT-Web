const sitemap =  require("nextjs-sitemap-generator");

const fs =  require("fs");

  

const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString();

  

sitemap({
  baseUrl: "https://jfft.pages.dev",
  // If you are using Vercel platform to deploy change the route to /.next/serverless/pages 
  pagesDirectory: __dirname +"/pages",
  targetDirectory: "public/",
  ignoredExtensions: ["map"],
  ignoredPaths: ["assets"], // Exclude everything that isn't static page
});