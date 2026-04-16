/* 
© 2026 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2026.
*/

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import * as S from "./styles";

type SortField = "stcg" | "ltcg" | null;
type SortDirection = "asc" | "desc" | null;

interface TaxHarvestingUIContextValue {
  notesExpanded: boolean;
  setNotesExpanded: Dispatch<SetStateAction<boolean>>;
  showAllRows: boolean;
  setShowAllRows: Dispatch<SetStateAction<boolean>>;
  sortField: SortField;
  sortDirection: SortDirection;
  toggleSort: (field: Exclude<SortField, null>) => void;
}

const TaxHarvestingUIContext = createContext<
  TaxHarvestingUIContextValue | undefined
>(undefined);

export const TaxHarvestingUIProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [notesExpanded, setNotesExpanded] = useState(false);
  const [showAllRows, setShowAllRows] = useState(false);
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const toggleSort = useCallback(
    (field: Exclude<SortField, null>) => {
      if (sortField !== field) {
        setSortField(field);
        setSortDirection("asc");
        return;
      }

      if (sortDirection === "asc") {
        setSortDirection("desc");
        return;
      }

      if (sortDirection === "desc") {
        setSortField(null);
        setSortDirection(null);
        return;
      }

      setSortDirection("asc");
    },
    [sortDirection, sortField],
  );

  const value = useMemo(
    () => ({
      notesExpanded,
      setNotesExpanded,
      showAllRows,
      setShowAllRows,
      sortField,
      sortDirection,
      toggleSort,
    }),
    [notesExpanded, showAllRows, sortField, sortDirection, toggleSort],
  );

  return (
    <TaxHarvestingUIContext.Provider value={value}>
      <S.ProviderShell>{children}</S.ProviderShell>
    </TaxHarvestingUIContext.Provider>
  );
};

export const useTaxHarvestingUI = () => {
  const context = useContext(TaxHarvestingUIContext);

  if (!context) {
    throw new Error(
      "useTaxHarvestingUI must be used within TaxHarvestingUIProvider",
    );
  }

  return context;
};
