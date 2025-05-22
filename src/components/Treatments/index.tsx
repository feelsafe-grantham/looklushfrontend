import styles from "./TreatmentDetail.module.css";
import { Suspense } from "react";
import { ProblemCardsType } from "@/lib/types";
import TreatmentsContainer from "./TreatmentsContainer";
import TreatmentPageShimmer from "../common/Loading/TreatmentPageShimmer";

const Treatments = () => {
  return (
    <>
      <Suspense fallback={<TreatmentPageShimmer />}>
        <TreatmentsContainer />
      </Suspense>
    </>
  );
};

export default Treatments;
