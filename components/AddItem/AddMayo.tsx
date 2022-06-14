import { ChangeEvent, useContext, useState } from "react";
import { ItemContext } from "../../pages/_app";
import { qualityDropdownOptions } from "../../util/helpers";
import { blurInput, selectInput } from "../../util/events";

interface AddMayoProps {
  isCustom: boolean;
  customSellPrice: number;
  isCustomOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  customSellPriceOnChange: (
    e: ChangeEvent<HTMLInputElement>,
    isChange?: boolean
  ) => void;
  addItem: (item: any) => void;
}

interface AddMayoState {
  eggType: string;
  eggQuality: string;
}

const AddMayo: React.FC<AddMayoProps> = (props) => {
  const itemContext = useContext(ItemContext);

  const [addMayoState, setAddMayoState] = useState<AddMayoState>({
    eggType: "egg",
    eggQuality: qualityDropdownOptions[0].value,
  });

  const addMayo = () => {
    props.addItem({
      addedAt: Date.now(),
      isCustom: props.isCustom,
      customSellPrice: props.customSellPrice,
      ingredientId: addMayoState.eggType,
      eggQuality: addMayoState.eggQuality,
      displayCategory: "mayo",
    });
  };

  const eggTypeOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddMayoState({
      ...addMayoState,
      eggType: e.currentTarget.value,
    });
  };

  const eggQualityOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAddMayoState({
      ...addMayoState,
      eggQuality: e.currentTarget.value,
    });
  };

  return (
    <div>
      <div>
        <label>Type Of Egg:</label>
        <select
          value={addMayoState.eggType}
          onChange={(e) => eggTypeOnChange(e)}
        >
          {itemContext.itemData.animal_products.map((product) => {
            if (product.subCategory === "egg")
              return (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              );
            else return "";
          })}
        </select>
      </div>
      {/* If Ostrich Egg, show 'quality' dropdown */}
      {addMayoState.eggType === "ostrich_egg" && (
        <div className="mt-2">
          <label>Egg Quality:</label>
          <select
            value={addMayoState.eggQuality}
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
        <button className="AddItem-add-btn" onClick={addMayo}>
          Add Mayo
        </button>
      </div>
    </div>
  );
};

export default AddMayo;
