import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { ApiResponse, ProblemCatType } from "@/lib/types";
import TreatmentCategory from "../TreatmentCategory";

async function fetchTreatments() {
    try {

        const res: ApiResponse<ProblemCatType[]> = await apiClient.get(ENDPOINTS.TREATMENTCATEGORY);
        return res.data;
    } catch (error) {
        console.error("this is error: ", error)
        return []
    }
}
const TreatmentsContainer = async () => {
    const treatments = await fetchTreatments();
    return (
        <>
            {treatments.map((treatment, index) =>
                <TreatmentCategory
                    key={index}
                    heading={treatment.heading}
                    cards={treatment.cards}
                />)}
        </>

    )
}

export default TreatmentsContainer;