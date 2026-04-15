export interface GainBucket {
  balance: number;
  gain: number;
}

export interface Holding {
  coin: string;
  coinName: string;
  logo: string;
  currentPrice: number;
  totalHolding: number;
  averageBuyPrice: number;
  stcg: GainBucket;
  ltcg: GainBucket;
}

export interface TaxSummaryValue {
  profits: number;
  losses: number;
}

export interface CapitalGains {
  stcg: TaxSummaryValue;
  ltcg: TaxSummaryValue;
}

export interface CapitalGainsResponse {
  capitalGains: CapitalGains;
}

export interface ComputedCapitalGains {
  stcg: TaxSummaryValue & { net: number };
  ltcg: TaxSummaryValue & { net: number };
  realised: number;
}
