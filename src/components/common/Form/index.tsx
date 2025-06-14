"use client";
import styles from "./Form.module.css";
import { ApiResponse, HeaderSubLinkType } from "@/lib/types";
import { useState, useEffect } from "react";
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { FORMSPREE } from "@/data";
import { useAlert } from "@/context/AlertContext";
import { submitFormData } from "@/lib/helper";
const Form = () => {
    const { showAlert } = useAlert();
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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        treatment: 'select',
        message: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value, // Dynamically update the corresponding field in the state
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();
            if (!formData.name) {
                showAlert('Please enter your name ', 'info');
                return;
            }
            if (!formData.phone && !formData.email) {
                showAlert("Please enter your email or phone before proceeding", "info");
                return;
            }
            if (formData.phone && formData.phone.length < 10) {
                showAlert("Phone number should be at least 10 digits", "info");
                return;
            }
            if (formData.email && !formData.email.includes("@")) {
                showAlert("Please enter a valid email address", "info");
                return;
            }

            const result = await submitFormData(formData, FORMSPREE);

            if (result) {
                showAlert("Form submitted successfully!", "success");
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    treatment: 'select',
                    message: '',
                });
            }
            else {
                showAlert("Form submission failed!", "error");
            }

        } catch (error) {
            showAlert("Form submission failed!", "error");
        }
    };
    return (
        <form
            method="POST"
            onSubmit={handleSubmit}
            // action={FORMSPREE}
            className={`${styles.form} ${styles.formBg}`}
        >
            <input
                name="name"
                type="text"
                placeholder="Name"
                className={styles.formInput}
                value={formData.name}
                onChange={handleChange} // Handle all changes with one function
            />
            <input
                name="email"
                type="text"
                placeholder="Email"
                className={styles.formInput}
                value={formData.email}
                onChange={handleChange} // Handle all changes with one function
            />
            <input
                name="phone"
                type="tel"
                placeholder="Phone"
                className={styles.formInput}
                value={formData.phone}
                onChange={handleChange} // Handle all changes with one function
            />
            <select
                name="treatment"
                className={`${styles.formInput} ${styles.formSelect}`}
                value={formData.treatment}
                onChange={handleChange} // Handle all changes with one function
            >
                <option className={styles.option} value="select">
                    Choose Treatment
                </option>
                {options.map((option) => (
                    <option className={styles.option} key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <textarea
                name="message"
                placeholder="Message"
                className={`${styles.formInput} ${styles.formTextArea}`}
                value={formData.message}
                onChange={handleChange} // Handle all changes with one function
            />
            <button type="submit" className={`${styles.formButton}`}>Submit</button>
        </form>
    )
}
export default Form;