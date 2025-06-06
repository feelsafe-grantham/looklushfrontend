"use client";
import { useEffect, useRef } from "react";
import styles from "./ResultsSection.module.css";
import SectionHeading from "@/components/common/SectionHeading";
import useResult from "./useResults";
import VideoShimmer from "@/components/common/Loading/VideoShimmer";

const ResultsSection = ({ id }: { id: number | undefined }) => {
  const { result, loading } = useResult(id);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (videoRef.current && result?.video_url) {

        videoRef.current.src = result.video_url;
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [result?.video_url]);
  if (loading) return <VideoShimmer />;
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        {result?.title1 && (
          <SectionHeading line1={result?.title1} />
        )}
        <p className={styles.description}>{result?.description}</p>
        <div className={styles.imageCarousel}>
          <div className={`${styles.imagesContainer}`}>
            {result?.image?.map((image: any, index: number) => (
              <img key={index} src={image.image} alt="Male patient" />
            ))}
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
            poster={result?.fallback}
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
