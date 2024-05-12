import Link from "next/link";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

type Props = {
  className: string;
  href: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>; // Adjust the type of icon prop
};

const ThemeLink = (props: Props) => {
  const { className, href, title, icon: Icon } = props;

  return (
    <Link
      href={href}
      className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-8 py-3 text-center ${className}`}
    >
      <div className="flex align-middle">
        {" "}
        {title}
        {Icon && <Icon className="ml-2" />}
      </div>
    </Link>
  );
};

export default ThemeLink;
