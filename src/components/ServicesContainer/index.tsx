"use client";
import Form from "../common/Form";
import SwiperCard from "../common/SwiperCard";
import styles from "./ServicesContainer.module.css"
import useServices from "./useServices";

const ServicesContainer = () => {
    const { links: linkss, selectedImages, onLinkClick, activeLink } = useServices();

    return (
        <div className={`${styles.servicesContainer}`}>
            <div className={`scrollbar-hide ${styles.serviesLinksContainer}`}>
                {linkss.map((link, index) => (
                    <span className={`${styles.serviceLink} ${activeLink === link ? styles.serviceLinkActive : ""}`} onClick={() => onLinkClick(link)} key={index} >
                        {link}
                    </span>
                ))}
            </div>
            <SwiperCard cardsData={selectedImages} />
            <div className={`${styles.formContainer}`}>
                <Form />
            </div>
        </div>
    )
}

export default ServicesContainer;