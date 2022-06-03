import Image from "next/image";
import React, { FC, useContext } from "react";
import { ItemContext } from "../pages/_app";
import { CropCalculationItem } from "../types/CropCalculationItem.type";
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
          <span className="CropDetail-main-icon">
            <Image
              width="36"
              height="36"
              alt="crop-icon"
              src={
                "/icons/crops/" + itemContext.itemRef[props.item.itemId].icon
              }
            />
          </span>
          <span className="CropDetail-main-title">{props.item.name}</span>
        </span>
        <div>
          {props.item.isGreenhouse && (
            <span className="CropDetail-status-icon CropDetail-status-greenhouse-icon">
              <Image
                width="36"
                height="36"
                src="/icons/greenhouse.svg"
                alt="greenhouse"
              />
            </span>
          )}
          {props.item.isCustom && (
            <span className="CropDetail-status-icon">
              <Image
                width="36"
                height="36"
                src="/icons/custom.svg"
                alt="custom"
              />
            </span>
          )}
        </div>
      </div>
      <div className="CropDetail-main-container">
        <div className="CropDetail-main-container-left">
          <span className="CropDetail-season-container CropDetail-bottom-container-row">
            <span>Season/Day:</span>
            <span>
              {itemContext.itemRef[props.item.itemId].seasons[0] !== "none" &&
              !props.item.isGreenhouse ? (
                <div className="CropDetail-season-row">
                  <span className="CropDetail-season-icon">
                    <Image
                      width="36"
                      height="36"
                      src={
                        "/icons/general/" +
                        seasonIcons[
                          itemRefObj.seasons[props.item.seasonStartIdx!]
                        ]
                      }
                      alt="season"
                    />
                  </span>

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
          <span className="CropDetail-bottom-container-row">
            <span>Food:</span>
            <span>
              {props.item.foodId ? (
                <div className="CropDetail-right-grid">
                  <span className="CropDetail-icon">
                    <Image
                      width="36"
                      height="36"
                      src={
                        "/icons/misc/" +
                        itemContext.itemRef[props.item.foodId].icon
                      }
                      alt="food"
                    />
                  </span>
                  <span>{itemContext.itemRef[props.item.foodId].name}</span>
                </div>
              ) : (
                "N/A"
              )}
            </span>
          </span>
          <span className="CropDetail-bottom-container-row">
            <span>Seed Cost:</span>
            <span className="CropDetail-right-grid">
              <span className="CropDetail-icon">
                <Image
                  width="36"
                  height="36"
                  src={
                    "/icons/crops/" +
                    itemContext.itemRef[itemRefObj.seedId!].icon
                  }
                  alt="seed-icon"
                />
              </span>
              <span>{props.item.seedCost}g</span>
            </span>
          </span>
          <span className="CropDetail-bottom-container-row no-border">
            <span>Fertilizer:</span>
            <span className="CropDetail-right-grid">
              {props.item.fertilizerId && (
                <span className="CropDetail-icon">
                  <Image
                    width="36"
                    height="36"
                    src={
                      "/icons/general/" +
                      itemContext.itemRef[props.item.fertilizerId].icon
                    }
                    alt="seed-icon"
                  />
                </span>
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
          <span className="CropDetail-bottom-container-row">
            <span>Grow Time Modifier:</span>
            <span>{props.item.growTimeMultiplier}</span>
          </span>
          <span className="CropDetail-bottom-container-row">
            <span>Sell Price Modifier:</span>
            <span>{props.item.perkSellPriceMultiplier}</span>
          </span>
          <span className="CropDetail-bottom-container-row">
            <span>Maturity Days:</span>
            <span>{props.item.maturityDaysModifiedRounded} Days</span>
          </span>
          <span className="CropDetail-bottom-container-row no-border">
            <span>Regrowth Days:</span>
            <span>
              {props.item.regrowthDaysModifiedRounded
                ? props.item.regrowthDaysModifiedRounded + " Days"
                : "N/A"}
            </span>
          </span>
        </div>
        <div className="CropDetail-main-container-right">
          <span className="CropDetail-bottom-container-row">
            <span>Total Days:</span>
            <span>{props.item.harvestDays}</span>
          </span>
          <span className="CropDetail-bottom-container-row">
            <span>Total Harvests:</span>
            <span>{props.item.maxHarvestsRounded}</span>
          </span>
          <span className="CropDetail-bottom-container-row no-border">
            <span className="">Avg Sell Price:</span>
            <span className="CropDetail-right-grid">
              <span className="CropDetail-daily-gold-icon">
                <Image
                  width="36"
                  height="36"
                  src="/icons/general/27px-Gold.png"
                  alt="gold"
                />
              </span>
              {props.item.sellPricePerHarvest
                ? +props.item.sellPricePerHarvest.toFixed(2)
                : "0"}
              g
            </span>
          </span>
          <span className="CropDetail-gold-per-day">
            <span>Gold/Day:</span>
            <span className="CropDetail-right-grid">
              <span className="CropDetail-daily-gold-icon">
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

export default CropDetail;
