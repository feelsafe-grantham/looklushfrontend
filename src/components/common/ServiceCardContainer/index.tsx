import ServiceCard from "../SeviceCard";
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import styles from "./ServiceCardContainer.module.css"
import { ApiResponse, ConsultServices } from "@/lib/types";
async function fetchServices() {
    try {
        const res: ApiResponse<ConsultServices[]> = await apiClient.get(ENDPOINTS.ABOUTPAGESERVICES);
        console.log("res: ", res)
        const data = res?.data;
        return data;
    } catch (err) {
        console.log("Error occured in fetching compare cards ", err);
        return []
    }
}
const ServiceCardContainer = async () => {
    const services = [
        {
            id: 1,
            image: "/images/carousel1.png",
            title: "Cosmetic asd fas fasd asdf asdf  asfdasdf asdfjla;ksjdf;laksjdf;alskdjf asdf",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            phone: "+91-12345 67890",
            timing: "Mon-Sat 11:00AM - 08:00PM",
            fee: "1000 Consultation Fees",
            address:
                "101, AHIMSA HEIGHT, AHIMSA MARG, NEAR SUNDAR NAGAR, OFF, Chincholi Bunder Rd, Malad West, Mumbai, Maharashtra 400064",
        },
        {
            id: 2,
            image: "/images/carousel1.png",
            title: "Cosmetic Dermatology",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            phone: "+91-12345 67890",
            timing: "Mon-Sat 11:00AM - 08:00PM",
            fee: "1000 Consultation Fees",
            address:
                "101, AHIMSA HEIGHT, AHIMSA MARG, NEAR SUNDAR NAGAR, OFF, Chincholi Bunder Rd, Malad West, Mumbai, Maharashtra 400064",
        },
        {
            id: 3,
            image: "/images/carousel1.png",
            title: "Cosmetic Dermatology",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            phone: "+91-12345 67890",
            timing: "Mon-Sat 11:00AM - 08:00PM",
            fee: "1000 Consultation Fees",
            address:
                "101, AHIMSA HEIGHT, AHIMSA MARG, NEAR SUNDAR NAGAR, OFF, Chincholi Bunder Rd, Malad West, Mumbai, Maharashtra 400064",
        },
    ];
    const servicess = await fetchServices();
    console.log(servicess)
    return (
        <div className={styles.servicesContainer}>
            {servicess.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))
            }
        </div>
    )
}

export default ServiceCardContainer;