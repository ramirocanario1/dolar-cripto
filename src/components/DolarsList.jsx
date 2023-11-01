import React from "react";
import { MdAttachMoney } from "react-icons/md";
import { dolars } from "../utils/dolars";
import Skeleton from "react-loading-skeleton";

export default function DolarsList({ data, isLoading, isError }) {
  let content;
  if (isLoading) {
    content = (
      <>
        <PriceItemSkeleton name={"blue"} />
        <PriceItemSkeleton name={"mep"} />
        <PriceItemSkeleton name={"ccl"} />
      </>
    );
  } else {
    content = (
      <>
        {Object.keys(data)?.map((d) => (
          <li key={d} className="grow min-w-[15rem] max-w-[20rem]">
            <PriceItem name={d} price={data[d]} />
          </li>
        ))}
      </>
    );
  }

  return (
    <section className="p-8 bg-gray-100 border-2 border-green-500 rounded-xl mx-auto w-full">
      <h3 className="text-xl font-semibold">Dólares tradicionales</h3>
      <p className="mb-2">A continuación se muestran los precios de compra de los dólares tradicionales, para tener de referencia.</p>
      <ul className="flex flex-wrap gap-4 lg:gap-8 md:p-5 p-1 justify-center">{content}</ul>
    </section>
  );
}

function PriceItem({ name, price }) {
  return (
    <article className="p-5 pt-2 shadow-lg relative overflow-hidden rounded-lg bg-white">
      <div className="flex flex-col gap-2">
        <header className="flex justify-between items-center py-2">
          <div className="flex gap-2">
            <DolarIcon colors={dolars[name].colors} />
            <h3 className="flex items-center">{dolars[name].name}</h3>
          </div>
        </header>
        <div className="text-center flex flex-col gap-1">
          <p>
            <span className="text-2xl font-semibold">${price}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

function PriceItemSkeleton({ name }) {
  return (
    <article className="p-5 pt-2 shadow-lg relative overflow-hidden rounded-lg bg-white min-w-[15rem]">
      <div className="flex flex-col gap-2">
        <header className="flex justify-between items-center py-2">
          <div className="flex gap-2">
            <DolarIcon colors={dolars[name].colors} />
            <h3 className="flex items-center">{dolars[name].name}</h3>
          </div>
        </header>
        <div className="text-center flex flex-col gap-1">
          <p>
            <span className="text-2xl font-semibold">
              <Skeleton />
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}

function DolarIcon({ colors }) {
  const styles = {
    backgroundColor: colors.bg,
    color: colors.symbol,
  };
  return <MdAttachMoney className="text-4xl text-blue-200 rounded-full p-1" style={styles} />;
}
