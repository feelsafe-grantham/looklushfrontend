import React from "react";
import styles from "./LaserBurn.module.css";
import Carousel from "@/components/common/Carousel";
import Link from "next/link";

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
        <Carousel>
          <img src="/images/carousel1.png" alt="Image 1" />
          <img src="/images/carousel2.png" alt="Image 1" />
          <img src="/images/carousel3.png" alt="Image 1" />
          <img src="/images/carousel4.png" alt="Image 1" />
          <img src="/images/carousel5.png" alt="Image 1" />
        </Carousel>
      </div>
      <h2 className={styles.title}>Is Laser Burns?</h2>
      <div className={styles.buttonGroup}>
        {btnLinks.map((btn) => (
          <button className={styles.infoButton}>{btn.label}</button>
        ))}
      </div>
      <Link href="/location" className={styles.checkoutButton}>Book Now</Link>
    </div>
  );
};

export default LaserBurnSection;
