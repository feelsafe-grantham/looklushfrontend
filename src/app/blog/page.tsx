import BlogsComp from "@/components/Blogs";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'LookLush Blog | Skin & Hair Tips from Experts',
    description: 'Read expert-backed guides and tips on skin care, hair care, lifestyle, and aesthetic treatments.',
    keywords: ['skin care blog', 'hair care tips', 'dermatology blog Gurugram', 'Mumbai beauty advice'],
};



export default async function Blogs() {


    return (
        <BlogsComp />
    );
}