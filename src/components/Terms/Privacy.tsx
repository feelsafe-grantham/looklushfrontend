import styles from "./Terms.module.css";
const PrivacyComp = () => {
    return (
        <div className={styles.container}>
            <h1>Privacy Policy</h1>
            <p>Last updated: June 16, 2025</p>

            <p>LookLush Aesthetic & Laser Centre is committed to protecting your personal information. This privacy policy outlines how we collect, use, and safeguard your data.</p>

            <h2>1. Information We Collect</h2>
            <ul>
                <li>Personal details (name, email, phone) for appointments</li>
                <li>Medical history provided during consultation</li>
                <li>Usage data via cookies and analytics</li>
            </ul>

            <h2>2. How We Use Information</h2>
            <ul>
                <li>To provide and manage our services</li>
                <li>To respond to your queries</li>
                <li>To improve user experience and site performance</li>
            </ul>

            <h2>3. Data Protection</h2>
            <p>We implement industry-standard security measures to protect your data. Sensitive information is encrypted and access-restricted.</p>

            <h2>4. Sharing of Information</h2>
            <p>We do not sell or rent your information. We may share it with service providers bound by confidentiality.</p>

            <h2>5. Your Rights</h2>
            <p>You may request to access, modify, or delete your data by contacting us.</p>

            <h2>6. Contact Information</h2>
            <p>Email: <a href="mailto:drpatelpoonam@gmail.com">drpatelpoonam@gmail.com</a><br />
                Phone (Mumbai): +91 93228 17696<br />
                Phone (Gurugram): +91 90826 40898</p>

            <h2>7. Updates to This Policy</h2>
            <p>We may update this policy occasionally. Any changes will be reflected on this page.</p>
        </div>
    )
}
export default PrivacyComp;