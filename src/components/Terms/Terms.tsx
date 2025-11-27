import { contactData, MUMBAI_ADDRESS } from "@/data";
import Link from "next/link";
import styles from "./Terms.module.css";
const TermsComp = () => {
  const termsAndConditions = [
    {
      id: 1,
      text: "All prices are inclusive of GST, wherever applicable.",
    },
    {
      id: 2,
      text: "Payments can be made via Cash (As per Income Tax Regulations) / online transfer/Debit Card/ Credit Card/ UPI Payments/ Demand Draft/ Cheque in favor of Looklush Aesthetic and Laser Center. In case of cheque payments, treatments will be initiated only after confirmation of payment credited to SHRPL.",
    },
    {
      id: 3,
      text: "Treatments are rendered only to the extent of the amount paid towards the package.",
    },
    {
      id: 4,
      text: "All treatments are non-refundable.",
    },
    {
      id: 5,
      text: "In case a patient is unable to continue treatment because of medical issues, the same will be reviewed by the Medical Review Committee and only in cases of documented medical co-morbidities, a credit note may be given for the unutilized amount which can be utilized towards customer referrals/any other packages/treatments/products etc.",
    },
    {
      id: 6,
      text: "All credit notes and gift vouchers will have to be fully utilized within one year of their issuance.",
    },
    {
      id: 7,
      text: "Exchange shall be done only in the case of defective products and has to be done within ten (10) days of purchase, along with a valid copy of the purchase receipt. Exchange of products is only permissible at the same clinic location from where the purchase was made. In other cases, exchanged can be given only if the product is unopened, unused, and in its original packaging and within ten (10) days of purchase.",
    },
    {
      id: 8,
      text: "Products bought under discount/promotional schemes cannot be exchanged.",
    },
    {
      id: 9,
      text: "Any disputes arising from these terms and conditions or the treatments provided shall be resolved amicably. If unresolved, they will be subject to the jurisdiction of the courts in Secunderabad, Telangana.",
    },
    {
      id: 10,
      text: "For further reference, please retain the original receipt issued to you for any product or treatment.",
    },
    {
      id: 11,
      text: "By availing our services, you agree to the above terms and conditions. Further we reserve the right to alter/modify any terms and condition at any point of time without assigning any reason or intimation whatsoever.",
    },
    {
      id: 12,
      text: "By using the website and/or filling up the enquiry form at Olivaclinic.com or our promotional landing pages, you authorize us to contact you via email or phone call, SMS or WhatsApp. We may call you to schedule appointments, offer you our services for treatment you have opted for, and send you promotional offers running at our clinics. Additionally, irrespective of the fact that you have registered yourself under DND or DNC or NCPR service, you still authorize us to send you SMS or give you a call for the above-mentioned purposes.",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Terms and Conditions</h1>
      <h3>ON SALES ORDER BEING ISSUED IN CLINIC.</h3>
      {/* <ol type="a">
                {termsAndConditions.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ol> */}
      <section>
        <h2>Terms & Conditions</h2>
        <p>
          By using this website or booking any services, you agree to be bound
          by these Terms & Conditions.
        </p>
      </section>

      <section>
        <h2>Services</h2>
        <p>
          Looklush Aesthetic & Laser Centre offers aesthetic, cosmetic, and
          dermatological treatments. These services are performed by licensed or
          trained professionals, and all advice is given with professional
          discretion.
        </p>
      </section>

      <section>
        <h2>Bookings & Payments</h2>
        <p>
          All appointments must be confirmed via WhatsApp, call, or website
          form.
        </p>
        <p>Payment must be completed before or during the treatment.</p>
        <p>Prices are subject to change without prior notice.</p>
      </section>

      <section>
        <h2>Cancellations & Refunds</h2>
        <p>Cancellations must be made at least 24 hours in advance.</p>
        <p>
          <strong>Refund Policy:</strong> Due to the personalized nature of our
          services, all purchases are non-refundable once booked and paid.
          Refunds will only be considered in cases of failed or duplicate
          payments or if Looklush is unable to provide the service.
        </p>
      </section>

      <section>
        <h2>Medical Disclaimer</h2>
        <p>
          Results may vary per individual. Clients must disclose all medical
          history and any pre-existing conditions. We are not liable for any
          complications due to undisclosed medical information.
        </p>
      </section>

      <section>
        <h2>Website Usage</h2>
        <p>By using our site, you agree not to:</p>
        <ul>
          <li>Republish, copy, or reuse our content without permission</li>
          <li>Upload harmful code or attempt to hack the system</li>
          <li>Misuse forms or impersonate others</li>
        </ul>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          All images, logos, videos, and text on our website are the property of
          Looklush and cannot be copied, modified, or used without written
          consent.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>We are not responsible for:</p>
        <ul>
          <li>Unintended reactions or side effects from treatments</li>
          <li>Website downtime or booking platform issues</li>
          <li>Services from third-party providers or external links</li>
        </ul>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          These Terms are governed by the laws of India, and any disputes will
          be handled in Mumbai, Maharashtra.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For questions or support, please reach out to us at:{" "}
          <a href="mailto:help@looklush.in">help@looklush.in</a>
        </p>
      </section>

      <div className={styles.address}>
        <h2>Looklush Aesthetic and Laser Center</h2>
        <p>{MUMBAI_ADDRESS.address}</p>
        <p>
          <strong>Email: </strong>
          <Link target="_blank" href={`mailto:${MUMBAI_ADDRESS.emailHelp}`}>
            {MUMBAI_ADDRESS.emailHelp}
          </Link>
        </p>
        <p>
          <strong>Phone: </strong>
          <Link href={`tel:${contactData.number1}`}>
            +91 {contactData.number1}
          </Link>
        </p>
        <p>
          <strong>Clinics: </strong>
          <Link
            className="mx-2"
            href={"https://Looklush.in/location/ghaziabad"}
          >
            GHAZIABAD
          </Link>
          |
          <Link className="mx-2" href={"https://looklush.in/location/mumbai"}>
            MUMBAI
          </Link>
        </p>
      </div>
    </div>
  );
};
export default TermsComp;
