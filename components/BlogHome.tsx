import blogStyle from "../styles/blogPost.module.css";
interface BlogPostHomeProps {
  data?: { [key: string]: any }
}

const BlogPostHome = ({ data }: BlogPostHomeProps) => {
  return (
    <div className={blogStyle.grid}>
    {data?.map((items, i) => {
      return (
        <div key={i} className={blogStyle.card}>
          <h2>{items?.title}</h2>
          <h3>
            {items?.author}
            <p>{items?.date_published}</p>
          </h3>
          <p>{items?.content}</p>
        </div>
      );
    })}
  </div>
  );
};

export default BlogPostHome;
