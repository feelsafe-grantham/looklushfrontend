"use client"
import ReelCard from "../ReelCard";
import { VideoTestimonial } from "@/lib/types";
import styles from "./ReelContainer.module.css"
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { useRef } from "react";

const ReelContainerComp = ({ reels, showButton = true }: { reels: VideoTestimonial[], showButton?: boolean }) => {
    const reelContainerRef = useRef<HTMLDivElement>(null);
    const handlePrev = () => {
        if (reelContainerRef.current) {
            // Scroll left by the width of one ReelCard
            reelContainerRef.current.scrollBy({
                left: -reelContainerRef.current.offsetWidth / reels.length,
                behavior: "smooth"
            });
        }
    };

    // Handle next scroll action
    const handleNext = () => {
        if (reelContainerRef.current) {
            // Scroll right by the width of one ReelCard
            reelContainerRef.current.scrollBy({
                left: reelContainerRef.current.offsetWidth / reels.length,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className={`${styles.reelWrapper}`}>
            <div ref={reelContainerRef} className={`${styles.reelContainer} `}>
                {reels.map((reel, index) => <ReelCard key={index} Reel={reel} />)}
            </div>
            {showButton && <button className={`${styles.button} ${styles.prev}`} onClick={handlePrev}>
                <FaLessThan className={`${styles.gtIcon}`} />
            </button>}
            {showButton && <button className={`${styles.button} ${styles.next}`} onClick={handleNext}>
                <FaGreaterThan className={`${styles.gtIcon}`} />
            </button>}
        </div>
    )
}
export default ReelContainerComp;