import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/8123311/pexels-photo-8123311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae
          optio earum non, minus dignissimos dicta! Facere temporibus, aut
          suscipit consequuntur natus molestiae, esse sed reprehenderit
          voluptatibus, tenetur similique minus.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
