import { useEffect, useMemo } from "react";
import { Loader } from "../../components";
import { useTheme } from "../../hooks";
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
import { TEXTS } from "./config";
import {
  fetchTaxHarvestingData,
  makeHoldingId,
  toggleHoldingSelection,
  toggleSelectAll,
  useAppDispatch,
  useAppSelector,
} from "./stores";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const TaxHarvestingContent = () => {
  const dispatch = useAppDispatch();
  const { mode, toggleTheme, theme } = useTheme();
  const { loading, error, holdings, capitalGains, selectedHoldingIds } =
    useAppSelector((state) => state.taxHarvesting);

  useEffect(() => {
    dispatch(fetchTaxHarvestingData());
  }, [dispatch]);

  const selectedHoldings = useMemo(
    () =>
      holdings.filter((holding, index) =>
        selectedHoldingIds.includes(makeHoldingId(holding, index)),
      ),
    [holdings, selectedHoldingIds],
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
        <S.PageSubHeader>
          <S.PageTitle>{TEXTS.header.title}</S.PageTitle>
          <Tooltip content={TEXTS.header.howItWorksTooltip}>
            <S.PageLink href="#how-it-works">
              {TEXTS.header.howItWorks}
            </S.PageLink>
          </Tooltip>
        </S.PageSubHeader>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            onClick={toggleTheme}
            style={{
              background: "transparent",
              border: `1px solid ${mode === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}`,
              color: mode === "dark" ? theme.colors.iconColor : theme.colors.accentPrimary,
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "22px",
              padding: 0,
            }}
            aria-label="Toggle Theme"
          >
            {mode === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
          </button>
        </div>
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
