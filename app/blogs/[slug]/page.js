import fs from "fs";
import BlogDetailsPage from "@/components/blog_page_components/BlogDetailsPage";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import React from "react";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateMetadata = ({ params }) => {
  const blogData = getPostMetadata();

  return {
    title: blogData.title,
    discription: blogData.subtitle,
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
