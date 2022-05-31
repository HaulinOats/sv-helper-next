import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { NextPage } from "next";
import soilModifiers from "../public/soil-modifiers";
import AddItem from "../components/AddItem";
import InfoPanel from "../components/InfoPanel";
import ItemContainer from "../components/ItemContainer";
import PerksContainer from "../components/PerksContainer";
import { CalculationItem } from "../types/CalculationItem.type";
import { ItemContext } from "./_app";
import { CropCalculationItem } from "../types/CropCalculationItem.type";
import { GoodCalculationItem } from "../types/GoodCalculationItem";
import { WineJuiceCalculationItem } from "../types/WineJuiceCalculationItem.type";
import { PreserveCalculationItem } from "../types/PreserveCalculationItem";
import { CheeseCalculationItem } from "../types/CheeseCalculationItem.type";
import { MayoCalculationItem } from "../types/MayoCalculationItem";
import { OilCalculationItem } from "../types/OilCalculationItem.type";
import NoItemsContainer from "../components/NoItemsContainer";

const defaultPerkValues = {
  farmingLevel: 0,
  hasTiller: false,
  hasAgriculturist: false,
  hasRancher: false,
  hasArtisan: false,
};

export const PerksContext = createContext(defaultPerkValues);

interface AppState {
  selectedItemsArr: (CropCalculationItem | GoodCalculationItem)[];
  addItemPanelIsShowing: boolean;
  showInfoPanel: boolean;
  sortByField: string;
  farmingLevel: number;
  hasTiller: boolean;
  hasAgriculturist: boolean;
  hasRancher: boolean;
  hasArtisan: boolean;
}

