import styled from "styled-components";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.section<{ $variant: "dark" | "blue" }>`
  min-height: 215px;
  border-radius: 12px;
  padding: 18px 18px 16px;
  background: ${(props) =>
    props.$variant === "blue"
      ? props.theme.colors.summaryCardBg
      : props.theme.colors.bgSection};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);

  --card-text: ${(props) =>
    props.$variant === "blue" ? "#ffffff" : props.theme.colors.textPrimary};
  --card-text-muted: ${(props) =>
    props.$variant === "blue"
      ? "rgba(255, 255, 255, 0.78)"
      : props.theme.colors.textSecondary};
`;

export const CardTitle = styled.h2`
  margin: 0 0 18px;
  color: var(--card-text);
  font-size: 18px;
  font-weight: 700;
`;

export const SummaryTable = styled.div`
  display: grid;
  grid-template-columns: minmax(120px, 1fr) 120px 120px;
  row-gap: 10px;
  column-gap: 14px;
  color: var(--card-text);

  @media (max-width: 480px) {
    grid-template-columns: minmax(100px, 1fr) 88px 88px;
    column-gap: 10px;
    font-size: 13px;
  }
`;

export const TableHeading = styled.div`
  color: var(--card-text-muted);
  font-size: 13px;
  text-align: right;
`;

export const Label = styled.div`
  color: var(--card-text);
  font-size: 15px;
`;

export const Value = styled.div`
  color: var(--card-text);
  text-align: right;
  font-size: 15px;
`;

export const Footer = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterLabel = styled.div`
  color: var(--card-text);
  font-size: 16px;
  font-weight: 700;
`;

export const FooterValue = styled.div`
  color: var(--card-text);
  font-size: 40px;
  font-weight: 800;
  line-height: 1;

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Savings = styled.div`
  margin-top: 18px;
  color: var(--card-text);
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
