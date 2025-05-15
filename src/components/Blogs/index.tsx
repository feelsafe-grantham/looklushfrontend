import SectionHeading from "../common/SectionHeading";
import ReelCard from "../Home/ReelCard";
import ReelContainer from "../Home/ReelContainer";
import BlogCard from "./BlogCard";
import styles from "./BlogsComp.module.css";
import LaserBurnSection from "./LaserBurn";

const BlogsComp = () => {
    const blogTopics = ["Laser Burns", "Laser Burns", "Laser Burns", "Laser Burns", "Laser Burns", "Laser Burns"];
    const blogs = [
        {
            id: 1,
            title: "This is is my blog titleThis is is my blog titleThis is is my blog titleThis is is my blog title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quia.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quia.",
            imagesq: "/images/before2.png",
            imagehr: "",
            author_name: "John Doe",
            updated_date: "26 june 2023",
        },
    ]
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