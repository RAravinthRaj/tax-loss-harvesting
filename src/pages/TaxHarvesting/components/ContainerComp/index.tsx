import { ReactNode } from "react";
import * as S from "./styles";

interface IContainerComp {
  children: ReactNode;
}

export const ContainerComp = ({ children }: IContainerComp) => {
  return (
    <S.PageShell>
      <S.TopBar>
        <S.Brand>
          <span>Koin</span>
          <span>X</span>
        </S.Brand>
      </S.TopBar>
      <S.Content fluid="lg">{children}</S.Content>
    </S.PageShell>
  );
};
