import { apiClient } from "@/lib/api/apiClient";
import ReelCard from "../ReelCard";
import styles from "./ReelContainer.module.css"
import { ENDPOINTS } from "@/lib/api/endpoints";
import { ApiResponse, VideoTestimonial } from "@/lib/types";

async function fetchReels(): Promise<VideoTestimonial[]> {
    try {
        const response: ApiResponse<VideoTestimonial[]> = await apiClient.get(ENDPOINTS.REELS);
        return response?.data;
    } catch (error) {
        console.error("Failed to fetch hero images:", error);
        return [];
    }
}
const ReelContainer = async () => {
    const Reel = await fetchReels();
    if (Reel.length === 0) return null

    return (
        <div className={`${styles.reelWrapper}`}>
            <div className={`${styles.reelContainer}`}>
                {Reel.map((reel, index) => <ReelCard key={index} Reel={reel} />)}
            </div>
        </div>
    )
}
export default ReelContainer;