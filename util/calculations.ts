import soilModifiers from "../public/soil-modifiers.json";
import { AppState } from "../types/AppState.type";
import { CalculationItem } from "../types/CalculationItem.type";
import { CheeseCalculationItem } from "../types/CheeseCalculationItem.type";
import { CropCalculationItem } from "../types/CropCalculationItem.type";
import { GoodCalculationItem } from "../types/GoodCalculationItem";
import { ItemRef } from "../types/ItemRef.type";
import { MayoCalculationItem } from "../types/MayoCalculationItem";
import { OilCalculationItem } from "../types/OilCalculationItem.type";
import { PreserveCalculationItem } from "../types/PreserveCalculationItem";
import { WineJuiceCalculationItem } from "../types/WineJuiceCalculationItem.type";
import createItemObjects from "./item";

const { itemRef }: { itemRef: ItemRef } = createItemObjects();

export const getCalculations = (item: CalculationItem, appState: AppState) => {
  switch (item.displayCategory) {
    case "crop":
      return getCropCalculations(item as CropCalculationItem, appState);
    case "wineJuice":
      return getWineJuiceCalculations(
        item as WineJuiceCalculationItem,
        appState
      );
    case "preserves":
      return getPreserveCalculations(item as PreserveCalculationItem, appState);
    case "good":
      return getGoodCalculations(item as GoodCalculationItem, appState);
    case "cheese":
      return getCheeseCalculations(item as CheeseCalculationItem, appState);
    case "mayo":
      return getMayoCalculations(item as MayoCalculationItem, appState);
    case "oil":
      return getOilCalculations(item as OilCalculationItem, appState);
    default:
  }
};

