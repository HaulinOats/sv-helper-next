import { CalculationItem } from "./CalculationItem.type";

export interface AppState {
  [key: string]: string | boolean | number | CalculationItem[];
  selectedItemsArr: CalculationItem[];
  addItemPanelIsShowing: boolean;
  showInfoPanel: boolean;
  sortByField: string;
  farmingLevel: number;
  hasTiller: boolean;
  hasAgriculturist: boolean;
  hasRancher: boolean;
  hasArtisan: boolean;
}
