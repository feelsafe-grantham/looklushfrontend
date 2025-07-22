import BlogsComp from "@/components/Blogs";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Looklush Insights Skin Care Tips in Gurgaon',
    description: 'Discover skin care tips in Gurgaon at Looklush. Looklush shares expert advice on skin & hair treatments. Read now for radiant results',
    keywords: ['skin care blog', 'hair care tips', 'dermatology blog Gurugram', 'Mumbai beauty advice'],
};



export default async function Blogs() {


    return (
        <BlogsComp />
    );
}