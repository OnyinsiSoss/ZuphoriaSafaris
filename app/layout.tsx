import type { Metadata } from "next";
import { Footer, Header } from "@/components";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
