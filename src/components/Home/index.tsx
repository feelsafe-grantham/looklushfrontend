import { Suspense } from "react";
import Form from "../common/Form";
import Faqs from "../common/Faqs";
import styles from "./Home.module.css";
import VideoComp from "../common/Video";
import ReelContainer from "./ReelContainer";
import PriceTabel from "../common/PriceTable";
import SwiperCard from "../common/SwiperCard";
import ExpertCard from "../common/ExpertCard";
import SectionHeading from "../common/SectionHeading";
import SectionHeadPara from "../common/SectionHeadPara";
import CarouselContainer from "../common/CarouselContainer";
import CarouselShimmer from "../common/Loading/CarouselShimmer";
import CompareSliderContainer from "../common/CompareSliderContainer";
import VidoeContainer from "../common/Video/VideoContainer";
import dynamic from "next/dynamic";
const VideoContainer = dynamic(() => import("../common/Video/VideoContainer"), {
    ssr: true,
    loading: () => <CarouselShimmer />,
});
import { ENDPOINTS } from "@/lib/api/endpoints";
import PriceTableContainer from "../common/PriceTable/PriceContainer";
import ServicesContainer from "../ServicesContainer";

const Home = async () => {

    const videoUrl = "/videos/video.mp4";
    const links = [
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
    ];

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

            <Suspense fallback={<CarouselShimmer />}>
                <ReelContainer />
            </Suspense>

            <SectionHeading
                line1="Experience the art of Caring"
                line2="with Dr. Poonam Patel"
            />

            <SectionHeadPara para="Looklush clinic treats each patient with empathy and discretion. A patient arriving at Looklush Clinic is educated about their condition prior to treatment." />

            <Suspense fallback={<CarouselShimmer />}>
                <VideoContainer endpoint={ENDPOINTS.HOMEVIDEO} />
            </Suspense>

            <Suspense fallback={<CarouselShimmer />}>
                <CompareSliderContainer />
            </Suspense>

            <SectionHeading line1="Nothing Complex Here" />

            <SectionHeadPara para="Looklush clinic treats each patient with empathy and discretion. A patient arriving at Looklush Clinic is educated about their condition prior to treatment." />

            <Suspense fallback={<CarouselShimmer />}>
                <PriceTableContainer />
            </Suspense>


            <SectionHeading
                line1="Welcome to Looklush Asthetic"
                line2="& Laser Center"
            />
            <ServicesContainer />

            {/*
            <SectionHeading line1="Frequently Asked Questions" line2="& Answers" />

            <Faqs /> */}
        </div>
    );
};
export default Home;
