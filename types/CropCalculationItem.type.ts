import { CalculationItem } from "./CalculationItem.type";

export interface CropCalculationItem extends CalculationItem {
  fertilizerId: string | undefined;
  seasonStartIdx: number;
  foodId: string | undefined;
  plantingDay: number;
  isGreenhouse: boolean;
  seedCost: number;
  seedId: string;
  fertilizerCost: number;
  growTimeMultiplier: number;
  maturityDaysModifiedRounded: number;
  regrowthDaysModifiedRounded: number;
  harvestDays: number;
  maxHarvestsRounded: number;
  sellPricePerHarvest: number;
  maxHarvestDays: number;
  finalHarvestDay: number;
  perkSellPriceMultiplier: number;
  normalSellPrice: number;
  baseSellPricePerHarvest: number;
  farmingLevelAvgPriceMultiplier: number;
  sellPricePerHarvestRounded: number;
}
