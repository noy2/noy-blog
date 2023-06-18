import Link from "next/link";
import React, { useCallback } from "react";

interface navType {
  title: string;
  path: string;
}

const navLinks: navType[] = [
  {
    path: "/",
    title: "Post",
  },
  {
    path: "https://noy2.github.io/",
    title: "Resume",
  },
];

const GlobalNavigation = () => {
  const renderNavigation = useCallback(({ path, title }: navType) => {
    const item = <li>{title}</li>;
    const component = (
      <Link
        key={path}
        href={path}
        className="text-slate-900 hover:bg-gray-100 px-3 py-2 rounded-md font-bold"
      >
        {item}
      </Link>
    );
    return component;
  }, []);
  return (
    <nav>
      <ul className="flex text-base">{navLinks.map(renderNavigation)}</ul>
    </nav>
  );
};

export default GlobalNavigation;
