import { BaseCalculationItem } from "./BaseCalculationItem.type";
import { CheeseCalculationItem } from "./CheeseCalculationItem.type";
import { CropCalculationItem } from "./CropCalculationItem.type";
import { GoodCalculationItem } from "./GoodCalculationItem";
import { MayoCalculationItem } from "./MayoCalculationItem";
import { OilCalculationItem } from "./OilCalculationItem.type";
import { PreserveCalculationItem } from "./PreserveCalculationItem";
import { WineJuiceCalculationItem } from "./WineJuiceCalculationItem.type";

export type CalculationItem =
  | BaseCalculationItem
  | CropCalculationItem
  | WineJuiceCalculationItem
  | PreserveCalculationItem
  | GoodCalculationItem
  | CheeseCalculationItem
  | MayoCalculationItem
  | OilCalculationItem;
