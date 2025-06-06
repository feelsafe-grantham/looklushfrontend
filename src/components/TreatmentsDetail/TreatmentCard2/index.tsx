import { ProblemCardsType } from "@/lib/types";
import styles from "./TreatmentCard2.module.css"
import Link from "next/link";
import { generateBlogSlug } from "@/lib/helper";
const TreatmentCard2 = ({ card }: { card: ProblemCardsType }) => {
    return (
        <div className={styles.treatmentCard}>
            <div className={styles.imageContainer}>
                <img
                    src={card.image}
                    alt={card.title}
                    className={styles.cardImage}
                />
            </div>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.description}>{card.description}</p>

            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span className={styles.rating}>{card.review}</span>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.customers}>{card.no_of_reviews}</span>
                    <span className={styles.label}>Satisfied Customers</span>
                </div>
            </div>

            <Link
                className={styles.button}
                href={`/treatments/${generateBlogSlug(card.title, card.id)}`}
            >
                {card.button_text}!
            </Link>
        </div>
    )
}
export default TreatmentCard2;