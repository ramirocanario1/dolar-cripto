import React from "react";

export default function Header() {
  return (
    <header className=" bg-green-600 flex justify-center p-4 shadow-lg">
      <div className=" max-w-[80rem] w-full flex justify-between text-center items-center">
        <h1 className="text-2xl font-bold uppercase">
          <span className="text-green-400 ">Dolar</span>
          <span className="text-green-200 ">Cripto 💸</span>
        </h1>
      </div>
    </header>
  );
}
