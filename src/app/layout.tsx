"use client"
import "./globals.css";
import TopBar from "@/components/common/TopBar";
import { Montserrat, Sour_Gummy } from "next/font/google"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Modal from "@/components/ui/Modal/Modal";
import { ModalProvider } from "@/components/ui/Modal/ModalProvider";
import WhatsappIcon from "@/components/ui/CTA/Icons/Whatsapp";
import MessageBot from "@/components/ui/CTA/MessageBot";

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
        <ModalProvider>
          <TopBar />
          <Header />
          {children}
          <Footer />
          <WhatsappIcon />
          <MessageBot />
          <Modal />
        </ModalProvider>
      </body>
    </html>
  );
}
