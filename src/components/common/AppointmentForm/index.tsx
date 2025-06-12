"use client";
import styles from "./AppointmentForm.module.css";
import { ApiResponse, HeaderSubLinkType } from "@/lib/types";
import { useState, useEffect } from "react";
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { FORMSPREE } from "@/data";
import { useModal } from "@/components/ui/Modal/useModal";
import Form from "../Form";

const AppointmentForm = () => {
  const sittings = [1, 2, 3, 4, 5, 6, 7]
  const [options, setOptions] = useState<string[]>([])
  const fetchTreatments = async () => {
    try {
      const res: ApiResponse<HeaderSubLinkType[]> = await apiClient.get(ENDPOINTS.GETHEADERLINKS);
      const op: string[] = res.data.map((link) => link.label)
      setOptions(op)
    } catch (error) {
      console.error("this is error: ", error)
    }
  }
  useEffect(() => {
    fetchTreatments();
  }, [])
  const { openModal, closeModal } = useModal();
  const handleBtnClick = () => {
    openModal(
      {
        header: "Book a Session",
        content: <NewForm closeModal={closeModal} />,
        animation: "scale",
      }
    )
  }


  return (
    <div className={styles.appointmentFormContainer}>
      <div

        className={styles.form}
      >
        <div className={styles.formInputContainer}>
          <input
            className={styles.formInput}
            type="date"
            name="appointment_date"
            required
          />

          <select
            className={`${styles.formInput} ${styles.formSelect}`}
            name="treatment"
            required
          >
            <option className={styles.option} value="">
              Treatment
            </option>
            {options.map((option) => <option className={styles.option} value={option}>
              {option}
            </option>)}
          </select>

          <select
            className={`${styles.formInput} ${styles.formSelect}`}
            name="sittings"
            required
          >
            <option className={styles.option} value="">
              No. of Sittings
            </option>
            {sittings.map((sitting) => <option className={styles.option} value={sitting}>
              {sitting}
            </option>)}

          </select>

          <button onClick={handleBtnClick} className={styles.bookButton}>
            Book Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;

const NewForm = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div
      className={`${styles.form} ${styles.formBg}`}
    >
      <input name="name" type="text" placeholder="Name" className={`${styles.formInputModal}`} />
      <input name="email" type="text" placeholder="Email" className={`${styles.formInputModal}`} />
      <button onClick={closeModal} className={`${styles.formButton}`}>Submit</button>
    </div>
  )
}