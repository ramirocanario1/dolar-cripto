import CurrencyIcon from "./CurrencyIcon";
import s from "./PriceItem.module.css";
import { exchangesInfo as exchanges } from "../utils/exchanges";
import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import Skeleton from "react-loading-skeleton";

export default function PriceItem({ price }) {
  return (
    <article className="p-5 pt-2 shadow-lg relative overflow-hidden rounded-lg bg-white">
      <div className="flex flex-col gap-2">
        <header className="flex justify-between items-center py-2">
          <div className="flex gap-2">
            <CurrencyIcon currency={price.currency} />
            <h3>{exchanges[price.exchange].name}</h3>
          </div>
          <GoToExchangeIcon url={exchanges[price.exchange]?.url} className={"text-lg"} />
        </header>
        <div className="text-center flex flex-col gap-1">
          <p>
            <span className="text-xl font-semibold">${price.ask}</span> / <span className="text-gray-500">${price.bid}</span>
          </p>
          <p className="text-sm text-gray-500">spread: ${price.spread}</p>
        </div>
      </div>
      <ExchangeBorder colors={exchanges[price.exchange]?.colors} />
    </article>
  );
}

function GoToExchangeIcon({ url, className }) {
  return (
    <a href={url} className={`cursor-pointer hover:text-green-500 transition-colors ${className}`} target="_blank" rel="noreferrer">
      <FiExternalLink className={className} />
    </a>
  );
}

function ExchangeBorder({ colors }) {
  const [border, setBorder] = useState(<></>);

  useEffect(() => {
    if (!colors) return;

    const border = [];

    const gap = parseInt(100 / colors.length);
    let index = 0;
    for (const color of colors) {
      const left = `${gap * index}%`;
      const width = `${gap + 10}%`;

      const styles = {
        backgroundColor: color,
        left: left,
        width: width,
      };

      const div = <div className={s.border} style={styles}></div>;
      border.push(div);

      index += 1;
    }
    setBorder(border);
  }, []);

  return border;
}
