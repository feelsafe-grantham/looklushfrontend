import styles from './SectionHeadPara.module.css'
const SectionHeadPara = ({ para }: { para: string }) => {
    return (
        <p className={`${styles.sectionHeadPara} text-center`}>
            {para}
        </p>
    )

}
export default SectionHeadPara;