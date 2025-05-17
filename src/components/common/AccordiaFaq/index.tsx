"use client"
import React, { useState } from 'react';
import styles from './AccordionFaq.module.css';

type QnA = {
    question: string;
    answer: string;
};

interface Props {
    qna: QnA[];
}

const AccordionFaq: React.FC<Props> = ({ qna }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.qnaContainerMobile}>
            <ul className={styles.questionsContainer}>
                {qna?.map((item, index) => (
                    <li key={index} className={styles.card}>
                        <div
                            className={styles.questionWrapper}
                            onClick={() => toggleIndex(index)}
                        >
                            <span className={styles.number}>
                                {(index + 1).toString().padStart(2, '0')}
                            </span>
                            <p className={styles.text}>{item.question}</p>
                            <span
                                className={`${styles.arrow} ${openIndex === index ? styles.rotate : ''
                                    }`}
                            >
                                ▼
                            </span>
                        </div>

                        <div
                            className={`${styles.answerContainerMobile} ${openIndex === index ? styles.open : ''
                                }`}
                        >
                            <p className={styles.answerMobile}>{item.answer}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AccordionFaq;
