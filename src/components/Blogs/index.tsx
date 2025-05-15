import BlogCard from "./BlogCard";
import styles from "./BlogsComp.module.css";
import LaserBurnSection from "./LaserBurn";
import ReelContainer from "../Home/ReelContainer";
import SectionHeading from "../common/SectionHeading";
import { BlogType } from "@/lib/types";


const BlogsComp = ({ blogs }: { blogs: BlogType[] }) => {
    const blogTopics = ["Laser Burns", "Laser Burns", "Laser Burns", "Laser Burns", "Laser Burns", "Laser Burns"];

    return (
        <div>
            <LaserBurnSection />
            <ReelContainer />
            <SectionHeading line1="Blog Topics" />
            <div className={styles.blogTopicsContainer} >
                {blogTopics.map((topic) =>
                    <div className={styles.blogTopic}>{topic}</div>
                )}
            </div>
            {blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
        </div>
    )
}

export default BlogsComp;