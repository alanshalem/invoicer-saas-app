import React from "react";
import ThemeLink from "./ThemeLink";
import invoiceImage from "../public/images/demo.webp";
import Image from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useTranslations } from "next-intl";
type Props = {};

function Hero({}: Props) {
  const t = useTranslations("HeroSection");
  return (
    <div className="mt-16 bg-violet-700 grid grid-cols-1 md:grid-cols-2 py-8 md:py-16 px-4 md:px-16 text-slate-50 items-center gap-4">
      <div className="flex flex-col space-y-8 items-start">
        <h2 className="text-3xl md:text-4xl font-bold">{t("title")}</h2>
        <p className="text-base md:text-2xl">{t("description")}</p>
        <ThemeLink
          className="bg-rose-600 hover:bg-rose-700  focus:ring-rose-300"
          href="/invoice/new"
          title={t("button")}
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
