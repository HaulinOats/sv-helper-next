import { ChangeEvent, useContext, useState } from "react";
import { ItemContext } from "../../pages/_app";
import { Food } from "../../types/Food.type";
import { seasonDropdownOptions } from "../../util/helpers";
import Image from "next/image";
import { blurInput, selectInput } from "../../util/events";

interface AddCropState {
  itemId: string | undefined;
  fertilizerId: string | undefined;
  fertilizerCost: number;
  foodId: string | undefined;
  foodFarmingBuff: number;
  seedCost: number;
  seasonStartIdx: number;
  plantingDay: number;
  isGreenhouse: boolean;
  cropLimitToSeason: string;
  isCustom: boolean;
  customSellPrice: number;
}

interface Props {
  isCustom: boolean;
  addItem: (item: any) => void;
  resetCropState: () => void;
  isCustomOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  customSellPriceOnChange: (
    e: ChangeEvent<HTMLInputElement>,
    isChange?: boolean
  ) => void;
}

const AddCrop: React.FC<Props> = (props) => {
  const itemContext = useContext(ItemContext);

  const [addCropState, setAddCropState] = useState<AddCropState>({
    itemId: undefined,
    fertilizerId: undefined,
    fertilizerCost: 0,
    foodId: undefined,
    foodFarmingBuff: 0,
    seedCost: 0,
    seasonStartIdx: 0,
    plantingDay: 1,
    isGreenhouse: false,
    cropLimitToSeason: seasonDropdownOptions[0].value,
    isCustom: false,
    customSellPrice: 1,
  });

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

    setAddCropState({
      ...addCropState,
      ...newState,
    });
  };

  const fertilizerVendorOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddCropState({
      ...addCropState,
      fertilizerCost: Number(e.currentTarget.value),
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

    if (addCropState.fertilizerCost > 1000) {
      newState = {
        ...newState,
        fertilizerCost: 1000,
      };
    }
    if (addCropState.fertilizerCost < 0) {
      newState = {
        ...newState,
        fertilizerCost: 0,
      };
    }

    setAddCropState({
      ...addCropState,
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

    if (addCropState.seedCost > 1000) {
      newState = {
        ...newState,
        seedCost: 1000,
      };
    }
    if (addCropState.seedCost < 0) {
      newState = {
        ...newState,
        seedCost: 0,
      };
    }
    setAddCropState({
      ...addCropState,
      ...newState,
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

    setAddCropState({
      ...addCropState,
      ...newState,
    });
  };

  const toggleIsGreenhouse = () => {
    let newState: any = {
      isGreenhouse: !addCropState.isGreenhouse,
    };

    if (addCropState.isGreenhouse) {
      newState = {
        ...newState,
        seasonStartIdx: 0,
        plantingDay: 1,
      };
    }

    setAddCropState({
      ...addCropState,
      ...newState,
    });
  };

  const seedVendorOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddCropState({
      ...addCropState,
      seedCost: +e.currentTarget.value,
    });
  };

  const seasonOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddCropState({
      ...addCropState,
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

    if (addCropState.plantingDay > 28) {
      newState = {
        ...newState,
        plantingDay: 28,
      };
    } else if (addCropState.plantingDay < 1) {
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

    setAddCropState({
      ...addCropState,
      ...newState,
    });
  };

  const cropLimitToSeasonOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddCropState({
      ...addCropState,
      cropLimitToSeason: e.currentTarget.value,
    });
  };

  const cropOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.currentTarget.value.length) return resetCropState();

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

    setAddCropState({
      ...addCropState,
      ...newState,
      seedCost: 0,
      seasonStartIdx: 0,
      plantingDay: 1,
      isGreenhouse: false,
    });
    props.resetCropState();
  };

  const resetCropState = () => {
    setAddCropState({
      ...addCropState,
      seedCost: 0,
      seasonStartIdx: 0,
      plantingDay: 1,
      isGreenhouse: false,
    });
    props.resetCropState();
  };

  const addCrop = () => {
    props.addItem({
      addedAt: Date.now(),
      itemId: addCropState.itemId,
      foodId: addCropState.foodId,
      foodFarmingBuff: addCropState.foodFarmingBuff,
      seedCost: addCropState.seedCost,
      fertilizerId: addCropState.fertilizerId,
      fertilizerCost: addCropState.fertilizerCost,
      seasonStartIdx: addCropState.seasonStartIdx,
      plantingDay: addCropState.plantingDay,
      isGreenhouse: addCropState.isGreenhouse,
      isCustom: addCropState.isCustom,
      customSellPrice: addCropState.customSellPrice,
      displayCategory: "crop",
    });
    resetCropState();
  };

  return (
    <div className="AddItem-category-container">
      <div className="form-group mt-2">
        <label className="AddItem-fertilizer-label user-select-none">
          Fertilizer:
        </label>
        <select
          className="AddItem-fertilizer-select"
          value={addCropState.fertilizerId}
          onChange={fertilizerOnChange}
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
      {addCropState.fertilizerId && (
        <div className="form-group mt-2 ms-3">
          {!props.isCustom && (
            <div>
              <label className="user-select-none">Vendor:</label>
              <select
                className="AddItem-fertilizer-vendor-select"
                value={addCropState.fertilizerCost}
                onChange={fertilizerVendorOnChange}
              >
                <option value="0">No Vendor</option>
                {itemContext.itemRef[addCropState.fertilizerId].vendors!.map(
                  (vendor) => {
                    return (
                      <option key={vendor.id} value={vendor.cost}>
                        {itemContext.itemRef[vendor.id].name} - {vendor.cost}g
                      </option>
                    );
                  }
                )}
              </select>
            </div>
          )}
          {props.isCustom && (
            <div className="AddItem-fertilizer-vendor form-group mt-2">
              <label className="user-select-none">Fertilizer Cost:</label>
              <input
                className="AddItem-fertilizer-cost-input"
                type="number"
                min="0"
                max="1000"
                size={6}
                step="1"
                value={addCropState.fertilizerCost}
                onClick={selectInput}
                onChange={(e) => fertilizerCostOnChange(e, true)}
                onKeyDown={blurInput}
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
          value={addCropState.foodId}
          onChange={changeFoodId}
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
          value={addCropState.cropLimitToSeason}
          onChange={cropLimitToSeasonOnChange}
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
          value={addCropState.itemId}
          onChange={cropOnChange}
        >
          <option value="">- Select A Crop -</option>
          {itemContext.itemData.crops.map((item) => {
            if (addCropState.cropLimitToSeason === "all")
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            else if (item.seasons.includes(addCropState.cropLimitToSeason))
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            else return "";
          })}
        </select>
      </div>
      {addCropState.itemId && (
        <div className="AddItem-selected-item-outer">
          <div className="AddItem-selected-item-title-container">
            <span className="AddItem-selected-icon">
              <Image
                width="36"
                height="36"
                src={`/icons/crops/${
                  itemContext.itemRef[addCropState.itemId].icon
                }`}
                alt={itemContext.itemRef[addCropState.itemId].icon}
              />
            </span>
            <p className="d-inline fs-1 ms-2 align-bottom lh-1">
              {itemContext.itemRef[addCropState.itemId].name}
            </p>
          </div>
          <div className="mt-2">
            {!props.isCustom && (
              <span>
                <label className="user-select-none">Seed Cost:</label>
                <select
                  className="AddItem-vendor-select"
                  value={addCropState.seedCost}
                  onChange={seedVendorOnChange}
                >
                  <option value="0">No Vendor</option>
                  {itemContext.itemRef[
                    itemContext.itemRef[addCropState.itemId].seedId!
                  ].vendors!.map((vendor) => {
                    return (
                      <option key={vendor.id} value={vendor.cost}>
                        {itemContext.itemRef[vendor.id].name} - {vendor.cost}g
                      </option>
                    );
                  })}
                </select>
              </span>
            )}
            {props.isCustom && (
              <span>
                <label className="user-select-none">Seed Cost:</label>
                <input
                  className="AddItem-seed-cost-input"
                  type="number"
                  min="0"
                  max="1000"
                  size={6}
                  step="1"
                  value={addCropState.seedCost}
                  onClick={selectInput}
                  onChange={(e) => seedCostOnChange(e, true)}
                  onKeyDown={blurInput}
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
                    checked={addCropState.isGreenhouse}
                    onChange={toggleIsGreenhouse}
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
              <span className="AddItem-greenhouse-img">
                <Image
                  width="36"
                  height="36"
                  src="/icons/greenhouse.svg"
                  alt="custom"
                />
              </span>
            </div>
          </div>
          <div>
            {!addCropState.isGreenhouse && (
              <div>
                <div className="form-group mt-2">
                  <label className="user-select-none">Planting Season:</label>
                  <select
                    className="AddItem-season-select"
                    value={addCropState.seasonStartIdx}
                    onChange={seasonOnChange}
                  >
                    {itemContext.itemRef[addCropState.itemId].seasons.map(
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
                  <label className="user-select-none">Planting Day:</label>
                  <input
                    className="AddItem-planting-day-input"
                    type="number"
                    min="1"
                    max="28"
                    size={3}
                    value={addCropState.plantingDay}
                    onClick={selectInput}
                    onKeyDown={blurInput}
                    onChange={(e) => plantingDayOnChange(e, true)}
                    onBlur={(e) => plantingDayOnChange(e)}
                  />
                </div>
              </div>
            )}
            {props.isCustom && (
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
                  value={addCropState.customSellPrice}
                  onClick={selectInput}
                  onChange={(e) => props.customSellPriceOnChange(e, true)}
                  onKeyDown={blurInput}
                  onBlur={(e) => props.customSellPriceOnChange(e)}
                />
              </div>
            )}
            <button
              className="AddItem-add-btn btn my-2"
              type="submit"
              onClick={addCrop}
            >
              Add Item
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCrop;
