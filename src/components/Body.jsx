import React, { useEffect, useState } from "react";
import { getBestDolarPrice, getDolaresPrice } from "../api/dolar";
import DolarsList from "./DolarsList";
import CryptoDolarList from "./CryptoDolarList";

import { useQuery } from "@tanstack/react-query";

export default function Body() {
  const cryptodolar = useQuery({ queryKey: ["cryptodolar"], queryFn: getBestDolarPrice });
  const dolares = useQuery({ queryKey: ["dolares"], queryFn: getDolaresPrice });

  return (
    <main className="container mx-auto p-1 max-w-[80rem] flex flex-col gap-6 pb-4">
      <BodyHeader />
      <CryptoDolarList data={cryptodolar.data} isLoading={cryptodolar.isLoading} isError={cryptodolar.isError} />
      <DolarsList data={dolares.data} isLoading={dolares.isLoading} isError={dolares.isError} />
    </main>
  );
}

function BodyHeader() {
  return (
    <header className="pt-5 px-1 flex flex-col gap-2">
      <h2 className="text-xl font-semibold">
        Mejores precios de <span className="text-green-500">dólar cripto</span> en cada exchange de Argentina
      </h2>
      <p>A continuación se muestra el mejor precio para comprar dólar cripto en los principales exchanges de Argentina.</p>
    </header>
  );
}
