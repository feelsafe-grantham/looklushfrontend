"use client";
import Image from "next/image";

interface MemberCardProps {
    name: string;
    image: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, image }) => {
    return (
        <div
            className="bg-white rounded-2xl shadow-sm p-4
        border border-[var(--bg-theme-color2)]
        hover:shadow-md transition-all
        flex flex-col items-center
      "
        >
            {/* Image Box */}
            <div className="w-full h-56 relative rounded-xl overflow-hidden border border-[#f3f3f3]">
                <Image src={image} alt={name} fill className="object-cover border-1 border-red-300 rounded-[11px]" />
            </div>

            {/* Name */}
            <p className="mt-3 text-base font-semibold text-[var(--text-dark-color)] text-left ">
                {name}
            </p>
        </div>
    );
};

export default MemberCard;
