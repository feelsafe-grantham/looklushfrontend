import { ConsultServices } from "@/lib/types";
import styles from "./ServiceCard.module.css";
const ServiceCard = ({ service }: { service: ConsultServices }) => {
    return (

        <div className={styles.card}>
            <div className={`${styles.serviceHeadContainer}`}>
                <img
                    src={service.image}
                    alt={service.title}
                    className={styles.serviceCardImage}
                />
                <h3 className={styles.title}>{service.title}</h3>
            </div>
            <p className={styles.description}>{service.description}</p>
            <ul className={styles.details}>
                <li className={`${styles.listItem}`}>
                    <img
                        className={`${styles.icon}`}
                        src="/images/call.png"
                        alt="phone"
                    />
                    {service.phone}
                </li>
                <li className={`${styles.listItem}`}>
                    <img
                        className={`${styles.icon}`}
                        src="/images/clock.png"
                        alt="phone"
                    />
                    {service.timing}
                </li>
                <li className={`${styles.listItem}`}>
                    <img
                        className={`${styles.icon}`}
                        src="/images/rupee.png"
                        alt="phone"
                    />
                    {service.fee}
                </li>
                <li className={`${styles.listItem}`}>
                    <img
                        className={`${styles.icon}`}
                        src="/images/pin.png"
                        alt="phone"
                    />
                    {service.address}
                </li>
            </ul>
            <a href="/treatments" className={styles.viewMore}>
                View More
            </a>
        </div>

    )
}

export default ServiceCard;