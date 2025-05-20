import parse from 'html-react-parser';
import styles from "./BlogDetail.module.css";
export default async function BlogDetailPage({ blog }: { blog: any }) {


    return (
        <div>
            <div className={`${styles.container}`}>
                <div className={`${styles.header}`}>
                    <h2 className={`${styles.title}`}>
                        {blog.title}
                    </h2>
                    <img
                        alt="asdf"
                        src={blog.image_hr}
                        className={`${styles.image}`}
                    />
                    <div className={`${styles.infoContainer}`}>
                        <span className={`${styles.author}`}>{blog.author_name}</span>
                        <span className={`${styles.date}`}>Updated on {blog.date}</span>
                    </div>
                </div>
                <div className={`${styles.content}`}>
                    {parse(blog.content)}
                </div>
            </div>
        </div>
    );
};


