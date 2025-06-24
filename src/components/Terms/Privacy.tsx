import Link from "next/link";
import styles from "./Terms.module.css";
import { contactData, MUMBAI_ADDRESS } from "@/data";
const PrivacyComp = () => {
    const privacyPolicy = {
        clinicName: "Looklush Aesthetics and Laser Center",
        commitment: "Looklush Aesthetics and Laser Center is committed to protecting your online privacy. We are entirely open about our information-gathering practices. Please take the time to review this notice, which states our privacy policy.",

        informationCollected: {
            description: "Looklush Aesthetics and Laser Center will only collect personally identifying information, which will be done only with your knowledge and consent. Optional information like age, gender, etc., may also be requested.",
            emailCollection: "We might add your email address to our mailing list only. You will not be put on the mailing lists of any third parties, and your email address, name, city, phone number or country will not be divulged to anyone else. We will use these details to keep you posted about services, offers, discounts, celebration wishes, news, and events. Removing yourself from the mailing list can be done quickly – click on the 'Unsubscribe' link at the bottom of our emails."
        },

        usageOfInformation: {
            description: "Looklush Aesthetics and Laser Center would use the information to provide you with information about services, new developments, offers, discounts, celebration wishes, news, and events.",
            disclosure: "Looklush Aesthetics and Laser Center does not sell its users' email addresses or other information.",
            privacyCommitment: "We strive to safeguard your privacy and will ensure all the information provided is used in accordance with guidelines and regulations stated. We will not share or disclose details through direct or indirect sources. Your visit to our website is secure, and your right to privacy is safeguarded and protected."
        },

        editorialIntegrity: {
            description: "We aim to bring the most reliable and trusted information about dermatology and health. All our information is written and reviewed by specialists from the industry; however, we emphasise seeking an expert's opinion before attempting any mentioned details. Choose information wisely and do not delay professional medical advice because of what you have read on our website."
        },

        thirdParties: {
            description: "We do not deal in selling any personal or customer information. We will never disclose your details to a third party except when required by law.",
            marketing: "We may use some data in a general sense without any reference to your name to create marketing statistics, identify user demands, and assist in meeting customer needs. Additionally, we may use the information you provide to improve our website and services but not for any other purposes."
        },

        cookies: {
            description: "A cookie is a small file placed in your web browser that collects information about your web browsing behaviour. Tracking cookies allow us to target your needs and preferences. Our website uses cookies to analyse website traffic and help us provide you with a better experience.",
            cookieDetails: "Cookies do not access information stored on your computer or any personal information (e.g. name, address, email address, or telephone number). Looklush Aesthetics and Laser Center automatically accepts cookies, but you can choose to reject cookies by changing your browser settings. This may, however, prevent you from taking full advantage of our website."
        },

        security: {
            description: "We strive to ensure the security, integrity, and privacy of personal information submitted to our website and periodically update our security measures in light of current technologies."
        },

        changeInPolicy: {
            description: "As we plan to ensure our privacy policy remains current, this policy is subject to change. We may modify this policy at any time, at our sole discretion, and all modifications will be effective immediately upon posting the changes on this website. Please return periodically to review our privacy policy.",
            governingLaw: "All information provided by our website is governed and interpreted according to India's laws.",
            applicability: "This privacy policy applies to all websites, mobile applications owned and operated by Looklush Aesthetics and Laser Center."
        }
    };

    return (
        <div className={styles.container}>
            <h1>{privacyPolicy.clinicName} - Privacy Policy</h1>

            <section>
                <div className="flex gap-4">

                    <h4>Effective Date:</h4> <p>21 / june /2025 </p>
                </div>
                <div className="flex gap-4">

                    <h4>Website:</h4> <Link href="https://looklush.in">Looklush.in </Link>
                </div>
                <p>At Looklush Aesthetic & Laser Centre, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our services or visit our website.
                </p>

            </section>
            <section>
                <h2>Information We Collect</h2>
                <p>{privacyPolicy.commitment}</p>
            </section>

            <section>
                <h2>What Information We Collect</h2>
                <p>{privacyPolicy.informationCollected.description}</p>
                <p>{privacyPolicy.informationCollected.emailCollection}</p>
            </section>

            <section>
                <h2>How We Use Your Information</h2>
                <p>{privacyPolicy.usageOfInformation.description}</p>
                <p>{privacyPolicy.usageOfInformation.disclosure}</p>
                <p>{privacyPolicy.usageOfInformation.privacyCommitment}</p>
            </section>

            <section>
                <h2>Editorial Integrity</h2>
                <p>{privacyPolicy.editorialIntegrity.description}</p>
            </section>

            <section>
                <h2>Third-Party Disclosure</h2>
                <p>{privacyPolicy.thirdParties.description}</p>
                <p>{privacyPolicy.thirdParties.marketing}</p>
            </section>

            <section>
                <h2>Cookies</h2>
                <p>{privacyPolicy.cookies.description}</p>
                <p>{privacyPolicy.cookies.cookieDetails}</p>
            </section>

            <section>
                <h2>Security</h2>
                <p>{privacyPolicy.security.description}</p>
            </section>

            <section>
                <h2>Changes to Privacy Policy</h2>
                <p>{privacyPolicy.changeInPolicy.description}</p>
                <p>{privacyPolicy.changeInPolicy.governingLaw}</p>
                <p>{privacyPolicy.changeInPolicy.applicability}</p>
            </section>
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
export default PrivacyComp;