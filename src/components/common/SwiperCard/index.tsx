"use client";
import { useState, useRef } from "react";
import styles from "./SwiperCard.module.css";
const cardsData = [
    { name: "Alice", image: "/images/user1.png" },
    { name: "Bob", image: "/images/user2.png" },
    { name: "Charlie", image: "/images/user3.png" },
];
const SwiperCard = () => {
    const [cards, setCards] = useState(cardsData);
    const [dragging, setDragging] = useState(false);
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    const startX = useRef(0);
    const startY = useRef(0);

    const handleMouseDown = (e) => {
        setDragging(true);
        startX.current = e.clientX;
        startY.current = e.clientY;
    };

    const handleMouseMove = (e) => {
        if (!dragging) return;
        const deltaX = e.clientX - startX.current;
        const deltaY = e.clientY - startY.current;
        setTranslate({ x: deltaX, y: deltaY });
    };

    const handleMouseUp = () => {
        setDragging(false);

        if (translate.x > 150 || translate.x < -150) {
            setCards((prev) => prev.slice(0, -1)); // Remove top card
        }

        setTranslate({ x: 0, y: 0 }); // Reset position
    };

    const topCard = cards[cards.length - 1];

    return (
        <div
            className={styles.swipeContainer}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            {cards.map((card, i) => {
                const isTop = card === topCard;
                return (
                    <div
                        key={card.name}
                        onMouseDown={isTop ? handleMouseDown : null}
                        className={styles.card}
                        style={{
                            backgroundImage: `url(${card.image})`,
                            transform: isTop
                                ? `translate(${translate.x}px, ${translate.y}px) rotate(${translate.x * 0.05
                                }deg)`
                                : "none",
                            zIndex: i,
                            transition: dragging ? "none" : "transform 0.3s ease",
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