import SectionHeading from '@/components/common/SectionHeading';
import FounderCard from '@/components/OurTeam/FounderCard';
import { Metadata } from 'next';
import { FounderData, doctorsData, teamData } from '@/data';
import DoctorCard from '@/components/OurTeam/DoctorCard';
import MemberCard from '@/components/OurTeam/MemberCard';
import Faqs from '@/components/common/Faqs';
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
            <div className="space-y-5 max-w-[1050px] mx-auto">


                <FounderCard founder={FounderData} />
                <SectionHeading line1='Meet Our Team' />
                <div className="max-w-[1200px] mx-auto flex flex-row flex-nowrap overflow-x-auto gap-6 px-2 scrollbar-hidden">
                    {doctorsData.map((doc, index) => (
                        <div key={index} className="min-w-[330px]">
                            <DoctorCard
                                name={doc.name}
                                image={doc.image}
                                degrees={doc.degrees}
                            />
                        </div>
                    ))}
                </div>
                <div className="max-w-[1200px] mx-auto flex flex-row flex-nowrap overflow-x-auto gap-1 px-2 scrollbar-hidden">
                    {teamData.map((member, index) => (
                        <div key={index} className="min-w-[250px]">
                            <MemberCard
                                key={index}
                                name={member.name}
                                image={member.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Faqs />
        </>
    );
}