"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

interface ModalOptions {
    content: ReactNode;
    footer?: ReactNode;
    animation?: 'fade' | 'slide' | 'scale';
}

interface ModalContextType {
    openModal: (options: ModalOptions) => void;
    closeModal: () => void;
    isOpen: boolean;
    options: ModalOptions | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState<ModalOptions | null>(null);

    const openModal = (options: ModalOptions) => {
        setOptions(options);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => setOptions(null), 300); // wait for animation
    };

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, options }}>
            {children}
        </ModalContext.Provider>
    );
}

export const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error('useModalContext must be used within ModalProvider');
    return context;
};
