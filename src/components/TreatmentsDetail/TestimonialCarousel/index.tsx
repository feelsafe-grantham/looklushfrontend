"use client";
import styles from './TestimonialCarousel.module.css';
import Image from 'next/image';
import useTestimonialCarousel from './useTestimonialCarousel';
import VideoShimmer from '@/components/common/Loading/VideoShimmer';


export default function TestimonialCarousel({ id }: { id: number | undefined }) {
    const { loading, next, prev, current, } = useTestimonialCarousel(id);
    if (loading) return <VideoShimmer />
    return (
        <div className={styles.carouselWrapper}>
            <img className={`${styles.treatmentLeafRight}`} src="/images/treatment-leaf.png" alt="treatment-leaf" />
            <img className={`${styles.treatmentLeafLeft}`} src="/images/treatment-leaf-left.png" alt="treatment-leaf" />
            <div className={styles.carouselContainer}>
                <div className={styles.testimonialSection}>
                    <div className={styles.avatarCircle}>
                        <img src={current.profile_image} alt="Profile" width={80} height={80} className={styles.avatarImg} />
                    </div>
                    <p className={styles.testimonialText}>
                        “{current.client_text}”
                    </p>
                    <div className={styles.stars}>
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i}>
                                {i < Math.floor(current.star_rating) ? '★' : '☆'}
                            </span>
                        ))}
                    </div>
                    <div className={styles.ratingControls}>
                        <button onClick={prev}>&lt;</button>
                        <span className={styles.rating}>{current.star_rating}/5</span>
                        <button onClick={next}>&gt;</button>
                    </div>
                </div>
                <div className={styles.imageSection}>
                    <img
                        width={500}
                        height={500}
                        alt="Testimonial Visual"
                        src={current.image}
                        className={styles.blurredImg}
                    />
                    <div className={styles.imageNav}>
                        <button onClick={prev}>&#9664;</button>
                        <button onClick={next}>&#9654;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
