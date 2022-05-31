import React, { FC, useContext } from "react";
import { ItemContext } from "../pages/_app";
import { CropCalculationItem } from "../types/CropCalculationItem.type";
import { ItemRef } from "../types/ItemRef.type";
import { seasonIcons } from "../util/helpers";

interface CropDetailProps {
  item: CropCalculationItem;
  itemIdx: number;
  showMoreInfo: (idx: number) => void;
}

const CropDetail: FC<CropDetailProps> = (props) => {
  const itemContext = useContext(ItemContext);

  let itemRefObj = itemContext.itemRef[props.item.itemId];

  return (
    <div
      className="CropDetail"
      style={{ backgroundImage: `url('./wood.png')` }}
      onClick={() => props.showMoreInfo(props.itemIdx)}
    >
      <div className="CropDetail-top-name-level-container">
        <span className="CropDetail-name-icon-container">
          <img
            className="CropDetail-main-icon"
            alt="crop-icon"
            src={"./icons/crops/" + itemContext.itemRef[props.item.itemId].icon}
          />
          <span className="CropDetail-main-title">{props.item.name}</span>
        </span>
        <div>
          {props.item.isGreenhouse && (
            <span className="d-inline-block">
              <img
                className="CropDetail-status-icon CropDetail-status-greenhouse-icon"
                src="./icons/greenhouse.svg"
                alt="greenhouse"
              />
            </span>
          )}
          {props.item.isCustom && (
            <span className="d-inline-block">
              <img
                className="CropDetail-status-icon"
                src="./icons/custom.svg"
                alt="custom"
              />
            </span>
          )}
        </div>
      </div>
      <div className="CropDetail-main-container">
        <div className="CropDetail-main-container-left">
          <span className="CropDetail-season-container CropDetail-bottom-container-row d-flex justify-content-between">
            <span>Season/Day:</span>
            <span>
              {itemContext.itemRef[props.item.itemId].seasons[0] !== "none" &&
              !props.item.isGreenhouse ? (
                <div>
                  <img
                    className="CropDetail-season-icon"
                    src={
                      "./icons/general/" +
                      seasonIcons[
                        itemRefObj.seasons[props.item.seasonStartIdx!]
                      ]
                    }
                    alt="season"
                  />
                  <span>
                    {
                      itemContext.itemRef[props.item.itemId].seasons[
                        props.item.seasonStartIdx!
                      ]
                    }{" "}
                    {props.item.plantingDay}
                  </span>
                </div>
              ) : (
                "Greenhouse"
              )}
            </span>
          </span>
          <span className="CropDetail-bottom-container-row d-flex justify-content-between">
            <span>Food:</span>
            <span>
              {props.item.foodId ? (
                <div>
                  <img
                    src={
                      "./icons/misc/" +
                      itemContext.itemRef[props.item.foodId].icon
                    }
                    alt="food"
                  />
                  <span>{itemContext.itemRef[props.item.foodId].name}</span>
                </div>
              ) : (
                "N/A"
              )}
            </span>
          </span>
          <span className="CropDetail-bottom-container-row d-flex justify-content-between">
            <span>Seed Cost:</span>
            <span>
              <img
                src={
                  "./icons/crops/" +
                  itemContext.itemRef[itemRefObj.seedId!].icon
                }
                alt="seed-icon"
              />
              <span>{props.item.seedCost}g</span>
            </span>
          </span>
          <span className="CropDetail-bottom-container-row d-flex justify-content-between no-border">
            <span>Fertilizer:</span>
            <span>
              {props.item.fertilizerId && (
                <img
                  src={
                    "./icons/general/" +
                    itemContext.itemRef[props.item.fertilizerId].icon
                  }
                  alt="seed-icon"
                />
              )}
              <span>
                {props.item.fertilizerCost
                  ? props.item.fertilizerCost + "g"
                  : "N/A"}
              </span>
            </span>
          </span>
        </div>
        <div className="CropDetail-main-container-middle d-none d-sm-inline-block">
          <span className="CropDetail-bottom-container-row d-flex justify-content-between">
            <span>Grow Time Modifier:</span>
            <span>{props.item.growTimeMultiplier}</span>
          </span>
          <span className="CropDetail-bottom-container-row d-flex justify-content-between">
            <span>Sell Price Modifier:</span>
            <span>{props.item.perkSellPriceMultiplier}</span>
          </span>
          <span className="CropDetail-bottom-container-row d-flex justify-content-between">
            <span>Maturity Days:</span>
            <span>{props.item.maturityDaysModifiedRounded} Days</span>
          </span>
          <span className="CropDetail-bottom-container-row d-flex justify-content-between no-border">
            <span>Regrowth Days:</span>
            <span>
              {props.item.regrowthDaysModifiedRounded
                ? props.item.regrowthDaysModifiedRounded + " Days"
                : "N/A"}
            </span>
          </span>
        </div>
        <div className="CropDetail-main-container-right">
          <span className="CropDetail-bottom-container-row d-flex justify-content-between">
            <span>Total Days:</span>
            <span>{props.item.harvestDays}</span>
          </span>
          <span className="CropDetail-bottom-container-row d-flex justify-content-between">
            <span>Total Harvests:</span>
            <span>{props.item.maxHarvestsRounded}</span>
          </span>
          <span className="CropDetail-bottom-container-row d-flex justify-content-between no-border">
            <span className="">Avg Sell Price:</span>
            <span>
              <img
                className="CropDetail-daily-gold-icon"
                src="./icons/general/27px-Gold.png"
                alt="gold"
              />
              {props.item.sellPricePerHarvest
                ? +props.item.sellPricePerHarvest.toFixed(2)
                : "0"}
              g
            </span>
          </span>
          <span className="CropDetail-gold-per-day">
            <span>Gold/Day:</span>
            <span className="CropDetail-gold-per-day-total">
              <img
                className="CropDetail-daily-gold-icon"
                src="./icons/general/27px-Gold.png"
                alt="gold"
              />
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

export default CropDetail;
