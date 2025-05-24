import { contactData } from "@/data";
import Link from "next/link";
import styles from "./Icons.module.css"

const ChatBot = ({ onClick }: { onClick: () => void }) => {
    return (
        <button onClick={onClick} className={`${styles.iconContainer} ${styles.chatIconContainer}`}>
            <img className={`${styles.icon} ${styles.chatIcon}`} src="/images/chatBot1.jpeg" alt="chatbot" />
        </button>
    )
}
export default ChatBot;