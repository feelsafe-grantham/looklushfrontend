import { apiClient } from "@/lib/api/apiClient";
import styles from "./ReelContainer.module.css"
import { ENDPOINTS } from "@/lib/api/endpoints";
import { ApiResponse, VideoTestimonial } from "@/lib/types";
import ReelContainerComp from "./ReelContainer";
type ReelContainerProps = {
    startIndex: number;
    endIndex?: number;
};
async function fetchReels(): Promise<VideoTestimonial[]> {
    try {
        const response: ApiResponse<VideoTestimonial[]> = await apiClient.get(ENDPOINTS.REELS);
        return response?.data;
    } catch (error) {
        console.error("Failed to fetch hero images:", error);
        return [];
    }
}

const ReelContainer = async ({ startIndex, endIndex }: ReelContainerProps) => {
    const Reel = await fetchReels();
    const sortedReel = Reel.sort((a, b) => a.index - b.index);
    const sorted = sortedReel.slice(
        startIndex,
        endIndex !== undefined ? endIndex : sortedReel.length
    );

    if (Reel.length === 0) return null

    return (
        <div className={`${styles.reelWrapper}`}>
            <ReelContainerComp reels={sorted} />
        </div>
    )
}

export default ReelContainer;