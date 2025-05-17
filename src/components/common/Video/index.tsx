"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./VideoComp.module.css"
import { apiClient } from "@/lib/api/apiClient";
import { ApiResponse, VideoType } from "@/lib/types";
const VideoComp = ({ fallback = "/images/homeFallback.png", endpointVideo }: { endpointVideo: string, fallback?: string }) => {
    const video = "/videos/video.mp4"
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [videoUrl, setVideoUrl] = useState<string>("");
    const fetchVideoUrl = async () => {
        try {
            setVideoUrl(video)
            // const res: ApiResponse<VideoType> = await apiClient.get(endpointVideo);
            // if (res?.data?.video_url) {
            //     setVideoUrl(res.data.video_url);
            // }
        } catch (e) {
            console.error("Video fetch error:", e);
        }
    };
    useEffect(() => {

        fetchVideoUrl();
    }, []);

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