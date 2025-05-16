import styles from "./ExpertCard.module.css";
const ExpertCard = () => {
    const homeCards = [
        { image: "/images/homeCard1.jpg", title: "USFDA Approved Equipment" },
        { image: "/images/homeCard2.png", title: "Leading in Corporates" },
        { image: "/images/homeCard3.png", title: "Well Trained Experts" },
    ]
    return (
        <div className={`${styles.homeCardContainer}`}>
            {homeCards.map((card, index) =>
                <div key={index} className={`${styles.homeCard}`}>
                    <img
                        alt={card.title}
                        src={card.image}
                        className={`${styles.homeCardImage}`}
                    />
                    <div className={`${styles.homeCardTitle}`}>
                        {card.title}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ExpertCard;