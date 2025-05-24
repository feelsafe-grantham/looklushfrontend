
import { contactData } from "@/data";
import Link from "next/link";
import styles from "./Icons.module.css"
const WhatsappIcon = () => {
    return (
        <Link href={`https://wa.me/+91${contactData.number1}`} className={`${styles.iconContainer}`}>
            <img className={`${styles.icon} ${styles.whatsappIcon}`} src="/images/whatsappIcon.png" />
        </Link>
    )
}

export default WhatsappIcon;