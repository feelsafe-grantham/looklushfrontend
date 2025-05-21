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
        console.log("this is error: ", error)
    }
}
const TreatmentCardContainer2 = async ({ id }: { id?: number }) => {
    const treatmentCards: ProblemCardsType[] = [
        {
            id: 1,
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            review: "4.8",
            no_of_reviews: "300+",
            image: "/images/after1.png",
            button_text: "Book here",
        },
        {
            id: 2,
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            review: " 4.8",
            no_of_reviews: "300+",
            image: "/images/after1.png",
            button_text: "Book here",
        },
        {
            id: 3,
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            review: " 4.8",
            no_of_reviews: "300+",
            image: "/images/after1.png",
            button_text: "Book here",
        },
        {
            id: 4,
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            review: " 4.8",
            no_of_reviews: "300+",
            image: "/images/after1.png",
            button_text: "Book here",
        },
        {
            id: 5,
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            review: " 4.8",
            no_of_reviews: "300+",
            image: "/images/after1.png",
            button_text: "Book here",
        },
        {
            id: 6,
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            review: " 4.8",
            no_of_reviews: "300+",
            image: "/images/after1.png",
            button_text: "Book here",
        },
        {
            id: 7,
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            review: " 4.8",
            no_of_reviews: "300+",
            image: "/images/after1.png",
            button_text: "Book here",
        },
        {
            id: 8,
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            review: " 4.8",
            no_of_reviews: "300+",
            image: "/images/after1.png",
            button_text: "Book here",
        },
        {
            id: 9,
            title: "Laser Hair Removal",
            description:
                "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
            review: " 4.8",
            no_of_reviews: "300+",
            image: "/images/after1.png",
            button_text: "Book here",
        },

    ]
    const treatmensts: ProblemCatType | undefined = await fetchRelatedProblemCards(id!);
    console.log("this is treatmensts: ", treatmensts)
    if (treatmensts?.cards?.length === 0) notFound();
    return (
        <div className={`${styles.treatmentCardContainer}`}>

            {treatmensts?.cards?.map((card, index) => <TreatmentCard2 key={index} card={card} />)}
        </div>
    )
}
export default TreatmentCardContainer2;