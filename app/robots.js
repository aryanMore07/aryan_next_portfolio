export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `https://${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
