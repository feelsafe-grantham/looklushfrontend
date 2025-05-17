import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { ApiResponse, HeroImagesType } from "@/lib/types";
import Carousel from "../Carousel";





async function fetchHeroImages(): Promise<HeroImagesType[]> {
    try {
        const response: ApiResponse<HeroImagesType[]> = await apiClient.get(ENDPOINTS.CAROUSEL);
        return response?.data || [];
    } catch (error) {
        console.error("Failed to fetch hero images:", error);
        return [];
    }
}

const CarouselContainer = async () => {
    const data = await fetchHeroImages();
    const imgUrls = data.map((item) => item.image);

    if (imgUrls.length === 0) {
        return null
    }

    return (
        <Carousel>
            {imgUrls.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
            ))}
        </Carousel>
    )
}

export default CarouselContainer;