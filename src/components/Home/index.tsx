import styles from "./Home.module.css";
const Home = () => {
    const homeCards = [
        { image: "/images/homeCard1.png", title: "USFDA Approved Equipment" },
        { image: "/images/homeCard2.png", title: "Leading in Corporates" },
        { image: "/images/homeCard3.png", title: "Well Trained Experts" },
    ]
    return (
        <div className={`${styles.homeContainer}`}>
            <div>
                <img
                    alt="Home"
                    src="/images/carousel1.png"
                    className={`${styles.homeImage}`}
                />
            </div>
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
                    </div>)}
            </div>
            <div className="h-96 w-full  border-2 border-red-900"></div>
        </div>
    );
}
export default Home;