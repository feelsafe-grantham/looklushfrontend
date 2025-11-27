import SectionHeading from "@/components/common/SectionHeading";
import Faqs from "@/components/Faq";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Skincare Advice & FAQs | LookLush ghaziabad Specialists",
  description:
    "Find answers in our skin care Looklush FAQs in ghaziabad.Our specialist shares expert skin & hair advice. Explore now for clear insights",
  keywords: [
    "skin treatment FAQs",
    "hair treatment doubts",
    "Gurugram clinic FAQs",
    "Mumbai LookLush support",
  ],
};

export default function FAQs() {
  return (
    <>
      <head>
        <link rel="canonical" href="https://looklush.in/faqs" />
      </head>
      <div className="mt-5" />
      <SectionHeading
        isHeading
        line1="Skin Care FAQs in ghaziabad"
        line2="for Expert Insights"
      />
      <Faqs />
    </>
  );
}
