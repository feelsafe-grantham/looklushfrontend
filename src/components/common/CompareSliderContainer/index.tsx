import { ApiResponse, CompareCardType } from "@/lib/types";
import CompareCard from "../CompareCard";
import styles from "./CompareSliderContainer.module.css"
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";

async function fetchCompareCards() {
    try {
        const res: ApiResponse<CompareCardType[]> = await apiClient.get(ENDPOINTS.REELS);
        const data = res?.data;
        return data;
    } catch (err) {
        console.log("Error occured in fetching compare cards ", err);
        return []
    }
    // return [
    //     {
    //         client_name: "Client Name Here",
    //         star_rating: 5,
    //         client_text:
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit.t consectetur adipisict consectetur adipisicing elit.",
    //         image_before: "/images/before2.png",
    //         image_after: "/images/after2.png",
    //         image_alt: "",
    //     },
    //     {
    //         client_name: "Client Name Here",
    //         star_rating: 5,
    //         client_text:
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit.t consectetur adipisict consectetur adipisicing elit.",
    //         image_before: "/images/before2.png",
    //         image_after: "/images/after2.png",
    //         image_alt: "",
    //     },
    //     {
    //         client_name: "Client Name Here",
    //         star_rating: 5,
    //         client_text:
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit.t consectetur adipisict consectetur adipisicing elit.",
    //         image_before: "/images/before2.png",
    //         image_after: "/images/after2.png",
    //         image_alt: "",
    //     },
    // ];
}
const CompareSliderContainer = async () => {
    const compareData = await fetchCompareCards();
    if (compareData.length === 0) return null;
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
export default CompareSliderContainer;