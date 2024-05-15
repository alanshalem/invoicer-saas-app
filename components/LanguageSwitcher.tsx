"use client";

import { Locale } from "@/global";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const LanguageSwitcher = (props: Props) => {
  const locale = useLocale() as Locale;
  const router = useRouter();

  const handleLocaleChange = (newLocale: any) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.push(locale === "en" ? "/es" : "/en");
  };

  return (
    <div>
      <button
        onClick={() => {
          handleLocaleChange(locale === "en" ? "es" : "en");
        }}
      >
        {" "}
        {locale === "en" ? "🇪🇸" : "🇺🇸"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
