import Image from "next/image";
import React, { FC, useContext } from "react";
import { ItemContext } from "../pages/_app";
import { GoodCalculationItem } from "../types/GoodCalculationItem";

interface GoodDetailProps {
  item: GoodCalculationItem;
  itemIdx: number;
  deleteItem: (idx: number) => void;
  showMoreInfo: (idx: number) => void;
}

const GoodDetail: FC<GoodDetailProps> = (props) => {
  const itemContext = useContext(ItemContext);
  return (
    <div
      className="GoodDetail"
      key={props.item.itemId}
      style={{ backgroundImage: `url('./wood.png')` }}
      onClick={(e) => props.showMoreInfo(props.itemIdx)}
    >
      <div className="GoodDetail-top-name-level-container">
        <span className="GoodDetail-name-icon-container">
          <span className="GoodDetail-icon-container">
            {props.item.quality && (
              <span
                className={`GoodDetail-name-quality-star App-${props.item.quality}-color`}
              >
                &#9733;
              </span>
            )}
            <span className="GoodDetail-main-icon">
              <Image
                width="36"
                height="36"
                alt="crop-icon"
                src={
                  "/icons/goods/" + itemContext.itemRef[props.item.itemId].icon
                }
              />
            </span>
          </span>
          <span className="GoodDetail-main-title">
            {props.item.name
              ? props.item.name
              : itemContext.itemRef[props.item.itemId].name}
          </span>
        </span>
        <div>
          {props.item.isCask && (
            <div>
              <span className="GoodDetail-status-icon">
                <Image
                  width="36"
                  height="36"
                  src="/icons/cask.svg"
                  alt="cask"
                />
              </span>
            </div>
          )}
          {props.item.isCustom && (
            <div>
              <span className="GoodDetail-status-icon">
                <Image
                  width="36"
                  height="36"
                  src="/icons/custom.svg"
                  alt="custom"
                />
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="GoodDetail-main-container">
        <div className="GoodDetail-main-container-left">
          <span className="GoodDetail-bottom-container-row">
            <span>Made From:</span>
            {(itemContext.itemRef[props.item.ingredientId].category ===
              "crops" ||
              itemContext.itemRef[props.item.ingredientId].category ===
                "trees" ||
              itemContext.itemRef[props.item.ingredientId].category ===
                "seeds") && (
              <span className="GoodDetail-icon">
                <Image
                  width="36"
                  height="36"
                  src={
                    "/icons/crops/" +
                    itemContext.itemRef[props.item.ingredientId].icon
                  }
                  alt="made-from"
                />
              </span>
            )}
            {(itemContext.itemRef[props.item.ingredientId].category ===
              "goods" ||
              itemContext.itemRef[props.item.ingredientId].category ===
                "animal_products") && (
              <span className="ItemModal-icon">
                <Image
                  width="36"
                  height="36"
                  src={
                    "/icons/goods/" +
                    itemContext.itemRef[props.item.ingredientId].icon
                  }
                  alt="made-from"
                />
              </span>
            )}
            {!props.item.ingredientId && <span>N/A</span>}
          </span>
          <span className="GoodDetail-bottom-container-row">
            <span>Process Minutes:</span>
            <span>{props.item.processingTime}</span>
          </span>
          <span className="GoodDetail-bottom-container-row">
            <span>Process Days:</span>
            <span>
              <i className="sv-tilde sv-black">~</i>
              {props.item.processingTimeInDaysModified}
            </span>
          </span>
        </div>
        <div className="GoodDetail-main-container-right">
          <span className="GoodDetail-bottom-container-row">
            <span>Base Sell Price:</span>
            <span className="GoodDetail-right-grid">
              <span className="GoodDetail-daily-gold-icon">
                <Image
                  width="36"
                  height="36"
                  src="/icons/general/27px-Gold.png"
                  alt="gold"
                />
              </span>
              {+props.item.basePrice!.toFixed(2)}g
            </span>
          </span>
          <span className="GoodDetail-bottom-container-row no-border">
            <span>Actual Sell Price:</span>
            <span className="GoodDetail-right-grid">
              <span className="GoodDetail-daily-gold-icon">
                <Image
                  width="36"
                  height="36"
                  src="/icons/general/27px-Gold.png"
                  alt="gold"
                />
              </span>
              {+props.item.sellPrice!.toFixed(2)}g
            </span>
          </span>
          <span className="GoodDetail-gold-per-day">
            <span>Gold/Day:</span>
            <span className="GoodDetail-right-grid">
              <span className="GoodDetail-daily-gold-icon">
                <Image
                  width="36"
                  height="36"
                  src="/icons/general/27px-Gold.png"
                  alt="gold"
                />
              </span>
              {props.item.avgGoldPerDay
                ? +props.item.avgGoldPerDay.toFixed(2) + "g"
                : "0"}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GoodDetail;
