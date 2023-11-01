import axios from "axios";
import { exchanges } from "../utils/exchanges";

const criptoAPI = axios.create({
  baseURL: `https://criptoya.com/api/`,
});

export const getDolarPrice = async () => {
  const usdt = await criptoAPI.get(`/usdt/ars`);
  const dai = await criptoAPI.get(`/dai/ars`);
  const usdc = await criptoAPI.get(`/usdc/ars`);

  const pricesByExchange = {};
  for (const exchange of exchanges) {
    pricesByExchange[exchange] = {
      usdt: { totalAsk: usdt.data[exchange]?.totalAsk, totalBid: usdt.data[exchange]?.totalBid },
      dai: { totalAsk: dai.data[exchange]?.totalAsk, totalBid: dai.data[exchange]?.totalBid },
      usdc: { totalAsk: usdc.data[exchange]?.totalAsk, totalBid: usdc.data[exchange]?.totalBid },
    };
  }
  console.log({ pricesByExchange });
  return pricesByExchange;
};

export const getBestDolarPrice = async () => {
  const data = await getDolarPrice();
  const bestPrices = [];

  for (const exchange in data) {
    if (Object.hasOwnProperty.call(data, exchange)) {
      const currencies = data[exchange];
      let bestAskPrice = Number.MAX_SAFE_INTEGER;
      let bestAskCurrency = "";
      let bestBidPrice = Number.MAX_SAFE_INTEGER;
      let bestBidCurrency = "";

      for (const currency in currencies) {
        if (Object.hasOwnProperty.call(currencies, currency)) {
          if (currencies[currency].totalAsk) {
            const askPrice = currencies[currency].totalAsk;
            if (askPrice < bestAskPrice) {
              bestAskPrice = askPrice;
              bestAskCurrency = currency;
            }
          }

          if (currencies[currency].totalBid) {
            const bidPrice = currencies[currency].totalBid;
            if (bidPrice < bestBidPrice) {
              bestBidPrice = bidPrice;
              bestBidCurrency = currency;
            }
          }
        }
      }

      if (bestAskCurrency !== "") {
        const spread = (bestAskPrice - bestBidPrice).toFixed(2);

        bestPrices.push({
          exchange: exchange,
          currency: bestAskCurrency,
          ask: bestAskPrice,
          bid: bestBidPrice,
          spread: spread,
        });
      }
    }
  }

  const sortedPrices = bestPrices.sort((a, b) => a.ask - b.ask);

  console.log(sortedPrices);
  return sortedPrices;
};
