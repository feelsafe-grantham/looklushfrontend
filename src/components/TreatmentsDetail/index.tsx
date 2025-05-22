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
  id,
}: {
  data: TreatmentDetailType;
  id?: number;
}) => {
  const images = [
    "/images/after1.png",
    "/images/after2.png",
    "/images/after3.png",
  ];
  const benefits = [
    {
      title: "Effective for All Skin Types",
      description: "Works on light and dark skin tones, even tanned skin.",
    },
    {
      title: "Fast Sessions",
      description: "Covers large areas quickly, reducing treatment time.",
    },
    {
      title: "More Comfortable",
      description:
        "Advanced cooling technology enhances comfort during treatment.",
    },
    {
      title: "Long-Lasting Results",
      description: "Leads to desired hair reduction with multiple sessions.",
    },
    {
      title: "Works on All Hair Types",
      description: "Effective for both fine and coarse hair.",
    },
    {
      title: "Fewer Sessions Needed",
      description:
        "More powerful than many other lasers, requiring fewer treatments.",
    },
    {
      title: "Safe and FDA-Approved",
      description: "A proven and medically safe procedure.",
    },
    {
      title: "Minimal Downtime",
      description: "Patients can resume daily activities immediately.",
    },
  ];
  const treatmentCards = [
    {
      title: "Laser Hair Removal",
      description:
        "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
      rating: 4.8,
      customers: "300+",
      image1: "/images/after1.png", // replace with actual image path
      image2: "/images/after1.png", // replace with actual image path
    },
    {
      title: "Laser Hair Removal",
      description:
        "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
      rating: 4.8,
      customers: "300+",
      image1: "/images/after1.png", // replace with actual image path
      image2: "/images/after1.png", // replace with actual image path
    },
    {
      title: "Laser Hair Removal",
      description:
        "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
      rating: 4.8,
      customers: "300+",
      image1: "/images/after1.png", // replace with actual image path
      image2: "/images/after1.png", // replace with actual image path
    },
    {
      title: "Laser Hair Removal",
      description:
        "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
      rating: 4.8,
      customers: "300+",
      image1: "/images/after1.png", // replace with actual image path
      image2: "/images/after1.png", // replace with actual image path
    },
    {
      title: "Laser Hair Removal",
      description:
        "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
      rating: 4.8,
      customers: "300+",
      image1: "/images/after1.png", // replace with actual image path
      image2: "/images/after1.png", // replace with actual image path
    },
    {
      title: "Laser Hair Removal",
      description:
        "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
      rating: 4.8,
      customers: "300+",
      image1: "/images/after1.png", // replace with actual image path
      image2: "/images/after1.png", // replace with actual image path
    },
    {
      title: "Laser Hair Removal",
      description:
        "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
      rating: 4.8,
      customers: "300+",
      image1: "/images/after1.png", // replace with actual image path
      image2: "/images/after1.png", // replace with actual image path
    },
    {
      title: "Laser Hair Removal",
      description:
        "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
      rating: 4.8,
      customers: "300+",
      image1: "/images/after1.png", // replace with actual image path
      image2: "/images/after1.png", // replace with actual image path
    },
    {
      title: "Laser Hair Removal",
      description:
        "Look Lush Clinic treats each patient with empathy and discretion. A patient arriving at",
      rating: 4.8,
      customers: "300+",
      image1: "/images/after1.png", // replace with actual image path
      image2: "/images/after1.png", // replace with actual image path
    },
  ];
  return (
    <div className={`${styles.treatmentContainer}`}>
      <TreatmentHeroSection data={data} />
      <AppointmentForm />
      {data.benifits.length > 0 &&
        data.benifits.map((benifit, index) => (
          <div key={index}>
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
      <SectionHeadPara para="Looklush clinic treats each patient with empathy and discretion. A patient arriving at Looklush Clinic is educated about their condition prior to treatment." />
      <PriceTableContainer />
      <SectionHeading line1="Frequently Asked " line2="Questions" />
      <Faqs />
    </div>
  );
};
export default TreatmentsDetail;
