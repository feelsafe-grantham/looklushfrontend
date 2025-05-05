"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./SwiperCard.module.css";
type Card = {
    name: string;
    image: string;
};
const cardsData: Card[] = [
    { name: "Girl1", image: "/images/swipe1.png" },
    { name: "Girl2", image: "/images/swipe2.png" },
    { name: "Girl3", image: "/images/swipe3.png" },
];
const SwiperCard = () => {
    const [cards, setCards] = useState(cardsData);
    const [isDragging, setIsDragging] = useState(false);
    const [translate, setTranslate] = useState({ x: 0, y: 0 });

    const cardRef = useRef<HTMLDivElement | null>(null);
    const startPos = useRef({ x: 0, y: 0 });

    // Handle mouse/touch move globally
    useEffect(() => {
        const handleMove = (e: MouseEvent | TouchEvent) => {
            if (!isDragging) return;
            const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
            const clientY = "touches" in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

            const deltaX = clientX - startPos.current.x;
            const deltaY = clientY - startPos.current.y;
            setTranslate({ x: deltaX, y: deltaY });
        };

        const handleEnd = () => {
            setIsDragging(false);

            if (Math.abs(translate.x) > 150) {
                // Swipe threshold passed — rotate to back
                setCards((prev) => {
                    const lastCard = prev[prev.length - 1];
                    const rest = prev.slice(0, -1);
                    return [lastCard, ...rest];
                });
            }

            // Reset swipe
            setTranslate({ x: 0, y: 0 });


        };

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseup", handleEnd);
        window.addEventListener("touchmove", handleMove);
        window.addEventListener("touchend", handleEnd);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseup", handleEnd);
            window.removeEventListener("touchmove", handleMove);
            window.removeEventListener("touchend", handleEnd);
        };
    }, [isDragging, translate]);

    const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
        const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
        startPos.current = { x: clientX, y: clientY };
        setIsDragging(true);
    };

    const topCard = cards[cards.length - 1];

    return (
        <div className={styles.swipeContainer}>
            {cards.map((card, i) => {
                const isTop = card === topCard;
                return (
                    <div
                        key={card.name}
                        ref={isTop ? cardRef : null}
                        onMouseDown={isTop ? handleStart : undefined}
                        onTouchStart={isTop ? handleStart : undefined}
                        className={styles.card}
                        style={{
                            backgroundImage: `url(${card.image})`,
                            transform: isTop
                                ? `translate(${translate.x}px, ${translate.y}px) rotate(${translate.x * 0.05}deg)`
                                : "none",
                            zIndex: i,
                            transition: isDragging ? "none" : "transform 0.3s ease",
                        }}
                    >
                        <div className={styles.nameLabel}>{card.name}</div>
                    </div>
                );
            })}
        </div>
    );
}
export default SwiperCard;