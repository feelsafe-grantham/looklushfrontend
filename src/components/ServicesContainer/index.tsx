"use client";
import Form from "../common/Form";
import CommonShimmer from "../common/Loading/CommonShimmer";
import LinksShimmer from "../common/Loading/LinksShimmer";
import PriceTableShimmer from "../common/Loading/PriceTableShimmer";
import SwiperCard from "../common/SwiperCard";
import styles from "./ServicesContainer.module.css"
import useServices from "./useServices";

const ServicesContainer = () => {
    const { links: linkss, selectedImages, onLinkClick, activeLink, loading } = useServices();

    return (
        <div className={`${styles.servicesContainer}`}>
            {loading ? <LinksShimmer /> : <div className={`scrollbar-hide ${styles.serviesLinksContainer}`}>
                {linkss.map((link, index) => (
                    <span className={`${styles.serviceLink} ${activeLink === link ? styles.serviceLinkActive : ""}`} onClick={() => onLinkClick(link)} key={index} >
                        {link}
                    </span>
                ))}
            </div>}
            {loading ? <CommonShimmer /> : <SwiperCard cardsData={selectedImages} />}
            <div className={`${styles.formContainer}`}>
                <Form />
            </div>
        </div>
    )
}

export default ServicesContainer;