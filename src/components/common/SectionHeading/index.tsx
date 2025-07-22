import styles from "./SectionHeading.module.css"
const SectionHeading = ({ line1 = "Our Celebrity Clients", line2, isHeading = false }: { line1: string, line2?: string, isHeading?: boolean }) => {
    return (
        <div className={`${styles.sectionHeadingContainer}`}>
            {isHeading ? <h1 className={`${styles.sectionHeading}`}>
                {line2 ? <>{line1}<br />{line2}</> : <>{line1}</>}
            </h1> : <h3 className={`${styles.sectionHeading}`}>
                {line2 ? <>{line1}<br />{line2}</> : <>{line1}</>}
            </h3>}
            <img
                alt="pink decorative sign"
                src="/images/pink-sign.png"
                className={`${styles.sectionHeadingImage}`}
            />
        </div>
    );
}

export default SectionHeading;