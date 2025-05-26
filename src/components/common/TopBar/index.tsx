"use client"
import styles from "./TopBar.module.css";
import { staticImages } from "@/utils/staticNames";
import { useModal } from "@/components/ui/Modal/useModal";
import Form from "../Form";
const TopBar = () => {
    const { openModal } = useModal();
    const handleBtnClick = () => {
        openModal(
            {
                header: "Contact Us",
                content: <Form />,
                animation: "scale",
            }
        )
    }
    return (
        <div className={`${styles.topBar}`}>
            <img
                className={`${styles.topBarImage}`}
                src={staticImages.topBar}
                alt="TopBar"
            />
            <div className={`${styles.upperOffer}`}>
                <img
                    className={`${styles.upperOfferImage}`}
                    src={staticImages.upperOfferImage}
                    alt="UpperOffer"
                />
                <span onClick={handleBtnClick} className={`${styles.upperOfferText}`}>
                    <span className={`${styles.upperOfferTextBold}`}>Book Now</span>
                </span>
            </div>
        </div>
    );
};

export default TopBar;
