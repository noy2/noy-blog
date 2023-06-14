import React from "react";
import GlobalNavigation from "./GlobalNavigation";

const Header = () => {
  return (
    <header className="pt-4 pb-12 w-screen bg-white">
      <div className="px-48 flex mx-auto container">
        <GlobalNavigation />
      </div>
      <div className="mb-8" />
      <div className="px-6 mx-auto container flex flex-col justify-center items-center">
        <p className="text-2xl md:text-3xl text-personal font-bold">
          noy&apos;s Blog
        </p>
        <div className="mb-3" />
        <p className="text-base md:text-lg text-personal text-center">
          description
        </p>
      </div>
    </header>
  );
};

export default Header;
