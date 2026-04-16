/* 
© 2026 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2026.
*/

import styled from "styled-components";

export const Section = styled.section`
  background: ${(props) => props.theme.colors.bgSection};
  border-radius: 12px;
  padding: 14px 12px 12px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  gap: 16px;
`;

export const Title = styled.h2`
  margin: 0;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 18px;
  font-weight: 700;
`;

export const CountBadge = styled.span`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 12px;
`;

export const TableShell = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 940px;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;

  @media (max-width: 1024px) {
    min-width: 900px;
  }

  @media (max-width: 768px) {
    min-width: 820px;
  }
`;

export const Column = styled.col`
  width: auto;
`;

export const HeadRow = styled.tr`
  background: ${(props) => props.theme.colors.bgHeaderRow};
`;

export const HeaderCell = styled.th`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  padding: 14px 12px;

  &:first-child {
    width: 40px;
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    text-align: right;
  }

  white-space: normal;
  word-wrap: break-word;
`;

export const SortButton = styled.button<{ $active: boolean }>`
  background: transparent;
  border: none;
  color: ${(props) =>
    props.$active
      ? props.theme.colors.textPrimary
      : props.theme.colors.textSecondary};
  padding: 0;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  white-space: normal;
  text-align: left;
`;

export const SortArrow = styled.span<{ $direction: "asc" | "desc" }>`
  color: ${(props) => props.theme.colors.accentSort};
  font-size: 12px;
  line-height: 1;
  transform: rotate(
    ${(props) => (props.$direction === "asc" ? "0deg" : "180deg")}
  );
  display: inline-flex;
`;

export const Row = styled.tr<{ $selected: boolean }>`
  background: ${(props) =>
    props.$selected ? props.theme.colors.bgSelectedRow : "transparent"};
  box-shadow: inset 0 -1px 0 ${(props) => props.theme.colors.divider};
  position: relative;
`;

export const Cell = styled.td<{ $alignRight?: boolean }>`
  padding: 14px 12px;
  color: ${(props) => props.theme.colors.textPrimary};
  vertical-align: top;
  text-align: ${(props) => (props.$alignRight ? "right" : "left")};
  overflow: visible;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: ${(props) => props.theme.colors.accentPrimary};
  cursor: pointer;
`;

export const AssetCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`;

export const Logo = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  background: #ffffff;
`;

export const PrimaryText = styled.div`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SecondaryText = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 11px;
  margin-top: 3px;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const GainText = styled.div<{ $positive: boolean }>`
  color: ${(props) =>
    props.$positive
      ? props.theme.colors.accentGain
      : props.theme.colors.accentLoss};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
`;

export const ValueStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: fit-content;
  max-width: fit-content;
  min-width: 0;
`;

export const RightValueStack = styled(ValueStack)`
  align-items: flex-end;
`;

export const AmountText = styled.span<{ $active: boolean }>`
  color: ${(props) =>
    props.$active
      ? props.theme.colors.textPrimary
      : props.theme.colors.textSecondary};
  font-size: 14px;
  cursor: ${(props) => (props.$active ? "help" : "default")};
  white-space: nowrap;
`;

export const Footer = styled.div`
  margin-top: 10px;
`;

export const ViewAllButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.accentPrimary};
  font-size: 14px;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
`;
