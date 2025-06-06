import PriceTabel from "../common/PriceTable";
import SectionHeading from "../common/SectionHeading";
import SectionHeadPara from "../common/SectionHeadPara";
import Faqs from "@/components/common/Faqs";
import ResultsSection from "./ResultsSection";
import TestimonialCarousel from "./TestimonialCarousel";
import styles from "./Treatments.module.css";
import TreatmentHeroSection from "./HeroSection";
import AppointmentForm from "../common/AppointmentForm";
import { TreatmentDetailType } from "@/lib/types";
import PriceTableContainer from "../common/PriceTable/PriceContainer";
import TreatmentCardContainer2 from "./TreatmentCardContainer2";
const TreatmentsDetail = ({
  data,
}: {
  data: TreatmentDetailType;
  id?: number;
}) => {
  return (
    <div className={`${styles.treatmentContainer}`}>
      <TreatmentHeroSection data={data} />
      <AppointmentForm />
      {data.benifits.length > 0 &&
        data.benifits.map((benifit, index) => (
          <div className={`${styles.benifitContainer}`} key={index}>
            <SectionHeading line1={benifit.heading1} line2={benifit.heading2} />
            <SectionHeadPara para={benifit.description} />
            <div className={styles.patientImageContainer}>
              {benifit.images.map((img, idx) => (
                <img
                  key={idx}
                  className={styles.patientImage}
                  src={img.image}
                  alt="patientImage"
                />
              ))}
            </div>
          </div>
        ))}
      <SectionHeading
        line1={`Key points about ${data.banner_text1}`}
        line2={`${data.banner_text2}`}
      />
      <div className={styles.gridContainer}>
        {data.keypoints.map((item, index) => (
          <div key={index} className={styles.card}>
            <strong>{item.key}</strong> – {item.value}
          </div>
        ))}
      </div>
      <TreatmentCardContainer2 id={data.treatment_id} />

      <TestimonialCarousel id={data.treatment_id} />
      <ResultsSection id={data.treatment_id} />
      <SectionHeading line1="Pricing List" />
      <SectionHeadPara para="At Looklush Clinic, we believe in transparent pricing with no hidden costs—each treatment is tailored to your needs and explained in detail." />
      <PriceTableContainer />
      <SectionHeading line1="Frequently Asked " line2="Questions" />
      <Faqs />
    </div>
  );
};
export default TreatmentsDetail;
