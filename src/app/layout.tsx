import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer";

const panchangBold = localFont({
  src: "../assets/fonts/SFUIDisplay-Bold.woff2",
  variable: "--font-panchang-bold",
  display: "swap",
});

const panchangMedium = localFont({
  src: "../assets/fonts/SFUIDisplay-Bold.woff2",
  variable: "--font-panchang-medium",
  display: "swap",
});

const panchangRegular = localFont({
  src: "../assets/fonts/SFUIDisplay-Bold.woff2",
  variable: "--font-panchang-regular",
  display: "swap",
});

const panchangSemiBold = localFont({
  src: "../assets/fonts/SFUIDisplay-Bold.woff2",
  variable: "--font-panchang-semibold",
  display: "swap",
});

const archivoItalic = localFont({
  src: "../assets/fonts/SFUIText-Regular.woff2",
  variable: "--font-Archivo-italic",
  display: "swap",
});

const archivoMedium = localFont({
  src: "../assets/fonts/SFUIText-Regular.woff2",
  variable: "--font-Archivo-medium",
  display: "swap",
});

const archivoRegular = localFont({
  src: "../assets/fonts/SFUIText-Regular.woff2",
  variable: "--font-Archivo-regular",
  display: "swap",
});

const archivoSemiBold = localFont({
  src: "../assets/fonts/SFUIText-Regular.woff2",
  variable: "--font-Archivo-semibold",
  display: "swap",
});

const archivoBlack = localFont({
  src: "../assets/fonts/SFUIText-Regular.woff2",
  variable: "--font-Archivo-black",
  display: "swap",
});

const archivoBlackItalic = localFont({
  src: "../assets/fonts/SFUIText-Regular.woff2",
  variable: "--font-Archivo-blackitalic",
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
        className={`${panchangBold.variable} ${panchangMedium.variable} ${panchangRegular.variable} ${panchangSemiBold.variable} ${archivoBlack.variable} ${archivoBlackItalic.variable} ${archivoItalic.variable} ${archivoMedium.variable} ${archivoRegular.variable} ${archivoSemiBold.variable}  antialiased`}
      >
        <Header />
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}
