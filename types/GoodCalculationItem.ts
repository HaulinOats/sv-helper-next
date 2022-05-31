import { CalculationItem } from "./CalculationItem.type";

export interface GoodCalculationItem extends CalculationItem {
  ingredientId: string;
  processingTimeInDays: number;
  basePrice: number;
  priceMultiplier: number;
}
