import localFont from "next/font/local";
import type { Metadata } from "next";
import "../styles/themes.css";
import './globals.css'
import BackgroundGradient from "@/components/common/bg/BackgroundGradient";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer";

const oneFont = localFont({
  src: "../assets/fonts/bHYNJqzTyl2lqvmMiRRS6Y16Es.woff2",
  variable: "--font-oneFont",
  display: "swap",
});

const twoFont = localFont({
  src: "../assets/fonts/iwWTDc49ENF2tCHbqlNARXw6Ug.woff2",
  variable: "--font-twoFont",
  display: "swap",
});

const threeFont = localFont({
  src: "../assets/fonts/PfdOpgzFf7N2Uye9JX7xRKYTgSc.woff2",
  variable: "--font-threeFont",
  display: "swap",
});

const fourFont = localFont({
  src: "../assets/fonts/qITWJ2WdG0wrgQPDb8lvnYnTXDg.woff2",
  variable: "--font-fourFont",
  display: "swap",
});

const fiveFont = localFont({
  src: "../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2",
  variable: "--font-fiveFont",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Nidus Technologies",
  description:
    "We empower businesses with innovative technology solutions to thrive in the digital age. Our passion for technology, paired with a commitment to excellence, helps deliver tailored solutions that drive success.",
  keywords: [
    "Nidus Technologies",
    "IT Services",
    "Software Development",
    "Web Development",
    "Digital Transformation",
    "AI Solutions",
  ],
  authors: [{ name: "Nidus Technologies", url: "https://nidustech.in" }],
  creator: "Nidus Technologies",
  metadataBase: new URL("https://nidustech.in"),
  openGraph: {
    title: "Nidus Technologies",
    description:
      "Innovative IT solutions to power your business in the digital era.",
    url: "https://nidustech.in",
    siteName: "Nidus Technologies",
    images: [
      {
        url: "https://nidustech.in/og-image.jpg", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Nidus Technologies - Empowering Digital Growth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidus Technologies",
    description:
      "Empowering businesses with next-gen IT services and solutions.",
    images: ["https://nidustech.in/og-image.jpg"], // Same image as OG
    creator: "@nidustech", // Optional Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body 
       className={`${oneFont.variable} ${twoFont.variable} ${threeFont.variable} ${fourFont.variable} ${fiveFont.variable}  antialiased`}
      >
<BackgroundGradient/>

        <Header />
        <>{children}</>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
