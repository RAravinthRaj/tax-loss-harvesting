import { ComputedCapitalGains } from "../../../../types";
import { formatCurrency } from "../../../../utils";
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
        <S.TableHeading>Short-term</S.TableHeading>
        <S.TableHeading>Long-term</S.TableHeading>

        <S.Label>Profits</S.Label>
        <S.Value>{formatCurrency(data.stcg.profits)}</S.Value>
        <S.Value>{formatCurrency(data.ltcg.profits)}</S.Value>

        <S.Label>Losses</S.Label>
        <S.Value>{formatCurrency(-data.stcg.losses)}</S.Value>
        <S.Value>{formatCurrency(-data.ltcg.losses)}</S.Value>

        <S.Label>Net Capital Gains</S.Label>
        <S.Value>{formatCurrency(data.stcg.net)}</S.Value>
        <S.Value>{formatCurrency(data.ltcg.net)}</S.Value>
      </S.SummaryTable>

      <S.Footer>
        <S.FooterLabel>{totalLabel}</S.FooterLabel>
        <S.FooterValue>{formatCurrency(data.realised)}</S.FooterValue>
      </S.Footer>

      {showSavings && savings && savings > 0 ? (
        <S.Savings>🎉 You are going to save upto {formatCurrency(savings)}</S.Savings>
      ) : null}
    </S.Card>
  );
};

export const SummaryCards = ({ before, after }: ISummaryCards) => {
  const savings = before.realised - after.realised;

  return (
    <S.CardsGrid>
      <SummaryCard
        title="Pre Harvesting"
        data={before}
        variant="dark"
        totalLabel="Realised Capital Gains:"
      />
      <SummaryCard
        title="After Harvesting"
        data={after}
        variant="blue"
        totalLabel="Effective Capital Gains:"
        showSavings={savings > 0}
        savings={savings}
      />
    </S.CardsGrid>
  );
};
