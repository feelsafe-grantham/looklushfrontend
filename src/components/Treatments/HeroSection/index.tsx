import styles from "./TreatmentHeroSection.module.css"
const TreatmentHeroSection = () => {
    return (
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
    )
}
export default TreatmentHeroSection;