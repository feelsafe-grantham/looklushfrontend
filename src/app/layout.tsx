import "./globals.css";
import type { Metadata } from "next";
import TopBar from "@/components/common/TopBar";
import { Montserrat, Sour_Gummy } from "next/font/google"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sourGummy = Sour_Gummy({
  subsets: ["latin"],
  variable: "--font-sour-gummy",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Looklush Beauty",
  description: "Looklush Beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${sourGummy.variable} antialiased`}
      >
        <TopBar />
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
