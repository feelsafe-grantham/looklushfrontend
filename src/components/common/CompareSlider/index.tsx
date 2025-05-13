"use client"
import React, { useState } from 'react';
import styles from './CompareSlider.module.css'
const CompareSlider = ({ before = "/images/before1.png", after = "/images/after1.png" }) => {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSlide = (e: any) => {
        setSliderValue(e.target.value);
    };

    const clipStyle = {
        clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`,
    };
    return (
        <div className={styles.container}>
            <img src={after} alt="after" />
            <img
                src={before}
                alt="before"
                className={styles.overlayImg}
                style={clipStyle}
            />
            <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                className={styles.slider}
                onInput={handleSlide}
            />
        </div>
    )
}
export default CompareSlider