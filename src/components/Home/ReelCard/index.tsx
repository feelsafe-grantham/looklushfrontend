"use client"
import styles from './ReelCard.module.css';
import { VideoTestimonial } from '@/lib/types';
import React, { useEffect, useState, useRef } from 'react';
const ReelCard = ({ Reel }: { Reel: VideoTestimonial }) => {
    const { username, viewers, comments, videoUrl } = Reel;
    const [hearts, setHearts] = useState<{ id: number; left: number; color: string }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newHeart = {
                id: Date.now(),
                left: Math.random() * 80 + 10,
                color: ['#ff3366', '#ffffff'][Math.floor(Math.random() * 2)],
            };
            setHearts((prev) => [...prev.slice(-10), newHeart]);
        }, 500);
        return () => clearInterval(interval);
    }, []);

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
        <div className={styles.oneCard}>

            <div className={styles.header}>
                <div className={styles.profile}><span className={styles.dot}></span>{username}</div>
                <div className={styles.liveTag}>LIVE</div>
                <div className={styles.viewCount}><span className={styles.eye}>👁</span>{viewers}</div>
                <div>
                    ❌
                </div>
            </div>
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
            <div className={styles.commentBox}>
                {comments.map((c: any, i: any) => (
                    <div key={i} className={styles.comment}><span className={styles.user}>{c.user}</span> {c.message}</div>
                ))}
            </div>
            <div className={styles.hearts}>
                {hearts.map((heart) => (
                    <span
                        key={heart.id}
                        className={styles.heart}
                        style={{ left: `${heart.left}%`, backgroundColor: heart.color }}
                    >❤️</span>
                ))}
            </div>
        </div>
    )
}
export default ReelCard;