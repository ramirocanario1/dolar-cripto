import React from "react";

export default function Header() {
  return (
    <header className=" bg-gradient-to-r from-green-600 to-green-500 flex justify-center p-4 shadow-lg">
      <div className=" max-w-[80rem] w-full flex justify-between text-center items-center">
        <h1 className="text-3xl font-bold uppercase">
          <span className="text-white ">CRIPTODOL</span>
          <span className="text-green-200 ">AR 💸</span>
        </h1>
      </div>
    </header>
  );
}
