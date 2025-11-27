import Form from "@/components/common/Form";
import styles from "./Footer.module.css";
import { MUMBAI_ADDRESS, GHAZIABAD_ADDRESS, SOCIAL_MEDIA } from "@/data";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  const tags = [
    "Skin specialist consultation",
    "Top dermatology clinic",
    "Expert skin doctor",
    "Acne treatment clinic",
    "Laser skin resurfacing",
    "Laser hair removal dermatologist",
  ];
  return (
    <footer className={`${styles.footerWrapper}`}>
      <div className={`${styles.footerContent}`}>
        <div className={`${styles.footerMain}`}>
          <div className={`${styles.footerForm}`}>
            <Form />
          </div>
          <div className={styles.footer}>
            <div className={`${styles.contentSection}`}>
              {/* Left Section - Menu */}
              <div className={styles.menuSection}>
                <h3 className={styles.heading}>MENU</h3>
                <ul className={styles.menuList}>
                  <li className={`${styles.menuItem}`}>
                    <Link href="/">Home</Link>
                  </li>
                  <li className={`${styles.menuItem}`}>
                    <Link href="/about">About</Link>
                  </li>
                  <li className={`${styles.menuItem}`}>
                    <Link href="/treatments">Treatments</Link>
                  </li>
                  <li className={`${styles.menuItem}`}>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className={`${styles.menuItem}`}>
                    <Link href="/faqs">Faqs</Link>
                  </li>
                </ul>
              </div>

              {/* Middle Section - Follow & Address */}
              <div className={styles.followSection}>
                <h3 className={styles.heading}>FOLLOW</h3>
                <div className={styles.socialIcons}>
                  <div className={styles.iconWrapper}>
                    <Link target="_blank" href={SOCIAL_MEDIA.facebook}>
                      <FaFacebookF className={styles.icon} />
                    </Link>
                  </div>
                  <div className={styles.iconWrapper}>
                    <Link target="_blank" href={SOCIAL_MEDIA.linkedin}>
                      <FaLinkedinIn className={styles.icon} />
                    </Link>
                  </div>
                  <div className={styles.iconWrapper}>
                    <Link target="_blank" href={SOCIAL_MEDIA.instagram}>
                      <FaInstagram className={styles.icon} />
                    </Link>
                  </div>
                </div>
                <h4 className={styles.heading}>Address</h4>
                <p className={styles.address}>
                  <strong>MUMBAI:</strong> {MUMBAI_ADDRESS.address}
                </p>

                <p className={styles.address}>
                  <strong>GHAZIABAD:</strong> {GHAZIABAD_ADDRESS.address}
                </p>
              </div>

              {/* Right Section - Instagram Grid */}
              <div className={styles.instagramGrid}>
                {Array(4)
                  .fill(0)
                  .map((_, idx) => (
                    <Link
                      target="_blank"
                      href={SOCIAL_MEDIA.instagram}
                      key={idx}
                      className={styles.instagramImageWrapper}
                    >
                      <img
                        src={`/images/problem${idx + 1}.jpg`}
                        alt={`Instagram ${idx + 1}`}
                        className={styles.instagramImage}
                      />
                      <div className={styles.instagramOverlay}>
                        <img
                          src="/images/instafooter.png"
                          alt="Instagram Icon"
                          className={styles.instagramIcon}
                        />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
            {/* Bottom Section - Tags */}
            <div className={styles.tagsWrapper}>
              {tags.map((tag, idx) => (
                <span key={idx} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={`${styles.footerEmail}`}>
              <span>Contact us at: </span>
              <Link href={`mailto:${MUMBAI_ADDRESS.email}`}>
                {MUMBAI_ADDRESS.email}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.footerBottomBar} ${styles.bottomLinksContainer}`}
      >
        <Link className={`${styles.bottomLinks}`} href="/terms-and-conditions">
          Terms & Conditions
        </Link>
        <Link className={`${styles.bottomLinks}`} href="/privacy-policy">
          Privacy Policy
        </Link>
        <Link className={`${styles.bottomLinks}`} href="/disclaimer">
          Disclaimer
        </Link>
      </div>
      <div className={`${styles.footerBottomBar}`}>
        &copy; 2025 Looklush . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
