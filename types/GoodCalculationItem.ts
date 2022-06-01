import { BaseCalculationItem } from "./BaseCalculationItem.type";

export interface GoodCalculationItem extends BaseCalculationItem {
  ingredientId: string;
  processingTimeInDays: number;
  basePrice: number;
  priceMultiplier: number;
}
