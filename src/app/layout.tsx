import "./globals.css";
// import type { Metadata } from "next";
import TopBar from "@/components/common/TopBar";
import { Montserrat, Sour_Gummy } from "next/font/google"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";


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

// export const metadata: Metadata = {
//   title: "Looklush Beauty",
//   description: "Looklush Beauty",
// };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      {/* Google Ads Global Tag */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17058145078"></Script>
      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-17058145078');`}
      </Script>

      {/*} Event snippet for Submit lead form conversion page */}
      <Script>
        {`gtag('event', 'conversion', {'send_to': 'AW-17058145078/881OCLrN9vEaELbG-sU_'});`}        
      </Script>

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

