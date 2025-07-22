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
  title: 'Aesthetic Clinic in Gurugram | Looklush Skin & Hair',
  description: 'Visit Looklush, the top aesthetic clinic in Gurugram, for expert skin & hair treatments by Dr. Poonam Patel. Book your consultation today',
  keywords: ['LookLush locations', 'Gurugram skin clinic', 'Mumbai hair clinic', 'dermatologist near me'],
};

export default function Location() {
  return (
    <>
      <head>
        <link rel="canonical" href="https://looklush.in/gurugram" />
      </head>
      <div className="grid gap-5">
        <LocationCardHor location={GURUGRAM_ADDRESS} />
        <AppointmentForm />
        <SectionHeading isHeading line1="Premier Aesthetic Clinic in Gurugram" line2="for Flawless Glow" />
        <SectionHeadPara para="Our Gurugram clinic offers cutting-edge treatments in a serene, discreet space—designed for clients who value both expertise and comfort." />
        <Suspense fallback={<VideoShimmer />}>
          <VideoContainer endpoint={ENDPOINTS.LOCATIONVIDEOSEC} />
        </Suspense>
        <ReviewSummary />
        <SectionHeading line1="Frequently Asked " line2="Questions" />
        <Faqs />
      </div>
    </>
  );
}
