import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoicer",
  description:
    "Invoicer is a simple invoicing app for freelancers and small businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} position-relative min-h-screen`}>
        <Navbar />
        <div className="mt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
