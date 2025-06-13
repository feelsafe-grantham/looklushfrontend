"use client";
import styles from "./AppointmentForm.module.css";
import { ApiResponse, HeaderSubLinkType } from "@/lib/types";
import { useState, useEffect } from "react";
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { useModal } from "@/components/ui/Modal/useModal";

const AppointmentForm = () => {
  const sittings = [1, 2, 3, 4, 5, 6, 7];
  const [options, setOptions] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    appointmentDate: "",
    treatment: "",
    sittings: "",
  });

  const fetchTreatments = async () => {
    try {
      const res: ApiResponse<HeaderSubLinkType[]> = await apiClient.get(ENDPOINTS.GETHEADERLINKS);
      const op: string[] = res.data.map((link) => link.label);
      setOptions(op);
    } catch (error) {
      console.error("Error fetching treatments:", error);
    }
  };

  useEffect(() => {
    fetchTreatments();
  }, []);

  const { openModal, closeModal } = useModal();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBtnClick = () => {
    if (!formData.appointmentDate || !formData.treatment || !formData.sittings) {
      alert("Please complete all fields before proceeding.");
      return;

    }

    openModal({
      header: "Complete Your Booking",
      content: <NewForm closeModal={closeModal} selectedData={formData} />,
      animation: "scale",
    });
  };

  return (
    <div className={styles.appointmentFormContainer}>
      <div className={styles.form}>
        <div className={styles.formInputContainer}>
          <input
            className={styles.formInput}
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleInputChange}
            required
          />

          <select
            className={`${styles.formInput} ${styles.formSelect}`}
            name="treatment"
            value={formData.treatment}
            onChange={handleInputChange}
            required
          >
            <option className={styles.option} value="">Treatment</option>
            {options.map((option, idx) => (
              <option key={idx} className={styles.option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            className={`${styles.formInput} ${styles.formSelect}`}
            name="sittings"
            value={formData.sittings}
            onChange={handleInputChange}
            required
          >
            <option className={styles.option} value="">No. of Sittings</option>
            {sittings.map((sitting) => (
              <option key={sitting} className={styles.option} value={sitting}>
                {sitting}
              </option>
            ))}
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

// ----------------
// MODAL FORM COMPONENT
// ----------------

const NewForm = ({
  closeModal,
  selectedData,
}: {
  closeModal: () => void;
  selectedData: {
    appointmentDate: string;
    treatment: string;
    sittings: string;
  };
}) => {
  const [userData, setUserData] = useState({ name: "", email: "" });

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!userData.name || !userData.email) {
      alert("Please enter your name and email.");
      return;
    }

    const fullData = {
      ...selectedData,
      ...userData,
    };

    try {
      // Replace this with actual API call if needed


      // Simulate success
      alert("Appointment booked successfully!");
      closeModal();
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <div className={`${styles.form} ${styles.formBg}`}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        className={styles.formInputModal}
        value={userData.name}
        onChange={handleUserChange}
      />
      <input
        name="email"
        type="text"
        placeholder="Email"
        className={styles.formInputModal}
        value={userData.email}
        onChange={handleUserChange}
      />
      <button onClick={handleSubmit} className={styles.formButton}>
        Submit
      </button>
    </div>
  );
};
