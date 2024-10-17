import BlogListingPage from "@/components/blog_page_components/BlogListingPage";
import getPostMetadata from "@/components/getPostMetadata";
import React from "react";

function page() {
  const postMetadata = getPostMetadata();
  //   const postPreviews = postMetadata.map((post) => (
  //     <BlogCard key={post.slug} {...post} />
  //   ));
  return <BlogListingPage data={postMetadata} />;
}

export default page;
