import { apiClient } from "@/lib/api/apiClient";
import PriceTabel from ".";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { ApiResponse, PriceItem } from "@/lib/types";
async function fetchTableData() {
    try {
        const res: ApiResponse<PriceItem[]> = await apiClient.get(ENDPOINTS.GETPRICETABLE);
        return res.data;
    } catch (error) {
        console.error("Error while fetching table data: ", error);
        return [];
    }
}
const PriceTableContainer = async () => {
    const data: PriceItem[] = await fetchTableData();
    return <PriceTabel priceData={data} />
};
export default PriceTableContainer;