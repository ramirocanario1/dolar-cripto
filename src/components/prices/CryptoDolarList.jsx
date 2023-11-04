import React from "react";
import { PriceItem, PriceSkeleton } from "./PriceItem";
import "react-loading-skeleton/dist/skeleton.css";
import PricesContainer from "../common/PricesContainer";

export default function CryptoDolarList({ data, isLoading, isError }) {
  let content = [];
  if (isLoading) {
    for (let i = 0; i < 12; i++) {
      content.push(<PriceSkeleton key={i} />);
    }
  } else {
    content = (
      <>
        {data.map((p) => (
          <li key={p.exchange} className="grow min-w-[15rem] max-w-[20rem]">
            <PriceItem price={p} />
          </li>
        ))}
      </>
    );
  }

  return (
    <PricesContainer>
      <p className="mb-4">Los precios de a continuación están ordenados de menor a mayor, según el precio de compra (comisiones incluídas).</p>
      <ul className="flex flex-wrap gap-4 lg:gap-8 md:p-5 p-1 justify-center">{content}</ul>
    </PricesContainer>
  );
}
