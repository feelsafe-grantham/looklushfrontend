import VideoComp from "."
import { apiClient } from "@/lib/api/apiClient";
import { ApiResponse, FallbackType } from "@/lib/types";


async function fetchFallback(endpoint: string) {
    try {
        // const res: ApiResponse<FallbackType> = await apiClient.get(endpoint);
        return { fallback: "/images/homeFallback.png" };
        // return res?.data;
    } catch (e) {
        console.log(e)
        return {}
    }
}
const VidoeContainer = async ({ endpointFallback = "", endpointVideo = "" }: { endpointFallback: string, endpointVideo: string }) => {
    const fallback = await fetchFallback(endpointFallback);
    if (!fallback?.fallback) return null;
    return (
        <VideoComp fallback={fallback?.fallback} endpointVideo={endpointVideo} />
    )
}
export default VidoeContainer