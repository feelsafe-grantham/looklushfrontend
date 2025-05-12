import styles from "./AppointmentForm.module.css";
const AppointmentForm = () => {
  return (
    <div className={`${styles.appointmentFormContainer}`}>
      <form>
        <div className={styles.formInputContainer}>
          <select className={`${styles.formInput} ${styles.formSelect}`}>
            <option className={styles.option}>Date & time</option>
            <option className={styles.option}>Today, 4 PM</option>
            <option className={styles.option}>Tomorrow, 11 AM</option>
          </select>

          <select className={`${styles.formInput} ${styles.formSelect}`}>
            <option className={styles.option}>Treatment</option>
            <option className={styles.option}>Facial</option>
            <option className={styles.option}>Peel</option>
          </select>

          <select className={`${styles.formInput} ${styles.formSelect}`}>
            <option className={styles.option}>No. of Sittings</option>
            <option className={styles.option}>1</option>
            <option className={styles.option}>3</option>
            <option className={styles.option}>5</option>
          </select>

          <button type="submit" className={styles.bookButton}>
            Book Now!
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
