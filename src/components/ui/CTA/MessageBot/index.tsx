"use client";
import { useState } from "react";
import { contactData } from "@/data";
import styles from "./MessageBot.module.css";
import ChatBot from "../Icons/ChatBot";
const MessageBot = () => {
    const [isVisible, setIsVisible] = useState(true);//make it false by default
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
    const questions = [
        {
            text: "Book a Consultation.",
            whatsappLink: `https://wa.me/+91${contactData.number1}?text=Hi%2C%20I'd%20like%20to%20book%20a%20consultation%20for%20laser%20treatment.`
        },
        {
            text: "Laser Treatment Options.",
            whatsappLink: `https://wa.me/+91${contactData.number1}?text=Can%20you%20share%20the%20types%20of%20laser%20treatments%20available%3F`
        },
        {
            text: "Cost & Packages Info.",
            whatsappLink: `https://wa.me/+91${contactData.number1}?text=Could%20you%20please%20provide%20details%20about%20pricing%20and%20treatment%20packages%3F`
        },
        {
            text: "Check Appointment Availability.",
            whatsappLink: `https://wa.me/+91${contactData.number1}?text=I’d%20like%20to%20know%20about%20available%20slots%20for%20an%20appointment.`
        },
        {
            text: "How Soon Can I See Results?",
            whatsappLink: `https://wa.me/+91${contactData.number1}?text=How%20long%20does%20it%20take%20to%20see%20results%20from%20laser%20treatment%3F`
        },
        {
            text: "Speak to a Specialist.",
            whatsappLink: `https://wa.me/+91${contactData.number1}?text=I%20have%20a%20few%20questions%20and%20would%20like%20to%20speak%20to%20a%20specialist.`
        }
    ];

    const handleQuestionClick = (index: number) => {
        setSelectedQuestion(index);
        window.open(questions[index].whatsappLink, '_blank');
    };

    const handleDismiss = () => {
        setIsVisible(false);
    };

    if (!isVisible) return <ChatBot onClick={() => setIsVisible(true)} />;
    return (
        <>
            <ChatBot onClick={() => setIsVisible(true)} />

            <div className={styles.chatContainer}>
                <div className={styles.chatHeader}>
                    <h3>How can we help you?</h3>
                    <button onClick={handleDismiss} className={styles.closeButton}>×</button>
                </div>
                <div className={styles.questionsContainer}>
                    {questions.map((question, index) => (
                        <button
                            key={index}
                            className={`${styles.questionButton} ${selectedQuestion === index ? styles.selected : ''}`}
                            onClick={() => handleQuestionClick(index)}
                        >
                            {question.text}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MessageBot;