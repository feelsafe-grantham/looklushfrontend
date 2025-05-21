import BlogDetail from "@/components/Blogs/BlogDetail";
import { getIdFromBlogSlug } from "@/lib/helper";
import { apiClient } from "@/lib/api/apiClient";
import { BlogType } from "@/lib/types";
import { ENDPOINTS } from "@/lib/api/endpoints";

// Remove custom PageProps type here
const BlogDetailPage = async ({ params }: any) => {
    const { title } = await params;
    const id = Number(getIdFromBlogSlug(title));

    const blog: any = await apiClient.get(`${ENDPOINTS.BLOG}${id}`);
    const data: BlogType = blog?.data;


    return <BlogDetail blog={data} />;
};

export default BlogDetailPage;
