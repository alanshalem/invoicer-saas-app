"use client";
import Link from "next/link";
import React, { useState } from "react";
import ThemeLink from "./ThemeLink";
import { BiMenu, BiWorld } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {};

const Navbar = (props: Props) => {
  const [show, setShow] = useState(false);
  const t = useTranslations("Navbar");

  return (
    <>
      {/* TOP MENU */}
      <header className="bg-violet-700 fixed top-0 right-0 w-full left-0 h-16 flex items-center justify-between px-16 text-slate-50">
        <Link href="/" className="fpnt-bold text-2xl md:text-4xl">
          Invoicer
        </Link>
        <nav className="hidden sm:flex items-center gap-3">
          <Link href="/">{t("links.features")}</Link>
          <Link href="/">{t("links.pricing")}</Link>
          <Link href="/">{t("links.freeTools")}</Link>
        </nav>
        <div className="hidden sm:flex items-center gap-4">
          <Link href="/login">{t("links.login")}</Link>
          <ThemeLink
            className="bg-red-600 hover:bg-red-700  focus:ring-red-300"
            href="/register"
            title="Register"
          />
          <div className="hidden sm:flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
        {/* HAMBURGER MENU */}
        <button onClick={() => setShow(true)} className="sm:hidden">
          <BiMenu className="text-3xl" />
        </button>
      </header>
      {/* SIDE MENU */}
      <div
        className={
          show
            ? "sm:hidden fixed w-36 bg-slate-800 bg-opacity-90 h-screen right-0  z-50 top-0 p-4 text-slate-50"
            : "hidden sm:hidden fixed w-36 bg-slate-800 bg-opacity-90 h-screen right-0  z-50 top-0 p-4 text-slate-50"
        }
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-bold">Invoicer</h2>
          <button onClick={() => setShow(false)}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <nav className="flex flex-col items-start gap-3 mb-10">
          <Link href="/">{t("links.features")}</Link>
          <Link href="/">{t("links.pricing")}</Link>
          <Link href="/">{t("links.freeTools")}</Link>
          {/* {status === "authenticated" && <a href="/invoice">View Invoices</a>} */}
        </nav>
        <div className="flex flex-col items-start gap-4">
          <Link href="/login">{t("links.login")}</Link>
          <ThemeLink
            className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300"
            title="Register"
            href="/register"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
