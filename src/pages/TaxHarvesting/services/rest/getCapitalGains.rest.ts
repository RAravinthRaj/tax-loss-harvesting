/* 
© 2026 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2026.
*/

import capitalGains from "../../../../data.json/capitalGains.json";
import { CapitalGainsResponse } from "../../../../types";

const MOCK_DELAY = 1500;

export const getCapitalGains = async (): Promise<CapitalGainsResponse> =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(capitalGains);
    }, MOCK_DELAY);
  });
