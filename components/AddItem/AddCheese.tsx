import { ChangeEvent, useContext, useState } from "react";
import { ItemContext } from "../../pages/_app";
import {
  milkTypeDropdownOptions,
  qualityDropdownOptions,
} from "../../util/helpers";
import Image from "next/image";
import { blurInput, selectInput } from "../../util/events";

interface AddCheeseProps {
  isCask: boolean;
  caskQuality: string;
  isCustom: boolean;
  customSellPrice: number;
  caskQualityOnChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  toggleIsCask: (e: ChangeEvent<HTMLInputElement>) => void;
  isCustomOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  customSellPriceOnChange: (
    e: ChangeEvent<HTMLInputElement>,
    isChange?: boolean
  ) => void;
  addItem: (item: any) => void;
}

interface AddCheeseState {
  milkType: string;
  milkIsLarge: boolean;
}

const AddCheese: React.FC<AddCheeseProps> = (props) => {
  const itemContext = useContext(ItemContext);

  const [addCheeseState, setAddCheeseState] = useState<AddCheeseState>({
    milkType: milkTypeDropdownOptions[0].value,
    milkIsLarge: false,
  });

  const milkTypeOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddCheeseState({
      ...addCheeseState,
      milkType: e.currentTarget.value,
    });
  };

  const toggleMilkIsLarge = (e: ChangeEvent<HTMLInputElement>) => {
    let newState: any = {
      milkIsLarge: !addCheeseState.milkIsLarge,
    };

    if (props.isCask) {
      newState = {
        ...newState,
        caskQuality: "iridium",
      };
    }

    setAddCheeseState({
      ...addCheeseState,
      ...newState,
    });
  };

  const addCheese = () => {
    let cheeseId = addCheeseState.milkType === "cow" ? "cheese" : "goat_cheese";
    let name = itemContext.itemRef[cheeseId].name;
    let ingredientId;
    let startQuality = "normal";
    let quality;

    if (addCheeseState.milkType === "cow") {
      if (addCheeseState.milkIsLarge) ingredientId = "large_milk";
      else ingredientId = "milk";
    } else {
      if (addCheeseState.milkIsLarge) ingredientId = "large_goat_milk";
      else ingredientId = "goat_milk";
    }

    if (addCheeseState.milkIsLarge) startQuality = "gold";
    if (props.isCask) {
      quality = props.caskQuality;
    }

    props.addItem({
      addedAt: Date.now(),
      itemId: cheeseId,
      name,
      startQuality,
      quality,
      isCustom: props.isCustom,
      isCask: props.isCask,
      customSellPrice: props.customSellPrice,
      ingredientId,
      isLarge: addCheeseState.milkIsLarge,
      displayCategory: "cheese",
    });
  };

  return (
    <div>
      <div>
        <label>Type Of Milk:</label>
        <select
          value={addCheeseState.milkType}
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
                checked={addCheeseState.milkIsLarge}
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
                checked={props.isCask}
                onChange={props.toggleIsCask}
              />
              <div className="slider round"></div>
            </label>
          </div>
          <label htmlFor="cask-checkbox">Use Cask</label>
          <span className="AddItem-custom-img">
            <Image width="36" height="36" src="/icons/cask.svg" alt="custom" />
          </span>
        </div>
      </div>
      {props.isCask && (
        <div>
          <div className="mt-2">
            <label>Desired Quality:</label>
            {!addCheeseState.milkIsLarge && (
              <select
                value={props.caskQuality}
                onChange={props.caskQualityOnChange}
              >
                {qualityDropdownOptions.map((option) => {
                  if (option.value !== "normal")
                    return (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    );
                  else return "";
                })}
              </select>
            )}
            {addCheeseState.milkIsLarge && (
              <select
                value={props.caskQuality}
                onChange={props.caskQualityOnChange}
              >
                {qualityDropdownOptions.map((option) => {
                  if (option.value === "iridium")
                    return (
                      <option key={option.value} value={option.value}>
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
      {props.isCustom && (
        <div className="mt-2">
          <label className="user-select-none">Sell Price:</label>
          <input
            className="AddItem-sell-price-input"
            type="number"
            min="1"
            max="15000"
            size={6}
            step="1"
            value={props.customSellPrice}
            onClick={selectInput}
            onChange={(e) => props.customSellPriceOnChange(e, true)}
            onKeyDown={blurInput}
            onBlur={(e) => props.customSellPriceOnChange(e)}
          />
        </div>
      )}
      <div className="AddItem-goods-container">
        <button className="AddItem-add-btn" onClick={() => addCheese()}>
          Add Cheese
        </button>
      </div>
    </div>
  );
};

export default AddCheese;
