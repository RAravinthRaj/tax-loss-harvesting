/* 
© 2026 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2026.
*/

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
