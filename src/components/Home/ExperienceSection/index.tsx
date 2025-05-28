"use client";
import { useEffect, useRef } from "react";
import styles from './ExperienceSection.module.css';

const ExperienceSection = () => {
    const phoneVideoUrl = "/videos/reel.mp4"
    const phoneVideoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (phoneVideoRef.current) {
                phoneVideoRef.current.src = phoneVideoUrl;
            }
        }, 0);
        return () => {
            clearTimeout(timeout);
        };
    }, [phoneVideoUrl]);
    const tabVideoUrl = "/videos/video.mp4"
    const tabVideoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (tabVideoRef.current) {
                tabVideoRef.current.src = tabVideoUrl;
            }
        }, 0);
        return () => {
            clearTimeout(timeout);
        };
    }, [tabVideoUrl]);



    return (
        <div className={styles.experienceWrapper}>
            <div className={styles.experienceContainer}>
                <div className={styles.imageContainer}>
                    <img
                        alt="experience"
                        className={styles.image}
                        src="/images/laptop-frame.png"
                    />
                </div>
                <div className={styles.phoneContainer}>
                    <video
                        className={`${styles.phoneVideo}`}
                        ref={phoneVideoRef}
                        loop
                        muted
                        autoPlay
                        playsInline
                        poster={"/images/reelfallback.png"}
                        preload="auto"
                    >
                        Your browser does not support the video tag.
                    </video>
                    <img src="/images/phone-frame.png" alt="phone frame" className={styles.phoneFrame} />
                </div>
                {/* 
                <div className={styles.tabContainer}>
                    <video
                        className={`${styles.video}`}
                        ref={tabVideoRef}
                        loop
                        muted
                        autoPlay
                        playsInline
                        poster={"/images/homeFallback.png"}
                        preload="auto"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div> */}
            </div>
        </div>
    );
};

export default ExperienceSection;
