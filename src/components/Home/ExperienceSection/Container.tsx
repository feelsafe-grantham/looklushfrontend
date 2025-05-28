import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { ApiResponse, VidoeFallbackType } from "@/lib/types";
import ExperienceSection from ".";

async function fetchReel() {
    try {
        const res: ApiResponse<VidoeFallbackType> = await apiClient.get(ENDPOINTS.HOMEVIDEOREEL);
        return res.data;
    } catch (error) {
        console.error("Error while fetching fallback: ", error);
        return {
            fallback: "/images/fallback.png",
            video_url: "",
        };
    }
}
async function fetchVideo() {
    try {
        const res: ApiResponse<VidoeFallbackType> = await apiClient.get(ENDPOINTS.HOMEVIDEOSEC);;
        return res.data;
    } catch (error) {
        console.error("Error while fetching fallback: ", error);
        return {
            fallback: "/images/fallback.png",
            video_url: "",
        };
    }
}
const ExperienceContainer = async () => {
    const reel = await fetchReel();
    const video = await fetchVideo();
    return (
        <ExperienceSection
            phoneFallback={reel.fallback}
            phoneVideoUrl={reel.video_url}
            tabFallback={video.fallback}
            tabVideoUrl={video.video_url}
        />
    )
}

export default ExperienceContainer;