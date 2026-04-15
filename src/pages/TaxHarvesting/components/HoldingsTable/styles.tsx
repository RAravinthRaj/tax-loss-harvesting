import styled from "styled-components";

export const Section = styled.section`
  background: #1a1d2a;
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
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

export const CountBadge = styled.span`
  color: #9aa6d1;
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
  background: #0f121b;
`;

export const HeaderCell = styled.th`
  color: #ffffff;
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

  white-space: nowrap;
`;

export const SortButton = styled.button<{ $active: boolean }>`
  background: transparent;
  border: none;
  color: ${(props) => (props.$active ? "#ffffff" : "#d7defa")};
  padding: 0;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
`;

export const SortArrow = styled.span<{ $direction: "asc" | "desc" }>`
  color: #ff5c74;
  font-size: 12px;
  line-height: 1;
  transform: rotate(
    ${(props) => (props.$direction === "asc" ? "0deg" : "180deg")}
  );
  display: inline-flex;
`;

export const Row = styled.tr<{ $selected: boolean }>`
  background: ${(props) => (props.$selected ? "#212d56" : "transparent")};
  box-shadow: inset 0 -1px 0 rgba(98, 109, 148, 0.35);
  position: relative;
`;

export const Cell = styled.td<{ $alignRight?: boolean }>`
  padding: 14px 12px;
  color: #ffffff;
  vertical-align: top;
  text-align: ${(props) => (props.$alignRight ? "right" : "left")};
  overflow: visible;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #4f89ff;
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
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SecondaryText = styled.div`
  color: #9aa6d1;
  font-size: 11px;
  margin-top: 3px;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const GainText = styled.div<{ $positive: boolean }>`
  color: ${(props) => (props.$positive ? "#30e1a1" : "#ff6a87")};
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
  color: ${(props) => (props.$active ? "#ffffff" : "#9aa6d1")};
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
  color: #4f89ff;
  font-size: 14px;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
`;
