import PriceTabel from "../common/PriceTable";
import SectionHeading from "../common/SectionHeading";
import SectionHeadPara from "../common/SectionHeadPara";
import Faqs from "@/components/common/Faqs";
import ResultsSection from "./ResultsSection";
import TestimonialCarousel from "./TestimonialCarousel";
import styles from "./Treatments.module.css"
const Treatments = () => {
    const images = [
        "/images/after1.png",
        "/images/after2.png",
        "/images/after3.png",
    ]
    const benefits = [
        {
            title: "Effective for All Skin Types",
            description: "Works on light and dark skin tones, even tanned skin.",
        },
        {
            title: "Fast Sessions",
            description: "Covers large areas quickly, reducing treatment time.",
        },
        {
            title: "More Comfortable",
            description: "Advanced cooling technology enhances comfort during treatment.",
        },
        {
            title: "Long-Lasting Results",
            description: "Leads to desired hair reduction with multiple sessions.",
        },
        {
            title: "Works on All Hair Types",
            description: "Effective for both fine and coarse hair.",
        },
        {
            title: "Fewer Sessions Needed",
            description: "More powerful than many other lasers, requiring fewer treatments.",
        },
        {
            title: "Safe and FDA-Approved",
            description: "A proven and medically safe procedure.",
        },
        {
            title: "Minimal Downtime",
            description: "Patients can resume daily activities immediately.",
        },
    ];
    const treatmentCards = [
        {
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            rating: 4.8,
            customers: "300+",
            image1: "/images/after1.png", // replace with actual image path
            image2: "/images/after1.png", // replace with actual image path
        },
        {
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            rating: 4.8,
            customers: "300+",
            image1: "/images/after1.png", // replace with actual image path
            image2: "/images/after1.png", // replace with actual image path
        },
        {
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            rating: 4.8,
            customers: "300+",
            image1: "/images/after1.png", // replace with actual image path
            image2: "/images/after1.png", // replace with actual image path
        },
        {
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            rating: 4.8,
            customers: "300+",
            image1: "/images/after1.png", // replace with actual image path
            image2: "/images/after1.png", // replace with actual image path
        },
        {
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            rating: 4.8,
            customers: "300+",
            image1: "/images/after1.png", // replace with actual image path
            image2: "/images/after1.png", // replace with actual image path
        },
        {
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            rating: 4.8,
            customers: "300+",
            image1: "/images/after1.png", // replace with actual image path
            image2: "/images/after1.png", // replace with actual image path
        },
        {
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            rating: 4.8,
            customers: "300+",
            image1: "/images/after1.png", // replace with actual image path
            image2: "/images/after1.png", // replace with actual image path
        },
        {
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            rating: 4.8,
            customers: "300+",
            image1: "/images/after1.png", // replace with actual image path
            image2: "/images/after1.png", // replace with actual image path
        },
        {
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            rating: 4.8,
            customers: "300+",
            image1: "/images/after1.png", // replace with actual image path
            image2: "/images/after1.png", // replace with actual image path
        },

    ]
    return (
        <div className={`${styles.treatmentContainer}`}>
            <div className={`${styles.treatmentHeroSection}`}>
                <img className={`${styles.treatmentLeafRight}`} src="/images/treatment-leaf.png" alt="treatment-leaf" />
                <div className={`${styles.treatmentHeroLeft}`}>
                    <div className={`${styles.heroHeadingContainer}`}>
                        <h2 className={`${styles.heroHeading}`}>
                            Primelase Laser Hair <br />
                            removal treatment
                            <img className={`${styles.pinkSign}`} src="/images/pink-sign.png" alt="pink-sign" />
                        </h2>
                    </div>
                    <div className={`${styles.dataContainer}`}>
                        <div className={`${styles.ratingContainer}`}>
                            <span className={`${styles.rating}`}>
                                4.9
                            </span>
                            <span className={`${styles.stars}`}>
                                ⭐⭐⭐⭐⭐
                            </span>
                        </div>
                        <span className={`${styles.line}`}></span>
                        <div className={`${styles.clientsContainer}`}>
                            <span className={`${styles.clients}`}>300+</span>
                            <span className={`${styles.clientsText}`}>Satisfied Customers</span>
                        </div>
                    </div>
                    <div className={`${styles.buttonContainer}`}>
                        <button className={`${styles.heroButton}`}>Book Now</button>
                    </div>
                </div>
                <div className={`${styles.heroImageContainer}`}>
                    <img className={`${styles.heroImage}`} src="/images/treatmentHero.png" alt="heroImage" />
                </div>
                <img className={`${styles.treatmentLeafLeft}`} src="/images/treatment-leaf-left.png" alt="treatment-leaf" />
            </div>
            <div className={`${styles.appointmentFormContainer}`}>
                <form>
                    <div className={styles.formInputContainer}>
                        <select className={`${styles.formInput} ${styles.formSelect}`}>
                            <option className={styles.option}>Date & time</option>
                            <option className={styles.option}>Today, 4 PM</option>
                            <option className={styles.option}>Tomorrow, 11 AM</option>
                        </select>

                        <select className={`${styles.formInput} ${styles.formSelect}`}>
                            <option className={styles.option}>Treatment</option>
                            <option className={styles.option}>Facial</option>
                            <option className={styles.option}>Peel</option>
                        </select>

                        <select className={`${styles.formInput} ${styles.formSelect}`}>
                            <option className={styles.option}>No. of Sittings</option>
                            <option className={styles.option}>1</option>
                            <option className={styles.option}>3</option>
                            <option className={styles.option}>5</option>
                        </select>

                        <button type="submit" className={styles.bookButton}>Book Now!</button>
                    </div>
                </form>

            </div>
            <SectionHeading line1="Benifits of Premelase hair" line2="removal procedure" />
            <SectionHeadPara para="Looklush clinic treats each patient with empathy and discretion. A patient arriving at Looklush Clinic is educated about their condition prior to treatment." />
            <div className={styles.patientImageContainer}>
                {images.map((img, idx) => <img key={idx} className={styles.patientImage} src={img} alt="patientImage" />)}
            </div>
            <SectionHeading line1="Here are the key points about Primelase" line2="laser hair removal " />
            <div className={styles.gridContainer}>
                {benefits.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <strong>{item.title}</strong> – {item.description}
                    </div>
                ))}
            </div>
            <div className={`${styles.treatmentCardContainer}`}>
                {treatmentCards.map((treatmentCard, index) =>
                    <div key={index} className={styles.treatmentCard}>
                        <div className={styles.imageContainer}>
                            <img
                                src={treatmentCard.image1}
                                alt={treatmentCard.title}
                                className={styles.cardImage}
                            />
                            <img
                                src={treatmentCard.image2}
                                alt={treatmentCard.title}
                                className={styles.cardImage}
                            />
                        </div>
                        <h3 className={styles.title}>{treatmentCard.title}</h3>
                        <p className={styles.description}>{treatmentCard.description}</p>

                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.rating}>{treatmentCard.rating}</span>
                                <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.customers}>{treatmentCard.customers}</span>
                                <span className={styles.label}>Satisfied Customers</span>
                            </div>
                        </div>

                        <button className={styles.button}>Book Now!</button>
                    </div>)}

            </div>
            <TestimonialCarousel />
            <ResultsSection />
            <SectionHeading line1="Pricing List" />
            <SectionHeadPara para="Looklush clinic treats each patient with empathy and discretion. A patient arriving at Looklush Clinic is educated about their condition prior to treatment." />
            <PriceTabel />
            <SectionHeading line1="Frequently Asked " line2="Questions" />
            <Faqs />
        </div>

    )
}
export default Treatments;