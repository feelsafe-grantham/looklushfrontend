"use client"
import React from "react";
import styles from "./LaserBurn.module.css";
import CtaButton from "@/components/ui/CtaButton";
import Carousel from "@/components/common/Carousel";
import { useModal } from "@/components/ui/Modal/useModal";
import Form from "@/components/common/Form";

const LaserBurnSection = () => {
  const btnLinks = [
    {
      label: "What is your skin type?",
      url: "",
    },
    {
      label: "How to properly clean your skin?",
      url: "",
    },
    {
      label: "Is your skin sensitive?",
      url: "",
    },
    {
      label: " Is your skin dry or oily?",
      url: "",
    },
  ];
  const { openModal, closeModal } = useModal();
  const handleBtnClick = () => {
    openModal(
      {
        header: "Schedule Appointment",
        content: <Form />,
        animation: "scale",
      }
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Carousel showButtons={true}>
          <img src="/images/blog1.png" alt="Image 1" />
          <img src="/images/blog2.png" alt="Image 1" />
          <img src="/images/blog3.png" alt="Image 1" />
          <img src="/images/blog4.png" alt="Image 1" />
        </Carousel>
      </div>
      <h2 className={styles.title}>Know about Your Skin</h2>
      <div className={styles.buttonGroup}>
        {btnLinks.map((btn) => (
          <button className={styles.infoButton}>{btn.label}</button>
        ))}
      </div>
      <CtaButton newTab={false} onClick={handleBtnClick} text="Book Now!" />
    </div>
  );
};

export default LaserBurnSection;
