import React from "react";
import PriceItem from "./PriceItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
    <section className="p-8 bg-gray-100 border-2 border-green-500 rounded-xl mx-auto">
      <p className="mb-2">Los precios de a continuación están ordenados de menor a mayor, según el precio de compra (comisiones incluídas).</p>
      <ul className="flex flex-wrap gap-4 lg:gap-8 md:p-5 p-1 justify-center">{content}</ul>
    </section>
  );
}

function PriceSkeleton() {
  return (
    <article className="p-5 pt-2 shadow-lg relative overflow-hidden rounded-lg bg-white w-content min-w-[15rem]">
      <div className="flex flex-col gap-2">
        <header className="flex justify-between items-center py-2">
          <div className="flex gap-2 items-center">
            <Skeleton width={30} height={30} />
            <Skeleton width={120} height={20} />
          </div>
        </header>
        <div className="text-center flex flex-col gap-1">
          <p className="flex justify-center gap-3">
            <Skeleton width={50} height={20} /> / <Skeleton width={50} height={20} />
          </p>
          <p className="text-sm text-gray-500">
            spread: <Skeleton width={50} height={15} />
          </p>
        </div>
      </div>
    </article>
  );
}
