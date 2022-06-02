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
import { AddItemState } from "../types/AddItemState.type";

interface Props {
  addItemPanelIsShowing: boolean;
  hideAddItemPanel: () => void;
  addItem: (item: any) => void;
  setDynamicField: (
    stateName: string,
    stateObj: { [key: string]: any }
  ) => void;
}

const AddItem: React.FC<Props> = (props: Props) => {
  const itemContext = useContext(ItemContext);

  const [addItemState, setAddItemState] = useState<AddItemState>({
    fertilizerId: undefined,
    fertilizerCost: 0,
    foodId: undefined,
    foodFarmingBuff: 0,
    seedCost: 0,
    itemId: undefined,
    seasonStartIdx: 0,
    plantingDay: 1,
    isGreenhouse: false,
    selectedCategory: categoryDropdownOptions[0].value,
    cropLimitToSeason: seasonDropdownOptions[0].value,
    selectedGood: goodsDropdownOptions[0].value,
    wineJuiceLimitToSeason: seasonDropdownOptions[0].value,
    preservesLimitToSeason: seasonDropdownOptions[0].value,
    wineProduceId: undefined,
    isCask: false,
    caskQuality: "iridium",
    preservesProduceId: undefined,
    honeyFlowerId: undefined,
    milkType: milkTypeDropdownOptions[0].value,
    milkIsLarge: false,
    eggType: "egg",
    eggQuality: qualityDropdownOptions[0].value,
    oilType: oilTypeDropdownOptions[0].value,
    oilIngredientId: itemContext.itemRef["oil"].madeFrom[0],
    isCustom: false,
    customSellPrice: 1,
  });

  const selectInput = (e: Event) => {
    (e.target as HTMLInputElement).select();
  };

  const blurInput = (e: KeyboardEvent) => {
    if (e.key === "Enter") (e.target as HTMLInputElement).blur();
  };

  const resetCropState = () => {
    setAddItemState({
      ...addItemState,
      itemId: undefined,
      seedCost: 0,
      seasonStartIdx: 0,
      plantingDay: 1,
      customSellPrice: 1,
      isGreenhouse: false,
    });
  };

  const resetGoodState = () => {
    setAddItemState({
      ...addItemState,
      selectedGood: goodsDropdownOptions[0].value,
      wineJuiceLimitToSeason: seasonDropdownOptions[0].value,
      preservesLimitToSeason: seasonDropdownOptions[0].value,
      wineProduceId: undefined,
      isCask: false,
      caskQuality: "iridium",
      preservesProduceId: undefined,
      honeyFlowerId: undefined,
      milkType: milkTypeDropdownOptions[0].value,
      milkIsLarge: false,
      eggType: "egg",
      eggQuality: qualityDropdownOptions[0].value,
      customSellPrice: 1,
    });
  };

  const cropOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    resetCropState();
    let newState: any = {
      itemId: e.currentTarget.value,
      seedCost: 0,
    };
    // For crops that only grow in Greenhouse (Cactus Fruit)
    if (!itemContext.itemRef[e.target.value].seasons.length) {
      newState = {
        ...newState,
        isGreenhouse: true,
      };
    }

    setAddItemState({
      ...addItemState,
      ...newState,
    });
  };

  const selectedCategoryOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    resetCropState();
    resetGoodState();
    setAddItemState({
      ...addItemState,
      selectedCategory: e.currentTarget.value,
    });
  };

  const fertilizerOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let newState: any = {
      fertilizerCost: 0,
    };

    if (e.currentTarget.value === "") {
      newState = {
        ...newState,
        fertilizerId: undefined,
      };
    } else {
      newState = {
        ...newState,
        fertilizerId: e.currentTarget.value,
      };
    }

    setAddItemState({
      ...addItemState,
      ...newState,
    });
  };

  const fertilizerVendorOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddItemState({
      ...addItemState,
      fertilizerCost: Number(e.currentTarget.value),
    });
  };

  const changeFoodId = (e: ChangeEvent<HTMLSelectElement>) => {
    let newState: any = {
      foodFarmingBuff: Number(
        e.currentTarget.selectedOptions[0].dataset.farmingBuff
      ),
    };
    if (e.target.value === "") {
      newState = {
        ...newState,
        foodId: undefined,
      };
    } else {
      newState = {
        ...newState,
        foodId: e.currentTarget.value,
      };
    }

    setAddItemState({
      ...addItemState,
      ...newState,
    });
  };

  const toggleIsGreenhouse = () => {
    let newState: any = {
      isGreenhouse: !addItemState.isGreenhouse,
    };

    if (addItemState.isGreenhouse) {
      newState = {
        ...newState,
        seasonStartIdx: 0,
        plantingDay: 1,
      };
    }

    setAddItemState({
      ...addItemState,
      ...newState,
    });
  };

  const seedVendorOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddItemState({
      ...addItemState,
      seedCost: +e.currentTarget.value,
    });
  };

  const seasonOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddItemState({
      ...addItemState,
      seasonStartIdx: +e.currentTarget.value,
    });
  };

  const plantingDayOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    isChange = false
  ) => {
    let newState = {};

    if (isChange) {
      newState = {
        plantingDay: Math.round(+e.currentTarget.value),
      };
    }

    if (addItemState.plantingDay > 28) {
      newState = {
        ...newState,
        plantingDay: 28,
      };
    } else if (addItemState.plantingDay < 1) {
      newState = {
        ...newState,
        plantingDay: 1,
      };
    } else {
      newState = {
        ...newState,
        plantingDay: Math.round(+e.currentTarget.value),
      };
    }

    setAddItemState({
      ...addItemState,
      ...newState,
    });
  };

  const cropLimitToSeasonOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddItemState({
      ...addItemState,
      cropLimitToSeason: e.currentTarget.value,
    });
  };

  const selectedGoodOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddItemState({
      ...addItemState,
      selectedGood: e.currentTarget.value,
      caskQuality: "iridium",
      isCask: false,
    });
  };

  const wineJuiceLimitToSeasonOnChange = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setAddItemState({
      ...addItemState,
      wineJuiceLimitToSeason: e.currentTarget.value,
    });
  };

  const toggleIsCask = (e: ChangeEvent<HTMLInputElement>) => {
    setAddItemState({
      ...addItemState,
      isCask: !addItemState.isCask,
    });
  };

  const caskQualityOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddItemState({
      ...addItemState,
      caskQuality: e.currentTarget.value,
    });
  };

  const preservesLimitToSeasonOnChange = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setAddItemState({
      ...addItemState,
      preservesLimitToSeason: e.currentTarget.value,
    });
  };

  const wineProduceIdOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      setAddItemState({
        ...addItemState,
        wineProduceId: undefined,
      });
      return;
    }
    setAddItemState({
      ...addItemState,
      wineProduceId: e.currentTarget.value,
    });
  };

  const preservesProduceIdOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      setAddItemState({
        ...addItemState,
        preservesProduceId: undefined,
      });
      return;
    }
    setAddItemState({
      ...addItemState,
      preservesProduceId: e.currentTarget.value,
    });
  };

  const honeyFlowerIdOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      setAddItemState({
        ...addItemState,
        honeyFlowerId: undefined,
      });
      return;
    }
    setAddItemState({
      ...addItemState,
      honeyFlowerId: e.currentTarget.value,
    });
  };

  const milkTypeOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddItemState({
      ...addItemState,
      milkType: e.currentTarget.value,
    });
  };

  const toggleMilkIsLarge = (e: ChangeEvent<HTMLInputElement>) => {
    let newState: any = {
      milkIsLarge: !addItemState.milkIsLarge,
    };

    if (addItemState.isCask) {
      newState = {
        ...newState,
        caskQuality: "iridium",
      };
    }

    setAddItemState({
      ...addItemState,
      ...newState,
    });
  };

  const eggTypeOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddItemState({
      ...addItemState,
      eggType: e.currentTarget.value,
    });
  };

  const eggQualityOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddItemState({
      ...addItemState,
      eggQuality: e.currentTarget.value,
    });
  };

  const oilTypeOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddItemState({
      ...addItemState,
      oilType: e.currentTarget.value,
    });
  };

  const oilIngredientIdOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddItemState({
      ...addItemState,
      oilIngredientId: e.currentTarget.value,
    });
  };

  const isCustomOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddItemState({
      ...addItemState,
      isCustom: !addItemState.isCustom,
      fertilizerId: undefined,
      fertilizerCost: 0,
      seedCost: 0,
      customSellPrice: 1,
    });
  };

  const fertilizerCostOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    isChange = false
  ) => {
    let newState: any = {};
    if (isChange) {
      newState = {
        fertilizerCost: Math.round(+e.currentTarget.value),
      };
    }

    if (addItemState.fertilizerCost > 1000) {
      newState = {
        ...newState,
        fertilizerCost: 1000,
      };
    }
    if (addItemState.fertilizerCost < 0) {
      newState = {
        ...newState,
        fertilizerCost: 0,
      };
    }

    setAddItemState({
      ...addItemState,
      ...newState,
    });
  };

  const seedCostOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    isChange = false
  ) => {
    let newState: any = {};
    if (isChange) {
      newState = {
        seedCost: Math.round(+e.currentTarget.value),
      };
    }

    if (addItemState.seedCost > 1000) {
      newState = {
        ...newState,
        seedCost: 1000,
      };
    }
    if (addItemState.seedCost < 0) {
      newState = {
        ...newState,
        seedCost: 0,
      };
    }
    setAddItemState({
      ...addItemState,
      ...newState,
    });
  };

  const customSellPriceOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    isChange = false
  ) => {
    let newState: any = {};
    if (isChange) {
      newState = {
        customSellPrice: Math.round(+e.currentTarget.value),
      };
    }

    if (addItemState.customSellPrice > 15000) {
      newState = {
        ...newState,
        customSellPrice: 1000,
      };
    }
    if (addItemState.customSellPrice < 1) {
      newState = {
        ...newState,
        customSellPrice: 1,
      };
    }
    setAddItemState({
      ...addItemState,
      ...newState,
    });
  };

  const addCrop = () => {
    // let modifierActive = priceModifierIsActive;

    // if(isCustom) modifierActive = true;

    props.addItem({
      addedAt: Date.now(),
      itemId: addItemState.itemId,
      foodId: addItemState.foodId,
      foodFarmingBuff: addItemState.foodFarmingBuff,
      seedCost: addItemState.seedCost,
      fertilizerId: addItemState.fertilizerId,
      fertilizerCost: addItemState.fertilizerCost,
      seasonStartIdx: addItemState.seasonStartIdx,
      plantingDay: addItemState.plantingDay,
      isGreenhouse: addItemState.isGreenhouse,
      isCustom: addItemState.isCustom,
      customSellPrice: addItemState.customSellPrice,
      displayCategory: "crop",
    });
    resetCropState();
  };

  const addWineOrJuice = () => {
    if (!addItemState.wineProduceId) return;

    let isWine = itemContext.itemRef[addItemState.wineProduceId].isWineable
      ? true
      : false;
    let ingredientId = addItemState.wineProduceId;
    let name = `${itemContext.itemRef[addItemState.wineProduceId].name} Wine`;
    let itemId = "wine";
    let qualityId;

    if (!isWine) {
      itemId = "juice";
      name = `${itemContext.itemRef[addItemState.wineProduceId].name} Wine`;
    }

    if (addItemState.isCask) {
      qualityId = addItemState.caskQuality;
    }

    props.addItem({
      addedAt: Date.now(),
      itemId,
      name,
      isCustom: addItemState.isCustom,
      customSellPrice: addItemState.customSellPrice,
      ingredientId,
      isCask: addItemState.isCask,
      qualityId,
      displayCategory: "wineJuice",
    });
  };

  const addPreserve = () => {
    if (!addItemState.preservesProduceId) return;

    let isJelly =
      itemContext.itemRef[addItemState.preservesProduceId].subCategory ===
      "fruits"
        ? true
        : false;
    let itemId = "jelly";
    let name = `${
      itemContext.itemRef[addItemState.preservesProduceId].name
    } Jelly`;
    let ingredientId = addItemState.preservesProduceId;

    if (!isJelly) {
      itemId = "pickles";
      name = `Pickled ${
        itemContext.itemRef[addItemState.preservesProduceId].name
      }`;
    }

    props.addItem({
      addedAt: Date.now(),
      itemId,
      name,
      isCustom: addItemState.isCustom,
      customSellPrice: addItemState.customSellPrice,
      ingredientId,
      displayCategory: "preserves",
    });
  };

  const addGood = () => {
    let isHoney = addItemState.selectedGood === "honey" ? true : false;
    let name = itemContext.itemRef[addItemState.selectedGood].name;
    let quality;

    if (isHoney && addItemState.honeyFlowerId) {
      name = `${itemContext.itemRef[addItemState.honeyFlowerId].name} ${name}`;
    }

    if (addItemState.isCask) {
      quality = addItemState.caskQuality;
    }

    props.addItem({
      addedAt: Date.now(),
      itemId: addItemState.selectedGood,
      name,
      quality,
      isCustom: addItemState.isCustom,
      isCask: addItemState.isCask,
      customSellPrice: addItemState.customSellPrice,
      ingredientId: isHoney
        ? addItemState.honeyFlowerId
        : itemContext.itemRef[addItemState.selectedGood].madeFrom,
      displayCategory: "good",
    });
  };

  const addCheese = () => {
    let cheeseId = addItemState.milkType === "cow" ? "cheese" : "goat_cheese";
    let name = itemContext.itemRef[cheeseId].name;
    let ingredientId;
    let startQuality = "normal";
    let quality;

    if (addItemState.milkType === "cow") {
      if (addItemState.milkIsLarge) ingredientId = "large_milk";
      else ingredientId = "milk";
    } else {
      if (addItemState.milkIsLarge) ingredientId = "large_goat_milk";
      else ingredientId = "goat_milk";
    }

    if (addItemState.milkIsLarge) startQuality = "gold";
    if (addItemState.isCask) {
      quality = addItemState.caskQuality;
    }

    props.addItem({
      addedAt: Date.now(),
      itemId: cheeseId,
      name,
      startQuality,
      quality,
      isCustom: addItemState.isCustom,
      isCask: addItemState.isCask,
      customSellPrice: addItemState.customSellPrice,
      ingredientId,
      isLarge: addItemState.milkIsLarge,
      displayCategory: "cheese",
    });
  };

  const addMayo = () => {
    props.addItem({
      addedAt: Date.now(),
      isCustom: addItemState.isCustom,
      customSellPrice: addItemState.customSellPrice,
      ingredientId: addItemState.eggType,
      eggQuality: addItemState.eggQuality,
      displayCategory: "mayo",
    });
  };

  const addOil = () => {
    props.addItem({
      addedAt: Date.now(),
      isCustom: addItemState.isCustom,
      customSellPrice: addItemState.customSellPrice,
      itemId: addItemState.oilType,
      ingredientId:
        addItemState.oilType === "oil"
          ? addItemState.oilIngredientId
          : itemContext.itemRef[addItemState.oilType].madeFrom[0],
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
        <LevelPerksSelection setDynamicField={props.setDynamicField} />
        <hr></hr>
        <div className="App-slider-container">
          <div className="App-slider-inner">
            <label className="switch" htmlFor="is-custom">
              <input
                type="checkbox"
                id="is-custom"
                checked={addItemState.isCustom}
                onChange={(e) => isCustomOnChange(e)}
              />
              <div className="slider round"></div>
            </label>
          </div>
          <label htmlFor="is-custom">Enter Values Myself</label>
          <img
            className="AddItem-custom-img"
            src="/icons/custom.svg"
            alt="custom"
          />
        </div>
        {addItemState.isCustom && (
          <p className="AddItem-custom-subtitle">
            <i>Calculations will ignore perk selections</i>
          </p>
        )}
        <div className="App-category-select-container form-group mt-2">
          <label>Select Category:</label>
          <select
            className="App-category-select"
            value={addItemState.selectedCategory}
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
          {addItemState.selectedCategory === "crops" && (
            <div className="AddItem-category-container">
              <div className="form-group mt-2">
                <label className="AddItem-fertilizer-label user-select-none">
                  Fertilizer:
                </label>
                <select
                  className="AddItem-fertilizer-select"
                  value={addItemState.fertilizerId}
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
              {addItemState.fertilizerId && (
                <div className="form-group mt-2 ms-3">
                  {!addItemState.isCustom && (
                    <div>
                      <label className="user-select-none">Vendor:</label>
                      <select
                        className="AddItem-fertilizer-vendor-select"
                        value={addItemState.fertilizerCost}
                        onChange={(e) => fertilizerVendorOnChange(e)}
                      >
                        <option value="0">No Vendor</option>
                        {itemContext.itemRef[
                          addItemState.fertilizerId
                        ].vendors!.map((vendor) => {
                          return (
                            <option key={vendor.id} value={vendor.cost}>
                              {itemContext.itemRef[vendor.id].name} -{" "}
                              {vendor.cost}g
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  )}
                  {addItemState.isCustom && (
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
                        value={addItemState.fertilizerCost}
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
                  value={addItemState.foodId}
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
                  value={addItemState.cropLimitToSeason}
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
                  value={addItemState.itemId}
                  onChange={(e) => cropOnChange(e)}
                >
                  <option value="">- Select A Crop -</option>
                  {itemContext.itemData.crops.map((item) => {
                    if (addItemState.cropLimitToSeason === "all")
                      return (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      );
                    else if (
                      item.seasons.includes(addItemState.cropLimitToSeason)
                    )
                      return (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      );
                    else return "";
                  })}
                </select>
              </div>
              {addItemState.itemId && (
                <div className="AddItem-selected-item-outer pt-4">
                  <div className="AddItem-selected-item-title-container border-top border-3 pt-2">
                    <img
                      src={`/icons/crops/${
                        itemContext.itemRef[addItemState.itemId].icon
                      }`}
                      alt={itemContext.itemRef[addItemState.itemId].icon}
                    />
                    <p className="d-inline fs-1 ms-2 align-bottom lh-1">
                      {itemContext.itemRef[addItemState.itemId].name}
                    </p>
                  </div>
                  <div className="mt-2">
                    {!addItemState.isCustom && (
                      <span>
                        <label className="user-select-none">Seed Cost:</label>
                        <select
                          className="AddItem-vendor-select"
                          value={addItemState.seedCost}
                          onChange={(e) => seedVendorOnChange(e)}
                        >
                          <option value="0">No Vendor</option>
                          {itemContext.itemRef[
                            itemContext.itemRef[addItemState.itemId].seedId!
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
                    {addItemState.isCustom && (
                      <span>
                        <label className="user-select-none">Seed Cost:</label>
                        <input
                          className="AddItem-seed-cost-input"
                          type="number"
                          min="0"
                          max="1000"
                          size={6}
                          step="1"
                          value={addItemState.seedCost}
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
                            checked={addItemState.isGreenhouse}
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
                        src="/icons/greenhouse.svg"
                        alt="custom"
                      />
                    </div>
                  </div>
                  <div>
                    {!addItemState.isGreenhouse && (
                      <div>
                        <div className="form-group mt-2">
                          <label className="user-select-none">
                            Planting Season:
                          </label>
                          <select
                            className="AddItem-season-select"
                            value={addItemState.seasonStartIdx}
                            onChange={(e) => seasonOnChange(e)}
                          >
                            {itemContext.itemRef[
                              addItemState.itemId
                            ].seasons.map((season, idx) => {
                              return (
                                <option key={season} value={idx}>
                                  {season}
                                </option>
                              );
                            })}
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
                            value={addItemState.plantingDay}
                            onClick={() => selectInput}
                            onKeyDown={() => blurInput}
                            onChange={(e) => plantingDayOnChange(e, true)}
                            onBlur={(e) => plantingDayOnChange(e)}
                          />
                        </div>
                      </div>
                    )}
                    {addItemState.isCustom && (
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
                          value={addItemState.customSellPrice}
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
          {addItemState.selectedCategory === "goods" && (
            <div className="AddItem-goods-container">
              <div className="form-group">
                <label>Select Good:</label>
                <select
                  className="AddItem-selected"
                  value={addItemState.selectedGood}
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
              {addItemState.selectedGood && (
                <div className="mt-2">
                  {addItemState.selectedGood === "wineJuice" && (
                    <div className="AddItem-goods-container">
                      <div className="mt-2">
                        <div className="App-slider-container">
                          <div className="App-slider-inner">
                            <label className="switch" htmlFor="cask-checkbox">
                              <input
                                type="checkbox"
                                id="cask-checkbox"
                                checked={addItemState.isCask}
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
                            src="/icons/cask.svg"
                            alt="custom"
                          />
                        </div>
                        {addItemState.isCask && (
                          <p className="AddItem-custom-subtitle">
                            <i>Limited to fruits/wine</i>
                          </p>
                        )}
                      </div>
                      {addItemState.isCask && (
                        <div className="mt-2">
                          <label>Desired Quality:</label>
                          <select
                            value={addItemState.caskQuality}
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
                          value={addItemState.wineJuiceLimitToSeason}
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
                          value={addItemState.wineProduceId}
                          onChange={(e) => wineProduceIdOnChange(e)}
                        >
                          <option value="">- Select Produce -</option>
                          {itemContext.itemData.artisanFruitAndVegIds.map(
                            (id) => {
                              if (
                                addItemState.wineJuiceLimitToSeason === "all" &&
                                ((addItemState.isCask &&
                                  itemContext.itemRef[id].isWineable) ||
                                  !addItemState.isCask)
                              )
                                return (
                                  <option key={id} value={id}>
                                    {itemContext.itemRef[id].name}
                                  </option>
                                );
                              else if (
                                itemContext.itemRef[id].seasons.includes(
                                  addItemState.wineJuiceLimitToSeason
                                ) &&
                                ((addItemState.isCask &&
                                  itemContext.itemRef[id].isWineable) ||
                                  !addItemState.isCask)
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
                      {addItemState.isCustom && (
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
                            value={addItemState.customSellPrice}
                            onClick={() => selectInput}
                            onChange={(e) => customSellPriceOnChange(e, true)}
                            onKeyDown={() => blurInput}
                            onBlur={(e) => customSellPriceOnChange(e)}
                          />
                        </div>
                      )}
                      {addItemState.wineProduceId && (
                        <button
                          className="AddItem-add-btn"
                          onClick={() => addWineOrJuice()}
                        >
                          Add Wine/Juice
                        </button>
                      )}
                    </div>
                  )}
                  {addItemState.selectedGood === "preserves" && (
                    <div className="AddItem-goods-container">
                      <div>
                        <label>Limit To Season:</label>
                        <select
                          value={addItemState.preservesLimitToSeason}
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
                          value={addItemState.preservesProduceId}
                          onChange={(e) => preservesProduceIdOnChange(e)}
                        >
                          <option value="">- Select Produce -</option>
                          {itemContext.itemData.artisanFruitAndVegIds.map(
                            (id) => {
                              if (addItemState.preservesLimitToSeason === "all")
                                return (
                                  <option key={id} value={id}>
                                    {itemContext.itemRef[id].name}
                                  </option>
                                );
                              else if (
                                itemContext.itemRef[id].seasons.includes(
                                  addItemState.preservesLimitToSeason
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
                      {addItemState.isCustom && (
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
                            value={addItemState.customSellPrice}
                            onClick={() => selectInput}
                            onChange={(e) => customSellPriceOnChange(e, true)}
                            onKeyDown={() => blurInput}
                            onBlur={(e) => customSellPriceOnChange(e)}
                          />
                        </div>
                      )}
                      {addItemState.preservesProduceId && (
                        <button
                          className="AddItem-add-btn"
                          onClick={() => addPreserve()}
                        >
                          Add Preserve
                        </button>
                      )}
                    </div>
                  )}
                  {addItemState.selectedGood === "honey" && (
                    <div>
                      <label>Flower Type:</label>
                      <select
                        value={addItemState.honeyFlowerId}
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
                  {addItemState.selectedGood === "cheese" && (
                    <div>
                      <div>
                        <label>Type Of Milk:</label>
                        <select
                          value={addItemState.milkType}
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
                                checked={addItemState.milkIsLarge}
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
                                checked={addItemState.isCask}
                                onChange={(e) => toggleIsCask(e)}
                              />
                              <div className="slider round"></div>
                            </label>
                          </div>
                          <label htmlFor="cask-checkbox">Use Cask</label>
                          <img
                            className="AddItem-custom-img"
                            src="/icons/cask.svg"
                            alt="custom"
                          />
                        </div>
                      </div>
                      {addItemState.isCask && (
                        <div>
                          <div className="mt-2">
                            <label>Desired Quality:</label>
                            {!addItemState.milkIsLarge && (
                              <select
                                value={addItemState.caskQuality}
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
                            {addItemState.milkIsLarge && (
                              <select
                                value={addItemState.caskQuality}
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
                      {addItemState.isCustom && (
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
                            value={addItemState.customSellPrice}
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
                  {addItemState.selectedGood === "mayo" && (
                    <div>
                      <div>
                        <label>Type Of Egg:</label>
                        <select
                          value={addItemState.eggType}
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
                      {addItemState.eggType === "ostrich_egg" && (
                        <div className="mt-2">
                          <label>Egg Quality:</label>
                          <select
                            value={addItemState.eggQuality}
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
                      {addItemState.isCustom && (
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
                            value={addItemState.customSellPrice}
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
                  {addItemState.selectedGood === "oil" && (
                    <div>
                      <div>
                        <label>Oil Type:</label>
                        <select
                          value={addItemState.oilType}
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
                        {addItemState.oilType === "oil" && (
                          <div className="mt-2">
                            <label>Oil Ingredient:</label>
                            <select
                              value={addItemState.oilIngredientId}
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
                      {addItemState.isCustom && (
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
                            value={addItemState.customSellPrice}
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
                  {(addItemState.selectedGood === "pale_ale" ||
                    addItemState.selectedGood === "beer" ||
                    addItemState.selectedGood === "mead") && (
                    <div>
                      <div className="mt-2">
                        <div className="App-slider-container">
                          <div className="App-slider-inner">
                            <label className="switch" htmlFor="cask-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="cask-checkbox"
                                checked={addItemState.isCask}
                                onChange={(e) => toggleIsCask(e)}
                              />
                              <div className="slider round"></div>
                            </label>
                          </div>
                          <label htmlFor="cask-checkbox">Use Cask</label>
                          <img
                            className="AddItem-custom-img"
                            src="/icons/cask.svg"
                            alt="custom"
                          />
                        </div>
                      </div>
                      {addItemState.isCask && (
                        <div className="mt-2">
                          <label>Desired Quality:</label>
                          <select
                            value={addItemState.caskQuality}
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
                  {(addItemState.selectedGood === "pale_ale" ||
                    addItemState.selectedGood === "beer" ||
                    addItemState.selectedGood === "mead" ||
                    addItemState.selectedGood === "coffee" ||
                    addItemState.selectedGood === "green_tea" ||
                    addItemState.selectedGood === "honey" ||
                    addItemState.selectedGood === "cloth") && (
                    <span>
                      {addItemState.isCustom && (
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
                            value={addItemState.customSellPrice}
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
