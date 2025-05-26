import ServiceCard from "../SeviceCard";
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import styles from "./ServiceCardContainer.module.css"
import { ApiResponse, ConsultServices } from "@/lib/types";
async function fetchServices() {
    try {
        const res: ApiResponse<ConsultServices[]> = await apiClient.get(ENDPOINTS.ABOUTPAGESERVICES);

        const data = res?.data;
        return data;
    } catch (err) {
        console.log("Error occured in fetching compare cards ", err);
        return []
    }
}
const ServiceCardContainer = async () => {

    const servicess = await fetchServices();

    return (
        <div className={`${styles.servicesWrapper}`}>

            <div className={styles.servicesContainer}>
                {servicess.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))
                }
            </div>
        </div>
    )
}

export default ServiceCardContainer;