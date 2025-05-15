import { getIdFromBlogSlug } from "@/lib/helper";
import styles from "./BlogDetail.module.css";
import blogs from "@/data/blogs.json";
export default async function BlogDetailPage({ blog }: any) {


    return (
        <div>
            <div className={`${styles.container}`}>
                <div className={`${styles.header}`}>
                    <h2 className={`${styles.title}`}>
                        {blog.title}
                    </h2>
                    <img
                        alt=""
                        src={blog.imagehr}
                        className={`${styles.image}`}
                    />
                    <div className={`${styles.infoContainer}`}>
                        <span className={`${styles.author}`}>{blog.author_name}</span>
                        <span className={`${styles.date}`}>Updated on {blog.updated_date}</span>
                    </div>
                </div>
                <div className={`${styles.content}`}>

                </div>
            </div>
        </div>
    );
};


