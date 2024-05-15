import { useTranslations } from "next-intl";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

const Steps = () => {
  const t = useTranslations("StepsSection");

  return (
    <div className="py-8 md:py-16 px-4 md:px-16 bg-slate-50 mx-auto flex items-center justify-center">
      <div>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          {t("title")}
        </h2>
        <div className="flex items-start md:items-center flex-col md:flex-row gap-0 md:gap-6 ">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <p className=" border-2 rounded-full p-2 h-8 w-8 flex items-center justify-center border-slate-400">
              {t("steps.0.number")}
            </p>
            <p className="text-slate-900"> {t("steps.0.description")}</p>
            <BsChevronRight className="hidden md:block" size={24} />
          </div>

          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <p className=" border-2 rounded-full p-2 h-8 w-8 flex items-center justify-center border-slate-400">
              {t("steps.1.number")}
            </p>
            <p className="text-slate-900"> {t("steps.1.description")}</p>
            <BsChevronRight className="hidden md:block" size={24} />
          </div>

          <div className="flex items-center gap-3">
            <p className=" border-2 rounded-full p-2 h-8 w-8 flex items-center justify-center border-slate-400">
              {t("steps.2.number")}
            </p>
            <p className="text-slate-900">
              {t("steps.2.description")}
              <br />
              {t("steps.2.description2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
