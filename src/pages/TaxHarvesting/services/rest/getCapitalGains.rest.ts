import capitalGains from "../../../../data.json/capitalGains.json";
import { CapitalGainsResponse } from "../../../../types";

const MOCK_DELAY = 2000;

export const getCapitalGains = async (): Promise<CapitalGainsResponse> =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(capitalGains);
    }, MOCK_DELAY);
  });
