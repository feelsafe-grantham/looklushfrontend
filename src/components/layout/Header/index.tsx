"use client";
import Link from "next/link";
import { staticImages } from "@/utils/staticNames/index"
import styles from "./Header.module.css";
import useHeader from "./useHeader";
const Header = () => {
    const { links, toggleMenu, isActive, isOpen, closeMenu, closeSubLink, handleMouseEnter, handleMouseLeave, hoverLink, } = useHeader();
    return (
        <header className={`${styles.headerContainer}`}>
            <div className={`${styles.hamburgerContainer}`} onClick={toggleMenu}>
                {
                    isOpen ? (
                        <img
                            src="/images/close.png"
                            alt="Close menu"
                            className={`${styles.hamburger} ${styles.logoheight}`}
                            onClick={closeMenu}
                        />
                    ) : (
                        <img
                            src="/images/open.png"
                            alt="Open menu"
                            className={`${styles.hamburger} ${styles.logoheight}`}
                            onClick={toggleMenu}
                        />
                    )}
            </div>
            <div className={`${styles.logoContainer}`}>
                <Link href="/" >
                    <img
                        src={staticImages.logo}
                        alt="High Tech Window Blinds logo by Vishal Interior"
                        className={`${styles.logo} ${styles.logoheight}`}
                    />
                </Link>
            </div>
            <ul className={`${styles.headerLinksContainer} ${isOpen ? styles.open : ""}`}>
                {links.map((link) => (
                    <li key={link.label} className={`${styles.headerLink}`}>

                        <Link
                            href={link.url}
                            onClick={closeMenu}
                            aria-label={`Navigate to ${link.label}`}
                            className={`${isActive(link.url) ? styles.linkActive : "not"}`}
                            title={`Navigate to ${link.label}`}
                            onMouseEnter={() => handleMouseEnter(link.label)}
                            onMouseLeave={handleMouseLeave}

                        >
                            {link.label}
                        </Link>
                        {hoverLink === link.label &&
                            <ul
                                onMouseLeave={handleMouseLeave}
                                className={`${styles.headerSubLinksContainer}`}
                                onMouseEnter={() => handleMouseEnter(link.label)}
                            >

                                {link.subLink.map((subLink, index) => (
                                    <li className={`${styles.headerSubLink}`} key={index}>
                                        <Link
                                            href={subLink.url}
                                            onClick={closeSubLink}
                                            aria-label={`Navigate to ${subLink.label}`}
                                            className={`${isActive(subLink.url) ? styles.linkActive : "not"}`}
                                            title={`Navigate to ${subLink.label}`}


                                        >
                                            {subLink.label}
                                        </Link>
                                    </li>
                                ))
                                }
                            </ul>}
                    </li>
                ))}
            </ul>
            <div className={`${styles.offerStripContainer} ${styles.logoheight}`}>
                <span className={`${styles.offerStripContact} ${styles.fitContent} ${styles.borderBottom}`}>+91 987654321</span>
                <span className={`${styles.offerStripContact} ${styles.fitContent}`}>drpoonam@looklush.in</span>
                <span className={`${styles.offerStripCta} ${styles.fitContent}`}>Let's fix your skin - Book Now</span>
            </div>
        </header>
    );
};

export default Header;

