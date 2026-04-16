/* 
© 2026 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2026.
*/

import { CapitalGains, ComputedCapitalGains, Holding } from "../../types";

export const computeCapitalGains = (
  base: CapitalGains,
  selectedHoldings: Holding[],
): ComputedCapitalGains => {
  const next: CapitalGains = {
    stcg: { ...base.stcg },
    ltcg: { ...base.ltcg },
  };

  selectedHoldings.forEach((holding) => {
    if (holding.stcg.gain >= 0) {
      next.stcg.profits += holding.stcg.gain;
    } else {
      next.stcg.losses += Math.abs(holding.stcg.gain);
    }

    if (holding.ltcg.gain >= 0) {
      next.ltcg.profits += holding.ltcg.gain;
    } else {
      next.ltcg.losses += Math.abs(holding.ltcg.gain);
    }
  });

  const stNet = next.stcg.profits - next.stcg.losses;
  const ltNet = next.ltcg.profits - next.ltcg.losses;

  return {
    stcg: {
      ...next.stcg,
      net: stNet,
    },
    ltcg: {
      ...next.ltcg,
      net: ltNet,
    },
    realised: stNet + ltNet,
  };
};
