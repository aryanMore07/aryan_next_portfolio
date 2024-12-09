import ProjectPage from "@/components/projects_page_components/ProjectPage";

export const metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_BASE_URL}/`),
  // Title and description
  title: "Projects | Aryan More",
  description:
    "Explore a variety of frontend web development projects showcasing React, Next.js, and more. From interactive apps to creative UIs, these projects highlight user-focused design and modern development techniques.",

  // Canonical and Alternate Links
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_BASE_URL}/projects/`,
  },

  // Open Graph metadata
  openGraph: {
    title: "Projects | Aryan More",
    description:
      "Explore a variety of frontend web development projects showcasing React, Next.js, and more. From interactive apps to creative UIs, these projects highlight user-focused design and modern development techniques.",
    url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/projects/`,
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
    title: "Projects | Aryan More",
    description:
      "Explore a variety of frontend web development projects showcasing React, Next.js, and more. From interactive apps to creative UIs, these projects highlight user-focused design and modern development techniques.",
    image: "/opengraph-image.png",
  },

  // Additional metadata options (if needed)
  applicationName: "Aryan More",
};

function page() {
  return <ProjectPage />;
}

export default page;
