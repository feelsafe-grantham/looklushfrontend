import styles from './LocationCard.module.css';
const LocationCard = ({ location }: { location?: any }) => {
    const {
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.4847807215533!2d72.8392009!3d19.1756447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7dc98e75a79%3A0xea9792c966002d43!2sLooklush!5e1!3m2!1sen!2sin!4v1746534743597!5m2!1sen!2sin",
        city = 'Mumbai',
        address = '01, AHIMSA HEIGHT, AHIMSA MARG, NEAR SUNDAR NAGAR, OFF, Chincholi Bunder Rd, Malad West, Mumbai, Maharashtra 400064',
        phone = '+91 93228 17696',
        email = 'drpatelpoonam@gmail.com',
    } = location || {};
    return (
        <div className={styles.card}>
            <iframe src={mapSrc} className={styles.map} loading="lazy"></iframe>
            <h2 className={styles.city}>{city}:</h2>
            <p className={styles.text}>{address}</p>
            <p className={styles.text}><strong>Hours:</strong> Mon-Sat 11:00AM - 08:00PM</p>
            <p className={styles.text}><strong>Phone:</strong> {phone}</p>
            <p className={styles.text}><strong>Email:</strong> {email}</p>
            <button className={styles.button}>Visit Now!</button>
        </div>

    );
}
export default LocationCard;