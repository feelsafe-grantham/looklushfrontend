import { contactData, MUMBAI_ADDRESS } from "@/data";
import Link from "next/link";
import styles from "./Terms.module.css";
const TermsComp = () => {
    const termsAndConditions = [
        {
            id: 1,
            text: "All prices are inclusive of GST, wherever applicable."
        },
        {
            id: 2,
            text: "Payments can be made via Cash (As per Income Tax Regulations) / online transfer/Debit Card/ Credit Card/ UPI Payments/ Demand Draft/ Cheque in favor of Looklush Aesthetic and Laser Center. In case of cheque payments, treatments will be initiated only after confirmation of payment credited to SHRPL."
        },
        {
            id: 3,
            text: "Treatments are rendered only to the extent of the amount paid towards the package."
        },
        {
            id: 4,
            text: "All treatments are non-refundable."
        },
        {
            id: 5,
            text: "In case a patient is unable to continue treatment because of medical issues, the same will be reviewed by the Medical Review Committee and only in cases of documented medical co-morbidities, a credit note may be given for the unutilized amount which can be utilized towards customer referrals/any other packages/treatments/products etc."
        },
        {
            id: 6,
            text: "All credit notes and gift vouchers will have to be fully utilized within one year of their issuance."
        },
        {
            id: 7,
            text: "Exchange shall be done only in the case of defective products and has to be done within ten (10) days of purchase, along with a valid copy of the purchase receipt. Exchange of products is only permissible at the same clinic location from where the purchase was made. In other cases, exchanged can be given only if the product is unopened, unused, and in its original packaging and within ten (10) days of purchase."
        },
        {
            id: 8,
            text: "Products bought under discount/promotional schemes cannot be exchanged."
        },
        {
            id: 9,
            text: "Any disputes arising from these terms and conditions or the treatments provided shall be resolved amicably. If unresolved, they will be subject to the jurisdiction of the courts in Secunderabad, Telangana."
        },
        {
            id: 10,
            text: "For further reference, please retain the original receipt issued to you for any product or treatment."
        },
        {
            id: 11,
            text: "By availing our services, you agree to the above terms and conditions. Further we reserve the right to alter/modify any terms and condition at any point of time without assigning any reason or intimation whatsoever."
        },
        {
            id: 12,
            text: "By using the website and/or filling up the enquiry form at Olivaclinic.com or our promotional landing pages, you authorize us to contact you via email or phone call, SMS or WhatsApp. We may call you to schedule appointments, offer you our services for treatment you have opted for, and send you promotional offers running at our clinics. Additionally, irrespective of the fact that you have registered yourself under DND or DNC or NCPR service, you still authorize us to send you SMS or give you a call for the above-mentioned purposes."
        }
    ];

    return (
        <div className={styles.container}>
            <h1>Terms and Conditions</h1>
            <h3>ON SALES ORDER BEING ISSUED IN CLINIC.</h3>
            <ol type="a">
                {termsAndConditions.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ol>

            <div className={styles.address}>
                <h2>Looklush Aesthetic and Laser Center</h2>
                <p>{MUMBAI_ADDRESS.address}</p>
                <p>
                    <strong>Email: </strong>
                    <Link target="_blank" href={`mailto:${MUMBAI_ADDRESS.email}`} >{MUMBAI_ADDRESS.email}</Link>
                </p>
                <p>
                    <strong>Phone: </strong>
                    <Link href={`tel:${contactData.number1}`}>+91 {contactData.number1}</Link>
                </p>
                <p>
                    <strong>Clinics: </strong>
                    <Link className="mx-2" href={"https://looklush.in/location/gurugram"}>GURGAON</Link>
                    |
                    <Link className="mx-2" href={"https://looklush.in/location/mumbai"}>MUMBAI</Link>
                </p>
            </div>
        </div>
    )
}
export default TermsComp;