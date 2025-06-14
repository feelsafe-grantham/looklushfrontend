"use client"
import Form from "@/components/common/Form";
import { useModal } from "@/components/ui/Modal/useModal";
import { useAlert } from "@/context/AlertContext";


export default function Problems() {
  const { openModal } = useModal();
  const { showAlert } = useAlert();

  return <div className="my-4">
    <button
      onClick={() =>
        showAlert("Successfully done note", "error")
      }
    >
      Open Alert
    </button>
  </div>
}
