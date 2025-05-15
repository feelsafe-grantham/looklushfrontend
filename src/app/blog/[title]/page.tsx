import blogs from "@/data/blogs.json";
import BlogDetail from "@/components/BlogDetail";
import { getIdFromBlogSlug } from "@/lib/helper";
type PageProps = {
    params: { title: string };
};
const BlogDetailPage = ({ params }: PageProps) => {
    const id = Number(getIdFromBlogSlug(params.title))
    const blog = blogs.find(blog => blog.id == id)
    return <BlogDetail blog={blog} />;
};

export default BlogDetailPage;