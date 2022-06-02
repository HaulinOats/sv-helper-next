export interface AddItemState {
  fertilizerId: string | undefined;
  fertilizerCost: number;
  foodId: string | undefined;
  foodFarmingBuff: number;
  seedCost: number;
  itemId: string | undefined;
  seasonStartIdx: number;
  plantingDay: number;
  isGreenhouse: boolean;
  selectedCategory: string;
  cropLimitToSeason: string;
  selectedGood: string;
  wineJuiceLimitToSeason: string;
  preservesLimitToSeason: string;
  wineProduceId: string | undefined;
  isCask: boolean;
  caskQuality: string;
  preservesProduceId: string | undefined;
  honeyFlowerId: string | undefined;
  milkType: string;
  milkIsLarge: boolean;
  eggType: string;
  eggQuality: string;
  oilType: string;
  oilIngredientId: string;
  isCustom: boolean;
  customSellPrice: number;
}
