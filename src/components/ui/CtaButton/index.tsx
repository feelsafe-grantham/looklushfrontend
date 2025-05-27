import styles from './CtaButton.module.css';

interface CtaButtonProps {
    text: string;
    [key: string]: any;
}

const CtaButton = ({ text, ...props }: CtaButtonProps) => {
    return <button {...props} className={styles.ctaButton}>{text}</button>;
};

export default CtaButton;