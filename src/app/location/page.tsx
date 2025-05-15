import LocationComp from "@/components/Location";
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Visit Our Clinics | Gurugram & Mumbai | LookLush',
  description: 'Find LookLush clinic locations in Gurugram and Mumbai. Book an appointment at your nearest center.',
  keywords: ['LookLush locations', 'Gurugram skin clinic', 'Mumbai hair clinic', 'dermatologist near me'],
};

export default function Location() {
  return <LocationComp />;
}
