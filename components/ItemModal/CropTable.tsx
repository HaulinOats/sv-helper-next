import Image from "next/image";
import { useContext } from "react";
import { PerksContext } from "../../pages";
import { ItemContext } from "../../pages/_app";
import { CropCalculationItem } from "../../types/CropCalculationItem.type";
import { seasonIcons } from "../../util/helpers";

interface CropTableProps {
  item: CropCalculationItem;
}

const CropTable: React.FC<CropTableProps> = (props) => {
  const itemContext = useContext(ItemContext);
  const perksContext = useContext(PerksContext);
  let itemRefObj = itemContext.itemRef[props.item.itemId];
  return (
    <tbody>
      <tr>
        <td>
          <span>Farming Level:</span>
        </td>
        <td>
          <span>{perksContext.farmingLevel}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>Farming Level Buff:</span>
        </td>
        <td>
          {props.item.foodId ? (
            <a
              href={itemContext.itemRef[props.item.foodId].url}
              rel="noreferrer"
              target="_blank"
            >
              <span className="ItemModal-item-icon">
                <Image
                  width="36"
                  height="36"
                  src={
                    "/icons/misc/" + itemContext.itemRef[props.item.foodId].icon
                  }
                  alt="food"
                />
              </span>
              <span>
                {itemContext.itemRef[props.item.foodId].name} (+
                {props.item.foodFarmingBuff})
              </span>
            </a>
          ) : (
            "N/A"
          )}
        </td>
      </tr>
      <tr>
        <td>
          <span>Farming Level Modified (Buffs):</span>
        </td>
        <td>
          <span>
            {(perksContext.farmingLevel as number) + props.item.foodFarmingBuff}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <span>
            <a
              href="https://stardewvalleywiki.com/Farming"
              target="_blank"
              rel="noreferrer"
            >
              Farming Professions/Perks:
            </a>
          </span>
        </td>
        <td>
          {perksContext.hasTiller && (
            <div className="ItemModal-right-row">
              <span className="ItemModal-perks-icon">
                <Image
                  width="36"
                  height="36"
                  src="/icons/general/36px-Tiller.webp"
                  alt="tiller"
                />
              </span>
              <span className="ItemModal-perks-text">
                Tiller{" "}
                <i className="d-none d-lg-inline-block">
                  (+10% Crop Sell Price)
                </i>
              </span>
            </div>
          )}
          {perksContext.hasAgriculturist && (
            <div className="ItemModal-right-row">
              <span className="ItemModal-perks-icon">
                <Image
                  width="36"
                  height="36"
                  src="/icons/general/36px-Agriculturist.webp"
                  alt="agriculturist"
                />
              </span>
              <span className="ItemModal-perks-text">
                Agriculturist{" "}
                <i className="d-none d-lg-inline-block">
                  (10% Faster Crop Growth)
                </i>
              </span>
            </div>
          )}
          <span>
            {!perksContext.hasTiller && !perksContext.hasAgriculturist && "N/A"}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <span>Fertilizer Used:</span>
        </td>
        <td>
          {props.item.fertilizerId ? (
            <a
              href={itemContext.itemRef[props.item.fertilizerId].url}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                width="36"
                height="36"
                className="ItemModal-fertilizer-icon ItemModal-item-icon"
                src={
                  "/icons/general/" +
                  itemContext.itemRef[props.item.fertilizerId].icon
                }
                alt="fertilizer"
              />
              <span>{itemContext.itemRef[props.item.fertilizerId].name}</span>
            </a>
          ) : (
            "N/A"
          )}
        </td>
      </tr>
      <tr>
        <td>
          <span>Fertilizer Cost:</span>
        </td>
        <td>
          {props.item.fertilizerId ? (
            <div>
              <Image
                width="27"
                height="27"
                className="ItemModal-gold-icon"
                src="/icons/general/27px-Gold.png"
                alt="gold"
              />
              <span>{props.item.fertilizerCost}g</span>
            </div>
          ) : (
            "N/A"
          )}
        </td>
      </tr>
      {!props.item.isCustom && (
        <tr>
          <td>
            <span>Seed Vendors:</span>
          </td>
          <td>
            {itemContext.itemRef[itemRefObj.seedId!].vendors!.map((vendor) => {
              return (
                <div key={vendor.id} className="ItemModal-seed-vendor">
                  <span className="ItemModal-icon">
                    <Image
                      width="36"
                      height="36"
                      className="ItemModal-seed-vendor-icon"
                      src={
                        "/icons/general/" + itemContext.itemRef[vendor.id].icon
                      }
                      alt="seed-vendor"
                    />
                  </span>
                  <span>
                    <a
                      href={itemContext.itemRef[vendor.id].url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {itemContext.itemRef[vendor.id].shortName}
                    </a>
                  </span>
                  <span className="ItemModal-gold-icon ml-2">
                    <Image
                      width="27"
                      height="27"
                      src="/icons/general/27px-Gold.png"
                      alt="gold"
                    />
                  </span>
                  {vendor.cost}g
                </div>
              );
            })}
          </td>
        </tr>
      )}
      <tr>
        <td>
          <span>Seed Cost:</span>
        </td>
        <td>
          <span className="ItemModal-right-container">
            <a
              href={itemContext.itemRef[itemRefObj.seedId!].url}
              rel="noreferrer"
              target="_blank"
            >
              <span className="ItemModal-icon">
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
            </a>
          </span>
        </td>
      </tr>
      <tr className="ItemModal-planting-day">
        <td>
          <span>Planting Day:</span>
        </td>
        <td>
          <span className="ItemModal-right-container">
            {!props.item.isGreenhouse && (
              <>
                <span className="ItemModal-season-icon">
                  <Image
                    width="36"
                    height="36"
                    src={
                      "/icons/general/" +
                      seasonIcons[
                        itemContext.itemRef[props.item.itemId].seasons[
                          props.item.seasonStartIdx
                        ]
                      ]
                    }
                    alt="season-icon"
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
              </>
            )}
            {props.item.isGreenhouse && (
              <>
                <span className="ItemModal-icon">
                  <Image
                    width="36"
                    height="36"
                    src="/icons/greenhouse.svg"
                    alt="greenhouse-icon"
                  />
                </span>
                <span>Greenhouse</span>
              </>
            )}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <span>Max Harvest Days:</span>
        </td>
        <td>
          <span>{props.item.maxHarvestDays} Days</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>Last Harvest Day:</span>
        </td>
        <td>
          <span>{props.item.finalHarvestDay}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>Maturity Days:</span>
        </td>
        <td>
          <span>
            {itemContext.itemRef[props.item.itemId].harvestTime.initial} Days
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <span>Maturity Days Modified (Fertilizer + Perks):</span>
        </td>
        <td>
          <span>{props.item.maturityDaysModifiedRounded} Days</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>Regrowth Days:</span>
        </td>
        <td>
          <span>
            {itemContext.itemRef[props.item.itemId].harvestTime.regrowth
              ? itemContext.itemRef[props.item.itemId].harvestTime.regrowth +
                " Days"
              : "N/A"}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <span>Regrowth Days Modified (Fertilizer + Perks):</span>
        </td>
        <td>
          <span>
            {itemContext.itemRef[props.item.itemId].harvestTime.regrowth
              ? props.item.regrowthDaysModifiedRounded + " days"
              : "N/A"}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <span>Max Harvests Possible:</span>
        </td>
        <td>
          <span>{props.item.maxHarvestsRounded}</span>
        </td>
      </tr>
      {!props.item.isCustom && (
        <tr>
          <td>
            <span>Crop Prices:</span>
          </td>
          <td>
            <span className="ItemModal-right-container-row">
              <div className="ItemModal-crop-price">
                <div className="ItemModal-crop-price-star-container">
                  <span className="ItemModal-crop-price-star invisible">
                    &#9733;
                  </span>
                </div>
                <span className="ItemModal-crop-price-gold-container">
                  <span className="ItemModal-gold-icon ml-2">
                    <Image
                      width="27"
                      height="27"
                      src="/icons/general/27px-Gold.png"
                      alt="gold"
                    />
                  </span>
                  <span>
                    {
                      itemContext.itemRef[props.item.itemId].quality.normal
                        .sellsFor
                    }
                    g
                  </span>
                </span>
              </div>

              <div className="ItemModal-crop-price">
                <div className="ItemModal-crop-price-star-container">
                  <span className="ItemModal-crop-price-star App-silver-color">
                    &#9733;
                  </span>
                </div>
                <span className="ItemModal-crop-price-gold-container">
                  <span className="ItemModal-gold-icon ml-2">
                    <Image
                      width="27"
                      height="27"
                      src="/icons/general/27px-Gold.png"
                      alt="gold"
                    />
                  </span>
                  <span>
                    {
                      itemContext.itemRef[props.item.itemId].quality.silver
                        .sellsFor
                    }
                    g
                  </span>
                </span>
              </div>
              <div className="ItemModal-crop-price">
                <div className="ItemModal-crop-price-star-container">
                  <span className="ItemModal-crop-price-star App-gold-color">
                    &#9733;
                  </span>
                </div>
                <span className="ItemModal-crop-price-gold-container">
                  <span className="ItemModal-gold-icon ml-2">
                    <Image
                      width="27"
                      height="27"
                      src="/icons/general/27px-Gold.png"
                      alt="gold"
                    />
                  </span>
                  <span>
                    {
                      itemContext.itemRef[props.item.itemId].quality.gold
                        .sellsFor
                    }
                    g
                  </span>
                </span>
              </div>
              <div className="ItemModal-crop-price">
                <div className="ItemModal-crop-price-star-container">
                  <span className="ItemModal-crop-price-star App-iridium-color">
                    &#9733;
                  </span>
                </div>
                <span className="ItemModal-crop-price-gold-container">
                  <span className="ItemModal-gold-icon ml-2">
                    <Image
                      width="27"
                      height="27"
                      src="/icons/general/27px-Gold.png"
                      alt="gold"
                    />
                  </span>
                  <span>
                    {
                      itemContext.itemRef[props.item.itemId].quality.iridium
                        .sellsFor
                    }
                    g
                  </span>
                </span>
              </div>
            </span>
          </td>
        </tr>
      )}
      <tr>
        <td>
          Harvest Yield:
          <p>
            <i>Crops Per Pull</i>
          </p>
        </td>
        <td>{itemContext.itemRef[props.item.itemId].harvestYield}</td>
      </tr>
      <tr>
        <td>Normal Sell Price:</td>
        <td>
          <span className="ItemModal-right-container">
            <span className="ItemModal-gold-icon">
              <Image
                width="27"
                height="27"
                className="ItemModal-gold-icon"
                src="/icons/general/27px-Gold.png"
                alt="gold"
              />
            </span>
            <span>{props.item.normalSellPrice}g</span>
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <p>Base Sell Price:</p>
          <p>
            <i>Normal Crop Sell Price x Harvest Yield</i>
          </p>
        </td>
        <td>
          <span className="ItemModal-right-container">
            <span className="ItemModal-gold-icon">
              <Image
                width="27"
                height="27"
                src="/icons/general/27px-Gold.png"
                alt="gold"
              />
            </span>
            <span>{props.item.baseSellPricePerHarvest!.toFixed(2)}g</span>
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <span>
            Average Selling Price Multiplier (
            <a
              href="https://stardewvalleywiki.com/Farming#Farming_Skill"
              target="_blank"
              rel="noreferrer"
            >
              Crop Quality Frequency
            </a>
            ):
          </span>
        </td>
        <td>
          <span>{props.item.farmingLevelAvgPriceMultiplier!.toFixed(2)}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>Perks Price Multiplier:</span>
        </td>
        <td>
          <span>{props.item.perkSellPriceMultiplier}</span>
        </td>
      </tr>
      <tr>
        <td>
          <p>Base Sell Price Modified:</p>
          <p>
            <i>
              Base Sell Price x Average Selling Price Multiplier x Perk Price
              Multiplier
            </i>
          </p>
        </td>
        <td>
          <span className="ItemModal-right-container">
            <span className="ItemModal-gold-icon">
              <Image
                width="27"
                height="27"
                className="ItemModal-gold-icon"
                src="/icons/general/27px-Gold.png"
                alt="gold"
              />
            </span>
            <span>{props.item.sellPricePerHarvestRounded}g</span>
          </span>
        </td>
      </tr>
      <tr className="ItemModal-gold-per-day-container">
        <td>
          <span>Gold Per Day:</span>
        </td>
        <td>
          <span className="ItemModal-right-container">
            <span className="ItemModal-gold-icon-large">
              <Image
                width="27"
                height="27"
                className="ItemModal-gold-icon"
                src="/icons/general/27px-Gold.png"
                alt="gold"
              />
            </span>
            <span>{+props.item.avgGoldPerDay.toFixed(2)}g</span>
          </span>
        </td>
      </tr>
      <tr>
        <td colSpan={2}>
          <i>
            Gold Per Day is result of combining selling prices and perk
            modifiers with costs of fertilizer and seeds, if applicable
          </i>
        </td>
      </tr>
    </tbody>
  );
};

export default CropTable;
