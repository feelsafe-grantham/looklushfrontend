import styles from "./TreatmentDetail.module.css";
import { Suspense } from "react";
import { ProblemCardsType } from "@/lib/types";
import TreatmentsContainer from "./TreatmentsContainer";
import TreatmentPageShimmer from "../common/Loading/TreatmentPageShimmer";
import SectionHeading from "../common/SectionHeading";

const Treatments = () => {
  return (
    <>
      <Suspense fallback={<TreatmentPageShimmer />}>
        <div className="mt-5" />
        <SectionHeading
          isHeading
          line1="Top Skin and Hair Treatments in Ghaziabad"
          line2=" for Stunning Results"
        />
        <TreatmentsContainer />
      </Suspense>
    </>
  );
};

export default Treatments;
