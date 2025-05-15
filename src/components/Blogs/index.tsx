import SectionHeading from "../common/SectionHeading";
import ReelCard from "../Home/ReelCard";
import ReelContainer from "../Home/ReelContainer";
import BlogCard from "./BlogCard";
import styles from "./BlogsComp.module.css";
import LaserBurnSection from "./LaserBurn";
import blogs from "@/data/blogs.json"

const BlogsComp = () => {
    const blogTopics = ["Laser Burns", "Laser Burns", "Laser Burns", "Laser Burns", "Laser Burns", "Laser Burns"];
    const blogss = blogs;
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
            {blogss.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
        </div>
    )
}

export default BlogsComp;