const Home: NextPage = () => {
  const itemContext = useContext(ItemContext);
  const appRef = useRef<HTMLDivElement>(null);
  const appInnerRef = useRef<HTMLDivElement>(null);

  const [appState, setAppState] = useState<AppState>({
    selectedItemsArr: [],
    addItemPanelIsShowing: false,
    showInfoPanel: false,
    sortByField: "addedAt",
    ...defaultPerkValues,
  });

  useEffect(() => {
    //check if dataVersion variables match, if not, purge stored items
    //change this value when needing to purge items from storage
    //should only need to change when major changes to dataset occur
    let dataVersion = 2;
    let purgeData = false;
    if (localStorage.getItem("dataVersion")) {
      if (
        JSON.parse(localStorage.getItem("dataVersion") as string) !==
        dataVersion
      ) {
        purgeData = true;
        localStorage.setItem("dataVersion", String(dataVersion));
      }
    } else {
      localStorage.setItem("dataVersion", String(dataVersion));
      purgeData = true;
    }

    //get items from storage or set to default state values
    setAppState({
      ...appState,
      farmingLevel: getItemFromStorage("farmingLevel") || appState.farmingLevel,
      hasTiller: getItemFromStorage("hasTiller") || appState.hasTiller,
      hasRancher: getItemFromStorage("hasRancher") || appState.hasRancher,
      hasAgriculturist:
        getItemFromStorage("hasAgriculturist") || appState.hasAgriculturist,
      hasArtisan: getItemFromStorage("hasArtisan") || appState.hasArtisan,
      sortByField: getItemFromStorage("sortByField") || appState.sortByField,
      selectedItemsArr: !purgeData
        ? getItemFromStorage("selectedItems")
        : false || appState.selectedItemsArr,
    });

    //set dynamic background
    let currentDate = new Date();
    if (currentDate.getHours() > 7 && currentDate.getHours() < 19) {
      appRef.current!.style.backgroundImage = "url(./day-bg.png)";
    } else {
      appRef.current!.style.backgroundImage = "url(./night-bg.png)";
    }

    //adjusts bottom container starting position based on height of header
    let height = appInnerRef.current?.offsetHeight;
    appRef.current!.style.marginTop = `${height}px`;
  }, []);

  useEffect(() => {
    console.log("state updated...");
    updateStorage();
    console.log(appState);
  });

  const getItemFromStorage = (key: string) => {
    if (localStorage.getItem(key)) {
      try {
        return JSON.parse(localStorage.getItem(key) as string);
      } catch (e) {
        return localStorage.getItem(key);
      }
    } else {
      return false;
    }
  };

  const updateCalculationsAndSort = (
    selectedItems: (CropCalculationItem | GoodCalculationItem)[]
  ) => {
    let tempSelectedItemsArr: (CropCalculationItem | GoodCalculationItem)[] =
      [];
    selectedItems.forEach((item) => {
      let calculationObj: any = {};
      switch (item.displayCategory) {
        case "crop":
          calculationObj = getCropCalculations(item as CropCalculationItem);
          break;
        case "wineJuice":
          calculationObj = getWineJuiceCalculations(
            item as WineJuiceCalculationItem
          );
          break;
        case "preserves":
          calculationObj = getPreserveCalculations(
            item as PreserveCalculationItem
          );
          break;
        case "good":
          calculationObj = getGoodCalculations(item as GoodCalculationItem);
          break;
        case "cheese":
          calculationObj = getCheeseCalculations(item as CheeseCalculationItem);
          break;
        case "mayo":
          calculationObj = getMayoCalculations(item as MayoCalculationItem);
          break;
        case "oil":
          calculationObj = getOilCalculations(item as OilCalculationItem);
          break;
        default:
      }
      tempSelectedItemsArr.push({
        ...item,
        ...calculationObj,
      });

      console.log({ ...item, ...calculationObj });
    });

    //sort items based on sortByField value
    tempSelectedItemsArr.sort((a, b) => {
      if (a[appState.sortByField]! < b[appState.sortByField]!) return -1;
      if (a[appState.sortByField]! > b[appState.sortByField]!) return 1;
      return 0;
    });
    setAppState({ ...appState, selectedItemsArr: tempSelectedItemsArr });
  };

  const updateStorage = () => {
    localStorage.setItem(
      "selectedItems",
      JSON.stringify(appState.selectedItemsArr)
    );
    localStorage.setItem("sortByField", appState.sortByField);
    localStorage.setItem("farmingLevel", String(appState.farmingLevel));
    localStorage.setItem("hasTiller", String(appState.hasTiller));
    localStorage.setItem("hasRancher", String(appState.hasRancher));
    localStorage.setItem("hasAgriculturist", String(appState.hasAgriculturist));
    localStorage.setItem("hasArtisan", String(appState.hasArtisan));
  };

  const hideAddItemPanel = () => {
    setAppState({ ...appState, addItemPanelIsShowing: false });
  };

  const showAddItemPanel = () => {
    setAppState({ ...appState, addItemPanelIsShowing: true });
  };

  const setDynamicField = (prop: string, val: any) => {
    setAppState({ ...appState, [prop]: val });
  };

  const deleteItem = (idx: number) => {
    let itemsArr = appState.selectedItemsArr;
    itemsArr.splice(idx, 1);
    updateCalculationsAndSort(itemsArr);
  };

  const sortByFieldName = (fieldName: string) => {
    let itemsArr = appState.selectedItemsArr;
    itemsArr.sort((a: CalculationItem, b: CalculationItem) => {
      if (a[fieldName]! < b[fieldName]!) return -1;
      if (a[fieldName]! > b[fieldName]!) return 1;
      return 0;
    });
    setAppState({
      ...appState,
      sortByField: fieldName,
    });
    updateCalculationsAndSort(itemsArr);
  };

  const reverseSort = () => {
    let itemsArr = appState.selectedItemsArr;
    itemsArr.reverse();
    updateCalculationsAndSort(itemsArr);
  };

  const openInfoPanel = () => {
    setAppState({ ...appState, showInfoPanel: true });
  };

  const closeInfoPanel = () => {
    setAppState({ ...appState, showInfoPanel: false });
  };

  const deleteAll = () => {
    updateCalculationsAndSort([]);
  };

  const addItem = (item: any) => {
    let itemsArr = appState.selectedItemsArr;
    itemsArr.push(item);
    updateCalculationsAndSort(itemsArr);
    hideAddItemPanel();
  };

  const getCropCalculations = (item: CropCalculationItem) => {
    let name = itemContext.itemRef[item.itemId].name;
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
      itemContext.itemRef[item.itemId].quality.normal.sellsFor *
      itemContext.itemRef[item.itemId].harvestYield;
    let normalSellPrice =
      itemContext.itemRef[item.itemId].quality.normal.sellsFor;

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
    switch (itemContext.itemRef[item.itemId].seasons.length) {
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
    if (!itemContext.itemRef[item.itemId].seasons.length) {
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
    if (itemContext.itemRef[item.itemId].harvestTime.regrowth) {
      // + 1 accounts for removal of initial growth time
      // maxHarvests = ((harvestDays - Math.ceil(itemContext.itemRef[item.itemId].harvestTime.initial * growTimeMultiplier))/Math.ceil(itemContext.itemRef[item.itemId].harvestTime.regrowth * growTimeMultiplier)) + 1;
      maxHarvests =
        ((harvestDays -
          Math.floor(
            itemContext.itemRef[item.itemId].harvestTime.initial *
              initialGrowTimeMultiplier
          )) /
          itemContext.itemRef[item.itemId].harvestTime.regrowth) *
          regrowthGrowTimeMultiplier +
        1;
      maxHarvestsRounded = Math.floor(maxHarvests);
      finalHarvestDay =
        Math.floor(
          itemContext.itemRef[item.itemId].harvestTime.initial *
            initialGrowTimeMultiplier
        ) +
        itemContext.itemRef[item.itemId].harvestTime.regrowth *
          regrowthGrowTimeMultiplier *
          (maxHarvestsRounded - 1) +
        1;
    } else {
      maxHarvests =
        harvestDays /
        Math.floor(
          itemContext.itemRef[item.itemId].harvestTime.initial *
            initialGrowTimeMultiplier
        );
      maxHarvestsRounded = Math.floor(maxHarvests);
      finalHarvestDay =
        Math.floor(
          itemContext.itemRef[item.itemId].harvestTime.initial *
            initialGrowTimeMultiplier
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
        item.customSellPrice! * itemContext.itemRef[item.itemId].harvestYield;
      sellPricePerHarvest =
        itemContext.itemRef[item.itemId].harvestYield *
        (item.customSellPrice! * farmingLevelAvgPriceMultiplier) *
        perkSellPriceMultiplier;
    } else {
      sellPricePerHarvest =
        itemContext.itemRef[item.itemId].harvestYield *
        (itemContext.itemRef[item.itemId].quality.normal.sellsFor *
          farmingLevelAvgPriceMultiplier) *
        perkSellPriceMultiplier;
    }

    //different calculations for if crop regrows or not
    if (itemContext.itemRef[item.itemId].harvestTime.regrowth) {
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
        itemContext.itemRef[item.itemId].harvestTime.initial *
        initialGrowTimeMultiplier,
      maturityDaysModifiedRounded: Math.floor(
        itemContext.itemRef[item.itemId].harvestTime.initial *
          initialGrowTimeMultiplier
      ),
      regrowthDaysModified:
        itemContext.itemRef[item.itemId].harvestTime.regrowth *
        regrowthGrowTimeMultiplier,
      regrowthDaysModifiedRounded: Math.floor(
        itemContext.itemRef[item.itemId].harvestTime.regrowth *
          regrowthGrowTimeMultiplier
      ),
    };
  };

  const getWineJuiceCalculations = (item: WineJuiceCalculationItem) => {
    let isWine = item.itemId === "wine" ? true : false;
    let basePrice = 0;
    let sellPrice = 0;
    let priceMultiplier = 1;
    let avgGoldPerDay = 0;
    let processingTime = itemContext.itemRef[item.itemId].processingTime || 0;
    let processingTimeInDays;

    if (isWine) {
      basePrice =
        itemContext.itemRef[item.ingredientId!].quality.normal.sellsFor * 3;
    } else {
      basePrice =
        itemContext.itemRef[item.ingredientId!].quality.normal.sellsFor * 2.25;
    }

    //if using cask
    if (item.quality) {
      let qualityKey = Object.keys(item.quality)[0];
      processingTime =
        itemContext.itemRef[item.itemId].quality[qualityKey].processingTime!;
      basePrice *=
        itemContext.itemRef[item.itemId].quality[qualityKey]
          .caskPriceMultiplier!;
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

  const getPreserveCalculations = (item: PreserveCalculationItem) => {
    let basePrice =
      itemContext.itemRef[item.ingredientId].quality.normal.sellsFor * 2 + 50;
    let sellPrice = basePrice;
    let priceMultiplier = 1;
    let avgGoldPerDay = 0;
    let processingTime = itemContext.itemRef[item.itemId].processingTime || 0;
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

  const getGoodCalculations = (item: GoodCalculationItem) => {
    let isHoney = item.itemId === "honey" ? true : false;
    let basePrice = itemContext.itemRef[item.itemId].quality
      ? itemContext.itemRef[item.itemId].quality.normal.sellsFor
      : itemContext.itemRef[item.itemId].sellsFor;
    let sellPrice = basePrice;
    let getsArtisanBuff = itemContext.itemRef[item.itemId].getsArtisanBuff;
    let getsRancherBuff = itemContext.itemRef[item.itemId].getsRancherBuff;
    let priceMultiplier = 1;
    let avgGoldPerDay = 0;
    let processingTime = itemContext.itemRef[item.itemId].processingTime;
    let processingTimeInDays;
    let processingTimeInDaysModified;

    if (isHoney) {
      if (item.ingredientId)
        basePrice = itemContext.itemRef[item.ingredientId].honeySellPrice;
      else basePrice = itemContext.itemRef[item.itemId].sellsFor;
      sellPrice = basePrice;
    }

    //if using cask
    if (item.quality) {
      let qualityKey = Object.keys(item.quality)[0];
      processingTime =
        itemContext.itemRef[item.itemId].quality[qualityKey].processingTime;
      sellPrice = itemContext.itemRef[item.itemId].quality[qualityKey].sellsFor;
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

  const getCheeseCalculations = (item: CheeseCalculationItem) => {
    let basePrice =
      itemContext.itemRef[item.itemId].quality[item.startQuality].sellsFor;
    let sellPrice = basePrice;
    let priceMultiplier = 1;
    let avgGoldPerDay = 0;
    let processingTime = itemContext.itemRef[item.itemId].processingTime;
    let processingTimeInDays;
    let processingTimeInDaysModified;
    let startQuality = item.startQuality;
    let endQuality = item.quality;

    //if using a cask
    if (endQuality) {
      let endQualityKey = Object.keys(endQuality)[0];
      sellPrice =
        itemContext.itemRef[item.itemId].quality[endQualityKey].sellsFor;
      if (startQuality === "normal") {
        processingTime =
          itemContext.itemRef[item.itemId].quality[endQualityKey]
            .processingTime;
      } else {
        processingTime =
          itemContext.itemRef[item.itemId].quality[endQualityKey]
            .processingTime! -
          itemContext.itemRef[item.itemId].quality[startQuality]
            .processingTime!;
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

  const getMayoCalculations = (item: MayoCalculationItem) => {
    let itemId = "mayonnaise";
    let basePrice = itemContext.itemRef["mayonnaise"].quality.normal.sellsFor;
    let name;
    let mayoQuantity = 1;
    let quality;
    let sellPrice = 0;
    let priceMultiplier = 1;
    let avgGoldPerDay = 0;
    let processingTime = itemContext.itemRef["mayonnaise"].processingTime;
    let processingTimeInDays = processingTime! / 1600;
    let processingTimeInDaysModified = 1;

    switch (item.ingredientId) {
      case "large_egg":
        basePrice = itemContext.itemRef["mayonnaise"].quality.gold.sellsFor;
        break;
      case "ostrich_egg":
        basePrice =
          itemContext.itemRef["mayonnaise"].quality[item.eggQuality].sellsFor;
        mayoQuantity = 10;
        quality = item.eggQuality;
        break;
      case "golden_egg":
        basePrice =
          itemContext.itemRef[item.ingredientId!].quality.gold.sellsFor;
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
      name = `${itemContext.itemRef[itemId].name} (${
        itemContext.itemRef[item.ingredientId].name
      })`;
    else name = itemContext.itemRef[itemId].name;

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

  const getOilCalculations = (item: OilCalculationItem) => {
    let basePrice = itemContext.itemRef[item.itemId].sellsFor;
    let sellPrice = basePrice;
    let getsArtisanBuff = itemContext.itemRef[item.itemId].getsArtisanBuff;
    let priceMultiplier = 1;
    let avgGoldPerDay = 0;
    let processingTime = 0;
    let processingTimeInDays = 0;
    let processingTimeInDaysModified = 1;

    if (item.itemId === "oil")
      processingTime =
        itemContext.itemRef[item.ingredientId].oilProcessingTime!;
    else processingTime = itemContext.itemRef[item.itemId].processingTime!;
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

  return (
    <PerksContext.Provider
      value={{
        farmingLevel: appState.farmingLevel,
        hasArtisan: appState.hasArtisan,
        hasAgriculturist: appState.hasAgriculturist,
        hasRancher: appState.hasRancher,
        hasTiller: appState.hasTiller,
      }}
    >
      <div ref={appRef} className="App container-fluid">
        <AddItem
          soilModifiers={soilModifiers}
          addItemPanelIsShowing={appState.addItemPanelIsShowing}
          hideAddItemPanel={hideAddItemPanel}
          addItem={addItem}
          setField={setDynamicField}
        />
        {appState.showInfoPanel && (
          <InfoPanel
            openInfoPanel={openInfoPanel}
            closeInfoPanel={closeInfoPanel}
          />
        )}
        <div
          ref={appInnerRef}
          className="App-top-container"
          style={{ backgroundImage: `url('./wood.png')` }}
        >
          <div className="App-top-container-first">
            <h1 onClick={openInfoPanel}>
              <i className="App-title-first">Stardew</i>
              <i className="App-title-second">Valley</i>
              <i className="App-title-third">Helper</i>
            </h1>
            <span
              className="App-perks-level-container"
              onClick={showAddItemPanel}
            >
              <div className="App-perks-level-farming">
                <span>Farming Lvl:</span>
                <span>{appState.farmingLevel}</span>
              </div>
              <PerksContainer />
            </span>
            <button className="App-add-item-btn" onClick={showAddItemPanel}>
              Add Item
            </button>
          </div>
        </div>
        {appState.selectedItemsArr.length > 0 && (
          <ItemContainer
            items={appState.selectedItemsArr}
            deleteItem={deleteItem}
            deleteAll={deleteAll}
            sortByField={appState.sortByField}
            sortByFieldName={sortByFieldName}
            reverseSort={reverseSort}
          />
        )}
        {/* If no items have been added */}
        {!appState.selectedItemsArr.length && <NoItemsContainer />}
      </div>
    </PerksContext.Provider>
  );
};

export default Home;
