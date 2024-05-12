import React from "react";
import ThemeLink from "./ThemeLink";
import invoiceImage from "../public/images/demo.webp";
import Image from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";
type Props = {};

function Hero({}: Props) {
  return (
    <div className="mt-16 bg-violet-700 grid grid-cols-1 md:grid-cols-2 py-8 md:py-16 px-4 md:px-16 text-slate-50 items-center gap-4">
      <div className="flex flex-col space-y-8 items-start">
        <h2 className="text-3xl md:text-4xl font-bold">
          Free Invoice Generator - Invoice Maker
        </h2>
        <p className="text-base md:text-2xl">
          Create, Manage and Track recurring invoices. Download as PDF, email
          and print invoices.
        </p>
        <ThemeLink
          className="bg-rose-600 hover:bg-rose-700  focus:ring-rose-300"
          href="/invoice/new"
          title="Create your first Invoice"
          icon={AiOutlineArrowDown}
        />
      </div>
      <div className="">
        <Image src={invoiceImage} alt="Invoice Generator" />
      </div>
    </div>
  );
}

export default Hero;
