"use client"
import { TreatmentDetailType } from "@/lib/types";
import styles from "./TreatmentHeroSection.module.css"
import CtaButton from "@/components/ui/CtaButton";
import Form from "@/components/common/Form";
import { useModal } from "@/components/ui/Modal/useModal";
const TreatmentHeroSection = ({ data }: { data: TreatmentDetailType }) => {
    const { openModal } = useModal();
    const handleBtnClick = () => {
        openModal(
            {
                header: "Make a Booking",
                content: <Form />,
                animation: "scale",
            }
        )
    }
    return (
        <div className={`${styles.treatmentHeroSection}`}>
            <img className={`${styles.treatmentLeafRight}`} src="/images/treatment-leaf.png" alt="treatment-leaf" />
            <div className={`${styles.treatmentHeroLeft}`}>
                <div className={`${styles.heroHeadingContainer}`}>
                    <h2 className={`${styles.heroHeading}`}>
                        {data.banner_text1} <br />
                        {data.banner_text2 ? data.banner_text2 : ""}
                        <img className={`${styles.pinkSign}`} src="/images/pink-sign.png" alt="pink-sign" />
                    </h2>
                </div>
                <div className={`${styles.dataContainer}`}>
                    <div className={`${styles.ratingContainer}`}>
                        <span className={`${styles.rating}`}>
                            {data.stars}
                        </span>
                        <span className={`${styles.stars}`}>
                            ⭐⭐⭐⭐⭐
                        </span>
                    </div>
                    <span className={`${styles.line}`}></span>
                    <div className={`${styles.clientsContainer}`}>
                        <span className={`${styles.clients}`}>{data.satisfied_customers}</span>
                        <span className={`${styles.clientsText}`}>Satisfied Customers</span>
                    </div>
                </div>
                <div className={`${styles.buttonContainer}`}>
                    <CtaButton onClick={handleBtnClick} text="Book Now" />
                </div>
            </div>
            <div className={`${styles.heroImageContainer}`}>
                <img className={`${styles.heroImage}`} src={data.banner_image} alt="heroImage" />
            </div>
            <img className={`${styles.treatmentLeafLeft}`} src="/images/treatment-leaf-left.png" alt="treatment-leaf" />
        </div>
    )
}
export default TreatmentHeroSection;