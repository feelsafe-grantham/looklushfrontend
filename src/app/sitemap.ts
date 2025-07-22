import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { ApiResponse, BlogType, ProblemCatType } from "@/lib/types";
import type { MetadataRoute } from "next";
import { generateBlogSlug } from "@/lib/helper";

async function fetchBlogs() {
  try {
    const res: ApiResponse<BlogType[]> = await apiClient.get(ENDPOINTS.BLOGS);
    return res?.data || [];
  } catch (error) {
    console.error("Error while fetching blogs: ", error);
    return [];
  }
}

async function fetchTreatments() {
  try {
    const res: ApiResponse<ProblemCatType[]> = await apiClient.get(
      ENDPOINTS.TREATMENTCATEGORY
    );
    return res?.data || [];
  } catch (error) {
    console.error("Error while fetching treatments: ", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  type ChangeFrequency =
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";

  const [blogs, treatments] = await Promise.all([
    fetchBlogs(),
    fetchTreatments(),
  ]);

  const blogUrls = blogs.map((blog) => ({
    url: `https://looklush.in/blog/${generateBlogSlug(blog.title, blog.id)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as ChangeFrequency,
    priority: 0.7,
  }));

  const treatmentUrls = treatments.flatMap((treatment) =>
    treatment.cards.map((card) => ({
      url: `https://looklush.in/treatments/${generateBlogSlug(
        card.title,
        card.id
      )}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.7,
    }))
  );

  const staticPageUrls = [
    "https://looklush.in/",
    "https://looklush.in/treatments",
    "https://looklush.in/location",
    "https://looklush.in/location/mumbai",
    "https://looklush.in/location/gurugram",
    "https://looklush.in/about",
    "https://looklush.in/blog",
    "https://looklush.in/faqs",
    "https://looklush.in/terms-and-conditions",
    "https://looklush.in/privacy-policy",
    "https://looklush.in/disclaimer",
  ].map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.8,
  }));

  return [...staticPageUrls, ...blogUrls, ...treatmentUrls];
}
