import AboutComp from "@/components/About";
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'About Us | LookLush Skin & Hair Experts',
    description: 'Learn about LookLush – a leading skin and hair clinic in Gurugram and Mumbai, driven by science, aesthetics, and care.',
    keywords: ['about LookLush', 'skin experts', 'hair specialists', 'Gurugram clinic', 'Mumbai clinic'],
};

export default function About() {
    return (
        <AboutComp />
    );
}
// export default function About() {