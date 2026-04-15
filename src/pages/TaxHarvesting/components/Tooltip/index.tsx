import { ReactNode } from "react";
import * as S from "./styles";

interface ITooltip {
  content: ReactNode;
  children: ReactNode;
}

export const Tooltip = ({ content, children }: ITooltip) => {
  return (
    <S.TooltipWrapper tabIndex={0}>
      {children}
      <S.TooltipBubble>{content}</S.TooltipBubble>
    </S.TooltipWrapper>
  );
};
