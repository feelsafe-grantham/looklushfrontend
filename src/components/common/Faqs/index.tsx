
"use client";
import AccordionFaq from "../AccordiaFaq";
import styles from "./Faqs.module.css";
import useFaqs from "./useFaqs";
const Faqs = () => {
    // faq
    const faq = [
        { text: "Acne Star", image: "/images/problem1.png" },
        { text: "Hydrafacial", image: "/images/problem2.png" },
        { text: "Laser Hair Removal", image: "/images/problem3.png" },
        { text: "Hifu Facial", image: "/images/problem4.png" },
        { text: "Lip Lightening", image: "/images/problem5.png" },
    ];
    //faqs

    const qna = [
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
    const { faqCategories, setActiveCategory, activeCategory, activeQuestion, setActiveQuestion } = useFaqs();
    return (
        <>
            <div className={`${styles.faqContainer}`}>
                {faqCategories.map((faqCat, index) => (
                    <div key={faqCat.id} onClick={() => { setActiveCategory(faqCat.id) }} className={styles.iconWrapper}>
                        <div className={styles.imageContainer}>
                            <img src={faqCat.image} className={styles.faqImage} />
                            <img
                                src="/images/faqborder.png"
                                alt={faqCat.text}
                                className={styles.border}
                            />
                        </div>
                        <p className={styles.label}>{faqCat.text}</p>
                    </div>
                ))}
            </div>

            <div className={`${styles.qnaContainer}`}>
                <ul className={`${styles.questionsContainer}`}>
                    {activeCategory?.faqs.map((item, index) => (
                        <li key={index} className={styles.card} onClick={() => { setActiveQuestion(item.id) }}>
                            <span className={styles.number}>
                                {" "}
                                {(index + 1).toString().padStart(2, "0")}
                            </span>
                            <p className={styles.text}>{item.question}</p>
                        </li>
                    ))}
                </ul>
                <div className={`${styles.answerContainer}`}>
                    <p className={styles.answer}>{activeQuestion?.answer}</p>
                    <img
                        className={`${styles.qnaImage}`}
                        src="/images/qnaImage.gif"
                        alt="qna image"
                    />
                </div>
            </div>
            <div className={`${styles.qnaContainerMobile}`}>

                <AccordionFaq qna={activeCategory?.faqs} />
            </div>

        </>
    );
}
export default Faqs;