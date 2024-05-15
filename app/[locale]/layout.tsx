import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoicer",
  description:
    "Invoicer is a simple invoicing app for freelancers and small businesses.",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={`${inter.className} position-relative min-h-screen`}>
          <Navbar />
          <div className="mt-16">{children}</div>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
