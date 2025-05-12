"use client";
import { useEffect, useRef } from "react";
import styles from "./VideoComp.module.css"
const VideoComp = ({ videoUrl = "/videos/video.mp4", fallback = "/images/homeFallback.png" }: { videoUrl?: string, fallback?: string }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.src = videoUrl;
            }
        }, 300);

        return () => {
            clearTimeout(timeout);
        };
    }, []);
    return (
        <div className={styles.videoContainer}>
            <video
                className={`${styles.video}`}
                ref={videoRef}
                loop
                muted
                autoPlay
                playsInline
                poster={fallback}
                preload="auto"
            >
                {/* <source src={"/home/video/videoBag.mp4"} type="video/mp4" /> */}
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
export default VideoComp;