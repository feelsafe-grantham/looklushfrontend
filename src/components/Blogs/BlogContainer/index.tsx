import { ApiResponse, BlogType } from "@/lib/types";
import styles from "./BlogContainer.module.css"
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import BlogCard from "../BlogCard";
async function fetchBlogs() {
    try {
        const res: ApiResponse<BlogType[]> = await apiClient.get(ENDPOINTS.BLOGS);
        return res?.data;
    } catch (error) {
        console.error("Error while fetching blogs: ", error);
        return [];
    }
}
const BlogContainer = async () => {
    const blogs = await fetchBlogs();
    return (
        <div className={styles.blogsContainer}>
            {blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
        </div>
    )
}

export default BlogContainer;