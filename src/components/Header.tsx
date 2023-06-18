import React from "react";
import GlobalNavigation from "./GlobalNavigation";

const Header = () => {
  return (
    <header className="pt-8 pb-12 w-screen bg-white">
      <div className="max-w-screen-md px-12 flex mx-auto container">
        <GlobalNavigation />
      </div>
      <div className="mb-12" />
      <div className="mx-auto container flex flex-col max-w-screen-sm">
        <p className="text-2xl md:text-3xl text-gray-900 font-bold">
          noy&apos;s Blog
        </p>
        <div className="mb-3" />
        <p className="text-base md:text-lg text-gray-500">
          개발하다가 생긴일들을 정리하고 글을 써보는 공간입니다.
        </p>
      </div>
    </header>
  );
};

export default Header;
