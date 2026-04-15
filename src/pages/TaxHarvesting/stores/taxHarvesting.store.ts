import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CapitalGains, Holding } from "../../../types";
import TaxHarvestingService from "../services";

export const fetchTaxHarvestingData = createAsyncThunk(
  "taxHarvesting/fetchData",
  async () => {
    const [holdings, capitalGainsResponse] = await Promise.all([
      TaxHarvestingService.getHoldingsAPI(),
      TaxHarvestingService.getCapitalGainsAPI(),
    ]);

    return {
      holdings,
      capitalGains: capitalGainsResponse.capitalGains,
    };
  }
);

interface TaxHarvestingState {
  loading: boolean;
  error: string | null;
  holdings: Holding[];
  capitalGains: CapitalGains | null;
  selectedHoldingIds: string[];
}

const initialState: TaxHarvestingState = {
  loading: false,
  error: null,
  holdings: [],
  capitalGains: null,
  selectedHoldingIds: [],
};

export const makeHoldingId = (holding: Holding, index: number) =>
  `${holding.coin}-${holding.coinName}-${index}`;

const taxHarvestingSlice = createSlice({
  name: "taxHarvesting",
  initialState,
  reducers: {
    toggleHoldingSelection: (state, action: PayloadAction<string>) => {
      const holdingId = action.payload;
      const exists = state.selectedHoldingIds.includes(holdingId);

      state.selectedHoldingIds = exists
        ? state.selectedHoldingIds.filter((id) => id !== holdingId)
        : [...state.selectedHoldingIds, holdingId];
    },
    toggleSelectAll: (state) => {
      const allIds = state.holdings.map(makeHoldingId);

      state.selectedHoldingIds =
        state.selectedHoldingIds.length === allIds.length ? [] : allIds;
    },
    resetSelection: (state) => {
      state.selectedHoldingIds = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTaxHarvestingData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTaxHarvestingData.fulfilled, (state, action) => {
        state.loading = false;
        state.holdings = action.payload.holdings;
        state.capitalGains = action.payload.capitalGains;
      })
      .addCase(fetchTaxHarvestingData.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Unable to fetch tax harvesting data.";
      });
  },
});

export const { toggleHoldingSelection, toggleSelectAll, resetSelection } =
  taxHarvestingSlice.actions;

export const taxHarvestingReducer = taxHarvestingSlice.reducer;
