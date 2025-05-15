import BlogsComp from "@/components/Blogs";
import { apiClient } from "@/lib/api/apiClient";
import { BlogType } from "@/lib/types";
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'LookLush Blog | Skin & Hair Tips from Experts',
    description: 'Read expert-backed guides and tips on skin care, hair care, lifestyle, and aesthetic treatments.',
    keywords: ['skin care blog', 'hair care tips', 'dermatology blog Gurugram', 'Mumbai beauty advice'],
};


export default async function Blogs() {
    const blogs: any = await apiClient.get("/get-all-blogs/");
    const data: BlogType[] = blogs?.data;
    return (
        <BlogsComp blogs={data} />
    );
}