import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";

type Props = {};

const Pricing = (props: Props) => {
  const t = useTranslations("PricingSection");

  return (
    <div className="bg-slate-100 flex flex-col gap-6 py-8 md:py-16 px-4 md:px-16">
      <div className="">
        <div className="flex items-center justify-center flex-col mb-12">
          <h2 className=" text-2xl md:text-5xl font-semibold  mb-4">
            {t("title")}
          </h2>
          <p>{t("description")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-2xl rounded-lg p-12 fle flex-col ">
            {/* icon */}
            <div className="flex items-center justify-center rounded-full w-16 h-16 bg-purple-100 mb-6">
              <BsCheck2Circle className="text-3xl backdrop:placeholder:file:text-purple-500" />
            </div>
            <h4 className="mb-6 text-2xl font-bold text-slate-900">
              {t("freePlan.description")}
            </h4>
            <p className="mb-6 text-slate-500">{t("freePlan.title")}</p>
            <Link
              className="font-bold text-purple-700 hover:text-purple-800"
              href="/invoice/new"
            >
              {t("freePlan.button")}
            </Link>
          </div>
          <div className="bg-white shadow-2xl rounded-lg p-12 fle flex-col ">
            {/* icon */}
            <div className="flex items-center justify-center rounded-full w-16 h-16 bg-purple-100 mb-6">
              <IoDiamondOutline className="text-3xl backdrop:placeholder:file:text-purple-500" />
            </div>
            <h4 className="mb-6 text-2xl font-bold text-slate-900">
              {t("premiumPlan.title")}
            </h4>
            <p className="mb-6 text-slate-500">
              {t("premiumPlan.description")}.
            </p>
            <Link
              className="text-purple-700 hover:text-purple-800 font-bold"
              href="/features"
            >
              {t("premiumPlan.button")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
