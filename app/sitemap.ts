import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

// Define pages with dynamic frequency and priority
const projectPages: MetadataRoute.Sitemap = [
  {
    url: `https://devcharles.com/project/meterological_installations`,
    lastModified: new Date(),
    changeFrequency: "monthly" as "monthly", // updated less often
    priority: 0.6,
  },
  {
    url: `https://devcharles.com/project/catalyst_xprex`,
    lastModified: new Date(),
    changeFrequency: "monthly" as "monthly",
    priority: 0.6,
  },
  {
    url: `https://devcharles.com/project/rev_fr_stanley_foundation`,
    lastModified: new Date(),
    changeFrequency: "monthly" as "monthly",
    priority: 0.6,
  },
  {
    url: `https://devcharles.com/project/ping_telecoms`,
    lastModified: new Date(),
    changeFrequency: "monthly" as "monthly",
    priority: 0.6,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  // Blog posts get higher frequency than projects
  const postEntries: MetadataRoute.Sitemap = posts.map(post => ({
    url: `https://devcharles.com/blog/${post.slug}`,
    lastModified: post.createdAt ? new Date(post.createdAt) : new Date(),
    changeFrequency: "weekly" as "weekly", // updated more often
    priority: 0.7,
  }));

  return [
    {
      url: "https://devcharles.com",
      lastModified: new Date(),
      changeFrequency: "daily" as "daily", // homepage updates often
      priority: 1,
    },
    ...projectPages,
    {
      url: "https://devcharles.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily" as "daily",
      priority: 0.9,
    },
    ...postEntries,
  ];
}
