import { ComputedCapitalGains } from "../../../../types";
import { formatCurrency } from "../../../../utils";
import { TEXTS } from "../../config";
import * as S from "./styles";

interface ISummaryCards {
  before: ComputedCapitalGains;
  after: ComputedCapitalGains;
}

const SummaryCard = ({
  title,
  data,
  variant,
  totalLabel,
  showSavings,
  savings,
}: {
  title: string;
  data: ComputedCapitalGains;
  variant: "dark" | "blue";
  totalLabel: string;
  showSavings?: boolean;
  savings?: number;
}) => {
  return (
    <S.Card $variant={variant}>
      <S.CardTitle>{title}</S.CardTitle>
      <S.SummaryTable>
        <div />
        <S.TableHeading>{TEXTS.summary.shortTerm}</S.TableHeading>
        <S.TableHeading>{TEXTS.summary.longTerm}</S.TableHeading>

        <S.Label>{TEXTS.summary.profits}</S.Label>
        <S.Value>{formatCurrency(data.stcg.profits)}</S.Value>
        <S.Value>{formatCurrency(data.ltcg.profits)}</S.Value>

        <S.Label>{TEXTS.summary.losses}</S.Label>
        <S.Value>{formatCurrency(-data.stcg.losses)}</S.Value>
        <S.Value>{formatCurrency(-data.ltcg.losses)}</S.Value>

        <S.Label>{TEXTS.summary.netCapitalGains}</S.Label>
        <S.Value>{formatCurrency(data.stcg.net)}</S.Value>
        <S.Value>{formatCurrency(data.ltcg.net)}</S.Value>
      </S.SummaryTable>

      <S.Footer>
        <S.FooterLabel>{totalLabel}</S.FooterLabel>
        <S.FooterValue>{formatCurrency(data.realised)}</S.FooterValue>
      </S.Footer>

      {showSavings && savings && savings > 0 ? (
        <S.Savings>
          🎉 {TEXTS.summary.savingUpto} {formatCurrency(savings)}
        </S.Savings>
      ) : null}
    </S.Card>
  );
};

export const SummaryCards = ({ before, after }: ISummaryCards) => {
  const savings = before.realised - after.realised;

  return (
    <S.CardsGrid>
      <SummaryCard
        title={TEXTS.summary.preHarvesting}
        data={before}
        variant="dark"
        totalLabel={TEXTS.summary.realisedCapitalGains}
      />
      <SummaryCard
        title={TEXTS.summary.afterHarvesting}
        data={after}
        variant="blue"
        totalLabel={TEXTS.summary.effectiveCapitalGains}
        showSavings={savings > 0}
        savings={savings}
      />
    </S.CardsGrid>
  );
};
