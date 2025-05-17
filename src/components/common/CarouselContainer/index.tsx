import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { ApiResponse, HeroImagesType } from "@/lib/types";
import Carousel from "../Carousel";





async function fetchHeroImages(): Promise<HeroImagesType[]> {
    const response: ApiResponse<HeroImagesType[]> = await apiClient.get(ENDPOINTS.CAROUSEL);
    return response?.data;
}

const CarouselContainer = async () => {
    const data = await fetchHeroImages();
    const imgUrls = data.map((item) => item.image);
    return (
        <Carousel>
            {imgUrls.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
            ))}
        </Carousel>
    )
}

export default CarouselContainer;