export const getCropCalculations = (
  item: CropCalculationItem,
  appState: AppState
) => {
  let name = itemRef[item.itemId].name;
  let maxHarvestDays = 28;
  let harvestDays = 0;
  let maxHarvests = 0;
  let maxHarvestsRounded = 0;
  let finalHarvestDay = 1;
  let mFarmingLevel = appState.farmingLevel;
  let sellPricePerHarvest = 1;
  let perkSellPriceMultiplier = 1;
  let initialGrowTimeMultiplier = 1;
  let regrowthGrowTimeMultiplier = 1;
  let farmingLevelAvgPriceMultiplier = 1;
  let avgGoldPerDay = 0;
  let baseSellPricePerHarvest =
    itemRef[item.itemId].quality.normal.sellsFor *
    itemRef[item.itemId].harvestYield;
  let normalSellPrice = itemRef[item.itemId].quality.normal.sellsFor;

  //check if perks are active and adjust modifiers
  if (appState.hasTiller) perkSellPriceMultiplier += 0.1;
  if (appState.hasAgriculturist) {
    initialGrowTimeMultiplier -= 0.1;
    regrowthGrowTimeMultiplier -= 0.1;
  }

  //apply food buff
  mFarmingLevel += item.foodFarmingBuff;
  if (mFarmingLevel > 14) mFarmingLevel = 14;

  //Get/set fertilizer modifiers
  switch (item.fertilizerId) {
    case "basic_fertilizer":
      //Basic Fertilizer
      farmingLevelAvgPriceMultiplier =
        soilModifiers.basic[mFarmingLevel].average;
      break;
    case "quality_fertilizer":
      //Quality Fertilizer
      farmingLevelAvgPriceMultiplier =
        soilModifiers.quality[mFarmingLevel].average;
      break;
    case "speed_gro":
      //Speed Gro
      initialGrowTimeMultiplier -= 0.1;
      break;
    case "deluxe_speed_gro":
      //Deluxe Speed Gro
      initialGrowTimeMultiplier -= 0.25;
      break;
    case "deluxe_fertilizer":
      //Deluxe Fertilizer
      farmingLevelAvgPriceMultiplier =
        soilModifiers.deluxe[mFarmingLevel].average;
      break;
    case "hyper_speed_gro":
      //Hyper Speed Gro
      initialGrowTimeMultiplier -= 0.33;
      break;
    default:
      //Normal (no fertilizer)
      farmingLevelAvgPriceMultiplier =
        soilModifiers.normal[mFarmingLevel].average;
  }

  //set avg price multiplier to '1' if user has it explicitly turned it off
  // if(!item.pirceMultiplierIsActive) farmingLevelAvgPriceMultiplier = 1;

  //get max possible harvest days
  switch (itemRef[item.itemId].seasons.length) {
    case 2:
      if (item.seasonStartIdx === 0) maxHarvestDays = 56;
      break;
    case 3:
      if (item.seasonStartIdx === 0) maxHarvestDays = 84;
      else if (item.seasonStartIdx === 1) maxHarvestDays = 56;
      break;
    default:
  }

  //if can't be grown in any particular season (Cactus Fruit)
  if (!itemRef[item.itemId].seasons.length) {
    maxHarvestDays = 112;
  }

  //get actual harvest days (account for planting day)
  harvestDays = maxHarvestDays - item.plantingDay!;

  //if using greenhouse, set max harvest days to all days in year (112)
  if (item.isGreenhouse) {
    maxHarvestDays = 112;
    harvestDays = maxHarvestDays;
  }

  //calculate max harvests possible
  if (itemRef[item.itemId].harvestTime.regrowth) {
    // + 1 accounts for removal of initial growth time
    // maxHarvests = ((harvestDays - Math.ceil(itemRef[item.itemId].harvestTime.initial * growTimeMultiplier))/Math.ceil(itemRef[item.itemId].harvestTime.regrowth * growTimeMultiplier)) + 1;
    maxHarvests =
      ((harvestDays -
        Math.floor(
          itemRef[item.itemId].harvestTime.initial * initialGrowTimeMultiplier
        )) /
        itemRef[item.itemId].harvestTime.regrowth) *
        regrowthGrowTimeMultiplier +
      1;
    maxHarvestsRounded = Math.floor(maxHarvests);
    finalHarvestDay =
      Math.floor(
        itemRef[item.itemId].harvestTime.initial * initialGrowTimeMultiplier
      ) +
      itemRef[item.itemId].harvestTime.regrowth *
        regrowthGrowTimeMultiplier *
        (maxHarvestsRounded - 1) +
      1;
  } else {
    maxHarvests =
      harvestDays /
      Math.floor(
        itemRef[item.itemId].harvestTime.initial * initialGrowTimeMultiplier
      );
    maxHarvestsRounded = Math.floor(maxHarvests);
    finalHarvestDay =
      Math.floor(
        itemRef[item.itemId].harvestTime.initial * initialGrowTimeMultiplier
      ) *
        maxHarvestsRounded +
      1;
  }

  if (maxHarvests < 1) {
    maxHarvests = 0;
    maxHarvestsRounded = 0;
  }

  if (item.isCustom) {
    normalSellPrice = item.customSellPrice!;
    baseSellPricePerHarvest =
      item.customSellPrice! * itemRef[item.itemId].harvestYield;
    sellPricePerHarvest =
      itemRef[item.itemId].harvestYield *
      (item.customSellPrice! * farmingLevelAvgPriceMultiplier) *
      perkSellPriceMultiplier;
  } else {
    sellPricePerHarvest =
      itemRef[item.itemId].harvestYield *
      (itemRef[item.itemId].quality.normal.sellsFor *
        farmingLevelAvgPriceMultiplier) *
      perkSellPriceMultiplier;
  }

  //different calculations for if crop regrows or not
  if (itemRef[item.itemId].harvestTime.regrowth) {
    //https://github.com/exnil/crop_planner
    //Formula = ((Max Harvests * Base Sell Price) - (Seed Cost + Fertilizer Cost)) / (Final Harvest Day - 1)
    avgGoldPerDay =
      (maxHarvestsRounded * sellPricePerHarvest -
        (item.seedCost! + item.fertilizerCost!)) /
      (finalHarvestDay - 1);
  } else {
    //https://github.com/exnil/crop_planner
    //Formula = ((Max Harvests * Base Sell Price) - (Seed Cost * Max Harvests) - Fertilizer Cost) / (Final Harvest Day - 1)
    avgGoldPerDay =
      (maxHarvestsRounded * sellPricePerHarvest -
        (item.seedCost! * maxHarvestsRounded - item.fertilizerCost!)) /
      (finalHarvestDay - 1);
  }

  return {
    name,
    maxHarvestDays,
    harvestDays,
    maxHarvests,
    maxHarvestsRounded,
    finalHarvestDay,
    perkSellPriceMultiplier,
    initialGrowTimeMultiplier,
    regrowthGrowTimeMultiplier,
    normalSellPrice,
    baseSellPricePerHarvest,
    sellPricePerHarvest,
    sellPricePerHarvestRounded: +sellPricePerHarvest.toFixed(2),
    farmingLevelAvgPriceMultiplier,
    avgGoldPerDay,
    maturityDaysModified:
      itemRef[item.itemId].harvestTime.initial * initialGrowTimeMultiplier,
    maturityDaysModifiedRounded: Math.floor(
      itemRef[item.itemId].harvestTime.initial * initialGrowTimeMultiplier
    ),
    regrowthDaysModified:
      itemRef[item.itemId].harvestTime.regrowth * regrowthGrowTimeMultiplier,
    regrowthDaysModifiedRounded: Math.floor(
      itemRef[item.itemId].harvestTime.regrowth * regrowthGrowTimeMultiplier
    ),
  };
};

