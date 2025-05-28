import Link from 'next/link';
import styles from './CtaButton.module.css';

interface CtaButtonProps {
    text: string;
    href?: string;
    newTab?: boolean;
    [key: string]: any;
}

const CtaButton = ({ text, href, newTab = true, ...props }: CtaButtonProps) => {
    return <>
        {href ?
            <Link
                target={newTab ? '_blank' : undefined}
                rel={newTab ? 'noopener noreferrer' : undefined}
                href={href} className={styles.ctaButton}>{text}</Link> :
            <button {...props} className={styles.ctaButton}>{text}</button>}

    </>
};

export default CtaButton;