"use client";
import { useEffect, useState } from "react";

// Interfaces
export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: number;
  text: string;
  image: string;
  faqs: FaqItem[];
}

export interface UseFaqsReturn {
  faqCategories: FaqCategory[];
  activeCategory: FaqCategory | null;
  activeQuestion: FaqItem | null;
  setActiveCategory: (id: number) => void;
  setActiveQuestion: (id: number) => void;
}

// Static data (your provided data)
const faqRaw = [
  { text: "Acne Star1", image: "/images/problem1.png" },
  { text: "Hydrafacial2", image: "/images/problem2.png" },
  { text: "Laser Hair Removal3", image: "/images/problem3.png" },
  { text: "Hifu Facial", image: "/images/problem4.png" },
  { text: "Lip Lightening", image: "/images/problem5.png" },
];

const qnaRawByCategory: Omit<FaqItem, "id">[][] = [
  // 0 - Acne Star
  [
    {
      question: "What causes acne and how can Acne Star help?",
      answer:
        "Acne is often caused by clogged pores, excess oil, or bacteria. Acne Star treatments target the root causes with clinical precision.",
    },
    {
      question: "Are Acne Star results permanent?",
      answer:
        "While treatments are long-lasting, results depend on skin type and aftercare. Maintenance sessions may be needed.",
    },
  ],

  // 1 - Hydrafacial
  [
    {
      question: "What is Hydrafacial and how does it work?",
      answer:
        "Hydrafacial cleanses, exfoliates, and hydrates skin using a patented vortex-fusion delivery system.",
    },
    {
      question: "Is Hydrafacial good for anti-aging?",
      answer:
        "Yes, it improves texture, elasticity, and reduces fine lines with regular sessions.",
    },
  ],

  // 2 - Laser Hair Removal
  [
    {
      question: "Is Laser Hair Removal safe for all skin tones?",
      answer:
        "Modern laser technology is safe for most skin tones, but a patch test is always recommended.",
    },
    {
      question: "How long does each Laser Hair Removal session take?",
      answer:
        "It depends on the area, but most sessions take between 15 minutes to an hour.",
    },
  ],

  // 3 - Hifu Facial
  [
    {
      question: "How does Hifu Facial lift the skin?",
      answer:
        "Hifu uses focused ultrasound to stimulate collagen deep within the skin for a natural lift.",
    },
    {
      question: "Are results from Hifu instant?",
      answer:
        "Some improvement is visible immediately, but full results take 2–3 months as collagen regenerates.",
    },
  ],

  // 4 - Lip Lightening
  [
    {
      question: "What causes dark lips and can this treatment help?",
      answer:
        "Factors like smoking, sun exposure, and genetics can darken lips. Our treatment lightens pigmentation over sessions.",
    },
    {
      question: "Is lip lightening permanent?",
      answer:
        "Results can last long with care, but occasional maintenance may be needed depending on lifestyle.",
    },
  ],
];

const useFaqs = (): UseFaqsReturn => {
  const [faqCategories, setFaqCategories] = useState<FaqCategory[]>([]);
  const [activeCategory, setActiveCategoryInternal] =
    useState<FaqCategory | null>(null);
  const [activeQuestion, setActiveQuestionInternal] = useState<FaqItem | null>(
    null
  );

  useEffect(() => {
    // Assign questions to each category (for demo, same qna for all)
    const enrichedCategories = faqRaw.map((cat, index) => ({
      id: index + 1,
      ...cat,
      faqs: (qnaRawByCategory[index] || []).map((qna, i) => ({
        id: (index + 1) * 100 + i,
        ...qna,
      })),
    }));
    setFaqCategories(enrichedCategories);
    setActiveCategoryInternal(enrichedCategories[0]);
    setActiveQuestionInternal(enrichedCategories[0].faqs[0]);
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
