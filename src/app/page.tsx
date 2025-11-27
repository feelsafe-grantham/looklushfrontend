import { Metadata } from "next";
import HomeComp from "@/components/Home";
export const metadata: Metadata = {
  title: "Best Skin Care Clinic in ghaziabad Looklush Aesthetic Excellence",
  description:
    "Transform your skin and hair at Looklush Aesthetic Clinic in ghaziabad. Dr. Poonam Patel offers expert laser, cosmetic, and dermatology treatments in a caring, welcoming setting. Book your consultation today!",
  keywords: [
    "LookLush",
    "skin clinic",
    "hair treatment",
    "Gurugram",
    "Mumbai",
    "dermatology",
    "PRP",
    "anti-aging",
  ],
};

export default async function Home() {
  return (
    <>
      <head>
        <link rel="canonical" href="https://looklush.in" />
      </head>
      <HomeComp />
    </>
  );
}
