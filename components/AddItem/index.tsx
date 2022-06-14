import { ChangeEvent, useContext, useState } from "react";
import LevelPerksSelection from "../LevelPerksSelection";
import {
  categoryDropdownOptions,
  goodsDropdownOptions,
} from "../../util/helpers";
import { ItemContext } from "../../pages/_app";
import Image from "next/image";
import AddCrop from "./AddCrop";
import AddWineJuice from "./AddWineJuice";
import AddPreserves from "./AddPreserves";
import AddHoney from "./AddHoney";
import AddCheese from "./AddCheese";
import AddMayo from "./AddMayo";
import AddOil from "./AddOil";
import AddKegItem from "./AddKegItem";
import { blurInput, selectInput } from "../../util/events";

interface AddItemState {
  selectedCategory: string;
  selectedGood: string;
  isCask: boolean;
  caskQuality: string;
  honeyFlowerId: string | undefined;

  isCustom: boolean;
  customSellPrice: number;
}

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
    selectedCategory: categoryDropdownOptions[0].value,
    selectedGood: goodsDropdownOptions[0].value,

    isCask: false,
    caskQuality: "iridium",
    honeyFlowerId: undefined,

    isCustom: false,
    customSellPrice: 1,
  });

  const resetCropState = () => {
    console.log("resetCropState()");
    setAddItemState({
      ...addItemState,
      customSellPrice: 1,
    });
  };

  const resetGoodState = () => {
    setAddItemState({
      ...addItemState,
      selectedGood: goodsDropdownOptions[0].value,
      isCask: false,
      caskQuality: "iridium",
      customSellPrice: 1,
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

  const selectedGoodOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddItemState({
      ...addItemState,
      selectedGood: e.currentTarget.value,
      caskQuality: "iridium",
      isCask: false,
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

  const isCustomOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddItemState({
      ...addItemState,
      isCustom: !addItemState.isCustom,
      customSellPrice: 1,
    });
  };

  const customSellPriceOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    isChange: boolean = false
  ): void => {
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
    console.log({ ...addItemState, ...newState });
    setAddItemState({
      ...addItemState,
      ...newState,
    });
  };

  const setHoneyFlowerId = (honeyFlowerId: string | undefined) => {
    setAddItemState({
      ...addItemState,
      honeyFlowerId,
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

  let isKegItem = false;
  let isGood = false;
  switch (addItemState.selectedGood) {
    case "mead":
    case "beer":
    case "pale_ale":
      isKegItem = true;
    case "coffee":
    case "green_tea":
    case "honey":
    case "cloth":
      isGood = true;
  }

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
          <span className="AddItem-custom-img">
            <Image
              width="36"
              height="36"
              src="/icons/custom.svg"
              alt="custom"
            />
          </span>
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
            <AddCrop
              addItem={props.addItem}
              isCustom={addItemState.isCustom}
              isCustomOnChange={isCustomOnChange}
              customSellPriceOnChange={customSellPriceOnChange}
              resetCropState={resetCropState}
            />
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
                    <AddWineJuice
                      isCask={addItemState.isCask}
                      caskQuality={addItemState.caskQuality}
                      toggleIsCask={toggleIsCask}
                      addItem={props.addItem}
                      isCustom={addItemState.isCustom}
                      isCustomOnChange={isCustomOnChange}
                      customSellPrice={addItemState.customSellPrice}
                      customSellPriceOnChange={customSellPriceOnChange}
                      caskQualityOnChange={caskQualityOnChange}
                    />
                  )}
                  {addItemState.selectedGood === "preserves" && (
                    <AddPreserves
                      isCustom={addItemState.isCustom}
                      isCustomOnChange={isCustomOnChange}
                      customSellPrice={addItemState.customSellPrice}
                      customSellPriceOnChange={customSellPriceOnChange}
                      addItem={props.addItem}
                    />
                  )}
                  {addItemState.selectedGood === "honey" && (
                    <AddHoney
                      honeyFlowerId={addItemState.honeyFlowerId}
                      setHoneyFlowerId={setHoneyFlowerId}
                    />
                  )}
                  {addItemState.selectedGood === "cheese" && (
                    <AddCheese
                      isCask={addItemState.isCask}
                      caskQuality={addItemState.caskQuality}
                      caskQualityOnChange={caskQualityOnChange}
                      toggleIsCask={toggleIsCask}
                      isCustom={addItemState.isCustom}
                      isCustomOnChange={isCustomOnChange}
                      customSellPrice={addItemState.customSellPrice}
                      customSellPriceOnChange={customSellPriceOnChange}
                      addItem={props.addItem}
                    />
                  )}
                  {addItemState.selectedGood === "mayo" && (
                    <AddMayo
                      isCustom={addItemState.isCustom}
                      isCustomOnChange={isCustomOnChange}
                      customSellPrice={addItemState.customSellPrice}
                      customSellPriceOnChange={customSellPriceOnChange}
                      addItem={props.addItem}
                    />
                  )}
                  {addItemState.selectedGood === "oil" && (
                    <AddOil
                      isCustom={addItemState.isCustom}
                      isCustomOnChange={isCustomOnChange}
                      customSellPrice={addItemState.customSellPrice}
                      customSellPriceOnChange={customSellPriceOnChange}
                      addItem={props.addItem}
                    />
                  )}
                  {isKegItem && (
                    <AddKegItem
                      isCask={addItemState.isCask}
                      caskQuality={addItemState.caskQuality}
                      toggleIsCask={toggleIsCask}
                      addItem={props.addItem}
                      isCustom={addItemState.isCustom}
                      isCustomOnChange={isCustomOnChange}
                      customSellPrice={addItemState.customSellPrice}
                      customSellPriceOnChange={customSellPriceOnChange}
                      caskQualityOnChange={caskQualityOnChange}
                    />
                  )}
                  {/* Show 'add good' button for shared templates */}
                  {isGood && (
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
                            onClick={selectInput}
                            onChange={(e) => customSellPriceOnChange(e, true)}
                            onKeyDown={blurInput}
                            onBlur={(e) => customSellPriceOnChange(e)}
                          />
                        </div>
                      )}
                      <div className="AddItem-goods-container">
                        <button className="AddItem-add-btn" onClick={addGood}>
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
