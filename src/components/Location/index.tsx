import AppointmentForm from "../common/AppointmentForm";
import Faqs from "../common/Faqs";
import SectionHeading from "../common/SectionHeading";
import SectionHeadPara from "../common/SectionHeadPara";
import VideoComp from "../common/Video";
import styles from "./LocationComp.module.css";
const LocationComp = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.4847807215533!2d72.8392009!3d19.1756447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7dc98e75a79%3A0xea9792c966002d43!2sLooklush!5e1!3m2!1sen!2sin!4v1746534743597!5m2!1sen!2sin";
  return (
    <div className={`${styles.locaionContainer}`}>
      <div className={`${styles.addressContainer}`}>
        <div className={`${styles.address}`}>
          <h3 className={`${styles.addressHeading}`}>Our Address:</h3>
          <p className={`${styles.addressText}`}>
            101, AHIMSA HEIGHT, AHIMSA MARG, NEAR SUNDAR NAGAR, OFF, Chincholi
            Bunder Rd, Malad West, Mumbai, Maharashtra 400064
          </p>
          <div className={`${styles.locationInputContainer}`}>
            <button className={`${styles.locationButton}`}>Location</button>
            <input type="text" className={`${styles.locationInput}`} />
          </div>
          <button className={`${styles.visitButton}`}>Visit Now!</button>
        </div>
        <div className={`${styles.mapContainer}`}>
          <iframe src={mapSrc} className={styles.map} loading="lazy"></iframe>
        </div>
      </div>
      <AppointmentForm />
      <SectionHeading line1="Visit Us" />
      <SectionHeadPara para="Looklush clinic treats each patient with empathy and discretion. A patient arriving at Looklush Clinic is educated about their condition prior to treatment." />
      <VideoComp />
      <SectionHeading line1="Frequently Asked " line2="Questions" />
      <Faqs />
    </div>
  );
};

export default LocationComp;
