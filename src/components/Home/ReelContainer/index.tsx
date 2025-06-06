import { apiClient } from "@/lib/api/apiClient";
import styles from "./ReelContainer.module.css"
import { ENDPOINTS } from "@/lib/api/endpoints";
import { ApiResponse, VideoTestimonial } from "@/lib/types";
import ReelContainerComp from "./ReelContainer";

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
            <ReelContainerComp reels={Reel} />
        </div>
    )
}

export default ReelContainer;