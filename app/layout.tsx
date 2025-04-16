import type { Metadata } from "next";
import { Footer, Header } from "@/components";
import "./globals.css";
import localFont from "next/font/local";

const angella = localFont({
  src: "../public/fonts/Angella.otf", // path relative to /public
  variable: "--font-angella", // CSS variable for Tailwind
  display: "swap",
});


export const metadata: Metadata = {
  title: "ZUPHORIA SAFARIS",
  description: "Turning Dreams into Destinations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={angella.variable}>
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
