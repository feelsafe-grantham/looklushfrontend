import { ProblemCardsType } from "@/lib/types";
import styles from "./TreatmentCategory.module.css"
import Link from "next/link";
import { generateBlogSlug } from "@/lib/helper";
const TreatmentCategory = ({ heading, cards }: { heading: string, cards: ProblemCardsType[] }) => {

    return <div className={styles.wrapper}>
        <div className={styles.heading}>
            <h3>{heading}</h3>
            <div className={styles.line} />
        </div>
        <div className={styles.cardContainer}>
            {cards.map(card => (
                <div className={styles.card} key={card.id}>
                    <img src={card.image} alt={card.title} className={styles.image} />
                    <h3 className={styles.title}>{card.title}</h3>
                    <div className={styles.reviewContainer}>
                        <span className={styles.review}>{card.review} ⭐</span>
                        <span className={`${styles.star} ${styles.review}`}></span>
                        <span className={styles.review}>{card.no_of_reviews}+ reviews</span>
                    </div>
                    <Link href={`/treatments/${generateBlogSlug(card.title, card.id)}`} title={generateBlogSlug(card.title, card.id)} className={styles.button}>{card.button_text}</Link>
                </div>
            ))}
        </div>
    </div>
};

export default TreatmentCategory