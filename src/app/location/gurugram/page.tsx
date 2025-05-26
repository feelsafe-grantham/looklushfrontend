import AppointmentForm from "@/components/common/AppointmentForm";
import VideoShimmer from "@/components/common/Loading/VideoShimmer";
import SectionHeading from "@/components/common/SectionHeading";
import SectionHeadPara from "@/components/common/SectionHeadPara";
import dynamic from "next/dynamic";
const VideoContainer = dynamic(() => import("@/components/common/Video/VideoContainer"), {
  ssr: true,
  loading: () => <VideoShimmer />,
});
import LocationCardHor from "@/components/Location/LocationCardHor";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { Metadata } from 'next';
import { Suspense } from "react";
import Faqs from "@/components/Faq";
import ReviewSummary from "@/components/Location/ReviewSummary";
import { GURUGRAM_ADDRESS, MUMBAI_ADDRESS } from "@/data";
export const metadata: Metadata = {
  title: 'Visit Our Clinics | Gurugram & Mumbai | LookLush',
  description: 'Find LookLush clinic locations in Gurugram and Mumbai. Book an appointment at your nearest center.',
  keywords: ['LookLush locations', 'Gurugram skin clinic', 'Mumbai hair clinic', 'dermatologist near me'],
};

export default function Location() {
  return <div className="grid gap-5">
    <LocationCardHor location={GURUGRAM_ADDRESS} />
    <AppointmentForm />
    <SectionHeading line1="Visit Us" />
    <SectionHeadPara para="Looklush clinic treats each patient with empathy and discretion. A patient arriving at Looklush Clinic is educated about their condition prior to treatment." />
    <Suspense fallback={<VideoShimmer />}>
      <VideoContainer endpoint={ENDPOINTS.LOCATIONVIDEOSEC} />
    </Suspense>
    <ReviewSummary />
    <SectionHeading line1="Frequently Asked " line2="Questions" />
    <Faqs />
  </div>;
}
