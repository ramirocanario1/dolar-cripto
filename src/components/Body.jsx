import React, { useEffect, useState } from "react";
import { getBestDolarPrice } from "../api/dolar";
import PriceItem from "./PriceItem";

export default function Body() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    getBestDolarPrice().then((p) => setPrices(p));
  }, []);

  return (
    <main className="container mx-auto p-1 max-w-[80rem]">
      <header className="py-6 px-3 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">
          Mejores precios de <span className="text-green-500">dólar cripto</span> en cada exchange de Argentina
        </h2>
        <p>A continuación se muestra el mejor precio para comprar dólar cripto en los principales exchanges de Argentina.</p>
      </header>
      <PricesList data={prices} />
    </main>
  );
}

function PricesList({ data }) {
  return (
    <section className="p-8 bg-gray-100 border-2 border-green-500 rounded-xl mx-auto">
      <p>Los precios de a continuación están ordenados de menor a mayor, según el precio de compra (comisiones incluídas).</p>
      <ul className="flex flex-wrap gap-4 lg:gap-8 md:p-5 p-1 justify-center">
        {data.map((p) => (
          <li key={p.exchange} className="grow min-w-[15rem] max-w-[20rem]">
            <PriceItem price={p} />
          </li>
        ))}
      </ul>
    </section>
  );
}
