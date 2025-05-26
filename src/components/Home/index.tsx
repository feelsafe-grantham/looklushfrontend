import Faqs from "../common/Faqs";
import styles from "./Home.module.css";
import ReelContainer from "./ReelContainer";
import ExpertCard from "../common/ExpertCard";
import SectionHeading from "../common/SectionHeading";
import SectionHeadPara from "../common/SectionHeadPara";
import CarouselContainer from "../common/CarouselContainer";
import CarouselShimmer from "../common/Loading/CarouselShimmer";
import CompareSliderContainer from "../common/CompareSliderContainer";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const VideoContainer = dynamic(() => import("../common/Video/VideoContainer"), {
    ssr: true,
    loading: () => <VideoShimmer />,
});
import { ENDPOINTS } from "@/lib/api/endpoints";
import PriceTableContainer from "../common/PriceTable/PriceContainer";
import ServicesContainer from "../ServicesContainer";
import { ReelContainerShimmer } from "../common/Loading/ReelContainerShimmer";
import VideoShimmer from "../common/Loading/VideoShimmer";
import CompareSliderShimmer from "../common/Loading/CompareSliderShimmer";
import PriceTableShimmer from "../common/Loading/PriceTableShimmer";

const Home = async () => {

    return (
        <div className={`${styles.homeContainer}`}>

            <Suspense fallback={<CarouselShimmer />}>
                <CarouselContainer />
            </Suspense>


            <ExpertCard />

            <SectionHeading line1="Our Celebrity Clients" />

            <SectionHeadPara para="Looklush clinic treats each patient with empathy and discretion. A patient arriving at Looklush Clinic is educated about their condition prior to treatment." />

            <img
                alt="Celebrity"
                src="/images/celebrity.png"
                className={`${styles.celebrityImage}`}
            />

            <SectionHeading line1="20 years of Experience" />

            <SectionHeadPara para="Looklush clinic treats each patient with empathy and discretion. A patient arriving at Looklush Clinic is educated about their condition prior to treatment." />

            <img
                alt="Celebrity"
                src="/images/20-years.png"
                className={`${styles.celebrityImage}`}
            />

            <Suspense fallback={<ReelContainerShimmer />}>
                <ReelContainer />
            </Suspense>

            <SectionHeading
                line1="Experience the art of Caring"
                line2="with Dr. Poonam Patel"
            />

            <SectionHeadPara para="Looklush clinic treats each patient with empathy and discretion. A patient arriving at Looklush Clinic is educated about their condition prior to treatment." />


            <Suspense fallback={<VideoShimmer />}>
                <VideoContainer
                    endpoint={ENDPOINTS.HOMEVIDEO}
                    isOverlay={true}
                />

            </Suspense>


            <Suspense fallback={<CompareSliderShimmer />}>
                <CompareSliderContainer />
            </Suspense>

            <SectionHeading line1="Nothing Complex Here" />

            <SectionHeadPara para="Looklush clinic treats each patient with empathy and discretion. A patient arriving at Looklush Clinic is educated about their condition prior to treatment." />

            <Suspense fallback={<PriceTableShimmer />}>
                <PriceTableContainer />
            </Suspense>


            <SectionHeading
                line1="Welcome to Looklush Asthetic"
                line2="& Laser Center"
            />

            <ServicesContainer />

            <SectionHeading line1="Frequently Asked Questions" line2="& Answers" />

            <Faqs />
        </div>
    );
};
export default Home;
