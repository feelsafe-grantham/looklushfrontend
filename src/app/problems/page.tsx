"use client"
import Form from "@/components/common/Form";
import { useModal } from "@/components/ui/Modal/useModal";


export default function Problems() {
  const { closeModal, isOpen, openModal, options } = useModal();
  return <div className="my-4">
    <button
      onClick={() =>
        openModal({
          content: <Form />,
          footer: null,
          animation: 'slide',
        })
      }
    >
      Open Modal
    </button>
  </div>;
}
