import { ChangeEvent, useContext, useState } from "react";
import { ItemContext } from "../../pages/_app";
import {
  qualityDropdownOptions,
  seasonDropdownOptions,
} from "../../util/helpers";
import Image from "next/image";
import { blurInput, selectInput } from "../../util/events";

interface AddWineJuiceProps {
  isCask: boolean;
  isCustom: boolean;
  customSellPrice: number;
  caskQuality: string;
  caskQualityOnChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  isCustomOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  customSellPriceOnChange: (
    e: ChangeEvent<HTMLInputElement>,
    isChange?: boolean
  ) => void;
  toggleIsCask: (e: ChangeEvent<HTMLInputElement>) => void;
  addItem: (item: any) => void;
}

interface AddWineJuiceState {
  wineJuiceLimitToSeason: string;
  wineProduceId: string | undefined;
}

const AddWineJuice: React.FC<AddWineJuiceProps> = (props) => {
  const itemContext = useContext(ItemContext);

  const [addWineJuiceState, setAddWineJuiceState] = useState<AddWineJuiceState>(
    {
      wineJuiceLimitToSeason: seasonDropdownOptions[0].value,
      wineProduceId: undefined,
    }
  );

  const wineJuiceLimitToSeasonOnChange = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setAddWineJuiceState({
      ...addWineJuiceState,
      wineJuiceLimitToSeason: e.currentTarget.value,
    });
  };

  const wineProduceIdOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      setAddWineJuiceState({
        ...addWineJuiceState,
        wineProduceId: undefined,
      });
      return;
    }
    setAddWineJuiceState({
      ...addWineJuiceState,
      wineProduceId: e.currentTarget.value,
    });
  };

  const addWineOrJuice = () => {
    if (!addWineJuiceState.wineProduceId) return;

    let isWine = itemContext.itemRef[addWineJuiceState.wineProduceId].isWineable
      ? true
      : false;
    let ingredientId = addWineJuiceState.wineProduceId;
    let name = `${
      itemContext.itemRef[addWineJuiceState.wineProduceId].name
    } Wine`;
    let itemId = "wine";
    let qualityId;

    if (!isWine) {
      itemId = "juice";
      name = `${
        itemContext.itemRef[addWineJuiceState.wineProduceId].name
      } Wine`;
    }

    if (props.isCask) {
      qualityId = props.caskQuality;
    }

    props.addItem({
      addedAt: Date.now(),
      itemId,
      name,
      isCustom: props.isCustom,
      customSellPrice: props.customSellPrice,
      ingredientId,
      isCask: props.isCask,
      qualityId,
      displayCategory: "wineJuice",
    });
  };

  return (
    <div className="AddItem-goods-container">
      <div className="mt-2">
        <div className="App-slider-container">
          <div className="App-slider-inner">
            <label className="switch" htmlFor="cask-checkbox">
              <input
                type="checkbox"
                id="cask-checkbox"
                checked={props.isCask}
                onChange={props.toggleIsCask}
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
          <span className="AddItem-custom-img">
            <Image width="36" height="36" src="/icons/cask.svg" alt="custom" />
          </span>
        </div>
        {props.isCask && (
          <p className="AddItem-custom-subtitle">
            <i>Limited to fruits/wine</i>
          </p>
        )}
      </div>
      {props.isCask && (
        <div className="mt-2">
          <label>Desired Quality:</label>
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
        </div>
      )}
      <div className="mt-2">
        <label>Limit To Season:</label>
        <select
          value={addWineJuiceState.wineJuiceLimitToSeason}
          onChange={wineJuiceLimitToSeasonOnChange}
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
      <div className="mt-2">
        <label>Select Produce:</label>
        <select
          value={addWineJuiceState.wineProduceId}
          onChange={wineProduceIdOnChange}
        >
          <option value="">- Select Produce -</option>
          {itemContext.itemData.artisanFruitAndVegIds.map((id) => {
            if (
              addWineJuiceState.wineJuiceLimitToSeason === "all" &&
              ((props.isCask && itemContext.itemRef[id].isWineable) ||
                !props.isCask)
            )
              return (
                <option key={id} value={id}>
                  {itemContext.itemRef[id].name}
                </option>
              );
            else if (
              itemContext.itemRef[id].seasons.includes(
                addWineJuiceState.wineJuiceLimitToSeason
              ) &&
              ((props.isCask && itemContext.itemRef[id].isWineable) ||
                !props.isCask)
            )
              return (
                <option key={id} value={id}>
                  {itemContext.itemRef[id].name}
                </option>
              );
            else return "";
          })}
        </select>
      </div>
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
      {addWineJuiceState.wineProduceId && (
        <button className="AddItem-add-btn" onClick={addWineOrJuice}>
          Add Wine/Juice
        </button>
      )}
    </div>
  );
};

export default AddWineJuice;
