import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NEXT_PUBLIC_APP_ENV === "production";

  if (!isProduction) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
      sitemap: "https://www.mordorintelligence.com/static/sitemap.xml",
    };
  }

  // Production configuration
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.mordorintelligence.com/static/sitemap.xml",
  };
}
