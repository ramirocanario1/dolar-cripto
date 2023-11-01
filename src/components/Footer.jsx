import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-4 text-center">
      Página creada por{" "}
      <a className="text-gray-400" href="https://github.com/ramirocanario1" target="_blank" rel="noreferrer">
        Ramiro Canario
      </a>
      , usando al API de{" "}
      <a className="text-gray-400" href="https://criptoya.com/" target="_blank" rel="noreferrer">
        CriptoYa
      </a>{" "}
      y de{" "}
      <a className="text-gray-400" href="https://dolarapi.com/docs/" target="_blank" rel="noreferrer">
        DolarApi.com
      </a>
      .
    </footer>
  );
}
