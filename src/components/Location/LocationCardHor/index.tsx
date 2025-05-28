import { AddressType } from "@/lib/types";
import styles from "./LocationCardHor.module.css";
import Link from "next/link";
import CtaButton from "@/components/ui/CtaButton";
const LocationCardHor = ({ location }: { location: AddressType }) => {
  return (
    <div className={`${styles.addressContainer}`}>
      <div className={`${styles.address}`}>
        <h3 className={`${styles.addressHeading}`}>Our Address:</h3>
        <p className={`${styles.addressText}`}>{location?.address}</p>
        {/* <div className={`${styles.locationInputContainer}`}>
          <button className={`${styles.locationButton}`}>Location</button>
          <input type="text" className={`${styles.locationInput}`} />
        </div> */}
        {/* <Link
          target="_blank"
          className={`${styles.visitButton}`}
          href={location?.visit_link ? location?.visit_link : "#"}
        >
          Visit Now!
        </Link> */}
        <div className="flex justify-center">
          <CtaButton href={location?.visit_link} text="Visit Now!" />
        </div>
      </div>
      <div className={`${styles.mapContainer}`}>
        <iframe
          src={location.mapSrc}
          className={styles.map}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationCardHor;
