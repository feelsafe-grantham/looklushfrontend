import styles from "./Home.module.css";
import Form from "../common/Form";
import SwiperCard from "../common/SwiperCard";
import ExpertCard from "../common/ExpertCard";
import SectionHeading from "../common/SectionHeading";
import SectionHeadPara from "../common/SectionHeadPara";
import Faqs from "../common/Faqs";
import PriceTabel from "../common/PriceTable";
import Carousel from "../common/Carousel";
import VideoComp from "../common/Video";
import ReelContainer from "./ReelContainer";
import CompareSliderContainer from "../common/CompareSliderContainer";
const Home = () => {

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
            <div>
                <Carousel>
                    <img src="/images/carousel1.png" alt="Image 1" />
                    <img src="/images/carousel2.png" alt="Image 1" />
                    <img src="/images/carousel3.png" alt="Image 1" />
                    <img src="/images/carousel4.png" alt="Image 1" />
                    <img src="/images/carousel5.png" alt="Image 1" />
                </Carousel>
            </div>
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
            <ReelContainer />
            <SectionHeading
                line1="Experience the art of Caring"
                line2="with Dr. Poonam Patel"
            />
            <SectionHeadPara para="  Looklush clinic treats each patient with empathy and discretion. A patient arriving at Looklush Clinic is educated about their condition prior to treatment." />
            <VideoComp videoUrl={videoUrl} />
            <CompareSliderContainer />
            <SectionHeading line1="Nothing Complex Here" />
            <SectionHeadPara para="Looklush clinic treats each patient with empathy and discretion. A patient arriving at Looklush Clinic is educated about their condition prior to treatment." />
            <PriceTabel />
            <SectionHeading
                line1="Welcome to Looklush Asthetic"
                line2="& Laser Center"
            />
            <div className={`${styles.servicesContainer}`}>
                <div className={`scrollbar-hide ${styles.serviesLinksContainer}`}>
                    {links.map((link, index) => (
                        <span key={index} className={`${styles.serviceLink}`}>
                            {link.label}
                        </span>
                    ))}
                </div>
                <SwiperCard />
                <div className={`${styles.formContainer}`}>
                    <Form />
                </div>
            </div>
            <SectionHeading line1="Frequently Asked Questions" line2="& Answers" />
            <Faqs />

        </div>
    );
};
export default Home;
