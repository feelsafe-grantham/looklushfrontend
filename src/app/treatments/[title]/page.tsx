import TreatmentsDetailComp from "@/components/TreatmentsDetail"
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { getIdFromBlogSlug } from "@/lib/helper";
import { ApiResponse, TreatmentDetailType } from "@/lib/types";
import { notFound } from "next/navigation";

async function fetchTreatmentDetail(id: number) {
    try {
        const res: ApiResponse<TreatmentDetailType> = await apiClient.get(`${ENDPOINTS.TREATMENTDETAILVIEW}${id}`);

        return res?.data;
    } catch (error) {
        console.log("Error while fetching blog: ", error);
    }

}
const TreatmentDetail = async ({ params }: any) => {
    const { title } = await params;

    const id = Number(getIdFromBlogSlug(title));

    const data: TreatmentDetailType | undefined = await fetchTreatmentDetail(id);
    if (!data) notFound();

    return (
        <TreatmentsDetailComp data={data} id={id} />
    )
}

export default TreatmentDetail