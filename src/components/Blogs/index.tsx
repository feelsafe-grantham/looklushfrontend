import styles from "./BlogsComp.module.css";
import LaserBurnSection from "./LaserBurn";
import ReelContainer from "../Home/ReelContainer";
import SectionHeading from "../common/SectionHeading";
import BlogContainer from "./BlogContainer";


const BlogsComp = () => {
    const blogTopics = [
        "Laser Burns",
        "Acne Treatment",
        "Anti-Aging Treatment",
        "PRP Treatment",
        "Laser Hair Removal",
        "Skin Care",
        "Hair Care",
        "Lifestyle",
        "Aesthetic Treatments",
    ];

    return (
        <div>
            <LaserBurnSection />
            <ReelContainer startIndex={7} />
            <SectionHeading isHeading line1="Best aesthetic skin and hair" line2="clinic in Gurgaon" />
            <div className={styles.blogTopicsContainer} >
                {blogTopics.map((topic) =>
                    <div className={styles.blogTopic}>{topic}</div>
                )}
            </div>
            <BlogContainer />
        </div>
    )
}

export default BlogsComp;