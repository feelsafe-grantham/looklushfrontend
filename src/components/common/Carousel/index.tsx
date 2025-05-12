"use client";

import React, { useEffect, useRef, useState, ReactElement } from "react";
import styles from "./Carousel.module.css";

interface CarouselProps {
    children: React.ReactElement[]; // Accept any type of valid React element
    showButtons?: boolean;
}


function Carousel({ children, showButtons = false }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselBoxRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const { slides } = getSlidesInfo();
        if (slides.length > 0) {
            slides[0].setAttribute("data-active", "true");
            startSlider();
        }

        return () => {
            stopSlider();
        };
    }, []);

    const getSlidesInfo = () => {
        const carouselBox = carouselBoxRef.current;
        const slides = carouselBox?.children ?? [];
        return { slides, count: slides.length };
    };

    const setActiveSlide = (newIndex: number) => {
        const { slides } = getSlidesInfo();
        [...slides].forEach((slide, index) => {
            slide.setAttribute("data-active", String(index === newIndex));
        });
        setCurrentIndex(newIndex);
    };

    const startSlider = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => {
                const { count } = getSlidesInfo();
                const newIndex = (prev + 1) % count;
                setActiveSlide(newIndex);
                return newIndex;
            });
        }, 2000);
    };

    const stopSlider = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handlePrev = () => {
        stopSlider();
        const { count } = getSlidesInfo();
        const newIndex = (currentIndex - 1 + count) % count;
        setActiveSlide(newIndex);
        startSlider();
    };

    const handleNext = () => {
        stopSlider();
        const { count } = getSlidesInfo();
        const newIndex = (currentIndex + 1) % count;
        setActiveSlide(newIndex);
        startSlider();
    };

    const handleStepperClick = (index: number) => {
        stopSlider();
        setActiveSlide(index);
        startSlider();
    };

    return (
        <div className={styles.carousel}>
            <section
                ref={carouselBoxRef}
                className={styles.box}
                aria-label="Sliding Images"
                tabIndex={0}
                onMouseEnter={stopSlider}
                onMouseLeave={startSlider}
            >
                {children.map((child, index) =>
                    React.cloneElement(child as React.ReactElement<any>, {
                        key: index,
                        className: styles.img,
                        "data-active": String(index === currentIndex),
                    })
                )}
            </section>
            {showButtons && <button className={`${styles.button} ${styles.prev}`} onClick={handlePrev}>
                &lt;
            </button>}
            {showButtons && <button className={`${styles.button} ${styles.next}`} onClick={handleNext}>
                &gt;
            </button>}

            <div className={styles.stepper}>
                {children.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleStepperClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {/* {index + 1} */}
                        <span className={`${styles.carouselDot} ${index === currentIndex ? styles.active : ""}`}></span>
                    </button>
                ))}
            </div>

        </div>
    );
}

export default Carousel;

