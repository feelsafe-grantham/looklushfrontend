"use client";
import { useState } from 'react';
import styles from './TestimonialCarousel.module.css';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Dr. Poonam Patel',
        text: "I’ve struggled with acne and pigmentation for I honestly can’t thank Dr. Poonam Patel enough.  years and tried everything—from home remedies to over-the-counter products.",
        rating: 4.5,
        profileImage: "/images/after1.png",
        displayImage: "/images/before1.png"
    },
    {
        name: 'Dr. Poonam Patel',
        text: "I honestly can’t thankd   Dr. Poonam Patel enough. I’ve struggled with acne anpigmentation for years and tried everything—from home remedies to over-the-counter products.",
        rating: 4.5,
        profileImage: "/images/after2.png",
        displayImage: "/images/before2.png"
    },
    {
        name: 'Dr. Poonam Patel',
        text: " Dr. Poonam Patel enough. I’ve struggled with acne anI honestly can’t thank Dr. Poonam Patel enough. I’ve struggled with acne and pigmentation for years and tried everything—from home remedies to over-the-counter products.",
        rating: 4.5,
        profileImage: "/images/after3.png",
        displayImage: "/images/before3.png"
    },
    // You can add more testimonial objects here
];

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = testimonials.length;

    const next = () => setCurrentIndex((currentIndex + 1) % total);
    const prev = () => setCurrentIndex((currentIndex - 1 + total) % total);

    const current = testimonials[currentIndex];

    return (
        <div className={styles.carouselWrapper}>
            <img className={`${styles.treatmentLeafRight}`} src="/images/treatment-leaf.png" alt="treatment-leaf" />
            <img className={`${styles.treatmentLeafLeft}`} src="/images/treatment-leaf-left.png" alt="treatment-leaf" />
            <div className={styles.carouselContainer}>
                <div className={styles.testimonialSection}>
                    <div className={styles.avatarCircle}>
                        <Image src={current.profileImage} alt="Profile" width={80} height={80} className={styles.avatarImg} />
                    </div>
                    <p className={styles.testimonialText}>
                        “{current.text}”
                    </p>
                    <div className={styles.stars}>
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i}>
                                {i < Math.floor(current.rating) ? '★' : '☆'}
                            </span>
                        ))}
                    </div>
                    <div className={styles.ratingControls}>
                        <button onClick={prev}>&lt;</button>
                        <span className={styles.rating}>{current.rating}/5</span>
                        <button onClick={next}>&gt;</button>
                    </div>
                </div>
                <div className={styles.imageSection}>
                    <Image src={current.displayImage} alt="Testimonial Visual" width={300} height={400} className={styles.blurredImg} />
                    <div className={styles.imageNav}>
                        <button onClick={prev}>&#9664;</button>
                        <button onClick={next}>&#9654;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
