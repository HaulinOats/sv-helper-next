import { BaseCalculationItem } from "./BaseCalculationItem.type";

export interface CropCalculationItem extends BaseCalculationItem {
  fertilizerId: string | undefined;
  seasonStartIdx: number;
  foodId: string | undefined;
  plantingDay: number;
  isGreenhouse: boolean;
  seedCost: number;
  seedId: string;
  fertilizerCost: number;
  growTimeMultiplier: number;
  maturityDaysModified: number;
  maturityDaysModifiedRounded: number;
  regrowthDaysModifiedRounded: number;
  harvestDays: number;
  maxHarvests: number;
  maxHarvestsRounded: number;
  sellPricePerHarvest: number;
  maxHarvestDays: number;
  finalHarvestDay: number;
  perkSellPriceMultiplier: number;
  normalSellPrice: number;
  baseSellPricePerHarvest: number;
  farmingLevelAvgPriceMultiplier: number;
  sellPricePerHarvestRounded: number;
  foodFarmingBuff: number;
  initialGrowTimeMultiplier: number;
  regrowthGrowTimeMultiplier: number;
}
