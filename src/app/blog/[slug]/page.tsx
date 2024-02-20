import { Suspense } from "react";
import Image from "next/image";

import PostUser from "@/components/postUser/PostUser";

import { Post, ParamsProp } from "@/types";
import { getPost } from "@/lib/data";

import styles from "./singlePost.module.css";

const SinglePostPage = async ({ params }: ParamsProp) => {
  const { slug } = params;
  const post: Post | null = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post?.img || ""}
          alt="postImg"
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
