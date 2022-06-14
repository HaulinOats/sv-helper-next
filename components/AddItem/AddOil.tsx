import { ChangeEvent, useContext, useState } from "react";
import { ItemContext } from "../../pages/_app";
import { oilTypeDropdownOptions } from "../../util/helpers";
import { blurInput, selectInput } from "../../util/events";

interface AddOilProps {
  isCustom: boolean;
  customSellPrice: number;
  isCustomOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  customSellPriceOnChange: (
    e: ChangeEvent<HTMLInputElement>,
    isChange?: boolean
  ) => void;
  addItem: (item: any) => void;
}

interface AddOilState {
  oilType: string;
  oilIngredientId: string;
}

const AddOil: React.FC<AddOilProps> = (props) => {
  const itemContext = useContext(ItemContext);

  const [addOilState, setAddOilState] = useState<AddOilState>({
    oilType: oilTypeDropdownOptions[0].value,
    oilIngredientId: itemContext.itemRef["oil"].madeFrom[0],
  });

  const oilTypeOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddOilState({
      ...addOilState,
      oilType: e.currentTarget.value,
    });
  };

  const oilIngredientIdOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddOilState({
      ...addOilState,
      oilIngredientId: e.currentTarget.value,
    });
  };

  const addOil = () => {
    props.addItem({
      addedAt: Date.now(),
      isCustom: props.isCustom,
      customSellPrice: props.customSellPrice,
      itemId: addOilState.oilType,
      ingredientId:
        addOilState.oilType === "oil"
          ? addOilState.oilIngredientId
          : itemContext.itemRef[addOilState.oilType].madeFrom[0],
      displayCategory: "oil",
    });
  };

  return (
    <div>
      <div>
        <label>Oil Type:</label>
        <select
          value={addOilState.oilType}
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
        {addOilState.oilType === "oil" && (
          <div className="mt-2">
            <label>Oil Ingredient:</label>
            <select
              value={addOilState.oilIngredientId}
              onChange={(e) => oilIngredientIdOnChange(e)}
            >
              {itemContext.itemRef["oil"].madeFrom.map((ingredient) => {
                return (
                  <option key={ingredient} value={ingredient}>
                    {itemContext.itemRef[ingredient].name}
                  </option>
                );
              })}
            </select>
          </div>
        )}
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
      <div className="AddItem-goods-container">
        <button className="AddItem-add-btn" onClick={addOil}>
          Add Oil
        </button>
      </div>
    </div>
  );
};

export default AddOil;
