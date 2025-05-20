"use client";
import { useEffect, useRef } from "react";
import styles from "./VideoComp.module.css"

const VideoComp = ({ videoUrl = "", fallback = "", isFullWidth = false }: { videoUrl: string, fallback: string, isFullWidth?: boolean }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.src = videoUrl;
            }
        }, 0);
        return () => {
            clearTimeout(timeout);
        };
    }, [videoUrl]);
    return (
        <div className={`${styles.videoContainer} ${isFullWidth ? styles.fullWidth : styles.maxWidth}`}>
            <video
                className={`${styles.video} ${isFullWidth ? styles.fullWidth : styles.maxWidth}`}
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