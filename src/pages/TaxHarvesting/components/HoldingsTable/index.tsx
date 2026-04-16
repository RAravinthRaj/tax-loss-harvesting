/* 
© 2026 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2026.
*/

import { useMemo } from "react";
import { Holding } from "../../../../types";
import {
  formatCompactAmount,
  formatCurrency,
  formatFullAmount,
  formatSignedCurrency,
} from "../../../../utils";
import { DEFAULT_VISIBLE_ROWS, TEXTS } from "../../config";
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

const HoldingsTableHeader = ({
  allSelected,
  onToggleAll,
  sortField,
  sortDirection,
  toggleSort,
}: {
  allSelected: boolean;
  onToggleAll: () => void;
  sortField: string | null;
  sortDirection: "asc" | "desc" | null;
  toggleSort: (field: "stcg" | "ltcg") => void;
}) => (
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
      <S.HeaderCell>{TEXTS.table.colAsset}</S.HeaderCell>
      <S.HeaderCell>
        {TEXTS.table.colHoldings}
        <br />
        <span
          style={{ fontSize: "11px", fontWeight: "normal", color: "#9aa6d1" }}
        >
          {TEXTS.table.colMarketRate}
        </span>
      </S.HeaderCell>
      <S.HeaderCell>{TEXTS.table.colTotalCurrentValue}</S.HeaderCell>
      <S.HeaderCell>
        <S.SortButton
          type="button"
          $active={sortField === "stcg"}
          onClick={() => toggleSort("stcg")}
        >
          <span>{TEXTS.table.colShortTerm}</span>
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
          <span>{TEXTS.table.colLongTerm}</span>
          {sortField === "ltcg" && sortDirection ? (
            <S.SortArrow $direction={sortDirection}>▲</S.SortArrow>
          ) : null}
        </S.SortButton>
      </S.HeaderCell>
      <S.HeaderCell>{TEXTS.table.colAmountToSell}</S.HeaderCell>
    </S.HeadRow>
  </thead>
);

const HoldingsTableRow = ({
  holding,
  holdingId,
  selected,
  onToggleHolding,
}: {
  holding: Holding;
  holdingId: string;
  selected: boolean;
  onToggleHolding: (id: string) => void;
}) => {
  const stPositive = holding.stcg.gain >= 0;
  const ltPositive = holding.ltcg.gain >= 0;

  return (
    <S.Row $selected={selected}>
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
          <S.Logo
            src={holding.logo}
            alt={holding.coinName}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = "/coin-placeholder.svg";
            }}
          />
          <div>
            <S.PrimaryText>{holding.coinName}</S.PrimaryText>
            <S.SecondaryText>{holding.coin}</S.SecondaryText>
          </div>
        </S.AssetCell>
      </S.Cell>
      <S.Cell>
        <Tooltip
          content={`Full holding amount: ${formatFullAmount(holding.totalHolding)}`}
        >
          <S.ValueStack>
            <S.PrimaryText>
              {formatCompactAmount(holding.totalHolding)} {holding.coin}
            </S.PrimaryText>
            <S.SecondaryText>
              {formatCurrency(holding.averageBuyPrice)}/{holding.coin}
            </S.SecondaryText>
          </S.ValueStack>
        </Tooltip>
      </S.Cell>
      <S.Cell>
        <Tooltip
          content={`Total value: ${formatCurrency(holding.currentPrice * holding.totalHolding)}`}
        >
          <S.ValueStack>
            <S.PrimaryText>
              {formatCurrency(holding.currentPrice * holding.totalHolding)}
            </S.PrimaryText>
            <S.SecondaryText>
              {formatCurrency(holding.currentPrice)}
            </S.SecondaryText>
          </S.ValueStack>
        </Tooltip>
      </S.Cell>
      <S.Cell>
        <Tooltip
          content={`Short-term balance: ${formatFullAmount(holding.stcg.balance)}`}
        >
          <S.ValueStack>
            <S.GainText $positive={stPositive}>
              {formatSignedCurrency(holding.stcg.gain)}
            </S.GainText>
            <S.SecondaryText>
              {formatCompactAmount(holding.stcg.balance)} {holding.coin}
            </S.SecondaryText>
          </S.ValueStack>
        </Tooltip>
      </S.Cell>
      <S.Cell>
        <Tooltip
          content={`Long-term balance: ${formatFullAmount(holding.ltcg.balance)}`}
        >
          <S.ValueStack>
            <S.GainText $positive={ltPositive}>
              {formatSignedCurrency(holding.ltcg.gain)}
            </S.GainText>
            <S.SecondaryText>
              {formatCompactAmount(holding.ltcg.balance)} {holding.coin}
            </S.SecondaryText>
          </S.ValueStack>
        </Tooltip>
      </S.Cell>
      <S.Cell $alignRight>
        {selected ? (
          <Tooltip
            content={`Amount to sell: ${formatFullAmount(holding.totalHolding)}`}
          >
            <S.RightValueStack>
              <S.AmountText $active>
                {formatCompactAmount(holding.totalHolding)} {holding.coin}
              </S.AmountText>
            </S.RightValueStack>
          </Tooltip>
        ) : (
          <S.AmountText $active={false}>-</S.AmountText>
        )}
      </S.Cell>
    </S.Row>
  );
};

export const HoldingsTable = ({
  holdings,
  selectedHoldingIds,
  makeHoldingId,
  onToggleHolding,
  onToggleAll,
}: IHoldingsTable) => {
  const { showAllRows, setShowAllRows, sortField, sortDirection, toggleSort } =
    useTaxHarvestingUI();

  const sortedHoldings = useMemo(() => {
    const items = holdings.map((holding, index) => ({ holding, index }));
    if (!sortField || !sortDirection) return items;

    return [...items].sort((a, b) => {
      const diff = a.holding[sortField].gain - b.holding[sortField].gain;
      if (diff === 0) return a.index - b.index;
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
        <S.Title>{TEXTS.table.title}</S.Title>
        <S.CountBadge>
          {selectedHoldingIds.length} {TEXTS.table.selected}
        </S.CountBadge>
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
          <HoldingsTableHeader
            allSelected={allSelected}
            onToggleAll={onToggleAll}
            sortField={sortField}
            sortDirection={sortDirection}
            toggleSort={toggleSort}
          />
          <tbody>
            {visibleHoldings.map(({ holding, index }) => (
              <HoldingsTableRow
                key={makeHoldingId(holding, index)}
                holding={holding}
                holdingId={makeHoldingId(holding, index)}
                selected={selectedHoldingIds.includes(
                  makeHoldingId(holding, index),
                )}
                onToggleHolding={onToggleHolding}
              />
            ))}
          </tbody>
        </S.Table>
      </S.TableShell>

      {holdings.length > DEFAULT_VISIBLE_ROWS ? (
        <S.Footer>
          <S.ViewAllButton
            type="button"
            onClick={() => setShowAllRows((prev) => !prev)}
          >
            {showAllRows ? TEXTS.table.viewLess : TEXTS.table.viewAll}
          </S.ViewAllButton>
        </S.Footer>
      ) : null}
    </S.Section>
  );
};
