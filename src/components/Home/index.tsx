"use client";
import styles from "./Home.module.css";
import Form from "../common/Form";
import { useEffect, useState, useRef } from "react";
import CompareCard from "../common/CompareCard";
import SwiperCard from "../common/SwiperCard";
import ExpertCard from "../common/ExpertCard";
import SectionHeading from "../common/SectionHeading";
import SectionHeadPara from "../common/SectionHeadPara";
import ReelCard from "./ReelCard";
import Faqs from "../common/Faqs";
const Home = () => {
    const comments = [
        { user: "freyjalalila_", message: "OMG 😳😳😳" },
        { user: "user420", message: "awesome 👍" },
        { user: "catlover88", message: "this is so wholesome 🐱" },
        { user: "techjunkie", message: "audio is perfect 🔊" },
        { user: "nina_artz", message: "what a great smile! 😊" },
    ];
    const Reel = [
        {
            username: "amanpandey_11",
            viewers: 120,
            comments: comments,
            videoUrl: "/videos/reel.mp4",
        },
        {
            username: "_amanpandey_11",
            viewers: 120,
            comments: comments,
            videoUrl: "/videos/reel.mp4",
        },
        {
            username: "_aman11",
            viewers: 120,
            comments: comments,
            videoUrl: "/videos/reel.mp4",
        },
    ];

    const compareData = [
        {
            clientName: "Client Name Here",
            starRating: 5,
            clientText:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit.t consectetur adipisict consectetur adipisicing elit.",
            imageBefore: "/images/before2.png",
            imageAfter: "/images/after2.png",
            imageAlt: "",
        },
        {
            clientName: "Client Name Here",
            starRating: 5,
            clientText:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit.t consectetur adipisict consectetur adipisicing elit.",
            imageBefore: "/images/before2.png",
            imageAfter: "/images/after2.png",
            imageAlt: "",
        },
        {
            clientName: "Client Name Here",
            starRating: 5,
            clientText:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit.t consectetur adipisict consectetur adipisicing elit.",
            imageBefore: "/images/before2.png",
            imageAfter: "/images/after2.png",
            imageAlt: "",
        },
    ];

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
            achievement: "Book Appointment",
        },
        {
            service: "Glow Facial",
            marketPrice: "₹1200",
            ourPrice: "₹850",
            diff: "₹350",
            value: "500+ Customers",
            achievement: "Book Appointment",
        },
        {
            service: "Hair Spa",
            marketPrice: "₹1500",
            ourPrice: "₹999",
            diff: "₹501",
            value: "250+ Customers",
            achievement: "Book Appointment",
        },
        {
            service: "Acne Star",
            marketPrice: "₹999",
            ourPrice: "₹699",
            diff: "₹300",
            value: "300+ Customers",
            achievement: "Book Appointment",
        },
        {
            service: "Glow Facial",
            marketPrice: "₹1200",
            ourPrice: "₹850",
            diff: "₹350",
            value: "500+ Customers",
            achievement: "Book Appointment",
        },
        {
            service: "Hair Spa",
            marketPrice: "₹1500",
            ourPrice: "₹999",
            diff: "₹501",
            value: "250+ Customers",
            achievement: "Book Appointment",
        },
    ];
    // services data
    const links = [
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
        { label: "Home", value: "/" },
    ];


    return (
        <div className={`${styles.homeContainer}`}>
            <div>
                <img
                    alt="Home"
                    src="/images/carousel1.png"
                    className={`${styles.homeImage}`}
                />
            </div>
            <ExpertCard />
            <SectionHeading line1="Our Celebrity Clients" />
            <SectionHeadPara para="Looklust clinic treats each patient with empathy and discretion. A patient arriving at Looklust Clinic is educated about their condition prior to treatment." />
            <img
                alt="Celebrity"
                src="/images/celebrity.png"
                className={`${styles.celebrityImage}`}
            />
            {/* new starts */}
            <SectionHeading line1="20 years of Experience" />
            <SectionHeadPara para="Looklust clinic treats each patient with empathy and discretion. A patient arriving at Looklust Clinic is educated about their condition prior to treatment." />
            <img
                alt="Celebrity"
                src="/images/20-years.png"
                className={`${styles.celebrityImage}`}
            />
            {/* new ends */}
            {/* heart card */}
            <div className={`${styles.reelCardContainer}`}>
                {Reel.map((reel, index) => (
                    <ReelCard key={index} Reel={reel} />
                ))}
            </div>
            {/* heart card ends */}
            {/* video starts */}

            <SectionHeading
                line1="Experience the art of Caring"
                line2="with Dr. Poonam Patel"
            />
            <SectionHeadPara para="  Looklust clinic treats each patient with empathy and discretion. A patient arriving at Looklust Clinic is educated about their condition prior to treatment." />
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
            {/* video ends */}
            {/* Comparison Slider */}
            <div className={`${styles.compareSliderContainer}`}>
                {compareData.map((compare, index) => <CompareCard CompareCard={compare} key={index} />
                )}
            </div>
            {/* comparison slider ends */}
            {/* price table stars */}
            <SectionHeading line1="Nothing Complex Here" />
            <SectionHeadPara para="Looklust clinic treats each patient with empathy and discretion. A patient arriving at Looklust Clinic is educated about their condition prior to treatment." />

            <div className={`${styles.priceTableContainer}`}>
                <table className={`${styles.priceTable}`}>
                    <thead>
                        <tr className={`  ${styles.tableHeaderRow}`}>
                            <th className={` ${styles.topLeftRadius} ${styles.tableHeader}`}>
                                Service
                            </th>
                            <th className={`${styles.tableHeader}`}>Market Price</th>
                            <th className={`${styles.tableHeader}`}>Our Price </th>
                            <th className={`${styles.tableHeader}`}>Diff </th>
                            <th className={`${styles.tableHeader}`}>Value </th>
                            <th className={`${styles.topRightRadius} ${styles.tableHeader}`}>
                                Achivement{" "}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {priceData.map((item, index) => (
                            <tr key={index}>
                                <td className={styles.tableData}>{item.service}</td>
                                <td className={styles.tableData}>{item.marketPrice}</td>
                                <td className={styles.tableData}>{item.ourPrice}</td>
                                <td className={styles.tableData}>{item.diff}</td>
                                <td className={`${styles.tableData} ${styles.value}`}>
                                    {" "}
                                    {item.value.split(" ")[0]}
                                    <br />
                                    {item.value.split(" ").slice(1).join(" ")}
                                </td>
                                <td className={styles.tableData}>
                                    <button className={styles.bookButton}>
                                        {item.achievement}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* price table ends */}
            {/* service section / Form section  */}
            <SectionHeading
                line1="Welcome to Looklush Asthetic"
                line2="& Laser Center"
            />
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
                    <Form />
                </div>
            </div>
            {/* service section / Form section  ends */}
            {/* Faq section starts */}
            <SectionHeading line1="Frequently Asked Questions" line2="& Answers" />
            <Faqs />

        </div>
    );
};
export default Home;
