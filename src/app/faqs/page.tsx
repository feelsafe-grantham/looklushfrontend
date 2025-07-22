import Faqs from "@/components/Faq";
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Skincare Advice & FAQs | LookLush Gurgaon Specialists',
    description: 'Find answers in our skin care Looklush FAQs in Gurgaon.Our specialist shares expert skin & hair advice. Explore now for clear insights',
    keywords: ['skin treatment FAQs', 'hair treatment doubts', 'Gurugram clinic FAQs', 'Mumbai LookLush support'],
};

export default function FAQs() {
    return (
        <Faqs />
    );
}