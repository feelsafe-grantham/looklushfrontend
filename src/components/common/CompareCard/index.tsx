
import { Span } from "next/dist/trace";
import CompareSlider from "../CompareSlider";
import styles from "./CompareCard.module.css"
interface CompareCardProps {
    clientName: string;
    starRating: number;
    clientText: string;
    imageBefore: string;
    imageAfter: string;
    imageAlt?: string;
}
const CompareCard = ({ CompareCard }: { CompareCard: CompareCardProps }) => {
    const { clientName = "Client Name Here", starRating = 5, clientText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.t consectetur adipisict consectetur adipisicing elit.", imageBefore = "/images/before2.png", imageAfter = "/images/after2.png", imageAlt } = CompareCard || {};
    return (
        <div className={styles.compareCardContainer}>
            <h5 className={styles.clientName}>{clientName}</h5>
            <div className={`${styles.clientStarContainer}`}>
                {[...Array(starRating)].map((_, i) => <span key={i}>⭐</span>)}
            </div>
            <p className={`${styles.clientText}`}>
                {clientText}
            </p>
            <div className={styles.compareImageContainer}>
                <CompareSlider before={imageBefore} after={imageAfter} />
            </div>
        </div>
    );
}
export default CompareCard;