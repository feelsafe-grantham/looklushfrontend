import { ApiResponse, ProblemCardsType, ProblemCatType } from "@/lib/types";
import TreatmentCard2 from "../TreatmentCard2";
import styles from "./TreatmentCardContainer2.module.css"
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { notFound } from "next/navigation";
async function fetchRelatedProblemCards(id: number) {
    try {
        const res: ApiResponse<ProblemCatType> = await apiClient.get(`${ENDPOINTS.PROBLEMCARDSRELATED}${id}`);
        return res?.data;
    } catch (error) {
        console.error("this is error: ", error)
    }
}
const TreatmentCardContainer2 = async ({ id }: { id?: number }) => {

    const treatmensts: ProblemCatType | undefined = await fetchRelatedProblemCards(id!);
    if (treatmensts?.cards?.length === 0) notFound();
    return (
        <div className={`${styles.treatmentCardContainer}`}>
            {treatmensts?.cards?.map((card, index) => <TreatmentCard2 key={index} card={card} />)}
        </div>
    )
}
export default TreatmentCardContainer2;