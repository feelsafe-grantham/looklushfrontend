import styles from "./Treatments.module.css"
const Treatments = () => {
    return (
        <div className={`${styles.treatmentContainer}`}>
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
                        <button className={`${styles.button}`}>Book Now</button>
                    </div>
                </div>
                <div className={`${styles.heroImageContainer}`}>
                    <img className={`${styles.heroImage}`} src="/images/treatmentHero.png" alt="heroImage" />
                </div>
                <img className={`${styles.treatmentLeafLeft}`} src="/images/treatment-leaf-left.png" alt="treatment-leaf" />
            </div>
            <div className={`${styles.appointmentFormContainer}`}>
                <form>
                    <div className={styles.formInputContainer}>
                        <select className={`${styles.formInput} ${styles.formSelect}`}>
                            <option className={styles.option}>Date & time</option>
                            <option className={styles.option}>Today, 4 PM</option>
                            <option className={styles.option}>Tomorrow, 11 AM</option>
                        </select>

                        <select className={`${styles.formInput} ${styles.formSelect}`}>
                            <option className={styles.option}>Treatment</option>
                            <option className={styles.option}>Facial</option>
                            <option className={styles.option}>Peel</option>
                        </select>

                        <select className={`${styles.formInput} ${styles.formSelect}`}>
                            <option className={styles.option}>No. of Sittings</option>
                            <option className={styles.option}>1</option>
                            <option className={styles.option}>3</option>
                            <option className={styles.option}>5</option>
                        </select>

                        <button type="submit" className={styles.bookButton}>Book Now!</button>
                    </div>
                </form>

            </div>
        </div >

    )
}
export default Treatments;