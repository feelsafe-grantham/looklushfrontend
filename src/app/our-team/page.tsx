import SectionHeading from '@/components/common/SectionHeading';
import FounderCard from '@/components/OurTeam/FounderCard';
import { Metadata } from 'next';
import { FounderData, doctorsData, teamData } from '@/data';
import DoctorCard from '@/components/OurTeam/DoctorCard';
import MemberCard from '@/components/OurTeam/MemberCard';
export const metadata: Metadata = {
    title: "Meet Our Expert Team | LookLush Aesthetic Clinic",
    description:
        "Get to know the expert team behind LookLush Aesthetic Clinic. Our dermatologists, cosmetologists, and aesthetic specialists provide advanced skin & hair treatments with care and precision.",
    keywords: [
        "LookLush team",
        "aesthetic specialists",
        "skin experts",
        "hair experts",
        "cosmetologists",
        "dermatologists",
        "aesthetic clinic team",
        "Gurugram clinic staff",
        "Mumbai clinic team"
    ],
};
export default function OurTeam() {
    return (
        <>
            <head>
                <link rel="canonical" href="https://looklush.in/our-team" />
            </head>
            <FounderCard founder={FounderData} />
            {/* <SectionHeading line1='Meet Our Team' />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {doctorsData.map((doc, index) => (
                    <DoctorCard
                        key={index}
                        name={doc.name}
                        image={doc.image}
                        degrees={doc.degrees}
                    />
                ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {teamData.map((member, index) => (
                    <MemberCard
                        key={index}
                        name={member.name}
                        image={member.image}
                    />
                ))}
            </div> */}
        </>
    );
}