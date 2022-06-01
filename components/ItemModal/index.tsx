import React, { FC, useContext } from "react";
import { CalculationItem } from "../../types/CalculationItem.type";
import { CropCalculationItem } from "../../types/CropCalculationItem.type";
import { GoodCalculationItem } from "../../types/GoodCalculationItem";
import CropTable from "./CropTable";
import GoodTable from "./GoodTable";
import TitleContainer from "./TitleContainer";

interface ItemModalProps {
  closeModal: () => void;
  item: CalculationItem;
  itemIdx: number;
  deleteItem: (idx: number) => void;
}

const ItemModal: FC<ItemModalProps> = (props) => {
  return (
    <div className="ItemModal">
      <div className="ItemModal-clickguard" onClick={props.closeModal}></div>
      <div
        className="ItemModal-main"
        style={{ backgroundImage: `url('./wood.png')` }}
      >
        <p className="ItemModal-close" onClick={props.closeModal}>
          &times;
        </p>
        <button
          className="ItemModal-delete-item mb-3"
          onClick={() => {
            props.deleteItem(props.itemIdx);
            props.closeModal();
          }}
        >
          Delete Item
        </button>
        <TitleContainer item={props.item} />
        <table className="ItemModal-table table table-sm table-striped table-bordered">
          <thead>
            <tr>
              <td className="ItemModal-table-col-1 d-none"></td>
              <td className="ItemModal-table-col-2 d-none"></td>
            </tr>
          </thead>
          {props.item.displayCategory === "crop" && (
            <CropTable item={props.item as CropCalculationItem} />
          )}
          {(props.item.displayCategory === "wineJuice" ||
            props.item.displayCategory === "preserves" ||
            props.item.displayCategory === "good" ||
            props.item.displayCategory === "cheese" ||
            props.item.displayCategory === "mayo" ||
            props.item.displayCategory === "oil") && (
            <GoodTable item={props.item as GoodCalculationItem} />
          )}
        </table>
      </div>
    </div>
  );
};

export default ItemModal;
