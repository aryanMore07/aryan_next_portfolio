import fs from "fs";
import BlogDetailsPage from "@/components/blog_page_components/BlogDetailsPage";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import React from "react";
import { url } from "inspector";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateMetadata = ({ params }) => {
  const blogData = getPostContent(params.slug);
  return {
    title: blogData.data.title,
    description: blogData.data.subtitle,
    openGraph: {
      url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${params.slug}/`,
      images: blogData.data.image,
      description: blogData.data.subtitle,
    },
  };
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

function page({ params }) {
  const slug = params.slug;
  const post = getPostContent(slug);
  return <BlogDetailsPage data={post} />;
}

export default page;
