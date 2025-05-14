"use client"
import { useState } from "react";
import styles from "./Faqs.module.css"
import { CiSearch } from "react-icons/ci";
import AccordionFaq from "../common/AccordiaFaq";

const Faqs = () => {
    const [query, setQuery] = useState<string>("")
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setQuery("");
    }
    // faqa
    const faq = [
        { text: "Acne Star", image: "/images/problem1.png" },
        { text: "Hydrafacial", image: "/images/problem2.png" },
        { text: "Laser Hair Removal", image: "/images/problem3.png" },
        { text: "Hifu Facial", image: "/images/problem4.png" },
        { text: "Lip Lightening", image: "/images/problem5.png" },
    ];
    const qna = [
        {
            question: "I am best coder in the world",
            answer:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        }, {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },
        {
            question: "I am best coder in the world",
            answer:
                "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat itaque cupiditate iure adipisci soluta pariatur, consequuntur placeat quisquam deleniti necessitatibus?",
        },

    ];
    return (
        <div className={styles.faqContainer}>
            <div className={`${styles.faqSearchBarContainer}`}>
                <form onSubmit={handleSubmit}>
                    <div className={`${styles.faqSearchBarWrapper}`}>
                        <CiSearch size={25} className={`${styles.faqSearchIcon}`} />
                        <input
                            type="text"
                            value={query}
                            placeholder="Search your queries.."
                            className={`${styles.faqSearchBar}`}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className={`${styles.faqSearchButton}`} type="submit">Search</button>
                    </div>
                </form>
            </div>
            <div className={`${styles.faqProblemContainer}`}>
                {faq.map((faq, index) => (
                    <div key={index} className={styles.iconWrapper}>
                        <div className={styles.imageContainer}>
                            <img src={faq.image} className={styles.faqImage} />
                            <img
                                src="/images/faqborder.png"
                                alt={faq.text}
                                className={styles.border}
                            />
                        </div>
                        <p className={styles.label}>{faq.text}</p>
                    </div>
                ))}
            </div>
            <div className={`${styles.qnaContainer}`}>
                <ul className={`${styles.questionsContainer} scrollbar-hide`}>
                    {qna.map((item, index) => (
                        <li key={index} className={styles.card}>
                            <span className={styles.number}>
                                {(index + 1).toString().padStart(2, "0")}
                            </span>
                            <p className={styles.text}>{item.question}</p>
                        </li>
                    ))}
                </ul>
                <div className={`${styles.answerContainer}`}>
                    <p className={`${styles.answer} scrollbar-hide`}>{qna[0].answer}</p>
                    <img
                        className={`${styles.qnaImage}`}
                        src="/images/qnaImage.gif"
                        alt="qna image"
                    />
                </div>
            </div>
            <div className={`${styles.qnaMobileContainer}`}>
                <AccordionFaq qna={qna} />
            </div>
        </div>
    )
}
export default Faqs;