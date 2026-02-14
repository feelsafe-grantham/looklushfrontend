"use client"
import "./globals.css";
import TopBar from "@/components/common/TopBar";
import { Montserrat, Sour_Gummy } from "next/font/google"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Head from "next/head";
import Modal from "@/components/ui/Modal/Modal";
import { ModalProvider } from "@/components/ui/Modal/ModalProvider";
import WhatsappIcon from "@/components/ui/CTA/Icons/Whatsapp";
import MessageBot from "@/components/ui/CTA/MessageBot";
import { AlertProvider } from "@/context/AlertContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// const sourGummy = Sour_Gummy({
//   subsets: ["latin"],
//   variable: "--font-sour-gummy",
//   weight: ["400", "500", "600", "700", "800", "900"],
// });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console */}
        <meta name="google-site-verification" content="fq7mjKa9Ym-ML7F1OvxC-e8Er5OiWh21Nj6gwp8g6wo" />

        {/* Microsoft Clarity */}
        <script type="text/javascript">
          {`
            (function(c,l,a,r,i,t,y){
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "rzcdpq3aks");
          `}
        </script>

        {/* Meta Pixel Code */}
        <script>
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2478935065817522');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2478935065817522&ev=PageView&noscript=1"
          />
        </noscript>

        {/* End Meta Pixel Code */}
        {/*  Google tag (gtag.js)  */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17058145078"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17058145078');`}
        </script>


        {/*  Event snippet for Submit lead form conversion page  */}
        <script>
          {`gtag('event', 'conversion', {'send_to': 'AW-17058145078/881OCLrN9vEaELbG-sU_'});`}
        </script>

      </head>
      <body
        // ${sourGummy.variable}
        className={`${montserrat.variable}  antialiased`}
      >
        <AlertProvider>
          <ModalProvider>
            <TopBar />
            <Header />
            {children}
            <Footer />
            <WhatsappIcon />
            <MessageBot />
            <Modal />
          </ModalProvider>
        </AlertProvider>
      </body>
    </html>
  );
}

