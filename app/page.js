import HomePageComponent from "@/components/home_page_components/HomePageComponent";

export const metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_BASE_URL}/`),
  // Title and description
  title: "Aryan More",
  description:
    "I'm a frontend developer skilled in Next.js, React.js, Redux, and MUI. I build responsive, user-friendly web applications with a focus on performance and usability. Check out my projects to see how I turn creative ideas into seamless digital experiences!",

  // Canonical and Alternate Links
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_BASE_URL}/`,
  },

  // Open Graph metadata
  openGraph: {
    title: "Aryan More",
    description:
      "I'm a frontend developer skilled in React, Next.js, and MUI. I build responsive, user-friendly web applications with a focus on performance and usability. Check out my projects to see how I turn creative ideas into seamless digital experiences!",
    url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/`,
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
    title: "Aryan More",
    description:
      "I'm a frontend developer skilled in React, Next.js, and MUI. I build responsive, user-friendly web applications with a focus on performance and usability. Check out my projects to see how I turn creative ideas into seamless digital experiences!",
    image: "/opengraph-image.png",
  },

  // Additional metadata options (if needed)
  applicationName: "Aryan More",
};

export default function Home() {
  return <HomePageComponent />;
}
