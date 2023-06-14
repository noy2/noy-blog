import Link from "next/link";
import React, { useCallback } from "react";

interface navType {
  title: string;
  path: string;
}

const navLinks: navType[] = [
  {
    path: "/",
    title: "Blog",
  },
  {
    path: "https://noy2.github.io/",
    title: "About Me",
  },
];

const GlobalNavigation = () => {
  const renderNavigation = useCallback(({ path, title }: navType) => {
    const item = <li>{title}</li>;
    const component = (
      <Link key={path} href={path} className="text-personal">
        {item}
      </Link>
    );
    return component;
  }, []);
  return (
    <nav>
      <ul className="flex text-base text-black space-x-6">
        {navLinks.map(renderNavigation)}
      </ul>
    </nav>
  );
};

export default GlobalNavigation;
