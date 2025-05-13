import CompareCard from "../CompareCard";
import styles from "./CompareSliderContainer.module.css"
const CompareSliderContainer = () => {
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
    return (
        <div className={`${styles.compareWrapper}`}>
            <div className={`${styles.compareContainer}`}>
                {compareData.map((reel, index) => (
                    <CompareCard key={index} CompareCard={reel} />
                ))}
            </div>
        </div>
    )
}
export default CompareSliderContainer