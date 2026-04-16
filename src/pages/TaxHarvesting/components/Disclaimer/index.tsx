/* 
© 2026 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2026.
*/

import { DISCLAIMER_POINTS } from "../../config";
import { useTaxHarvestingUI } from "../TaxHarvestingUI";
import { Tooltip } from "../Tooltip";
import * as S from "./styles";

export const Disclaimer = () => {
  const { notesExpanded, setNotesExpanded } = useTaxHarvestingUI();

  return (
    <S.DisclaimerContainer>
      <S.DisclaimerHeader
        type="button"
        onClick={() => setNotesExpanded((prev) => !prev)}
      >
        <S.DisclaimerTitleGroup>
          <Tooltip content="Important tax harvesting notes and assumptions.">
            <S.InfoIcon>i</S.InfoIcon>
          </Tooltip>
          <span>Important Notes &amp; Disclaimers</span>
        </S.DisclaimerTitleGroup>
        <S.Chevron $expanded={notesExpanded}>⌄</S.Chevron>
      </S.DisclaimerHeader>
      <S.DisclaimerBody $expanded={notesExpanded}>
        <S.DisclaimerList>
          {DISCLAIMER_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </S.DisclaimerList>
      </S.DisclaimerBody>
    </S.DisclaimerContainer>
  );
};
