"use client";
import Link from "next/link";
import { useState } from "react";
import { staticImages } from "@/utils/staticNames/index"
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
const Header = () => {
    const links = [
        { label: "Home", url: "/", },
        { label: "About", url: "/about", },
        { label: "Treatments", url: "/treatments", },
        { label: "Blog", url: "/blog", },
        { label: "Location", url: "/location", },
        { label: "FAQs", url: "/faqs", },
    ]
    const pathname = usePathname()
    const isActive = (url: string) => pathname === url
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)
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

                        >
                            {link.label}
                        </Link>
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

