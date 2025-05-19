"use client";
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { useEffect, useState } from "react";
import { FaqItem, FaqCategory, ApiResponse } from "@/lib/types";

// Interfaces

export interface UseFaqsReturn {
  faqCategories: FaqCategory[];
  activeCategory: FaqCategory | null;
  activeQuestion: FaqItem | null;
  setActiveCategory: (id: number) => void;
  setActiveQuestion: (id: number) => void;
}
const useFaqs = (): UseFaqsReturn => {
  const [faqCategories, setFaqCategories] = useState<FaqCategory[]>([]);
  const [activeCategory, setActiveCategoryInternal] =
    useState<FaqCategory | null>(null);
  const [activeQuestion, setActiveQuestionInternal] = useState<FaqItem | null>(
    null
  );

  useEffect(() => {
    // Assign questions to each category (for demo, same qna for all)
    const fetchedCategories = async () => {
      const res: ApiResponse<FaqCategory[]> = await apiClient.get(
        ENDPOINTS.GETFAQCATEGORIES
      );
      if (!res.code || res.code !== 200) return [];
      setFaqCategories(res.data);
      setActiveCategoryInternal(res.data[0]);
      setActiveQuestionInternal(res.data[0].faqs[0]);
    };
    fetchedCategories();
  }, []);

  const setActiveCategory = (id: number) => {
    const cat = faqCategories.find((c) => c.id === id) || null;
    setActiveCategoryInternal(cat);
    setActiveQuestionInternal(cat?.faqs[0] || null);
  };

  const setActiveQuestion = (id: number) => {
    if (!activeCategory) return;
    const q = activeCategory.faqs.find((f) => f.id === id) || null;
    setActiveQuestionInternal(q);
  };

  return {
    faqCategories,
    activeCategory,
    activeQuestion,
    setActiveCategory,
    setActiveQuestion,
  };
};

export default useFaqs;