export const getWineJuiceCalculations = (
  item: WineJuiceCalculationItem,
  appState: AppState
) => {
  let isWine = item.itemId === "wine" ? true : false;
  let basePrice = 0;
  let sellPrice = 0;
  let priceMultiplier = 1;
  let avgGoldPerDay = 0;
  let processingTime = itemRef[item.itemId].processingTime || 0;
  let processingTimeInDays;

  if (isWine) {
    basePrice = itemRef[item.ingredientId!].quality.normal.sellsFor * 3;
  } else {
    basePrice = itemRef[item.ingredientId!].quality.normal.sellsFor * 2.25;
  }

  //if using cask
  if (item.quality) {
    let qualityKey = Object.keys(item.quality)[0];
    processingTime = itemRef[item.itemId].quality[qualityKey].processingTime!;
    basePrice *= itemRef[item.itemId].quality[qualityKey].caskPriceMultiplier!;
  }

  if (appState.hasArtisan) priceMultiplier += 0.4;
  sellPrice = basePrice * priceMultiplier;
  processingTimeInDays = processingTime! / 1600;

  //if custom
  if (item.isCustom) {
    basePrice = item.customSellPrice;
    sellPrice = basePrice;
  }

  avgGoldPerDay = sellPrice / processingTimeInDays;

  return {
    sellPrice,
    basePrice,
    priceMultiplier,
    processingTime,
    processingTimeInDays,
    processingTimeInDaysModified: processingTimeInDays,
    avgGoldPerDay,
  };
};

