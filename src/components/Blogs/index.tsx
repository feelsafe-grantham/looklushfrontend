import SectionHeading from "../common/SectionHeading";
import ReelCard from "../Home/ReelCard";
import ReelContainer from "../Home/ReelContainer";
import BlogCard from "./BlogCard";
import styles from "./BlogsComp.module.css";
import LaserBurnSection from "./LaserBurn";
const BlogsComp = () => {
    const comments = [
        { user: "freyjalalila_", message: "OMG 😳😳😳" },
        { user: "user420", message: "awesome 👍" },
        { user: "catlover88", message: "this is so wholesome 🐱" },
        { user: "techjunkie", message: "audio is perfect 🔊" },
        { user: "nina_artz", message: "what a great smile! 😊" },
    ];
    const Reel = [
        {
            username: "amanpandey_11",
            viewers: 120,
            comments: comments,
            videoUrl: "/videos/reel.mp4",
        },
        {
            username: "_amanpandey_11",
            viewers: 120,
            comments: comments,
            videoUrl: "/videos/reel.mp4",
        },
        {
            username: "_aman11",
            viewers: 120,
            comments: comments,
            videoUrl: "/videos/reel.mp4",
        },
    ];
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
            <BlogCard />
        </div>
    )
}

export default BlogsComp;