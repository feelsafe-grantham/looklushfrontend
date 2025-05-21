import ExpertCard from "../common/ExpertCard";
import Faqs from "../common/Faqs";
import LocationCard from "../common/LocationCard";
import SectionHeading from "../common/SectionHeading";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const VideoContainer = dynamic(() => import("../common/Video/VideoContainer"), {
    ssr: true,
    loading: () => <VideoShimmer />,
});
import styles from "./About.module.css";
import CarouselShimmer from "../common/Loading/CarouselShimmer";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { GURUGRAM_ADDRESS, MUMBAI_ADDRESS } from "@/data";
import ServiceCardContainer from "../common/ServiceCardContainer";
import VideoShimmer from "../common/Loading/VideoShimmer";
const About = () => {
    const features = [
        {
            title: "Patient-Centered Approach",
            description: "Every patient is treated with empathy and discretion.",
        },
        {
            title: "Advanced & Patient-Friendly Treatments",
            description: "Our protocols are evolved for comfort and effectiveness.",
        },
        {
            title: "Expert Dermatologist",
            description:
                "Dr. Poonam Patel is a trained specialist in lasers and non-surgical cosmetic treatments.",
        },
        {
            title: "Passionate & Skilled",
            description:
                "Dedicated to aesthetic and cosmetic medicine, offering state-of-the-art, personalized treatments.",
        },
        {
            title: "Expert Dermatologist",
            description:
                "Dr. Poonam Patel is a trained specialist in lasers and non-surgical cosmetic treatments.",
        },
        {
            title: "Life-Changing Results",
            description: "Bringing positive transformations to patients' lives.",
        },
        {
            title: "Warm & Friendly Atmosphere",
            description: "Patients feel at ease in our welcoming clinic environment.",
        },
    ];
    // about us
    const cardData = [
        {
            image: "/images/graph1.png",
            description: "Over 115 experienced MD-certified dermatologists.",
        },
        {
            image: "/images/consult2.png",
            description:
                "A 5-step consultation to understand your skin, hair & body.",
        },
        {
            image: "/images/fda3.png",
            description:
                "US-FDA approved equipment ensuring safety and effectiveness.",
        },
        {
            image: "/images/improve4.png",
            description: "Achieve significant improvement in a few sessions.",
        },
        {
            image: "/images/money5.png",
            description:
                "No hidden costs. We ensure full transparency at every step.",
        },
        {
            image: "/images/clients6.png",
            description:
                "Served 7,50,000+ happy clients with a 95% satisfaction rate.",
        },
    ];
    const social = [
        {
            image: "/images/facebook.png",
            name: "Facebook",
        },
        {
            image: "/images/instagram.png",
            name: "Instagram",
        },
        {
            image: "/images/youtube.png",
            name: "Youtube",
        },
        {
            image: "/images/linkedin.png",
            name: "Youtube",
        },
    ];

    return (
        <div className={`${styles.aboutContainer}`}>
            <Suspense fallback={<VideoShimmer />}>
                <VideoContainer endpoint={ENDPOINTS.ABOUTHOMEVIDEO} isFullWidth={true} />
            </Suspense>
            <ExpertCard />
            <div className={`${styles.locationContainer}`}>
                <LocationCard location={MUMBAI_ADDRESS} />
                <LocationCard location={GURUGRAM_ADDRESS} />
            </div>
            <div className={`${styles.experienceContainer}`}>
                <img
                    className={`${styles.leafImage}`}
                    src="/images/leaf.png"
                    alt="leaf   "
                />
                <div className={styles.headingcontainer}>
                    <h4 className={styles.experienceLine}>
                        <span className={styles.years}>20+ </span>
                        <p className={`${styles.experienceText}`}>
                            <span className={`${styles.para}`}>years of</span>
                            <span className={`${styles.para} ${styles.experience}`}>
                                experience
                            </span>
                        </p>
                        <img
                            className={`${styles.pinkSign}`}
                            src="/images/pink-sign.png"
                            alt="pin-sing"
                        />
                    </h4>
                    <div className={styles.subText}>Team Of International Experts</div>
                </div>
                <ul className={styles.featureList}>
                    {features.map((item, index) => (
                        <li key={index} className={styles.featureItem}>
                            <span className={styles.emoji}>🍓</span>
                            <div className={styles.textWrapper}>
                                <span className={styles.title}>{item.title}</span>
                                <span className={styles.description}>: {item.description}</span>
                            </div></li>
                    ))}
                </ul>
            </div>
            <Suspense fallback={<VideoShimmer />}>
                <VideoContainer endpoint={ENDPOINTS.ABOUTHOMEVIDEOSEC} />
            </Suspense>
            <SectionHeading line1="Our Vision" />
            <div className={`${styles.visionContainer}`}>
                <p className={`${styles.visionHeading}`}>
                    "Because Your Skin Deserves the Best"
                </p>
                <p className={`${styles.visionText}`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex neque
                    placeat saepe minima sequi aliquam, aliquid doloribus dolor rerum
                    nulla?
                </p>
            </div>
            <SectionHeading line1="About Us!" />
            <div className={`${styles.cardsContainer}`}>
                {cardData.map((item, index) => (
                    <div key={index} className={`${styles.cardContainer}`}>
                        <img
                            className={`${styles.cardImage}`}
                            src={item.image}
                            alt="card image"
                        />
                        <p className={`${styles.cardText}`}>{item.description}</p>
                    </div>
                ))}
            </div>
            <SectionHeading line1="Follow us at:" />
            <div className={`${styles.socialContainer}`}>
                {social.map((item, index) => (
                    <img
                        key={index}
                        className={`${styles.socialImage}`}
                        src={item.image}
                        alt={item.name}
                    />
                ))}
            </div>
            <Suspense fallback={<CarouselShimmer />}>
                <ServiceCardContainer />
            </Suspense>
            <SectionHeading line1="Questions About Us!" />
            <Faqs />
        </div>
    );
};
export default About;
