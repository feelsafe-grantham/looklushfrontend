import React from "react";
import styles from "./LaserBurn.module.css";

const LaserBurnSection = () => {
  const btnLinks = [
    {
      label: "What is a Laser Burn?",
      url: "",
    },
    {
      label: "How it works?",
      url: "",
    },
    {
      label: "Total Sitting?",
      url: "",
    },
    {
      label: "Is it painful?",
      url: "",
    },
  ];
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
        {btnLinks.map((btn) => (
          <button className={styles.infoButton}>{btn.label}</button>
        ))}
      </div>
      <button className={styles.checkoutButton}>Book Now</button>
    </div>
  );
};

export default LaserBurnSection;
