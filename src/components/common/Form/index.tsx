import styles from "./Form.module.css";
const Form = () => {
    return (
        <form className={`${styles.form} ${styles.formBg}`}>
            <input type="text" placeholder="Name" className={`${styles.formInput}`} />
            <input type="text" placeholder="Email" className={`${styles.formInput}`} />
            <input type="tel" placeholder="Phone" className={`${styles.formInput}`} />
            <select className={`${styles.formInput} ${styles.formSelect}`}>
                <option className={`${styles.option}`} value="select">Select</option>
                <option className={`${styles.option}`} value="select">Select</option>
                <option className={`${styles.option}`} value="select">Select</option>
                <option className={`${styles.option}`} value="select">Select</option>
            </select>

            <textarea placeholder="Message" className={`${styles.formInput} ${styles.formTextArea}`} />
            <button type="submit" className={`${styles.formButton}`}>Submit</button>
        </form>
    )
}
export default Form;