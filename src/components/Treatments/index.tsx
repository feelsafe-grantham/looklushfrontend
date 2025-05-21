
import styles from "./TreatmentDetail.module.css"
import TreatmentCategory from "./TreatmentCategory";
import { ProblemCardsType } from "@/lib/types";


const Treatments = () => {
    const sampleCards: ProblemCardsType[] = [
        {
            id: 1,
            image: "/images/skinProblem1.png",
            title: "Acne Solution asdf a asdf asd asdf asf asdf asdf ",
            review: "4.8 ",
            button_text: "Explore",
            no_of_reviews: "120+ reviews"
        },
        {
            id: 2,
            image: "/images/skinProblem2.png",
            title: "Dry Skin Care",
            review: "4.6",
            button_text: "Explore",
            no_of_reviews: "120+ reviews"
        },
        {
            id: 3,
            image: "/images/skinProblem3.png",
            title: "Anti-Aging",
            review: "4.7",
            button_text: "Explore",
            no_of_reviews: "120+ reviews"
        },
        {
            id: 4,
            image: "/images/skinProblem4.png",
            title: "Anti-Aging",
            review: "4.7",
            button_text: "Explore",
            no_of_reviews: "120+ reviews"
        },
    ];
    const problems = [
        {
            heading: "Skin Problems",
            cards: sampleCards,
        },
        {
            heading: "Color Problems",
            cards: sampleCards,
        },
        {
            heading: "Acne and Problems",
            cards: sampleCards,
        },
        {
            heading: "Hair Problems",
            cards: sampleCards,
        },
    ]
    return (
        <>
            {problems.map((problem) => (
                <TreatmentCategory
                    key={problem.heading}
                    heading={problem.heading}
                    cards={problem.cards}
                />
            ))
            }
        </>

    )
}

export default Treatments