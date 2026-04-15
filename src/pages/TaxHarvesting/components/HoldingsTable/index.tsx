import { useMemo } from "react";
import { Holding } from "../../../../types";
import {
  formatCompactAmount,
  formatCurrency,
  formatFullAmount,
  formatSignedCurrency,
} from "../../../../utils";
import { DEFAULT_VISIBLE_ROWS } from "../../config";
import { useTaxHarvestingUI } from "../TaxHarvestingUI";
import { Tooltip } from "../Tooltip";
import * as S from "./styles";

interface IHoldingsTable {
  holdings: Holding[];
  selectedHoldingIds: string[];
  makeHoldingId: (holding: Holding, index: number) => string;
  onToggleHolding: (holdingId: string) => void;
  onToggleAll: () => void;
}

export const HoldingsTable = ({
  holdings,
  selectedHoldingIds,
  makeHoldingId,
  onToggleHolding,
  onToggleAll,
}: IHoldingsTable) => {
  const {
    showAllRows,
    setShowAllRows,
    sortField,
    sortDirection,
    toggleSort,
  } = useTaxHarvestingUI();
  const sortedHoldings = useMemo(() => {
    const items = holdings.map((holding, index) => ({
      holding,
      index,
    }));

    if (!sortField || !sortDirection) {
      return items;
    }

    return [...items].sort((a, b) => {
      const diff = a.holding[sortField].gain - b.holding[sortField].gain;

      if (diff === 0) {
        return a.index - b.index;
      }

      return sortDirection === "asc" ? diff : -diff;
    });
  }, [holdings, sortDirection, sortField]);
  const visibleHoldings = showAllRows
    ? sortedHoldings
    : sortedHoldings.slice(0, DEFAULT_VISIBLE_ROWS);
  const allSelected =
    holdings.length > 0 && selectedHoldingIds.length === holdings.length;

  return (
    <S.Section>
      <S.SectionHeader>
        <S.Title>Holdings</S.Title>
        <S.CountBadge>{selectedHoldingIds.length} selected</S.CountBadge>
      </S.SectionHeader>

      <S.TableShell>
        <S.Table>
          <colgroup>
            <S.Column style={{ width: "40px" }} />
            <S.Column style={{ width: "24%" }} />
            <S.Column style={{ width: "18%" }} />
            <S.Column style={{ width: "16%" }} />
            <S.Column style={{ width: "16%" }} />
            <S.Column style={{ width: "16%" }} />
            <S.Column style={{ width: "10%" }} />
          </colgroup>
          <thead>
            <S.HeadRow>
              <S.HeaderCell>
                <S.Checkbox
                  type="checkbox"
                  checked={allSelected}
                  aria-label="Select all holdings"
                  onChange={onToggleAll}
                />
              </S.HeaderCell>
              <S.HeaderCell>Asset</S.HeaderCell>
              <S.HeaderCell>Holdings / Avg Buy Price</S.HeaderCell>
              <S.HeaderCell>Current Price</S.HeaderCell>
              <S.HeaderCell>
                <S.SortButton
                  type="button"
                  $active={sortField === "stcg"}
                  onClick={() => toggleSort("stcg")}
                >
                  <span>Short-term Gain</span>
                  {sortField === "stcg" && sortDirection ? (
                    <S.SortArrow $direction={sortDirection}>▲</S.SortArrow>
                  ) : null}
                </S.SortButton>
              </S.HeaderCell>
              <S.HeaderCell>
                <S.SortButton
                  type="button"
                  $active={sortField === "ltcg"}
                  onClick={() => toggleSort("ltcg")}
                >
                  <span>Long-term Gain</span>
                  {sortField === "ltcg" && sortDirection ? (
                    <S.SortArrow $direction={sortDirection}>▲</S.SortArrow>
                  ) : null}
                </S.SortButton>
              </S.HeaderCell>
              <S.HeaderCell>Amount to Sell</S.HeaderCell>
            </S.HeadRow>
          </thead>
          <tbody>
            {visibleHoldings.map(({ holding, index }) => {
              const holdingId = makeHoldingId(holding, index);
              const selected = selectedHoldingIds.includes(holdingId);
              const stPositive = holding.stcg.gain >= 0;
              const ltPositive = holding.ltcg.gain >= 0;

              return (
                <S.Row key={holdingId} $selected={selected}>
                  <S.Cell>
                    <S.Checkbox
                      type="checkbox"
                      checked={selected}
                      aria-label={`Select ${holding.coinName}`}
                      onChange={() => onToggleHolding(holdingId)}
                    />
                  </S.Cell>
                  <S.Cell>
                    <S.AssetCell>
                      <S.Logo src={holding.logo} alt={holding.coinName} />
                      <div>
                        <S.PrimaryText>{holding.coin}</S.PrimaryText>
                        <S.SecondaryText>{holding.coinName}</S.SecondaryText>
                      </div>
                    </S.AssetCell>
                  </S.Cell>
                  <S.Cell>
                    <Tooltip
                      content={`Full holding amount: ${formatFullAmount(
                        holding.totalHolding
                      )}`}
                    >
                      <S.ValueStack>
                        <S.PrimaryText>
                          {formatCompactAmount(holding.totalHolding)}
                        </S.PrimaryText>
                        <S.SecondaryText>
                          Avg Buy Price {formatCurrency(holding.averageBuyPrice)}
                        </S.SecondaryText>
                      </S.ValueStack>
                    </Tooltip>
                  </S.Cell>
                  <S.Cell>
                    <Tooltip
                      content={`Total value: ${formatCurrency(
                        holding.currentPrice * holding.totalHolding
                      )}`}
                    >
                      <S.ValueStack>
                        <S.PrimaryText>{formatCurrency(holding.currentPrice)}</S.PrimaryText>
                        <S.SecondaryText>
                          Total Value{" "}
                          {formatCurrency(holding.currentPrice * holding.totalHolding)}
                        </S.SecondaryText>
                      </S.ValueStack>
                    </Tooltip>
                  </S.Cell>
                  <S.Cell>
                    <Tooltip
                      content={`Short-term balance: ${formatFullAmount(
                        holding.stcg.balance
                      )}`}
                    >
                      <S.ValueStack>
                        <S.GainText $positive={stPositive}>
                          {formatSignedCurrency(holding.stcg.gain)}
                        </S.GainText>
                        <S.SecondaryText>
                          {formatCompactAmount(holding.stcg.balance)}
                        </S.SecondaryText>
                      </S.ValueStack>
                    </Tooltip>
                  </S.Cell>
                  <S.Cell>
                    <Tooltip
                      content={`Long-term balance: ${formatFullAmount(
                        holding.ltcg.balance
                      )}`}
                    >
                      <S.ValueStack>
                        <S.GainText $positive={ltPositive}>
                          {formatSignedCurrency(holding.ltcg.gain)}
                        </S.GainText>
                        <S.SecondaryText>
                          {formatCompactAmount(holding.ltcg.balance)}
                        </S.SecondaryText>
                      </S.ValueStack>
                    </Tooltip>
                  </S.Cell>
                  <S.Cell $alignRight>
                    {selected ? (
                      <Tooltip
                        content={`Amount to sell: ${formatFullAmount(
                          holding.totalHolding
                        )}`}
                      >
                        <S.RightValueStack>
                          <S.AmountText $active>
                            {formatCompactAmount(holding.totalHolding)}
                          </S.AmountText>
                        </S.RightValueStack>
                      </Tooltip>
                    ) : (
                      <S.AmountText $active={false}>-</S.AmountText>
                    )}
                  </S.Cell>
                </S.Row>
              );
            })}
          </tbody>
        </S.Table>
      </S.TableShell>

      {holdings.length > DEFAULT_VISIBLE_ROWS ? (
        <S.Footer>
          <S.ViewAllButton
            type="button"
            onClick={() => setShowAllRows((prev) => !prev)}
          >
            {showAllRows ? "View less" : "View all"}
          </S.ViewAllButton>
        </S.Footer>
      ) : null}
    </S.Section>
  );
};
