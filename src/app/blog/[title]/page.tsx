import blogs from "@/data/blogs.json";
import BlogDetail from "@/components/BlogDetail";
import { getIdFromBlogSlug } from "@/lib/helper";
import { apiClient } from "@/lib/api/apiClient";
import { BlogType } from "@/lib/types";
type PageProps = {
    params: { title: string };
};
const BlogDetailPage = async ({ params }: PageProps) => {
    const { title } = await params;
    const id = Number(getIdFromBlogSlug(title))
    const blog: any = await apiClient.get(`/get-blog/${id}`)
    const data: BlogType = blog?.data;
    return <BlogDetail blog={data} />;
};

export default BlogDetailPage;