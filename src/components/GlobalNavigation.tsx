import Link from "next/link";
import React, { useCallback } from "react";

const navigations = [
  {
    path: "/",
    name: "Blog",
  },
  {
    path: "https://noy2.github.io/",
    name: "About Me",
  },
];

const GlobalNavigation = () => {
  const renderNavigation = useCallback(
    ({ path, name }: (typeof navigations)[number]) => {
      const item = <li>{name}</li>;
      const component = (
        <Link key={path} href={path} className="text-personal">
          {item}
        </Link>
      );
      return component;
    },
    []
  );
  return (
    <nav>
      <ul className="flex text-base text-black space-x-6">
        {navigations.map(renderNavigation)}
      </ul>
    </nav>
  );
};

export default GlobalNavigation;
