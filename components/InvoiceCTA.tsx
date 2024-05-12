import React from "react";
import Image from "next/image";
import ThemeLink from "./ThemeLink";
import invoiceBg from "../public/images/invoice-bg.png";

const InvoiceCTA = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full h-screen">
        <Image
          src={invoiceBg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-opacity-70 bg-white blur"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <ThemeLink
            className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300"
            title="Create your first Invoice"
            href="/invoice/new"
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceCTA;
