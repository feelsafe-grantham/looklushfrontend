"use client";
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { useEffect, useState } from "react";
import { ApiResponse, Testimonial } from "@/lib/types";

const testimonialss: Testimonial[] = [
  {
    client_name: "Dr. Poonam Patel",
    client_text:
      "I’ve struggled with acne and pigmentation for I honestly can’t thank Dr. Poonam Patel enough.  years and tried everything—from home remedies to over-the-counter products.",
    star_rating: 3.5,
    profile_image: "/images/after1.png",
    image: "/images/before1.png",
  },
  {
    client_name: "Dr. Poonam Patel",
    client_text:
      "I honestly can’t thankd   Dr. Poonam Patel enough. I’ve struggled with acne anpigmentation for years and tried everything—from home remedies to over-the-counter products.",
    star_rating: 4.5,
    profile_image: "/images/after2.png",
    image: "/images/before2.png",
  },
  {
    client_name: "Dr. Poonam Patel",
    client_text:
      " Dr. Poonam Patel enough. I’ve struggled with acne anI honestly can’t thank Dr. Poonam Patel enough. I’ve struggled with acne and pigmentation for years and tried everything—from home remedies to over-the-counter products.",
    star_rating: 1.5,
    profile_image: "/images/after3.png",
    image: "/images/before3.png",
  },
];
const useTestimonialCarousel = (id: number | undefined) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  const next = () => setCurrentIndex((currentIndex + 1) % total);
  const prev = () => setCurrentIndex((currentIndex - 1 + total) % total);
  const current = testimonials[currentIndex];
  useEffect(() => {
    const fetchedCategories = async () => {
      try {
        // const endpoint = id
        //   ? `${ENDPOINTS.TESTIMONIALONDETAILPAGE}${id}`
        //   : `${ENDPOINTS.TESTIMONIALONDETAILPAGE}`;
        setLoading(true);
        const endpoint = `${ENDPOINTS.TESTIMONIALONDETAILPAGE}`;
        const res: ApiResponse<Testimonial[]> = await apiClient.get(endpoint);
        setTestimonials(res.data);
      } catch (error) {
        console.error("this error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchedCategories();
  }, []);

  return {
    loading,
    testimonials,
    next,
    prev,
    current,
  };
};

export default useTestimonialCarousel;
