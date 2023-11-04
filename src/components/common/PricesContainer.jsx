import React from "react";

export default function PricesContainer({ children }) {
  return <section className="p-8 bg-gray-100 dark:bg-gray-800 dark:text-white border-2 border-green-500 rounded-xl mx-auto w-full transition-colors duration-500">{children}</section>;
}
