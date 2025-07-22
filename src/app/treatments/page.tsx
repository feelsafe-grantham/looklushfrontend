import TreatmentsComp from '@/components/Treatments';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: ' Skin and Hair Treatments in Gurgaon Looklush Aesthetic Clinic',
    description: 'Explore skin and hair treatments in Gurgaon at Looklush.Laser Specialist, Botox, and dermatology care by Looklush. Book your consultation now!',
    keywords: ['PRP', 'skin care', 'laser treatment', 'anti-aging', 'Gurugram skin clinic', 'Mumbai hair clinic'],
};

export default function Treatments() {
    return (
        <>
            <head>
                <link rel="canonical" href="https://looklush.in/treatments" />
            </head>
            <TreatmentsComp />
        </>
    );
}