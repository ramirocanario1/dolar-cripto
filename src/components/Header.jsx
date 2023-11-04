import React, { useEffect, useState } from "react";
import { themeIsDark, toggleTheme } from "../utils/themeUtils";

import { TbSunFilled, TbMoonFilled } from "react-icons/tb";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-500 flex justify-center p-4 shadow-lg">
      <div className=" max-w-[80rem] w-full flex justify-between text-center items-center">
        <h1 className="text-xl md:text-2xl font-bold uppercase">
          <span className="text-white dark:text-gray-700">CRIPTODOL</span>
          <span className="text-green-200 ">AR 💸</span>
        </h1>
        <ThemeButton />
      </div>
    </header>
  );
}

function ThemeButton() {
  const [icon, setIcon] = useState();

  function updateIcon() {
    if (themeIsDark()) {
      setIcon(<TbSunFilled />);
    } else {
      setIcon(<TbMoonFilled />);
    }
  }

  useEffect(() => {
    updateIcon();
  }, []);

  function handleClick() {
    toggleTheme();
    updateIcon();
  }

  return (
    <button id="theme_changer" onClick={handleClick} className="text-2xl text-white dark:text-gray-900">
      {icon}
    </button>
  );
}
