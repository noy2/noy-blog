import React from "react";
import GlobalNavigation from "./GlobalNavigation";

const Header = () => {
  return (
    <header className="pt-8 pb-8 w-screen bg-white">
      <div className="max-w-screen-sm flex mx-auto container">
        <GlobalNavigation />
      </div>
    </header>
  );
};

export default Header;
