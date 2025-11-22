"use client";

import Image from "next/image";

interface DoctorCardProps {
    name: string;
    image: string;
    degrees: string[];
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, image, degrees }) => {
    return (
        <div
            className="
        bg-white rounded-2xl shadow-sm p-4 
        border border-[var(--bg-theme-color2)] 
        hover:shadow-md transition-all 
        w-full
      "
        >
            <div className="w-full h-[250px] w-[350px] relative rounded-xl overflow-hidden border border-[var(--bg-theme-color)]">
                <Image src={image} alt={name} fill className="object-cover" />
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-semibold text-[var(--text-dark-color)]">
                    {name}
                </h3>

                <p className="text-sm text-[var(--text-light-color)] mt-1">
                    {degrees.join(", ")}
                </p>
            </div>
        </div>
    );
};

export default DoctorCard;
