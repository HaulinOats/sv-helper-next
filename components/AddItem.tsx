import { ChangeEvent, KeyboardEvent, useContext, useState } from "react";
import LevelPerksSelection from "./LevelPerksSelection";
import { Food } from "../types/Food.type";
import {
  categoryDropdownOptions,
  goodsDropdownOptions,
  milkTypeDropdownOptions,
  oilTypeDropdownOptions,
  qualityDropdownOptions,
  seasonDropdownOptions,
} from "../util/helpers";
import { ItemContext } from "../pages/_app";

interface Props {
  soilModifiers: Object;
  addItemPanelIsShowing: boolean;
  hideAddItemPanel: () => void;
  addItem: (item: any) => void;
  setField: (prop: string, val: string) => void;
}

const AddItem: React.FC<Props> = (props: Props) => {
  const itemContext = useContext(ItemContext);

  const [fertilizerId, setFertilizerId] = useState<string | undefined>(
    undefined
  );
  const [fertilizerCost, setFertilizerCost] = useState(0);
  const [foodId, setFoodId] = useState<string | undefined>(undefined);
  const [foodFarmingBuff, setFoodFarmingBuff] = useState(0);
  const [seedCost, setSeedCost] = useState(0);
  // const [priceModifierIsActive, setPriceModifierIsActive] = useState(false);
  const [itemId, setItemId] = useState<string | undefined>(undefined);
  const [seasonStartIdx, setSeasonStartIdx] = useState(0);
  const [plantingDay, setPlantingDay] = useState(1);
  const [isGreenhouse, setIsGreenhouse] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    categoryDropdownOptions[0].value
  );
  const [cropLimitToSeason, setCropLimitToSeason] = useState(
    seasonDropdownOptions[0].value
  );
  const [selectedGood, setSelectedGood] = useState(
    goodsDropdownOptions[0].value
  );
  const [wineJuiceLimitToSeason, setWineJuiceLimitToSeason] = useState(
    seasonDropdownOptions[0].value
  );
  const [preservesLimitToSeason, setPreservesLimitToSeason] = useState(
    seasonDropdownOptions[0].value
  );
  const [wineProduceId, setWineProduceId] = useState<string | undefined>(
    undefined
  );
  const [isCask, setIsCask] = useState(false);
  const [caskQuality, setCaskQuality] = useState("iridium");
  const [preservesProduceId, setPreservesProduceId] = useState<
    string | undefined
  >(undefined);
  const [honeyFlowerId, setHoneyFlowerId] = useState<string | undefined>(
    undefined
  );
  const [milkType, setMilkType] = useState(milkTypeDropdownOptions[0].value);
  const [milkIsLarge, setMilkIsLarge] = useState(false);
  const [eggType, setEggType] = useState("egg");
  const [eggQuality, setEggQuality] = useState(qualityDropdownOptions[0].value);
  const [oilType, setOilType] = useState(oilTypeDropdownOptions[0].value);
  const [oilIngredientId, setOilIngredientId] = useState(
    itemContext.itemRef["oil"].madeFrom[0]
  );
  const [isCustom, setIsCustom] = useState(false);
  const [customSellPrice, setCustomSellPrice] = useState(1);

  const selectInput = (e: Event) => {
    (e.target as HTMLInputElement).select();
  };

  const blurInput = (e: KeyboardEvent) => {
    if (e.key === "Enter") (e.target as HTMLInputElement).blur();
  };

  const resetCropState = () => {
    setItemId(undefined);
    setSeedCost(0);
    setSeasonStartIdx(0);
    setPlantingDay(1);
    setCustomSellPrice(1);
    // setCropLimitToSeason(seasonDropdownOptions[0].value);
    setIsGreenhouse(false);
  };

  const resetGoodState = () => {
    setSelectedGood(goodsDropdownOptions[0].value);
    setWineJuiceLimitToSeason(seasonDropdownOptions[0].value);
    setPreservesLimitToSeason(seasonDropdownOptions[0].value);
    setWineProduceId(undefined);
    setIsCask(false);
    setCaskQuality("iridium");
    setPreservesProduceId(undefined);
    setHoneyFlowerId(undefined);
    setMilkType(milkTypeDropdownOptions[0].value);
    setMilkIsLarge(false);
    setEggType("egg");
    setEggQuality(qualityDropdownOptions[0].value);
    setCustomSellPrice(1);
  };

  const cropOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    resetCropState();
    setItemId(e.target.value);
    // For crops that only grow in Greenhouse (Cactus Fruit)
    if (!itemContext.itemRef[e.target.value].seasons.length)
      setIsGreenhouse(true);
    setSeedCost(0);
  };

  const selectedCategoryOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory((e.target as HTMLSelectElement).value);
    resetCropState();
    resetGoodState();
  };

  const fertilizerOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let target = e.target as HTMLSelectElement;
    if (target.value === "") setFertilizerId(undefined);
    else setFertilizerId(target.value);
    setFertilizerCost(0);
  };

  const fertilizerVendorOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFertilizerCost(+(e.target as HTMLSelectElement).value);
  };

  const changeFoodId = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") setFoodId(undefined);
    else setFoodId(e.target.value);
    setFoodFarmingBuff(Number(e.target.selectedOptions[0].dataset.farmingBuff));
  };

  // const togglePriceModifier = e => {
  //   setPriceModifierIsActive(!priceModifierIsActive);
  // }

  const toggleIsGreenhouse = () => {
    setIsGreenhouse(!isGreenhouse);

    if (isGreenhouse) {
      setSeasonStartIdx(0);
      setPlantingDay(1);
    }
  };

  const seedVendorOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSeedCost(+e.target.value);
  };

  const seasonOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSeasonStartIdx(+e.target.value);
  };

  const plantingDayOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    isChange = false
  ) => {
    if (isChange) setPlantingDay(Math.round(Number(e.target.value)));

    if (plantingDay > 28) setPlantingDay(28);
    if (plantingDay < 1) setPlantingDay(1);
  };

  const cropLimitToSeasonOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCropLimitToSeason(e.target.value);
  };

  const selectedGoodOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedGood(e.target.value);
    setCaskQuality("iridium");
    setIsCask(false);
  };

  const wineJuiceLimitToSeasonOnChange = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setWineJuiceLimitToSeason(e.target.value);
  };

  const toggleIsCask = (e: ChangeEvent<HTMLInputElement>) => {
    setIsCask(!isCask);
  };

  const caskQualityOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCaskQuality(e.target.value);
  };

  const preservesLimitToSeasonOnChange = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setPreservesLimitToSeason(e.target.value);
  };

  const wineProduceIdOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") setWineProduceId(undefined);
    else setWineProduceId(e.target.value);
  };

  const preservesProduceIdOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") setPreservesProduceId(undefined);
    else setPreservesProduceId(e.target.value);
  };

  const honeyFlowerIdOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") setHoneyFlowerId(undefined);
    else setHoneyFlowerId(e.target.value);
  };

  const milkTypeOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setMilkType(e.target.value);
  };

  const toggleMilkIsLarge = (e: ChangeEvent<HTMLInputElement>) => {
    setMilkIsLarge(!milkIsLarge);

    if (isCask) {
      setCaskQuality("iridium");
    }
  };

  const eggTypeOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setEggType(e.target.value);
  };

  const eggQualityOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setEggQuality(e.target.value);
  };

  const oilTypeOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOilType(e.target.value);
  };

  const oilIngredientIdOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOilIngredientId(e.target.value);
  };

  const isCustomOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsCustom(!isCustom);
    setFertilizerId(undefined);
    setFertilizerCost(0);
    setSeedCost(0);
    setCustomSellPrice(1);
  };

  const fertilizerCostOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    isChange = false
  ) => {
    if (isChange) setFertilizerCost(Math.round(Number(e.target.value)));

    if (fertilizerCost > 1000) setFertilizerCost(1000);
    if (fertilizerCost < 0) setFertilizerCost(0);
  };

  const seedCostOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    isChange = false
  ) => {
    if (isChange) setSeedCost(Math.round(Number(e.target.value)));

    if (seedCost > 1000) setSeedCost(1000);
    if (seedCost < 0) setSeedCost(0);
  };

  const customSellPriceOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    isChange = false
  ) => {
    if (isChange) setCustomSellPrice(Math.round(Number(e.target.value)));

    if (customSellPrice > 15000) setCustomSellPrice(15000);
    if (customSellPrice < 1) setCustomSellPrice(1);
  };

  const addCrop = () => {
    // let modifierActive = priceModifierIsActive;

    // if(isCustom) modifierActive = true;

    props.addItem({
      addedAt: Date.now(),
      itemId,
      foodId,
      foodFarmingBuff,
      seedCost,
      fertilizerId,
      fertilizerCost,
      seasonStartIdx,
      plantingDay,
      isGreenhouse,
      // priceModifierIsActive:modifierActive,
      isCustom,
      customSellPrice,
      displayCategory: "crop",
    });
    resetCropState();
  };

  const addWineOrJuice = () => {
    if (!wineProduceId) return;

    let isWine = itemContext.itemRef[wineProduceId].isWineable ? true : false;
    let ingredientId = wineProduceId;
    let name = `${itemContext.itemRef[wineProduceId].name} Wine`;
    let itemId = "wine";
    let qualityId;

    if (!isWine) {
      itemId = "juice";
      name = `${itemContext.itemRef[wineProduceId].name} Wine`;
    }

    if (isCask) {
      qualityId = caskQuality;
    }

    props.addItem({
      addedAt: Date.now(),
      itemId,
      name,
      isCustom,
      customSellPrice,
      ingredientId,
      isCask,
      qualityId,
      displayCategory: "wineJuice",
    });
  };

  const addPreserve = () => {
    if (!preservesProduceId) return;

    let isJelly =
      itemContext.itemRef[preservesProduceId].subCategory === "fruits"
        ? true
        : false;
    let itemId = "jelly";
    let name = `${itemContext.itemRef[preservesProduceId].name} Jelly`;
    let ingredientId = preservesProduceId;

    if (!isJelly) {
      itemId = "pickles";
      name = `Pickled ${itemContext.itemRef[preservesProduceId].name}`;
    }

    props.addItem({
      addedAt: Date.now(),
      itemId,
      name,
      isCustom,
      customSellPrice,
      ingredientId,
      displayCategory: "preserves",
    });
  };

  const addGood = () => {
    let isHoney = selectedGood === "honey" ? true : false;
    let name = itemContext.itemRef[selectedGood].name;
    let quality;

    if (isHoney && honeyFlowerId) {
      name = `${itemContext.itemRef[honeyFlowerId].name} ${name}`;
    }

    if (isCask) {
      quality = caskQuality;
    }

    props.addItem({
      addedAt: Date.now(),
      itemId: selectedGood,
      name,
      quality,
      isCustom,
      isCask,
      customSellPrice,
      ingredientId: isHoney
        ? honeyFlowerId
        : itemContext.itemRef[selectedGood].madeFrom,
      displayCategory: "good",
    });
  };

  const addCheese = () => {
    let cheeseId = milkType === "cow" ? "cheese" : "goat_cheese";
    let name = itemContext.itemRef[cheeseId].name;
    let ingredientId;
    let startQuality = "normal";
    let quality;

    if (milkType === "cow") {
      if (milkIsLarge) ingredientId = "large_milk";
      else ingredientId = "milk";
    } else {
      if (milkIsLarge) ingredientId = "large_goat_milk";
      else ingredientId = "goat_milk";
    }

    if (milkIsLarge) startQuality = "gold";
    if (isCask) {
      quality = caskQuality;
    }

    props.addItem({
      addedAt: Date.now(),
      itemId: cheeseId,
      name,
      startQuality,
      quality,
      isCustom,
      isCask,
      customSellPrice,
      ingredientId,
      isLarge: milkIsLarge,
      displayCategory: "cheese",
    });
  };

  const addMayo = () => {
    props.addItem({
      addedAt: Date.now(),
      isCustom,
      customSellPrice,
      ingredientId: eggType,
      eggQuality: eggQuality,
      displayCategory: "mayo",
    });
  };

  const addOil = () => {
    props.addItem({
      addedAt: Date.now(),
      isCustom,
      customSellPrice,
      itemId: oilType,
      ingredientId:
        oilType === "oil"
          ? oilIngredientId
          : itemContext.itemRef[oilType].madeFrom[0],
      displayCategory: "oil",
    });
  };

  return (
    <div className={"AddItem " + (!props.addItemPanelIsShowing ? "hide" : "")}>
      <div
        className="AddItem-clickguard"
        onClick={props.hideAddItemPanel}
      ></div>
      <div className="AddItem-inner">
        <h2>Level and Perks</h2>
        <LevelPerksSelection setField={props.setField} />
        <hr></hr>
        <div className="App-slider-container">
          <div className="App-slider-inner">
            <label className="switch" htmlFor="is-custom">
              <input
                type="checkbox"
                id="is-custom"
                checked={isCustom}
                onChange={(e) => isCustomOnChange(e)}
              />
              <div className="slider round"></div>
            </label>
          </div>
          <label htmlFor="is-custom">Enter Values Myself</label>
          <img
            className="AddItem-custom-img"
            src="./icons/custom.svg"
            alt="custom"
          />
        </div>
        {isCustom && (
          <p className="AddItem-custom-subtitle">
            <i>Calculations will ignore perk selections</i>
          </p>
        )}
        <div className="App-category-select-container form-group mt-2">
          <label>Select Category:</label>
          <select
            className="App-category-select"
            value={selectedCategory}
            onChange={(e) => selectedCategoryOnChange(e)}
          >
            {categoryDropdownOptions.map((category) => {
              return (
                <option key={category.value} value={category.value}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="AddItem-bottom-container">
          {/* Menu for showing crops */}
          {selectedCategory === "crops" && (
            <div className="AddItem-category-container">
              {/* {!isCustom &&
                <div className="form-group">
                  <div className="App-slider-container">
                    <div className="App-slider-inner">
                      <label className="switch" htmlFor="avg-selling-modifier-checkbox">
                        <input type="checkbox" id="avg-selling-modifier-checkbox" checked={priceModifierIsActive} onChange={togglePriceModifier} />
                        <div className="slider round"></div>
                      </label>
                    </div>
                    <label className="AddItem-selling-modifier-label user-select-none" htmlFor="avg-selling-modifier-checkbox">Apply Avg. Price Modifier<a className="text-decoration-none ms-2" href="https://stardewvalleywiki.com/Farming#Crop_Quality_Frequency" target="_blank" rel="noreferrer">&#9432;</a></label>
                  </div>
                </div>
              } */}
              <div className="form-group mt-2">
                <label className="AddItem-fertilizer-label user-select-none">
                  Fertilizer:
                </label>
                <select
                  className="AddItem-fertilizer-select"
                  value={fertilizerId}
                  onChange={(e) => fertilizerOnChange(e)}
                >
                  <option value="">None</option>
                  {itemContext.itemData.fertilizers.map((fertilizer) => {
                    return (
                      <option key={fertilizer.name} value={fertilizer.id}>
                        {fertilizer.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              {fertilizerId && (
                <div className="form-group mt-2 ms-3">
                  {!isCustom && (
                    <div>
                      <label className="user-select-none">Vendor:</label>
                      <select
                        className="AddItem-fertilizer-vendor-select"
                        value={fertilizerCost}
                        onChange={(e) => fertilizerVendorOnChange(e)}
                      >
                        <option value="0">No Vendor</option>
                        {itemContext.itemRef[fertilizerId].vendors!.map(
                          (vendor) => {
                            return (
                              <option key={vendor.id} value={vendor.cost}>
                                {itemContext.itemRef[vendor.id].name} -{" "}
                                {vendor.cost}g
                              </option>
                            );
                          }
                        )}
                      </select>
                    </div>
                  )}
                  {isCustom && (
                    <div className="AddItem-fertilizer-vendor form-group mt-2">
                      <label className="user-select-none">
                        Fertilizer Cost:
                      </label>
                      <input
                        className="AddItem-fertilizer-cost-input"
                        type="number"
                        min="0"
                        max="1000"
                        size={6}
                        step="1"
                        value={Number(fertilizerCost).toString()}
                        onClick={() => selectInput}
                        onChange={(e) => fertilizerCostOnChange(e, true)}
                        onKeyDown={() => blurInput}
                        onBlur={(e) => fertilizerCostOnChange(e)}
                      />
                    </div>
                  )}
                </div>
              )}
              <div className="form-group mt-2">
                <label className="AddItem-farming-buff-label user-select-none">
                  Farming Buff:
                </label>
                <select
                  className="AddItem-farming-buff-select"
                  value={foodId}
                  onChange={(e) => changeFoodId(e)}
                >
                  <option data-farmingbuff="0" value="">
                    None
                  </option>
                  {itemContext.itemData.food.map((food: Food) => {
                    if (food.farmingBuff)
                      return (
                        <option
                          key={food.name}
                          data-farmingbuff={food.farmingBuff}
                          value={food.id}
                        >
                          {food.name} (+{food.farmingBuff})
                        </option>
                      );
                    else return "";
                  })}
                </select>
              </div>
              <div className="form-group mt-2">
                <label className="AddItem-limit-season-label user-select-none">
                  Limit To Season:
                </label>
                <select
                  className="AddItem-limit-season-select"
                  value={cropLimitToSeason}
                  onChange={(e) => cropLimitToSeasonOnChange(e)}
                >
                  {seasonDropdownOptions.map((seasonObj) => {
                    return (
                      <option key={seasonObj.value} value={seasonObj.value}>
                        {seasonObj.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group mt-2">
                <label className="AddItem-crop-label user-select-none">
                  Select Crop:
                </label>
                <select
                  className="AddItem-crop-select"
                  value={itemId}
                  onChange={(e) => cropOnChange(e)}
                >
                  <option value="">- Select A Crop -</option>
                  {itemContext.itemData.crops.map((item) => {
                    if (cropLimitToSeason === "all")
                      return (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      );
                    else if (item.seasons.includes(cropLimitToSeason))
                      return (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      );
                    else return "";
                  })}
                </select>
              </div>
              {itemId && (
                <div className="AddItem-selected-item-outer pt-4">
                  <div className="AddItem-selected-item-title-container border-top border-3 pt-2">
                    <img
                      src={`./icons/crops/${itemContext.itemRef[itemId].icon}`}
                      alt={itemContext.itemRef[itemId].icon}
                    />
                    <p className="d-inline fs-1 ms-2 align-bottom lh-1">
                      {itemContext.itemRef[itemId].name}
                    </p>
                  </div>
                  <div className="mt-2">
                    {!isCustom && (
                      <span>
                        <label className="user-select-none">Seed Cost:</label>
                        <select
                          className="AddItem-vendor-select"
                          value={seedCost}
                          onChange={(e) => seedVendorOnChange(e)}
                        >
                          <option value="0">No Vendor</option>
                          {itemContext.itemRef[
                            itemContext.itemRef[itemId].seedId!
                          ].vendors!.map((vendor) => {
                            return (
                              <option key={vendor.id} value={vendor.cost}>
                                {itemContext.itemRef[vendor.id].name} -{" "}
                                {vendor.cost}g
                              </option>
                            );
                          })}
                        </select>
                      </span>
                    )}
                    {isCustom && (
                      <span>
                        <label className="user-select-none">Seed Cost:</label>
                        <input
                          className="AddItem-seed-cost-input"
                          type="number"
                          min="0"
                          max="1000"
                          size={6}
                          step="1"
                          value={Number(seedCost).toString()}
                          onClick={() => selectInput}
                          onChange={(e) => seedCostOnChange(e, true)}
                          onKeyDown={() => blurInput}
                          onBlur={(e) => seedCostOnChange(e)}
                        />
                      </span>
                    )}
                  </div>
                  <div className="form-group mt-2">
                    <div className="App-slider-container">
                      <div className="App-slider-inner">
                        <label className="switch" htmlFor="greenhouse-checkbox">
                          <input
                            type="checkbox"
                            id="greenhouse-checkbox"
                            checked={isGreenhouse}
                            onChange={() => toggleIsGreenhouse()}
                          />
                          <div className="slider round"></div>
                        </label>
                      </div>
                      <label
                        className="AddItem-greenhouse-label user-select-none"
                        htmlFor="greenhouse-checkbox"
                      >
                        Using Greenhouse
                      </label>
                      <img
                        className="AddItem-greenhouse-img"
                        src="./icons/greenhouse.svg"
                        alt="custom"
                      />
                    </div>
                  </div>
                  <div>
                    {!isGreenhouse && (
                      <div>
                        <div className="form-group mt-2">
                          <label className="user-select-none">
                            Planting Season:
                          </label>
                          <select
                            className="AddItem-season-select"
                            value={seasonStartIdx}
                            onChange={(e) => seasonOnChange(e)}
                          >
                            {itemContext.itemRef[itemId].seasons.map(
                              (season, idx) => {
                                return (
                                  <option key={season} value={idx}>
                                    {season}
                                  </option>
                                );
                              }
                            )}
                          </select>
                        </div>
                        <div className="form-group mt-2">
                          <label className="user-select-none">
                            Planting Day:
                          </label>
                          <input
                            className="AddItem-planting-day-input"
                            type="number"
                            min="1"
                            max="28"
                            size={3}
                            value={plantingDay}
                            onClick={() => selectInput}
                            onKeyDown={() => blurInput}
                            onChange={(e) => plantingDayOnChange(e, true)}
                            onBlur={(e) => plantingDayOnChange(e)}
                          />
                        </div>
                      </div>
                    )}
                    {isCustom && (
                      <div className="mt-2">
                        <label className="user-select-none">
                          Normal Crop Sell Price:
                        </label>
                        <input
                          className="AddItem-sell-price-input"
                          type="number"
                          min="1"
                          max="15000"
                          size={6}
                          step="1"
                          value={Number(customSellPrice).toString()}
                          onClick={() => selectInput}
                          onChange={(e) => customSellPriceOnChange(e, true)}
                          onKeyDown={() => blurInput}
                          onBlur={(e) => customSellPriceOnChange(e)}
                        />
                      </div>
                    )}
                    <button
                      className="AddItem-add-btn btn my-2"
                      type="submit"
                      onClick={() => addCrop()}
                    >
                      Add Item
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          {/* if an artisan good was selected */}
          {selectedCategory === "goods" && (
            <div className="AddItem-goods-container">
              <div className="form-group">
                <label>Select Good:</label>
                <select
                  className="AddItem-selected"
                  value={selectedGood}
                  onChange={(e) => selectedGoodOnChange(e)}
                >
                  {goodsDropdownOptions.map((option) => {
                    return (
                      <option key={option.name} value={option.value}>
                        {option.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              {selectedGood && (
                <div className="mt-2">
                  {selectedGood === "wineJuice" && (
                    <div className="AddItem-goods-container">
                      <div className="mt-2">
                        <div className="App-slider-container">
                          <div className="App-slider-inner">
                            <label className="switch" htmlFor="cask-checkbox">
                              <input
                                type="checkbox"
                                id="cask-checkbox"
                                checked={isCask}
                                onChange={(e) => toggleIsCask(e)}
                              />
                              <div className="slider round"></div>
                            </label>
                          </div>
                          <label
                            className="AddItem-cask-label user-select-none"
                            htmlFor="cask-checkbox"
                          >
                            Use Cask
                          </label>
                          <img
                            className="AddItem-custom-img"
                            src="./icons/cask.svg"
                            alt="custom"
                          />
                        </div>
                        {isCask && (
                          <p className="AddItem-custom-subtitle">
                            <i>Limited to fruits/wine</i>
                          </p>
                        )}
                      </div>
                      {isCask && (
                        <div className="mt-2">
                          <label>Desired Quality:</label>
                          <select
                            value={caskQuality}
                            onChange={(e) => caskQualityOnChange(e)}
                          >
                            {qualityDropdownOptions.map((option) => {
                              if (option.value !== "normal")
                                return (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.name}
                                  </option>
                                );
                              else return "";
                            })}
                          </select>
                        </div>
                      )}
                      <div className="mt-2">
                        <label>Limit To Season:</label>
                        <select
                          value={wineJuiceLimitToSeason}
                          onChange={(e) => wineJuiceLimitToSeasonOnChange(e)}
                        >
                          {seasonDropdownOptions.map((seasonObj) => {
                            return (
                              <option
                                key={seasonObj.value}
                                value={seasonObj.value}
                              >
                                {seasonObj.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="mt-2">
                        <label>Select Produce:</label>
                        <select
                          value={wineProduceId}
                          onChange={(e) => wineProduceIdOnChange(e)}
                        >
                          <option value="">- Select Produce -</option>
                          {itemContext.itemData.artisanFruitAndVegIds.map(
                            (id) => {
                              if (
                                wineJuiceLimitToSeason === "all" &&
                                ((isCask &&
                                  itemContext.itemRef[id].isWineable) ||
                                  !isCask)
                              )
                                return (
                                  <option key={id} value={id}>
                                    {itemContext.itemRef[id].name}
                                  </option>
                                );
                              else if (
                                itemContext.itemRef[id].seasons.includes(
                                  wineJuiceLimitToSeason
                                ) &&
                                ((isCask &&
                                  itemContext.itemRef[id].isWineable) ||
                                  !isCask)
                              )
                                return (
                                  <option key={id} value={id}>
                                    {itemContext.itemRef[id].name}
                                  </option>
                                );
                              else return "";
                            }
                          )}
                        </select>
                      </div>
                      {isCustom && (
                        <div className="mt-2">
                          <label className="user-select-none">
                            Sell Price:
                          </label>
                          <input
                            className="AddItem-sell-price-input"
                            type="number"
                            min="1"
                            max="15000"
                            size={6}
                            step="1"
                            value={Number(customSellPrice).toString()}
                            onClick={() => selectInput}
                            onChange={(e) => customSellPriceOnChange(e, true)}
                            onKeyDown={() => blurInput}
                            onBlur={(e) => customSellPriceOnChange(e)}
                          />
                        </div>
                      )}
                      {wineProduceId && (
                        <button
                          className="AddItem-add-btn"
                          onClick={() => addWineOrJuice()}
                        >
                          Add Wine/Juice
                        </button>
                      )}
                    </div>
                  )}
                  {selectedGood === "preserves" && (
                    <div className="AddItem-goods-container">
                      <div>
                        <label>Limit To Season:</label>
                        <select
                          value={preservesLimitToSeason}
                          onChange={(e) => preservesLimitToSeasonOnChange(e)}
                        >
                          {seasonDropdownOptions.map((seasonObj) => {
                            return (
                              <option
                                key={seasonObj.value}
                                value={seasonObj.value}
                              >
                                {seasonObj.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="mt-2">
                        <label>Select Produce:</label>
                        <select
                          value={preservesProduceId}
                          onChange={(e) => preservesProduceIdOnChange(e)}
                        >
                          <option value="">- Select Produce -</option>
                          {itemContext.itemData.artisanFruitAndVegIds.map(
                            (id) => {
                              if (preservesLimitToSeason === "all")
                                return (
                                  <option key={id} value={id}>
                                    {itemContext.itemRef[id].name}
                                  </option>
                                );
                              else if (
                                itemContext.itemRef[id].seasons.includes(
                                  preservesLimitToSeason
                                )
                              )
                                return (
                                  <option key={id} value={id}>
                                    {itemContext.itemRef[id].name}
                                  </option>
                                );
                              else return "";
                            }
                          )}
                        </select>
                      </div>
                      {isCustom && (
                        <div className="mt-2">
                          <label className="user-select-none">
                            Sell Price:
                          </label>
                          <input
                            className="AddItem-sell-price-input"
                            type="number"
                            min="1"
                            max="15000"
                            size={6}
                            step="1"
                            value={Number(customSellPrice).toString()}
                            onClick={() => selectInput}
                            onChange={(e) => customSellPriceOnChange(e, true)}
                            onKeyDown={() => blurInput}
                            onBlur={(e) => customSellPriceOnChange(e)}
                          />
                        </div>
                      )}
                      {preservesProduceId && (
                        <button
                          className="AddItem-add-btn"
                          onClick={() => addPreserve()}
                        >
                          Add Preserve
                        </button>
                      )}
                    </div>
                  )}
                  {selectedGood === "honey" && (
                    <div>
                      <label>Flower Type:</label>
                      <select
                        value={honeyFlowerId}
                        onChange={(e) => honeyFlowerIdOnChange(e)}
                      >
                        <option value="">No Flower</option>
                        {itemContext.itemRef["honey"].flowerModifiers.map(
                          (flower: any) => {
                            return (
                              <option key={flower.id} value={flower.id}>
                                {itemContext.itemRef[flower.id].name}
                              </option>
                            );
                          }
                        )}
                      </select>
                    </div>
                  )}
                  {selectedGood === "cheese" && (
                    <div>
                      <div>
                        <label>Type Of Milk:</label>
                        <select
                          value={milkType}
                          onChange={(e) => milkTypeOnChange(e)}
                        >
                          {milkTypeDropdownOptions.map((milk) => {
                            return (
                              <option key={milk.value} value={milk.value}>
                                {milk.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="mt-2">
                        <div className="App-slider-container">
                          <div className="App-slider-inner">
                            <label className="switch" htmlFor="milk-size">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="milk-size"
                                checked={milkIsLarge}
                                onChange={toggleMilkIsLarge}
                              />
                              <div className="slider round"></div>
                            </label>
                          </div>
                          <label htmlFor="milk-size">Is Large?</label>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="App-slider-container">
                          <div className="App-slider-inner">
                            <label className="switch" htmlFor="cask-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="cask-checkbox"
                                checked={isCask}
                                onChange={(e) => toggleIsCask(e)}
                              />
                              <div className="slider round"></div>
                            </label>
                          </div>
                          <label htmlFor="cask-checkbox">Use Cask</label>
                          <img
                            className="AddItem-custom-img"
                            src="./icons/cask.svg"
                            alt="custom"
                          />
                        </div>
                      </div>
                      {isCask && (
                        <div>
                          <div className="mt-2">
                            <label>Desired Quality:</label>
                            {!milkIsLarge && (
                              <select
                                value={caskQuality}
                                onChange={(e) => caskQualityOnChange(e)}
                              >
                                {qualityDropdownOptions.map((option) => {
                                  if (option.value !== "normal")
                                    return (
                                      <option
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.name}
                                      </option>
                                    );
                                  else return "";
                                })}
                              </select>
                            )}
                            {milkIsLarge && (
                              <select
                                value={caskQuality}
                                onChange={(e) => caskQualityOnChange(e)}
                              >
                                {qualityDropdownOptions.map((option) => {
                                  if (option.value === "iridium")
                                    return (
                                      <option
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.name}
                                      </option>
                                    );
                                  else return "";
                                })}
                              </select>
                            )}
                          </div>
                        </div>
                      )}
                      {isCustom && (
                        <div className="mt-2">
                          <label className="user-select-none">
                            Sell Price:
                          </label>
                          <input
                            className="AddItem-sell-price-input"
                            type="number"
                            min="1"
                            max="15000"
                            size={6}
                            step="1"
                            value={Number(customSellPrice).toString()}
                            onClick={() => selectInput}
                            onChange={(e) => customSellPriceOnChange(e, true)}
                            onKeyDown={() => blurInput}
                            onBlur={(e) => customSellPriceOnChange(e)}
                          />
                        </div>
                      )}
                      <div className="AddItem-goods-container">
                        <button
                          className="AddItem-add-btn"
                          onClick={() => addCheese()}
                        >
                          Add Cheese
                        </button>
                      </div>
                    </div>
                  )}
                  {selectedGood === "mayo" && (
                    <div>
                      <div>
                        <label>Type Of Egg:</label>
                        <select
                          value={eggType}
                          onChange={(e) => eggTypeOnChange(e)}
                        >
                          {itemContext.itemData.animal_products.map(
                            (product) => {
                              if (product.subCategory === "egg")
                                return (
                                  <option key={product.id} value={product.id}>
                                    {product.name}
                                  </option>
                                );
                              else return "";
                            }
                          )}
                        </select>
                      </div>
                      {/* If Ostrich Egg, show 'quality' dropdown */}
                      {eggType === "ostrich_egg" && (
                        <div className="mt-2">
                          <label>Egg Quality:</label>
                          <select
                            value={eggQuality}
                            onChange={(e) => eggQualityOnChange(e)}
                          >
                            {qualityDropdownOptions.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      )}
                      {isCustom && (
                        <div className="mt-2">
                          <label className="user-select-none">
                            Sell Price:
                          </label>
                          <input
                            className="AddItem-sell-price-input"
                            type="number"
                            min="1"
                            max="15000"
                            size={6}
                            step="1"
                            value={Number(customSellPrice).toString()}
                            onClick={() => selectInput}
                            onChange={(e) => customSellPriceOnChange(e, true)}
                            onKeyDown={() => blurInput}
                            onBlur={(e) => customSellPriceOnChange(e)}
                          />
                        </div>
                      )}
                      <div className="AddItem-goods-container">
                        <button
                          className="AddItem-add-btn"
                          onClick={() => addMayo()}
                        >
                          Add Mayo
                        </button>
                      </div>
                    </div>
                  )}
                  {selectedGood === "oil" && (
                    <div>
                      <div>
                        <label>Oil Type:</label>
                        <select
                          value={oilType}
                          onChange={(e) => oilTypeOnChange(e)}
                        >
                          {oilTypeDropdownOptions.map((oil) => {
                            return (
                              <option key={oil.value} value={oil.value}>
                                {oil.name}
                              </option>
                            );
                          })}
                        </select>
                        {oilType === "oil" && (
                          <div className="mt-2">
                            <label>Oil Ingredient:</label>
                            <select
                              value={oilIngredientId}
                              onChange={(e) => oilIngredientIdOnChange(e)}
                            >
                              {itemContext.itemRef["oil"].madeFrom.map(
                                (ingredient) => {
                                  return (
                                    <option key={ingredient} value={ingredient}>
                                      {itemContext.itemRef[ingredient].name}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>
                        )}
                      </div>
                      {isCustom && (
                        <div className="mt-2">
                          <label className="user-select-none">
                            Sell Price:
                          </label>
                          <input
                            className="AddItem-sell-price-input"
                            type="number"
                            min="1"
                            max="15000"
                            size={6}
                            step="1"
                            value={Number(customSellPrice).toString()}
                            onClick={() => selectInput}
                            onChange={(e) => customSellPriceOnChange(e, true)}
                            onKeyDown={() => blurInput}
                            onBlur={(e) => customSellPriceOnChange(e)}
                          />
                        </div>
                      )}
                      <div className="AddItem-goods-container">
                        <button
                          className="AddItem-add-btn"
                          onClick={() => addOil()}
                        >
                          Add Oil
                        </button>
                      </div>
                    </div>
                  )}
                  {(selectedGood === "pale_ale" ||
                    selectedGood === "beer" ||
                    selectedGood === "mead") && (
                    <div>
                      <div className="mt-2">
                        <div className="App-slider-container">
                          <div className="App-slider-inner">
                            <label className="switch" htmlFor="cask-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="cask-checkbox"
                                checked={isCask}
                                onChange={(e) => toggleIsCask(e)}
                              />
                              <div className="slider round"></div>
                            </label>
                          </div>
                          <label htmlFor="cask-checkbox">Use Cask</label>
                          <img
                            className="AddItem-custom-img"
                            src="./icons/cask.svg"
                            alt="custom"
                          />
                        </div>
                      </div>
                      {isCask && (
                        <div className="mt-2">
                          <label>Desired Quality:</label>
                          <select
                            value={caskQuality}
                            onChange={(e) => caskQualityOnChange(e)}
                          >
                            {qualityDropdownOptions.map((option) => {
                              if (option.value !== "normal")
                                return (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.name}
                                  </option>
                                );
                              else return "";
                            })}
                          </select>
                        </div>
                      )}
                    </div>
                  )}
                  {/* Show 'add good' button for shared templates */}
                  {(selectedGood === "pale_ale" ||
                    selectedGood === "beer" ||
                    selectedGood === "mead" ||
                    selectedGood === "coffee" ||
                    selectedGood === "green_tea" ||
                    selectedGood === "honey" ||
                    selectedGood === "cloth") && (
                    <span>
                      {isCustom && (
                        <div className="mt-2">
                          <label className="user-select-none">
                            Sell Price:
                          </label>
                          <input
                            className="AddItem-sell-price-input"
                            type="number"
                            min="1"
                            max="15000"
                            size={6}
                            step="1"
                            value={Number(customSellPrice).toString()}
                            onClick={() => selectInput}
                            onChange={(e) => customSellPriceOnChange(e, true)}
                            onKeyDown={() => blurInput}
                            onBlur={(e) => customSellPriceOnChange(e)}
                          />
                        </div>
                      )}
                      <div className="AddItem-goods-container">
                        <button
                          className="AddItem-add-btn"
                          onClick={() => addGood()}
                        >
                          Add Good
                        </button>
                      </div>
                    </span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddItem;
