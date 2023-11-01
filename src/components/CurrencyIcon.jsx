import React from "react";

export default function CurrencyIcon({ currency, className }) {
  return <img src={`currencies/${currency}.png`} alt="USD" className={`w-6 ${className}`} />;
}
