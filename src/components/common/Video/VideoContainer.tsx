import VideoComp from ".";
import { apiClient } from "@/lib/api/apiClient";
import { ApiResponse, VidoeFallbackType } from "@/lib/types";

async function fetchFallback(endpoint: string) {
  try {
    const res: ApiResponse<VidoeFallbackType> = await apiClient.get(endpoint);
    return res.data;
  } catch (error) {
    console.error("Error while fetching fallback: ", error);
    return {
      fallback: "/images/fallback.png",
      video_url: "",
    };
  }
}
const VidoeContainer = async ({
  endpoint,
  isFullWidth,
  isOverlay = false,
}: {
  endpoint: string;
  isFullWidth?: boolean;
  isOverlay?: boolean;
}) => {
  const videoData: VidoeFallbackType = await fetchFallback(endpoint);

  if (!videoData?.video_url) {
    return null;
  }
  const fallbackUrl = videoData?.fallback ?? "/images/fallback.png";
  const videoUrl = videoData?.video_url ?? "";
  return (
    <VideoComp
      videoUrl={videoUrl}
      fallback={fallbackUrl}
      isFullWidth={isFullWidth}
      isOverlay={isOverlay}
    />
  );
};
export default VidoeContainer;
