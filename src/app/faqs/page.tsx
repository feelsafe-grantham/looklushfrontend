import Faqs from "@/components/Faq";
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Frequently Asked Questions | LookLush',
    description: 'Got questions about our treatments, appointments, or pricing? Find answers to common queries.',
    keywords: ['skin treatment FAQs', 'hair treatment doubts', 'Gurugram clinic FAQs', 'Mumbai LookLush support'],
};

export default function FAQs() {
    return (
        <Faqs />
    );
}