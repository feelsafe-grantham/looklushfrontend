"use client";
import AccordionFaq from "../AccordiaFaq";
import FaqAnsShimmer from "../Loading/FaqAnsShimmer";
import FaqCatShimmer from "../Loading/FaqCatShimmer";
import styles from "./Faqs.module.css";
import useFaqs from "./useFaqs";
const Faqs = () => {

    const { loading, faqCategories, setActiveCategory, activeCategory, activeQuestion, setActiveQuestion } = useFaqs();
    return (
        <>

            {loading ? <FaqCatShimmer /> :
                <div className={`${styles.faqContainer}`}>
                    {faqCategories.map((faqCat,) => (
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
                </div>}

            {loading ? <FaqAnsShimmer /> : <div className={`${styles.qnaContainer}`}>
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
            </div>}

            <div className={`${styles.qnaContainerMobile}`}>
                <AccordionFaq qna={activeCategory?.faqs} />
            </div>

        </>
    );
}
export default Faqs;