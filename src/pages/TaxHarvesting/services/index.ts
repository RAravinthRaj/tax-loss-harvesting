/* 
© 2026 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2026.
*/

import { getCapitalGains, getHoldings } from "./rest";

class TaxHarvestingService {
  private static instance: TaxHarvestingService;

  private constructor() {}

  static getInstance(): TaxHarvestingService {
    if (!TaxHarvestingService.instance) {
      TaxHarvestingService.instance = new TaxHarvestingService();
    }

    return TaxHarvestingService.instance;
  }

  async getHoldingsAPI() {
    return getHoldings();
  }

  async getCapitalGainsAPI() {
    return getCapitalGains();
  }
}

export default TaxHarvestingService.getInstance();
