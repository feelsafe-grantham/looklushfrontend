import AppointmentForm from "../common/AppointmentForm";
import Faqs from "../common/Faqs";
import SectionHeading from "../common/SectionHeading";
import SectionHeadPara from "../common/SectionHeadPara";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const VideoContainer = dynamic(() => import("../common/Video/VideoContainer"), {
  ssr: true,
  loading: () => <VideoShimmer />,
});
import styles from "./LocationComp.module.css";
import ReviewSummary from "./ReviewSummary";
import VideoShimmer from "../common/Loading/VideoShimmer";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { MUMBAI_ADDRESS, GURUGRAM_ADDRESS } from "@/data";
import LocationCardHor from "./LocationCardHor";
const LocationComp = () => {
  return (
    <div className={`${styles.locationContainer}`}>
      <LocationCardHor location={MUMBAI_ADDRESS} />
      <LocationCardHor location={GURUGRAM_ADDRESS} />
      <AppointmentForm />
      <SectionHeading line1="Visit Us" />
      <SectionHeadPara para="Looklush clinic treats each patient with empathy and discretion. A patient arriving at Looklush Clinic is educated about their condition prior to treatment." />
      <Suspense fallback={<VideoShimmer />}>
        <VideoContainer endpoint={ENDPOINTS.LOCATIONVIDEO} />
      </Suspense>
      <ReviewSummary />
      <SectionHeading line1="Frequently Asked " line2="Questions" />
      <Faqs />
    </div>
  );
};

export default LocationComp;
