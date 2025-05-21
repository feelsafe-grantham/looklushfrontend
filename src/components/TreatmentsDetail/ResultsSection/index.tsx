"use client"
import { useEffect, useRef } from "react";
import styles from "./ResultsSection.module.css";
import SectionHeading from "@/components/common/SectionHeading";

const ResultsSection = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.src = "/videos/reel.mp4";
            }
        }, 300);

        return () => {
            clearTimeout(timeout);
        };
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.textSection}>
                <SectionHeading line1="Resut we have" line2="Delivered" />
                <p className={styles.description}>
                    Look Lush Clinic treats each patient with empathy and discretion.
                    A patient arriving at Look  A patient arriving at Look

                </p>
                <div className={styles.imageCarousel}>
                    <div className={`${styles.imagesContainer}`}>
                        <img src="/images/after1.png" alt="Male patient" />
                        <img src="/images/after2.png" alt="Male patient" />
                    </div>
                    <div className={styles.dots}>
                        <span className={styles.dot}></span>
                        <span className={styles.dot}></span>
                        <span className={styles.dot}></span>
                    </div>
                </div>
            </div>
            <div className={styles.videoSection}>
                <div className={`${styles.videoContainer}`}>
                    <video
                        className={`${styles.video}`}
                        ref={videoRef}
                        loop
                        muted
                        autoPlay
                        playsInline
                        poster="/images/homeFallback.jpg"
                        preload="auto"
                    >
                        {/* <source src={"/home/video/videoBag.mp4"} type="video/mp4" /> */}
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default ResultsSection;
