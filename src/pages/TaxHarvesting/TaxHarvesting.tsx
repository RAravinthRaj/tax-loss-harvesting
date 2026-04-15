import { useEffect, useMemo } from "react";
import { Loader } from "../../components";
import { computeCapitalGains } from "../../utils";
import {
  ContainerComp,
  Disclaimer,
  HoldingsTable,
  SummaryCards,
  TaxHarvestingUIProvider,
  Tooltip,
} from "./components";
import * as S from "./components/ContainerComp/styles";
import {
  fetchTaxHarvestingData,
  makeHoldingId,
  toggleHoldingSelection,
  toggleSelectAll,
  useAppDispatch,
  useAppSelector,
} from "./stores";

const TaxHarvestingContent = () => {
  const dispatch = useAppDispatch();
  const { loading, error, holdings, capitalGains, selectedHoldingIds } =
    useAppSelector((state) => state.taxHarvesting);

  useEffect(() => {
    dispatch(fetchTaxHarvestingData());
  }, [dispatch]);

  const selectedHoldings = useMemo(
    () =>
      holdings.filter((holding, index) =>
        selectedHoldingIds.includes(makeHoldingId(holding, index))
      ),
    [holdings, selectedHoldingIds]
  );

  const beforeHarvesting = useMemo(() => {
    if (!capitalGains) {
      return null;
    }

    return computeCapitalGains(capitalGains, []);
  }, [capitalGains]);

  const afterHarvesting = useMemo(() => {
    if (!capitalGains) {
      return null;
    }

    return computeCapitalGains(capitalGains, selectedHoldings);
  }, [capitalGains, selectedHoldings]);

  if (loading && !capitalGains) {
    return <Loader loadingText="Loading holdings and capital gains..." />;
  }

  if (error) {
    return (
      <S.StateContainer>
        <S.ErrorCard>
          <div>{error}</div>
          <S.RetryButton onClick={() => dispatch(fetchTaxHarvestingData())}>
            Retry
          </S.RetryButton>
        </S.ErrorCard>
      </S.StateContainer>
    );
  }

  if (!beforeHarvesting || !afterHarvesting) {
    return null;
  }

  return (
    <S.Stack>
      <S.PageHeader>
        <S.PageTitle>Tax Harvesting</S.PageTitle>
        <Tooltip content="Select holdings with gains or losses to preview post-harvesting capital gains.">
          <S.PageLink href="#how-it-works">How it works?</S.PageLink>
        </Tooltip>
      </S.PageHeader>

      <Disclaimer />
      <SummaryCards before={beforeHarvesting} after={afterHarvesting} />
      <HoldingsTable
        holdings={holdings}
        selectedHoldingIds={selectedHoldingIds}
        makeHoldingId={makeHoldingId}
        onToggleHolding={(holdingId) =>
          dispatch(toggleHoldingSelection(holdingId))
        }
        onToggleAll={() => dispatch(toggleSelectAll())}
      />
    </S.Stack>
  );
};

const TaxHarvesting = () => {
  return (
    <TaxHarvestingUIProvider>
      <ContainerComp>
        <TaxHarvestingContent />
      </ContainerComp>
    </TaxHarvestingUIProvider>
  );
};

export default TaxHarvesting;
