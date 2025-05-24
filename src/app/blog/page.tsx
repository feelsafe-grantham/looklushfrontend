import BlogsComp from "@/components/Blogs";
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { ApiResponse, BlogType } from "@/lib/types";
import { Metadata } from 'next';
import { notFound } from "next/navigation";
export const metadata: Metadata = {
    title: 'LookLush Blog | Skin & Hair Tips from Experts',
    description: 'Read expert-backed guides and tips on skin care, hair care, lifestyle, and aesthetic treatments.',
    keywords: ['skin care blog', 'hair care tips', 'dermatology blog Gurugram', 'Mumbai beauty advice'],
};

async function fetchBlogs() {
    try {
        const blogs: ApiResponse<BlogType[]> = await apiClient.get(ENDPOINTS.BLOGS);
        return blogs?.data;
    } catch (error) {
        console.log("Error while fetching blogs: ", error);
        return [];
    }

}

export default async function Blogs() {

    const data: BlogType[] | undefined = await fetchBlogs();
    if (!data) notFound();
    return (
        <BlogsComp blogs={data} />
    );
}