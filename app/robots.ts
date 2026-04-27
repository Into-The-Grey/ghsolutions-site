import type { MetadataRoute } from "next";

const siteUrl = "https://greyhat-solutions.com";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/44rc0n"],
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
