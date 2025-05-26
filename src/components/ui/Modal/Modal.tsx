import styles from './Modal.module.css';
import { useModalContext } from './ModalProvider';

export default function Modal() {
    const { isOpen, closeModal, options, } = useModalContext();
    if (!isOpen || !options) return null;

    const { content, footer, header, headerAlign, animation = 'fade' } = options;

    return (
        <div className={`${styles.backdrop} ${styles[animation]}`}>
            <div className={`${styles.modal} ${styles[animation + 'In']}`}>
                <button className={styles.closeButton} onClick={closeModal}>×</button>
                <div className={styles.modalHeader}>
                    {header && <div className={styles.headerTitle}>{header}</div>}
                </div>
                <div className={styles.content}>{content}</div>
                {footer && <div className={styles.footer}>{footer}</div>}
            </div>
        </div>
    );
}
