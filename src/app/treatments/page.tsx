import TreatmentsComp from '@/components/Treatments';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Skin & Hair Treatments | LookLush Clinics Gurugram & Mumbai',
    description: 'Explore our range of advanced treatments including PRP, laser hair removal, acne therapy, and anti-aging solutions.',
    keywords: ['PRP', 'skin care', 'laser treatment', 'anti-aging', 'Gurugram skin clinic', 'Mumbai hair clinic'],
};

export default function Treatments() {
    return (
        <TreatmentsComp />
    );
}