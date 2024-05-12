import Link from "next/link";
import React from "react";

type Props = {
  className: string;
  href: string;
  title: string;
};

const ThemeLink = (props: Props) => {
  const { className, href, title } = props;
  return (
    <Link
      href={href}
      className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-8 py-3 text-center ${className}`}
    >
      {title}
    </Link>
  );
};

export default ThemeLink;
