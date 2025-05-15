import Treatments from "@/components/Treatments";
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Skin & Hair Problems We Treat | LookLush',
    description: 'From acne to hair loss, LookLush addresses a variety of skin and hair concerns with effective clinical treatments.',
    keywords: ['acne', 'hair fall', 'hyperpigmentation', 'skin concerns', 'hair loss treatment Gurugram', 'Mumbai clinic'],
};

export default function Problems() {
    return (
        <Treatments />
    );
}