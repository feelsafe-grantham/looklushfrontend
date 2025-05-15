import Link from "next/link";
import styles from "./BlogCard.module.css";
import { generateBlogSlug } from "@/lib/helper";
const BlogCard = ({ blog }: any) => {
  const blogSlug = generateBlogSlug(blog?.title, blog?.id);
  return (
    <div className={styles.card}>
      <div className={styles.textSection}>
        <h2 className={styles.heading}>
          {blog.title}
        </h2>
        <p className={styles.meta}>{blog?.author_name} | {blog?.updated_date}</p>
        <p className={styles?.description}>
          {blog.description}
        </p>

        <Link href={`/blog/${blogSlug}`} className={styles.button}>
          Show More!
        </Link>
      </div>
      <div className={styles.imageSection}>
        <img
          alt={blog?.title}
          src={blog?.imagesq}
          className={styles.image}
        />
      </div>
    </div>
  );
};
export default BlogCard;
