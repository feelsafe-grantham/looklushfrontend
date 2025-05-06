import Form from "@/components/common/Form";
import styles from "./Footer.module.css";
const Footer = () => {
    return <footer className={`${styles.footerWrapper}`}>
        <div className={`${styles.footerContent}`}>
            <div className={`${styles.footerMain}`}>
                <div className={`${styles.footerForm}`}>
                    <Form />
                </div>
                <footer className={styles.footer}>
                    {/* Left Section - Menu */}
                    <div className={styles.menuSection}>
                        <h3 className={styles.heading}>MENU</h3>
                        <ul className={styles.menuList}>
                            <li>Home</li>
                            <li>Treatments</li>
                            <li>Problems</li>
                            <li>Blogs</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Middle Section - Follow & Address */}
                    <div className={styles.followSection}>
                        <h3 className={styles.heading}>FOLLOW</h3>
                        <div className={styles.socialIcons}>
                            {/* <FaFacebookF className={styles.icon} />
                                <FaLinkedinIn className={styles.icon} />
                                <FaTwitter className={styles.icon} /> 
                            */}
                        </div>
                        <h4 className={styles.subHeading}>Address</h4>
                        <p>
                            <strong>MUMBAI:</strong> 101, Ahimsa Height, Ahimsa Marg, Near Sundar Nagar, Off, Chincholi Bunder Rd, Malad West, Mumbai,
                        </p>
                        <p>
                            <strong>GURGAON:</strong> R3, M3M Urbana mall, 108, Golf course extension Road, Sector 67, Gurugram, Haryana 122001
                        </p>
                    </div>


                    {/* Right Section - Instagram Grid */}
                    <div className={styles.instagramGrid}>
                        {Array(4).fill(0).map((_, idx) => (
                            <div key={idx} className={styles.instagramImageWrapper}>
                                <img
                                    src={`https://via.placeholder.com/150?text=Img+${idx + 1}`}
                                    alt={`Instagram ${idx + 1}`}
                                    className={styles.instagramImage}
                                />
                                <div className={styles.instagramOverlay}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram Icon" className={styles.instagramIcon} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Section - Tags */}
                    <div className={styles.tagsWrapper}>
                        {[
                            'Skin specialist consultation',
                            'Top dermatology clinic',
                            'Expert skin doctor',
                            'Acne treatment clinic',
                            'Laser skin resurfacing',
                            'Laser hair removal dermatologist'
                        ].map((tag, idx) => (
                            <span key={idx} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </footer>

            </div>
            <div className={`${styles.footerBottomBar}`}>
                &copy; 2025 Looklush . All rights reserved.
            </div>
        </div>
    </footer>;
};

export default Footer;


