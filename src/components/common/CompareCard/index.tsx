import { apiClient } from "@/lib/api/apiClient";
import CompareSlider from "../CompareSlider";
import styles from "./CompareCard.module.css"
import { ApiResponse, CompareCardType } from "@/lib/types";
import { ENDPOINTS } from "@/lib/api/endpoints";


const CompareCard = ({ CompareCard }: { CompareCard: CompareCardType }) => {
    const {
        client_name = "Client Name Here",
        star_rating = 5,
        client_text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.t consectetur adipisict consectetur adipisicing elit.",
        image_before = "/images/before2.png",
        image_after = "/images/after2.png",
        image_alt = "",
    } = CompareCard || {};
    return (
        <div className={styles.compareCardContainer}>
            <h5 className={styles.clientName}>{client_name}</h5>
            <div className={`${styles.clientStarContainer}`}>
                {[...Array(star_rating)].map((_, i) => <span key={i}>⭐</span>)}
            </div>
            <p className={`${styles.clientText}`}>
                {client_text}
            </p>
            <div className={styles.compareImageContainer}>
                <CompareSlider before={image_before} after={image_after} alt={image_alt} />
            </div>
        </div>
    );
}
export default CompareCard;