import BlogListingPage from "@/components/blog_page_components/BlogListingPage";
import getPostMetadata from "@/components/getPostMetadata";
import React from "react";

export const metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_BASE_URL}`),
  // Title and description
  title: "Blogs | Aryan More",
  description:
    "Explore insightful technical and non-technical blogs covering coding, development tips, and personal experiences. Stay updated with diverse topics that inspire learning and growth.",

  // Canonical and Alternate Links
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/`,
  },

  // Open Graph metadata
  openGraph: {
    title: "Blogs | Aryan More",
    description:
      "Explore insightful technical and non-technical blogs covering coding, development tips, and personal experiences. Stay updated with diverse topics that inspire learning and growth.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/`,
    siteName: "Aryan More",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Aryan More",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Aryan More",
    description:
      "Explore insightful technical and non-technical blogs covering coding, development tips, and personal experiences. Stay updated with diverse topics that inspire learning and growth.",
    image: "/opengraph-image.png",
  },

  // Additional metadata options (if needed)
  applicationName: "Aryan More",
};

function page() {
  const postMetadata = getPostMetadata();

  return <BlogListingPage data={postMetadata} />;
}

export default page;
