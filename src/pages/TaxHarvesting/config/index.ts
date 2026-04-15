export const DISCLAIMER_POINTS = [
  "Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.",
  "Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.",
  "Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.",
  "Some countries do not have a short-term / long-term bifurcation. For now, we are calculating everything as long-term.",
  "Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted.",
];

export const DEFAULT_VISIBLE_ROWS = 4;

export const TEXTS = {
  header: {
    title: "Tax Harvesting",
    howItWorks: "How it works?",
    howItWorksTooltip: "Lorem ipsum dolor sit amet consectetur. Know More",
  },
  disclaimer: {
    title: "Important Notes & Disclaimers",
  },
  summary: {
    preHarvesting: "Pre Harvesting",
    afterHarvesting: "After Harvesting",
    profits: "Profits",
    losses: "Losses",
    netCapitalGains: "Net Capital Gains",
    realisedCapitalGains: "Realised Capital Gains:",
    effectiveCapitalGains: "Effective Capital Gains:",
    savingUpto: "You are going to save upto",
    shortTerm: "Short-term",
    longTerm: "Long-term"
  },
  table: {
    title: "Holdings",
    selected: "selected",
    colAsset: "Asset",
    colHoldings: "Holdings",
    colMarketRate: "Current Market Rate",
    colTotalCurrentValue: "Total Current Value",
    colShortTerm: "Short-term",
    colLongTerm: "Long-Term",
    colAmountToSell: "Amount to Sell",
    viewAll: "View all",
    viewLess: "View less",
  }
};
