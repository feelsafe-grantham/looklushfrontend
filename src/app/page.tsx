import HomeComp from "@/components/Home";
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'LookLush | Advanced Skin & Hair Treatments in Gurugram & Mumbai',
  description: 'Experience the best in skin and hair care at LookLush Clinics in Gurugram and Mumbai. Customized treatments, expert dermatologists, visible results.',
  keywords: ['LookLush', 'skin clinic', 'hair treatment', 'Gurugram', 'Mumbai', 'dermatology', 'PRP', 'anti-aging'],
};

export default function Home() {
  return (
    <HomeComp />
  );

}
