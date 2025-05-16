import HomeComp from "@/components/Home";
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'LookLush | Advanced Skin & Hair Treatments in Gurugram & Mumbai',
  description: 'Experience the best in skin and hair care at LookLush Clinics in Gurugram and Mumbai. Customized treatments, expert dermatologists, visible results.',
  keywords: ['LookLush', 'skin clinic', 'hair treatment', 'Gurugram', 'Mumbai', 'dermatology', 'PRP', 'anti-aging'],
};

export default async function Home() {
  const carousel = await apiClient.get(ENDPOINTS.CAROUSEL)

  return (
    <HomeComp />
  );

}
