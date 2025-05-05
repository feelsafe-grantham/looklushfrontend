"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./Home.module.css";
import CompareSlider from "../common/CompareSlider";
import CompareCard from "../common/CompareCard";
import { link } from "fs";
import SwiperCard from "../common/SwiperCard";
const Home = () => {
    const homeCards = [
        { image: "/images/homeCard1.png", title: "USFDA Approved Equipment" },
        { image: "/images/homeCard2.png", title: "Leading in Corporates" },
        { image: "/images/homeCard3.png", title: "Well Trained Experts" },
    ]
    const [hearts, setHearts] = useState([]);
    const comments = [
        { user: 'freyjalalila_', message: 'OMG 😳😳😳' },
        { user: 'user420', message: 'awesome 👍' },
        { user: 'catlover88', message: 'this is so wholesome 🐱' },
        { user: 'techjunkie', message: 'audio is perfect 🔊' },
        { user: 'nina_artz', message: 'what a great smile! 😊' },
    ];
    const arr = ["a", "b", "c"]
    useEffect(() => {
        const interval = setInterval(() => {
            const newHeart = {
                id: Date.now(),
                left: Math.random() * 80 + 10,
                color: ['#ff3366', '#ffffff'][Math.floor(Math.random() * 2)],
            };
            setHearts((prev) => [...prev.slice(-10), newHeart]);
        }, 500);
        return () => clearInterval(interval);
    }, []);
    // video urls
    const videoUrl = "/videos/homeVideo1.mp4";
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.src = videoUrl;
            }
        }, 300);

        return () => {
            clearTimeout(timeout);
        };
    }, []);
    // price data
    const priceData = [
        {
            service: "Acne Star",
            marketPrice: "₹999",
            ourPrice: "₹699",
            diff: "₹300",
            value: "300+ Customers",
            achievement: "Book Appointment"
        },
        {
            service: "Glow Facial",
            marketPrice: "₹1200",
            ourPrice: "₹850",
            diff: "₹350",
            value: "500+ Customers",
            achievement: "Book Appointment"
        },
        {
            service: "Hair Spa",
            marketPrice: "₹1500",
            ourPrice: "₹999",
            diff: "₹501",
            value: "250+ Customers",
            achievement: "Book Appointment"
        },
        {
            service: "Acne Star",
            marketPrice: "₹999",
            ourPrice: "₹699",
            diff: "₹300",
            value: "300+ Customers",
            achievement: "Book Appointment"
        },
        {
            service: "Glow Facial",
            marketPrice: "₹1200",
            ourPrice: "₹850",
            diff: "₹350",
            value: "500+ Customers",
            achievement: "Book Appointment"
        },
        {
            service: "Hair Spa",
            marketPrice: "₹1500",
            ourPrice: "₹999",
            diff: "₹501",
            value: "250+ Customers",
            achievement: "Book Appointment"
        }
    ];
    // services data
    const links = [
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
        { label: "Home", value: "/", },
    ]


    return (
        <div className={`${styles.homeContainer}`}>
            <div>
                <img
                    alt="Home"
                    src="/images/carousel1.png"
                    className={`${styles.homeImage}`}
                />
            </div>
            <div className={`${styles.homeCardContainer}`}>
                {homeCards.map((card, index) =>
                    <div key={index} className={`${styles.homeCard}`}>
                        <img
                            alt={card.title}
                            src={card.image}
                            className={`${styles.homeCardImage}`}
                        />
                        <div className={`${styles.homeCardTitle}`}>
                            {card.title}
                        </div>
                    </div>)}
            </div>
            <div className={`${styles.sectionHeadingContainer}`}>
                <h3 className={`${styles.sectionHeading}`}>
                    Our Celebrity Clients
                </h3>
                <img
                    alt="pink decorative sign"
                    src="/images/pink-sign.png"
                    className={`${styles.sectionHeadingImage}`}
                />
            </div>
            <div className={`${styles.celebrityContainer}`}>
                <p className={`${styles.celebrityText}`}>
                    Looklust clinic treats each patient with empathy and discretion. A patient arriving at Looklust Clinic is educated about their condition prior to treatment.
                </p>
                <img
                    alt="Celebrity"
                    src="/images/celebrity.png"
                    className={`${styles.celebrityImage}`}
                />
            </div>
            {/* new  */}
            <div className={`${styles.sectionHeadingContainer}`}>
                <h3 className={`${styles.sectionHeading}`}>
                    20 years of Experience
                </h3>
                <img
                    alt="pink decorative sign"
                    src="/images/pink-sign.png"
                    className={`${styles.sectionHeadingImage}`}
                />
            </div>
            <div className={`${styles.celebrityContainer}`}>
                <p className={`${styles.celebrityText}`}>
                    Looklust clinic treats each patient with empathy and discretion. A patient arriving at Looklust Clinic is educated about their condition prior to treatment.
                </p>
                <img
                    alt="Celebrity"
                    src="/images/20-years.png"
                    className={`${styles.celebrityImage}`}
                />
            </div>
            {/* new ends */}
            {/* heart card */}
            <div className={`${styles.reelCardContainer}`}>

                {arr.map((c) =>
                    <div key={c} className={styles.oneCard}>
                        <div className={styles.header}>
                            <div className={styles.profile}><span className={styles.dot}></span> ig.celebram</div>
                            <div className={styles.liveTag}>LIVE</div>
                            <div className={styles.viewCount}><span className={styles.eye}>👁</span> 420</div>
                            <div>
                                ❌
                            </div>
                        </div>
                        <img src="/images/user1.png" alt="Live Host" className={styles.hostImage} />
                        <div className={styles.commentBox}>
                            {comments.map((c, i) => (
                                <div key={i} className={styles.comment}><span className={styles.user}>{c.user}</span> {c.message}</div>
                            ))}
                        </div>
                        <div className={styles.hearts}>
                            {hearts.map((heart) => (
                                <span
                                    key={heart.id}
                                    className={styles.heart}
                                    style={{ left: `${heart.left}%`, backgroundColor: heart.color }}
                                >❤️</span>
                            ))}
                        </div>
                    </div>
                )}

            </div>
            {/* heart card ends */}
            {/* video starts */}
            <div className={`${styles.sectionHeadingContainer}`}>
                <h3 className={`${styles.sectionHeading}`}>
                    Experience the art of Caring <br />
                    with Dr. Poonam Patel
                </h3>
                <img
                    alt="pink decorative sign"
                    src="/images/pink-sign.png"
                    className={`${styles.sectionHeadingImage}`}
                />
            </div>
            <div className={`${styles.celebrityContainer}`}>
                <p className={`${styles.celebrityText}`}>
                    Looklust clinic treats each patient with empathy and discretion. A patient arriving at Looklust Clinic is educated about their condition prior to treatment.
                </p>
                <div className={styles.videoContainer}>
                    <video
                        className={`${styles.video}`}
                        ref={videoRef}
                        loop
                        muted
                        autoPlay
                        playsInline
                        poster="/images/homeFallback.jpg"
                        preload="auto"
                    >
                        {/* <source src={"/home/video/videoBag.mp4"} type="video/mp4" /> */}
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>
            {/* video ends */}
            {/* Comparison Slider */}
            <div className={`${styles.compareSliderContainer}`}>
                <CompareCard />
                <CompareCard />
                <CompareCard />
            </div>
            {/* comparison slider ends */}
            {/* price table stars */}
            <div className={`${styles.sectionHeadingContainer}`}>
                <h3 className={`${styles.sectionHeading}`}>
                    Nothing Complex Here
                </h3>
                <img
                    alt="pink decorative sign"
                    src="/images/pink-sign.png"
                    className={`${styles.sectionHeadingImage}`}
                />
            </div>
            <div className={`${styles.celebrityContainer}`}>
                <p className={`${styles.celebrityText}`}>
                    Looklust clinic treats each patient with empathy and discretion. A patient arriving at Looklust Clinic is educated about their condition prior to treatment.
                </p>
            </div>
            <div className={`${styles.priceTableContainer}`}>
                <table className={`${styles.priceTable}`}>
                    <thead>
                        <tr className={`  ${styles.tableHeaderRow}`}>
                            <th className={` ${styles.topLeftRadius} ${styles.tableHeader}`}>Service</th>
                            <th className={`${styles.tableHeader}`}>Market Price</th>
                            <th className={`${styles.tableHeader}`}>Our Price  </th>
                            <th className={`${styles.tableHeader}`}>Diff </th>
                            <th className={`${styles.tableHeader}`}>Value </th>
                            <th className={`${styles.topRightRadius} ${styles.tableHeader}`}>Achivement </th>
                        </tr>
                    </thead>
                    <tbody>
                        {priceData.map((item, index) => (
                            <tr key={index}>
                                <td className={styles.tableData}>{item.service}</td>
                                <td className={styles.tableData}>{item.marketPrice}</td>
                                <td className={styles.tableData}>{item.ourPrice}</td>
                                <td className={styles.tableData}>{item.diff}</td>
                                <td className={`${styles.tableData} ${styles.value}`} > {item.value.split(" ")[0]}<br />{item.value.split(" ").slice(1).join(" ")}</td>
                                <td className={styles.tableData}>
                                    <button className={styles.bookButton}>{item.achievement}</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>
            {/* price table ends */}
            {/* faq section / Form section  */}
            <div className={`${styles.sectionHeadingContainer}`}>
                <h3 className={`${styles.sectionHeading}`}>
                    Welcome to Looklush Asthetic <br />
                    & Laser Center
                </h3>
                <img
                    alt="pink decorative sign"
                    src="/images/pink-sign.png"
                    className={`${styles.sectionHeadingImage}`}
                />
            </div>
            <div className={`${styles.servicesContainer}`}>
                <div className={`scrollbar-hide ${styles.serviesLinksContainer}`}>
                    {links.map((link, index) => (
                        <span key={index} className={`${styles.serviceLink}`}>
                            {link.label}
                        </span>
                    ))}
                </div>
                <SwiperCard />
                <div className={`${styles.formContainer}`}>
                    <form className={`${styles.form}`}>
                        <input type="text" placeholder="Name" className={`${styles.formInput}`} />
                        <input type="text" placeholder="Email" className={`${styles.formInput}`} />
                        <input type="tel" placeholder="Phone" className={`${styles.formInput}`} />
                        <select className={`${styles.formInput} ${styles.formSelect}`}>
                            <option className={`${styles.option}`} value="select">Select</option>
                            <option className={`${styles.option}`} value="select">Select</option>
                            <option className={`${styles.option}`} value="select">Select</option>
                            <option className={`${styles.option}`} value="select">Select</option>
                        </select>

                        <textarea placeholder="Message" className={`${styles.formInput} ${styles.formTextArea}`} />
                        <button type="submit" className={`${styles.formButton}`}>Submit</button>
                    </form>
                </div>
            </div>

            <div className="h-96 w-full border-2 border-red-900"></div>
        </div>
    );
}
export default Home;