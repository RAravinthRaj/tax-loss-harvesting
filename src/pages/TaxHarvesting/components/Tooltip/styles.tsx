import styled from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: fit-content;
  max-width: fit-content;
  min-width: 0;
  cursor: default;
  flex: none;

  &:hover > div,
  &:focus-within > div {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -3px);
  }
`;

export const TooltipBubble = styled.div`
  position: absolute;
  left: 50%;
  bottom: calc(100% + 5px);
  transform: translate(-50%, 0);
  min-width: 180px;
  max-width: 260px;
  background: #ffffff;
  color: #12131a;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 11px;
  line-height: 1.45;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.24);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 999;
  pointer-events: none;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 10px;
    height: 10px;
    background: #ffffff;
    transform: translateX(-50%) rotate(45deg);
  }
`;
