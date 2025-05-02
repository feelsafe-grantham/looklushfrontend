import styles from "./TopBar.module.css";
import { staticImages } from "@/utils/staticNames";
const TopBar = () => {
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
                <span className={`${styles.upperOfferText}`}>
                    <span className={`${styles.upperOfferTextBold}`}>Click Here</span>
                </span>
            </div>
        </div>
    );
};

export default TopBar;
