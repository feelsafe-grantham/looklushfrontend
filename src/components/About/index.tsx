import ExpertCard from "../common/ExpertCard";
import Faqs from "../common/Faqs";
import LocationCard from "../common/LocationCard";
import SectionHeading from "../common/SectionHeading";
import VideoComp from "../common/Video";
import styles from "./About.module.css";
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
    const services = [
        {
            id: 1,
            image: "/images/carousel1.png",
            title: "Cosmetic Dermatology",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            phone: "+91-12345 67890",
            timing: "Mon-Sat 11:00AM - 08:00PM",
            fee: "1000 Consultation Fees",
            address:
                "101, AHIMSA HEIGHT, AHIMSA MARG, NEAR SUNDAR NAGAR, OFF, Chincholi Bunder Rd, Malad West, Mumbai, Maharashtra 400064",
        },
        {
            id: 2,
            image: "/images/carousel1.png",
            title: "Cosmetic Dermatology",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            phone: "+91-12345 67890",
            timing: "Mon-Sat 11:00AM - 08:00PM",
            fee: "1000 Consultation Fees",
            address:
                "101, AHIMSA HEIGHT, AHIMSA MARG, NEAR SUNDAR NAGAR, OFF, Chincholi Bunder Rd, Malad West, Mumbai, Maharashtra 400064",
        },
        {
            id: 3,
            image: "/images/carousel1.png",
            title: "Cosmetic Dermatology",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            phone: "+91-12345 67890",
            timing: "Mon-Sat 11:00AM - 08:00PM",
            fee: "1000 Consultation Fees",
            address:
                "101, AHIMSA HEIGHT, AHIMSA MARG, NEAR SUNDAR NAGAR, OFF, Chincholi Bunder Rd, Malad West, Mumbai, Maharashtra 400064",
        },
    ];
    return (
        <div className={`${styles.aboutContainer}`}>
            <div>
                <img
                    alt="Home"
                    src="/images/carousel1.png"
                    className={`${styles.aboutImage}`}
                />
            </div>
            <ExpertCard />
            <div className={`${styles.locationContainer}`}>
                <LocationCard />
                <LocationCard />
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
                            <span className={styles.title}>{item.title}</span>
                            <span className={styles.description}>: {item.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <VideoComp />
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
            <div className={styles.servicesContainer}>
                {services.map((service) => (
                    <div key={service.id} className={styles.card}>
                        <div className={`${styles.serviceHeadContainer}`}>
                            <img
                                src={service.image}
                                alt={service.title}
                                className={styles.serviceCardImage}
                            />
                            <h3 className={styles.title}>{service.title}</h3>
                        </div>
                        <p className={styles.description}>{service.description}</p>
                        <ul className={styles.details}>
                            <li className={`${styles.listItem}`}>
                                <img
                                    className={`${styles.icon}`}
                                    src="/images/call.png"
                                    alt="phone"
                                />
                                {service.phone}
                            </li>
                            <li className={`${styles.listItem}`}>
                                <img
                                    className={`${styles.icon}`}
                                    src="/images/clock.png"
                                    alt="phone"
                                />
                                {service.timing}
                            </li>
                            <li className={`${styles.listItem}`}>
                                <img
                                    className={`${styles.icon}`}
                                    src="/images/rupee.png"
                                    alt="phone"
                                />
                                {service.fee}
                            </li>
                            <li className={`${styles.listItem}`}>
                                <img
                                    className={`${styles.icon}`}
                                    src="/images/pin.png"
                                    alt="phone"
                                />
                                {service.address}
                            </li>
                        </ul>
                        <a href="#" className={styles.viewMore}>
                            View More
                        </a>
                    </div>
                ))}
            </div>
            <SectionHeading line1="Questions About Us!" />
            <Faqs />
        </div>
    );
};
export default About;
