import { Metadata } from 'next';
import HomeComp from "@/components/Home";
export const metadata: Metadata = {
  title: 'LookLush | Advanced Skin & Hair Treatments in Gurugram & Mumbai',
  description: 'Experience the best in skin and hair care at LookLush Clinics in Gurugram and Mumbai. Customized treatments, expert dermatologists, visible results.',
  keywords: ['LookLush', 'skin clinic', 'hair treatment', 'Gurugram', 'Mumbai', 'dermatology', 'PRP', 'anti-aging'],
};

export default async function Home() {

  return (
    <HomeComp />
  );

}
