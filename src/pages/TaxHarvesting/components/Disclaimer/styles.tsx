import styled from "styled-components";

export const DisclaimerContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.bgSelectedRow};
  border: 1px solid ${(props) => props.theme.colors.borderDisclaimer};
  border-radius: 10px;
  overflow: hidden;
`;

export const DisclaimerHeader = styled.button`
  width: 100%;
  background: transparent;
  color: ${(props) => props.theme.colors.textPrimary};
  border: none;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
`;

export const DisclaimerTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InfoIcon = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.accentPrimary};
  color: ${(props) => props.theme.colors.accentPrimary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
`;

export const Chevron = styled.span<{ $expanded: boolean }>`
  transition: transform 0.2s ease;
  transform: rotate(${(props) => (props.$expanded ? "180deg" : "0deg")});
`;

export const DisclaimerBody = styled.div<{ $expanded: boolean }>`
  max-height: ${(props) => (props.$expanded ? "280px" : "0")};
  opacity: ${(props) => (props.$expanded ? 1 : 0)};
  transition:
    max-height 0.28s ease,
    opacity 0.2s ease;
  overflow-y: auto;
`;

export const DisclaimerList = styled.ul`
  margin: 0;
  padding: 0 22px 16px 34px;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.75;
`;
