import styles from "./BlogCard.module.css"
const BlogCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.textSection}>
                <h2 className={styles.heading}>
                    Welcome to our Aesthetic Clinic We<br />
                    use most recent and up to date<br />
                    Aesthetic and Laser Technology
                </h2>
                <p className={styles.meta}>Author Name | 26 June</p>
                <p className={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged.
                </p>
                <p className={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer.
                </p>
                <button className={styles.button}>Show More!</button>
            </div>
            <div className={styles.imageSection}>
                <img
                    src="/images/after1.png"
                    alt="Aesthetic Treatment"
                    className={styles.image}
                />
            </div>
        </div>
    )
}
export default BlogCard;