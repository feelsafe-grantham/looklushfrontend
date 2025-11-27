import AboutComp from "@/components/About";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Get to Know Looklush Aesthetic Clinic in ghaziabad - Expert Skin & Hair Care",
  description:
    "Learn about Looklush, a trusted aesthetic clinic in ghaziabad. Dr. Poonam Patel offers expert skin & hair care with a caring touch. Book now!",
  keywords: [
    "about LookLush",
    "skin experts",
    "hair specialists",
    "Gurugram clinic",
    "Mumbai clinic",
  ],
};

export default function About() {
  return (
    <>
      <head>
        <link rel="canonical" href="https://looklush.in/about" />
      </head>
      <AboutComp />
    </>
  );
}
