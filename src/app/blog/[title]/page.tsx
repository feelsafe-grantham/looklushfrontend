import BlogDetail from "@/components/Blogs/BlogDetail";
import { getIdFromBlogSlug } from "@/lib/helper";
import { apiClient } from "@/lib/api/apiClient";
import { ApiResponse, BlogType } from "@/lib/types";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { notFound } from "next/navigation";

// Remove custom PageProps type here

async function fetchBlog(id: number) {
    try {
        const res: ApiResponse<BlogType> = await apiClient.get(`${ENDPOINTS.BLOG}${id}`);
        return res?.data;
    } catch (error) {
        console.error("Error while fetching blog: ", error);
    }

}
const BlogDetailPage = async ({ params }: any) => {
    const { title } = await params;

    const id = Number(getIdFromBlogSlug(title));

    const blog: BlogType | undefined = await fetchBlog(id);

    if (!blog) notFound();

    return <BlogDetail blog={blog} />;
};

export default BlogDetailPage;
