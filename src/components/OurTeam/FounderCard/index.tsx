import Image from "next/image";
import styles from "./FounderCard.module.css"
interface FounderCardProps {
    name: string;
    role: string;
    description: string;
    description2: string;
    specialties: string[];
    image: string;
}
const FounderCard: React.FC<{ founder: FounderCardProps }> = ({
    founder
}) => {
    const { name,
        role,
        description,
        description2,
        specialties,
        image, } = founder
    return (
        <>

            <div className={`${styles.mainContainer} bg-white p-6 rounded-xl shadow-sm`}>
                {/* Left: Image */}
                <div className="flex-shrink-0">
                    <div className="w-[350px] h-[452px] relative rounded-xl overflow-hidden">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right: Text */}
                <div className={`flex flex-col ${styles.rightSection} `}>
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--text-dark-color)]">
                            {name}
                        </h2>
                        <p className="text-sm mt-1 text-[var(--text-light-color)]">{role}</p>

                        <p className="mt-4 text-xl leading-relaxed text-[var(--text-light-color)]">
                            {description}
                        </p>
                        {/* <p className="mt-4 text-xl leading-relaxed text-[var(--text-light-color)]">
                            {description2}
                        </p> */}
                    </div>

                    {/* Specialties */}
                    <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold ">
                        {specialties.map((item, index) => (
                            <>
                                <span key={index}>{item} </span>
                                {index === specialties.length - 1 ? "" : "|"}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FounderCard;