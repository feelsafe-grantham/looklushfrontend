"use client";
import styles from "./Form.module.css";
import { ApiResponse, HeaderSubLinkType } from "@/lib/types";
import { useState, useEffect } from "react";
import { apiClient } from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/endpoints";
const Form = () => {
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
    return (
        <form
            method="POST"
            action="https://formspree.io/f/{your_form_id}"
            className={`${styles.form} ${styles.formBg}`}
        >
            <input name="name" type="text" placeholder="Name" className={`${styles.formInput}`} />
            <input name="email" type="text" placeholder="Email" className={`${styles.formInput}`} />
            <input name="phone" type="tel" placeholder="Phone" className={`${styles.formInput}`} />
            <select name="treatment" className={`${styles.formInput} ${styles.formSelect}`}>
                <option className={`${styles.option}`} value="select">Choose Treatment</option>
                {options.map((option) => <option className={`${styles.option}`} value={option}>{option}</option>)}
            </select>

            <textarea name="message" placeholder="Message" className={`${styles.formInput} ${styles.formTextArea}`} />
            <button type="submit" className={`${styles.formButton}`}>Submit</button>
        </form>
    )
}
export default Form;