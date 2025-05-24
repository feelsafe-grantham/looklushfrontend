import { useModalContext } from "./ModalProvider";

export const useModal = () => {
  const { openModal, closeModal, isOpen, options } = useModalContext();
  return { openModal, closeModal, isOpen, options };
};
