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
