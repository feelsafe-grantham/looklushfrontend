import Link from "next/link";
import styles from "./BlogCard.module.css";
import { generateBlogSlug } from "@/lib/helper";
import { BlogType } from "@/lib/types";
const BlogCard = ({ blog }: { blog: BlogType }) => {
  const blogSlug = generateBlogSlug(blog?.title, blog?.id);
  return (
    <div className={styles.card}>
      <div className={styles.textSection}>
        <h2 className={styles.heading}>
          {blog.title}
        </h2>
        <p className={styles.meta}>{blog?.author_name} | {blog?.date}</p>
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
          src={blog?.image_sq}
          className={styles.image}
        />
      </div>
    </div>
  );
};
export default BlogCard;
