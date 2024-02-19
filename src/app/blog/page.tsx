import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";

const getDate = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Something Went Wring");
  return res.json();
};

const BlogPage = async () => {
  const posts = await getDate();
  return (
    <div className={styles.container}>
      {posts.map((post: any) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
