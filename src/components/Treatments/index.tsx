import Link from "next/link";
import styles from "./TreatmentDetail.module.css"
type Card = {
    id: number;
    image: string;
    title: string;
    review: string;
    buttonText: string;
};

type Props = {
    heading: string;
    cards: Card[];
};
const Treatments = () => {
    const sampleCards = [
        {
            id: 1,
            image: "/images/skin1.jpg",
            title: "Acne Solution asdf a asdf asd asdf asf asdf asdf ",
            review: "4.8 ★ (120 reviews)",
            buttonText: "Explore",
        },
        {
            id: 2,
            image: "/images/skin2.jpg",
            title: "Dry Skin Care",
            review: "4.6 ★ (95 reviews)",
            buttonText: "Explore",
        },
        {
            id: 3,
            image: "/images/skin3.jpg",
            title: "Anti-Aging",
            review: "4.7 ★ (110 reviews)",
            buttonText: "Explore",
        },
    ];
    const heading = "Skin Problems"
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h3>{heading}</h3>
                <div className={styles.line} />
            </div>
            <div className={styles.cardContainer}>
                {sampleCards.map(card => (
                    <div className={styles.card} key={card.id}>
                        <img src={card.image} alt={card.title} className={styles.image} />
                        <h3 className={styles.title}>{card.title}</h3>
                        <p className={styles.review}>{card.review}</p>
                        <Link href={"#"} className={styles.button}>{card.buttonText}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Treatments