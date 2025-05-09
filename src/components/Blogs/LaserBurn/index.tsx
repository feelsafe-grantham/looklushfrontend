import React from "react";
import styles from "./LaserBurn.module.css";

const LaserBurnSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <button className={styles.navArrow}>❮</button>
                <img
                    src="/images/homecard1.png"
                    alt="Laser Burn Treatment"
                    className={styles.image}
                />
                <button className={styles.navArrow}>❯</button>
            </div>
            <h2 className={styles.title}>Is Laser Burns?</h2>
            <div className={styles.buttonGroup}>
                <button className={styles.infoButton}>What is a Laser Burn?</button>
                <button className={styles.infoButton}>How it works?</button>
                <button className={styles.infoButton}>Total Sitting?</button>
                <button className={styles.infoButton}>Is it painful?</button>
            </div>
            <button className={styles.checkoutButton}>Book Now</button>
        </div>
    );
};

export default LaserBurnSection;
