import AppointmentForm from "@/components/common/AppointmentForm";
import VideoShimmer from "@/components/common/Loading/VideoShimmer";
import SectionHeading from "@/components/common/SectionHeading";
import SectionHeadPara from "@/components/common/SectionHeadPara";
import dynamic from "next/dynamic";
const VideoContainer = dynamic(
  () => import("@/components/common/Video/VideoContainer"),
  {
    ssr: true,
    loading: () => <VideoShimmer />,
  }
);
import LocationCardHor from "@/components/Location/LocationCardHor";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { Metadata } from "next";
import { Suspense } from "react";
import Faqs from "@/components/Faq";
import ReviewSummary from "@/components/Location/ReviewSummary";
import { GHAZIABAD_ADDRESS, MUMBAI_ADDRESS } from "@/data";
export const metadata: Metadata = {
  title: "Visit Our Clinics | Ghaziabad & Mumbai | LookLush",
  description:
    "Find LookLush clinic locations in Ghaziabad and Mumbai. Book an appointment at your nearest center.",
  keywords: [
    "LookLush locations",
    "Ghaziabad skin clinic",
    "Mumbai hair clinic",
    "dermatologist near me",
  ],
};

export default function Location() {
  return (
    <>
      <head>
        <link rel="canonical" href="https://looklush.in/mumbai" />
      </head>
      <div className="grid gap-5">
        <LocationCardHor location={MUMBAI_ADDRESS} />
        <AppointmentForm />
        <SectionHeading line1="Visit Us" />
        <SectionHeadPara para="Located in the heart of Mumbai, Looklush Clinic offers world-class aesthetic care with personalized attention in a calm and modern setting." />
        <Suspense fallback={<VideoShimmer />}>
          <VideoContainer endpoint={ENDPOINTS.LOCATIONVIDEO} />
        </Suspense>
        <ReviewSummary />
        <SectionHeading line1="Frequently Asked " line2="Questions" />
        <Faqs />
      </div>
    </>
  );
}
