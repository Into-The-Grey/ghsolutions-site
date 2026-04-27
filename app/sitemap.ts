import { projects } from "@/lib/projects";
import { writeups } from "@/lib/writeups";
import type { MetadataRoute } from "next";

const siteUrl = "https://greyhat-solutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/lab",
    "/operations",
    "/writeups",
    "/services",
    "/contact",
    "/settings",
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const projectUrls = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const writeupUrls = writeups.map((writeup) => ({
    url: `${siteUrl}/writeups/${writeup.slug}`,
    lastModified: new Date(writeup.date),
    changeFrequency: "monthly" as const,
    priority: writeup.status === "Published" ? 0.75 : 0.4,
  }));

  return [...staticUrls, ...projectUrls, ...writeupUrls];
}
