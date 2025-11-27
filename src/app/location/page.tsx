import LocationComp from "@/components/Location";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Visit Our Clinics | Ghaziabad & Mumbai | LookLush",
  description:
    "Find LookLush clinic locations in Ghaziabad and Mumbai. Book an appointment at your nearest center.",
  keywords: [
    "LookLush locations",
    "Ghaziabad skin clinic",
    "Mumbai hair clinic",
    "dermatologist near me",
  ],
};

export default function Location() {
  return (
    <>
      <head>
        <link rel="canonical" href="https://looklush.in/location" />
      </head>
      <LocationComp />
    </>
  );
}