export const getGoodCalculations = (
  item: GoodCalculationItem,
  appState: AppState
) => {
  let isHoney = item.itemId === "honey" ? true : false;
  let basePrice = itemRef[item.itemId].quality
    ? itemRef[item.itemId].quality.normal.sellsFor
    : itemRef[item.itemId].sellsFor;
  let sellPrice = basePrice;
  let getsArtisanBuff = itemRef[item.itemId].getsArtisanBuff;
  let getsRancherBuff = itemRef[item.itemId].getsRancherBuff;
  let priceMultiplier = 1;
  let avgGoldPerDay = 0;
  let processingTime = itemRef[item.itemId].processingTime;
  let processingTimeInDays;
  let processingTimeInDaysModified;

  if (isHoney) {
    if (item.ingredientId)
      basePrice = itemRef[item.ingredientId].honeySellPrice;
    else basePrice = itemRef[item.itemId].sellsFor;
    sellPrice = basePrice;
  }

  //if using cask
  if (item.quality) {
    let qualityKey = item.quality;
    processingTime = itemRef[item.itemId].quality[qualityKey].processingTime!;
    sellPrice = itemRef[item.itemId].quality[qualityKey].sellsFor;
  }

  if (appState.hasArtisan && getsArtisanBuff) priceMultiplier += 0.4;
  if (appState.hasRancher && getsRancherBuff) priceMultiplier += 0.2;
  sellPrice *= priceMultiplier;

  processingTimeInDays = processingTime! / 1600;
  processingTimeInDaysModified = processingTimeInDays;

  //reduce to 2 max sales per day to be more realistic in number of crafts per day (like coffee and green tea)
  if (processingTimeInDays < 1) processingTimeInDaysModified = 1;

  //if custom
  if (item.isCustom) {
    basePrice = item.customSellPrice;
    sellPrice = basePrice;
  }

  avgGoldPerDay = sellPrice / processingTimeInDaysModified;

  return {
    basePrice,
    sellPrice,
    priceMultiplier,
    processingTime,
    processingTimeInDays,
    processingTimeInDaysModified: +processingTimeInDaysModified.toFixed(2),
    avgGoldPerDay,
  };
};

export const getCheeseCalculations = (
  item: CheeseCalculationItem,
  appState: AppState
) => {
  let basePrice = itemRef[item.itemId].quality[item.startQuality].sellsFor;
  let sellPrice = basePrice;
  let priceMultiplier = 1;
  let avgGoldPerDay = 0;
  let processingTime = itemRef[item.itemId].processingTime || 0;
  let processingTimeInDays;
  let processingTimeInDaysModified;
  let startQuality = item.startQuality;
  let endQuality = item.quality;

  //if using a cask
  if (endQuality) {
    sellPrice = itemRef[item.itemId].quality[endQuality].sellsFor;
    if (startQuality === "normal") {
      processingTime = itemRef[item.itemId].quality[endQuality].processingTime!;
    } else {
      processingTime =
        itemRef[item.itemId].quality[endQuality].processingTime! -
        itemRef[item.itemId].quality[startQuality].processingTime!;
    }
  }

  processingTimeInDays = processingTime! / 1600;
  processingTimeInDaysModified = processingTimeInDays;
  if (processingTimeInDays < 1) processingTimeInDaysModified = 1;

  if (appState.hasArtisan) priceMultiplier += 0.4;
  if (appState.hasRancher) priceMultiplier += 0.2;
  priceMultiplier = +priceMultiplier.toFixed(2);
  sellPrice *= priceMultiplier;

  //if custom
  if (item.isCustom) {
    basePrice = item.customSellPrice;
    sellPrice = basePrice;
  }

  avgGoldPerDay = sellPrice / processingTimeInDaysModified;

  return {
    basePrice,
    sellPrice,
    startQuality,
    quality: endQuality ? endQuality : startQuality,
    priceMultiplier,
    processingTime,
    processingTimeInDays,
    processingTimeInDaysModified,
    avgGoldPerDay: avgGoldPerDay,
  };
};

