import React, { FC, useState } from "react";
import SortContainer from "./SortContainer";
import CropDetail from "./CropDetail";
import GoodDetail from "./GoodDetail";
import ItemModal from "./ItemModal";
import { CropCalculationItem } from "../types/CropCalculationItem.type";
import { GoodCalculationItem } from "../types/GoodCalculationItem";
import { CalculationItem } from "../types/CalculationItem.type";

interface ItemContainerProps {
  items: CalculationItem[];
  deleteItem: (idx: number) => void;
  deleteAll: () => void;
  sortByField: string;
  sortByFieldName: (field: string) => void;
  reverseSort: () => void;
}

const ItemContainer: FC<ItemContainerProps> = (props) => {
  const [modalItemIdx, setModalItemIdx] = useState<number | undefined>(
    undefined
  );

  const showMoreInfo = (itemIdx: number) => {
    setModalItemIdx(itemIdx);
  };

  const closeModal = () => {
    setModalItemIdx(undefined);
  };

  return (
    <div className="ItemContainer">
      {modalItemIdx !== undefined && (
        <ItemModal
          closeModal={closeModal}
          item={props.items[modalItemIdx]}
          itemIdx={modalItemIdx}
          deleteItem={props.deleteItem}
        />
      )}
      <SortContainer
        sortByField={props.sortByField}
        sortByFieldName={props.sortByFieldName}
        reverseSort={props.reverseSort}
      />
      {props.items.length > 0 && (
        <div>
          {props.items.map((item, idx: number) => {
            //only render detail containers if calculations have been made
            if (item.avgGoldPerDay) {
              switch (item.displayCategory) {
                case "crop":
                  return (
                    <CropDetail
                      key={item.itemId + idx}
                      item={item as CropCalculationItem}
                      itemIdx={idx}
                      // deleteItem={props.deleteItem}
                      showMoreInfo={showMoreInfo}
                    />
                  );
                case "wineJuice":
                case "preserves":
                case "good":
                case "cheese":
                case "mayo":
                case "oil":
                  return (
                    <GoodDetail
                      key={idx}
                      item={item as GoodCalculationItem}
                      itemIdx={idx}
                      deleteItem={props.deleteItem}
                      showMoreInfo={showMoreInfo}
                    />
                  );
                default:
                  return "";
              }
            } else return "";
          })}
          <button className="my-2 App-delete-all" onClick={props.deleteAll}>
            <img
              className="App-delete-all-icon"
              src="/icons/general/trash-can.svg"
              alt="trash"
            />
            Delete All Items
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemContainer;
