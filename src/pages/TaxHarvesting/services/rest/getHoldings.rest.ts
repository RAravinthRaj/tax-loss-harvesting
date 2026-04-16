/* 
© 2026 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2026.
*/

import holdings from "../../../../data.json/holdings.json";
import { Holding } from "../../../../types";

const MOCK_DELAY = 1500;

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
