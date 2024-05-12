import Link from "next/link";
import React from "react";
import ThemeLink from "./ThemeLink";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="bg-violet-700 fixed top-0 right-0 w-full left-0 h-16 flex items-center justify-between px-16 text-slate-50">
      <Link href="/" className="fpnt-bold text-2xl md:text-4xl">
        Invoicer
      </Link>
      <nav className="flex items-center gap-3">
        <Link href="/">Features</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Free Tools</Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link href="/login">Login</Link>
        <ThemeLink
          className="bg-red-600 hover:bg-red-700  focus:ring-red-300"
          href="/register"
          title="Register"
        />
      </div>
    </header>
  );
};

export default Navbar;
