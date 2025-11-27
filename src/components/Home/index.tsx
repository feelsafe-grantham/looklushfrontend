import { Suspense } from "react";
import Faqs from "../common/Faqs";
import dynamic from "next/dynamic";
import styles from "./Home.module.css";
import ReelContainer from "./ReelContainer";
import ExpertCard from "../common/ExpertCard";
import { ENDPOINTS } from "@/lib/api/endpoints";
import ServicesContainer from "../ServicesContainer";
import SectionHeading from "../common/SectionHeading";
import SectionHeadPara from "../common/SectionHeadPara";
import VideoShimmer from "../common/Loading/VideoShimmer";
import CarouselContainer from "../common/CarouselContainer";
import CarouselShimmer from "../common/Loading/CarouselShimmer";
import ExperienceContainer from "./ExperienceSection/Container";
import PriceTableShimmer from "../common/Loading/PriceTableShimmer";
import PriceTableContainer from "../common/PriceTable/PriceContainer";
import CompareSliderContainer from "../common/CompareSliderContainer";
import CompareSliderShimmer from "../common/Loading/CompareSliderShimmer";
import { ReelContainerShimmer } from "../common/Loading/ReelContainerShimmer";
const VideoContainer = dynamic(() => import("../common/Video/VideoContainer"), {
  ssr: true,
  loading: () => <VideoShimmer />,
});

const Home = async () => {
  return (
    <div className={`${styles.homeContainer}`}>
      <Suspense fallback={<CarouselShimmer />}>
        <CarouselContainer />
      </Suspense>
      <ExpertCard />
      <section className={`${styles.sectionContainer}`}>
        <SectionHeading
          isHeading
          line1="Best Skin Care Clinic in Ghaziabad"
          line2="for Radiant Results"
        />
        <SectionHeadPara para="Looklush Clinic is trusted by well-known personalities who value privacy, precision, and outstanding aesthetic results with every visit." />
        <img
          alt="Celebrity"
          src="/images/20-years.png"
          className={`${styles.celebrityImage}`}
        />
      </section>
      <section className={`${styles.sectionContainer}`}>
        <SectionHeading line1="20 years of Experience" />
        <SectionHeadPara para="With two decades of hands-on expertise, Looklush Clinic offers time-tested treatments rooted in clinical knowledge and patient-first care." />
        <ExperienceContainer />
      </section>
      <Suspense fallback={<ReelContainerShimmer />}>
        <ReelContainer startIndex={0} endIndex={7} />
      </Suspense>
      <section className={`${styles.sectionContainer}`}>
        <SectionHeading
          line1="Experience the art of Caring"
          line2="with Dr. Poonam Patel"
        />
        <SectionHeadPara para="Guided by compassion and backed by skill, Dr. Poonam Patel brings a unique blend of medical excellence and personal attention to every case." />
        <Suspense fallback={<VideoShimmer />}>
          <VideoContainer endpoint={ENDPOINTS.HOMEVIDEO} isOverlay={true} />
        </Suspense>
      </section>
      <Suspense fallback={<CompareSliderShimmer />}>
        <CompareSliderContainer />
      </Suspense>
      <section className={`${styles.sectionContainer}`}>
        <SectionHeading line1="Nothing Complex Here" />
        <SectionHeadPara para="Our process is clear and personalized—no jargon, no confusion—just safe, straightforward care from consultation to recovery." />
        <Suspense fallback={<PriceTableShimmer />}>
          <PriceTableContainer />
        </Suspense>
      </section>
      <section className={`${styles.sectionContainer}`}>
        <SectionHeading
          line1="Welcome to Looklush Aesthetics"
          line2="& Laser Center"
        />
        <ServicesContainer />
      </section>
      <section className={`${styles.sectionContainer}`}>
        <SectionHeading line1="Frequently Asked Questions" line2="& Answers" />
        <Faqs />
      </section>
    </div>
  );
};
export default Home;
