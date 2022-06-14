import { ChangeEvent, useContext, useState } from "react";
import { ItemContext } from "../../pages/_app";
import { seasonDropdownOptions } from "../../util/helpers";
import { blurInput, selectInput } from "../../util/events";

interface AddPreservesProps {
  isCustom: boolean;
  customSellPrice: number;
  isCustomOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  customSellPriceOnChange: (
    e: ChangeEvent<HTMLInputElement>,
    isChange?: boolean
  ) => void;
  addItem: (item: any) => void;
}

interface AddPreservesState {
  preservesLimitToSeason: string;
  preservesProduceId: string | undefined;
}

const AddPreserves: React.FC<AddPreservesProps> = (props) => {
  const itemContext = useContext(ItemContext);

  const [addPreservesState, setAddPreservesState] = useState<AddPreservesState>(
    {
      preservesProduceId: undefined,
      preservesLimitToSeason: seasonDropdownOptions[0].value,
    }
  );

  const preservesProduceIdOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.currentTarget.value.length) {
      setAddPreservesState({
        ...addPreservesState,
        preservesProduceId: undefined,
      });
      return;
    }
    setAddPreservesState({
      ...addPreservesState,
      preservesProduceId: e.currentTarget.value,
    });
  };

  const preservesLimitToSeasonOnChange = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setAddPreservesState({
      ...addPreservesState,
      preservesLimitToSeason: e.currentTarget.value,
    });
  };

  const addPreserve = () => {
    if (!addPreservesState.preservesProduceId) return;

    let isJelly =
      itemContext.itemRef[addPreservesState.preservesProduceId].subCategory ===
      "fruits"
        ? true
        : false;
    let itemId = "jelly";
    let name = `${
      itemContext.itemRef[addPreservesState.preservesProduceId].name
    } Jelly`;
    let ingredientId = addPreservesState.preservesProduceId;

    if (!isJelly) {
      itemId = "pickles";
      name = `Pickled ${
        itemContext.itemRef[addPreservesState.preservesProduceId].name
      }`;
    }

    props.addItem({
      addedAt: Date.now(),
      itemId,
      name,
      isCustom: props.isCustom,
      customSellPrice: props.customSellPrice,
      ingredientId,
      displayCategory: "preserves",
    });
  };

  return (
    <div className="AddItem-goods-container">
      <div>
        <label>Limit To Season:</label>
        <select
          value={addPreservesState.preservesLimitToSeason}
          onChange={preservesLimitToSeasonOnChange}
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
          value={addPreservesState.preservesProduceId}
          onChange={preservesProduceIdOnChange}
        >
          <option value="">- Select Produce -</option>
          {itemContext.itemData.artisanFruitAndVegIds.map((id) => {
            if (addPreservesState.preservesLimitToSeason === "all")
              return (
                <option key={id} value={id}>
                  {itemContext.itemRef[id].name}
                </option>
              );
            else if (
              itemContext.itemRef[id].seasons.includes(
                addPreservesState.preservesLimitToSeason
              )
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
      {addPreservesState.preservesProduceId && (
        <button className="AddItem-add-btn" onClick={addPreserve}>
          Add Preserve
        </button>
      )}
    </div>
  );
};

export default AddPreserves;
