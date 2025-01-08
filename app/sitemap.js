import getPostMetadata from "@/components/getPostMetadata";

export default function sitemap() {
  const blogs = getPostMetadata();

  const blogsUrl = blogs.map((data) => ({
    url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${data.slug}`,
    lastModified: new Date("09-12-2024").toISOString(),
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [
    {
      url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/`,
      priority: 1,
      lastModified: new Date("09-12-2024").toISOString(),
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/projects/`,
      priority: 0.6,
      changeFrequency: "weekly",
      lastModified: new Date("09-12-2024").toISOString(),
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/blogs/`,
      priority: 0.5,
      changeFrequency: "yearly",
      lastModified: new Date("09-12-2024").toISOString(),
    },
    ...blogsUrl,
  ];
}
