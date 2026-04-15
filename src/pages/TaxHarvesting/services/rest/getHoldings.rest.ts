import holdings from "../../../../data.json/holdings.json";
import { Holding } from "../../../../types";

const MOCK_DELAY = 2000;

export const getHoldings = async (): Promise<Holding[]> =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      const sorted = [...holdings].sort((a, b) => {
        const valueA = a.currentPrice * a.totalHolding;
        const valueB = b.currentPrice * b.totalHolding;

        return valueB - valueA;
      });

      resolve(sorted);
    }, MOCK_DELAY);
  });