export const getMayoCalculations = (
  item: MayoCalculationItem,
  appState: AppState
) => {
  let itemId = "mayonnaise";
  let basePrice = itemRef["mayonnaise"].quality.normal.sellsFor;
  let name;
  let mayoQuantity = 1;
  let quality;
  let sellPrice = 0;
  let priceMultiplier = 1;
  let avgGoldPerDay = 0;
  let processingTime = itemRef["mayonnaise"].processingTime;
  let processingTimeInDays = processingTime! / 1600;
  let processingTimeInDaysModified = 1;

  switch (item.ingredientId) {
    case "large_egg":
      basePrice = itemRef["mayonnaise"].quality.gold.sellsFor;
      break;
    case "ostrich_egg":
      basePrice = itemRef["mayonnaise"].quality[item.eggQuality].sellsFor;
      mayoQuantity = 10;
      quality = item.eggQuality;
      break;
    case "golden_egg":
      basePrice = itemRef[item.ingredientId!].quality.gold.sellsFor;
      mayoQuantity = 3;
      break;
    case "duck_egg":
      itemId = "duck_mayonnaise";
      break;
    case "void_egg":
      itemId = "void_mayonnaise";
      break;
    case "dinosaur_egg":
      itemId = "dinosaur_mayonnaise";
      break;
    default:
  }

  if (itemId === "mayonnaise")
    name = `${itemRef[itemId].name} (${itemRef[item.ingredientId].name})`;
  else name = itemRef[itemId].name;

  if (appState.hasRancher) priceMultiplier += 0.2;
  if (appState.hasArtisan) priceMultiplier += 0.4;

  sellPrice = basePrice * priceMultiplier * mayoQuantity;

  //if custom
  if (item.isCustom) {
    basePrice = item.customSellPrice;
    sellPrice = basePrice * mayoQuantity;
  }

  avgGoldPerDay = sellPrice / processingTimeInDaysModified;

  return {
    itemId,
    name,
    quality,
    quantity: mayoQuantity,
    basePrice,
    sellPrice,
    priceMultiplier,
    processingTime,
    processingTimeInDays,
    processingTimeInDaysModified,
    avgGoldPerDay,
  };
};

export const getOilCalculations = (
  item: OilCalculationItem,
  appState: AppState
) => {
  let basePrice = itemRef[item.itemId].sellsFor;
  let sellPrice = basePrice;
  let getsArtisanBuff = itemRef[item.itemId].getsArtisanBuff;
  let priceMultiplier = 1;
  let avgGoldPerDay = 0;
  let processingTime = 0;
  let processingTimeInDays = 0;
  let processingTimeInDaysModified = 1;

  if (item.itemId === "oil")
    processingTime = itemRef[item.ingredientId].oilProcessingTime!;
  else processingTime = itemRef[item.itemId].processingTime!;
  processingTimeInDays = processingTime / 1600;

  if (appState.hasArtisan && getsArtisanBuff) priceMultiplier += 0.4;
  priceMultiplier = +priceMultiplier.toFixed(2);
  sellPrice *= priceMultiplier;

  //if custom
  if (item.isCustom) {
    basePrice = item.customSellPrice;
    sellPrice = basePrice;
  }

  avgGoldPerDay = sellPrice / processingTimeInDaysModified;

  return {
    basePrice,
    sellPrice,
    priceMultiplier,
    avgGoldPerDay,
    processingTime,
    processingTimeInDays,
    processingTimeInDaysModified,
  };
};

export const getPreserveCalculations = (
  item: PreserveCalculationItem,
  appState: AppState
) => {
  let basePrice = itemRef[item.ingredientId].quality.normal.sellsFor * 2 + 50;
  let sellPrice = basePrice;
  let priceMultiplier = 1;
  let avgGoldPerDay = 0;
  let processingTime = itemRef[item.itemId].processingTime || 0;
  let processingTimeInDays = processingTime / 1600;

  if (appState.hasArtisan) priceMultiplier += 0.4;
  sellPrice *= priceMultiplier;

  if (item.isCustom) {
    basePrice = item.customSellPrice;
    sellPrice = basePrice;
  }

  avgGoldPerDay = sellPrice / processingTimeInDays;

  return {
    sellPrice,
    basePrice,
    priceMultiplier,
    processingTime,
    processingTimeInDays,
    processingTimeInDaysModified: processingTimeInDays,
    avgGoldPerDay,
  };
};
