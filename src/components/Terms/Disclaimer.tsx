import { contactData, MUMBAI_ADDRESS } from '@/data';
import styles from './Terms.module.css'
import Link from 'next/link';
const Disclaimer = () => {
    return (
        <div className={styles.container}>
            <h1>Disclaimer</h1>
            <p>Last updated: June 16, 2025</p>

            <p>LookLush Aesthetic & Laser Centre provides aesthetic, cosmetic, and dermatological services with the utmost care and professionalism. However, the information provided on this website is for general informational purposes only.</p>

            <h2>1. Professional Advice</h2>
            <p>The content on this site, including text, images, and videos, is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider regarding any medical conditions or concerns.</p>

            <h2>2. Accuracy of Information</h2>
            <p>While we strive to keep the information on this site accurate and up-to-date, LookLush makes no representations or warranties about the accuracy, reliability, or completeness of the information provided.</p>

            <h2>3. Health Risks</h2>
            <p>Every individual is different, and results from treatments or procedures may vary. By using our services, you acknowledge that you are aware of the potential risks associated with cosmetic treatments and agree to proceed at your own risk.</p>

            <h2>4. External Links</h2>
            <p>This website may contain links to external websites that are not under the control of LookLush. We are not responsible for the content of these external sites and provide them only for convenience. The inclusion of any link does not imply endorsement by LookLush.</p>

            <h2>5. Limitation of Liability</h2>
            <p>LookLush Aesthetic & Laser Centre will not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or any services provided, except in cases of negligence.</p>

            <h2>6. Modifications</h2>
            <p>LookLush reserves the right to modify, update, or discontinue any services or content on this website without prior notice. We encourage you to regularly check this page for updates.</p>

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
    );
}

export default Disclaimer