import React from "react";
import blogStyle from "../styles/blogPost.module.css";
import { useRouter } from "next/router";
interface BlogListProps {
  data?: { [key: string]: any };
}

const BlogList = ({ data }: BlogListProps) => {
  const router = useRouter();
  const toggleContent = (id: any) => {
    router.push(`blog/${id}`);
  };
  return (
    <div className={blogStyle.grid}>
      {data?.map((items, i) => {
        const toggleItem = items?.content.split(" ").slice(0, 30).join(" ");
        return (
          <div key={i} className={blogStyle.card}>
            <h2>{items?.title}</h2>
            <h3>
              {items?.author}
              <p>{items?.date_published}</p>
            </h3>
            <p>{toggleItem}...</p>
            <button
              onClick={() => toggleContent(items?.id)}
              className={blogStyle.button}
            >
              Read More..
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
