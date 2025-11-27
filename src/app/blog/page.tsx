import BlogsComp from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Looklush Insights Skin Care Tips in ghaziabad - Expert Advice from Looklush",
  description:
    "Discover skin care tips in ghaziabad at Looklush. Looklush shares expert advice on skin & hair treatments. Read now for radiant results",
  keywords: [
    "skin care blog",
    "hair care tips",
    "dermatology blog Ghaziabad",
    "Mumbai beauty advice",
  ],
};

export default async function Blogs() {
  return (
    <>
      <head>
        <link rel="canonical" href="https://looklush.in/blog" />
      </head>
      <BlogsComp />
    </>
  );
}
