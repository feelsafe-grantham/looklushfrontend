import styles from "./ReviewSummary.module.css";

const ratings = [
    { stars: 5, percent: 64 },
    { stars: 4, percent: 5 },
    { stars: 3, percent: 8 },
    { stars: 2, percent: 5 },
    { stars: 1, percent: 18 },
];

const satisfaction = [
    { label: "Response", percent: 76 },
    { label: "Quality", percent: 85 },
    { label: "Delivery", percent: 80 },
];

const ReviewSummary = () => {
    return (
        <div className={styles.reviewSummary}>

            <div className={styles.container}>
                {/* Average Rating */}
                <div className={styles.average}>
                    <div className={styles.score}>
                        <span className={styles.big}>4.1</span>
                        <span className={styles.small}>/5</span>
                    </div>
                    <div className={styles.stars}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className={`${i < 4 ? styles.starFilled : styles.starEmpty} ${styles.star}`}>★</span>
                        ))}
                    </div>
                    <p className={styles.reviews}>39 Reviews</p>
                </div>
                <span className={styles.divider}></span>
                {/* Bar Ratings */}
                <div className={styles.bars}>
                    {ratings.map((r) => (
                        <div key={r.stars} className={styles.barRow}>
                            <span>{r.stars} Star</span>
                            <div className={styles.bar}>
                                <div
                                    className={styles.fill}
                                    style={{ width: `${r.percent}%` }}
                                ></div>
                            </div>
                            <span className={styles.percent}>{r.percent}%</span>
                        </div>
                    ))}
                </div>
                <span className={styles.divider}></span>
                {/* Satisfaction */}
                <div className={styles.satisfaction}>
                    <h3 >User Satisfaction</h3>
                    <div className={styles.circles}>
                        {satisfaction.map((item) => (
                            <div key={item.label} className={styles.circleWrapper}>
                                <div className={styles.circle}
                                    style={{ "--percent": `${item.percent}` } as React.CSSProperties}>
                                    <div
                                        className={styles.circleFill}
                                        style={{ strokeDashoffset: `${100 - item.percent}` }}
                                    ></div>
                                    <span className={styles.circleText}>{item.percent}%</span>
                                </div>
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReviewSummary;
