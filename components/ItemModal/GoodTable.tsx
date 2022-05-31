import { useContext } from "react";
import { PerksContext } from "../../pages";
import { ItemContext } from "../../pages/_app";
import { GoodCalculationItem } from "../../types/GoodCalculationItem";

interface GoodTableProps {
  item: GoodCalculationItem;
}

const GoodTable: React.FC<GoodTableProps> = (props) => {
  const itemContext = useContext(ItemContext);
  const perksContext = useContext(PerksContext);
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
          <a
            href="https://stardewvalleywiki.com/Farming"
            target="_blank"
            rel="noreferrer"
          >
            Farming Professions/Perks:
          </a>
        </td>
        <td>
          {perksContext.hasRancher && (
            <div className="mb-1">
              <img
                className="ItemModal-perks-icon"
                src="./icons/general/36px-Rancher.png"
                alt="rancher"
              />
              <span className="ItemModal-perks-text">
                Rancher{" "}
                <i className="d-none d-lg-inline-block">
                  (+20% Animal Goods Price)
                </i>
              </span>
            </div>
          )}
          {perksContext.hasArtisan && (
            <div>
              <img
                className="ItemModal-perks-icon"
                src="./icons/general/36px-Artisan.webp"
                alt="artisan"
              />
              <span className="ItemModal-perks-text">
                Artisan{" "}
                <i className="d-none d-lg-inline-block">
                  (Artisan Goods Worth 40% More)
                </i>
              </span>
            </div>
          )}
          {!perksContext.hasRancher && !perksContext.hasArtisan && "N/A"}
        </td>
      </tr>
      <tr>
        <td>
          <span>Made From:</span>
        </td>
        <td>
          {(itemContext.itemRef[props.item.ingredientId].category === "crops" ||
            itemContext.itemRef[props.item.ingredientId].category === "trees" ||
            itemContext.itemRef[props.item.ingredientId].category ===
              "seeds") && (
            <a
              className="d-table-cell"
              href={itemContext.itemRef[props.item.ingredientId].url}
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="ItemModal-icon"
                src={
                  "./icons/crops/" +
                  itemContext.itemRef[props.item.ingredientId].icon
                }
                alt="made-from"
              />
              <span className="align-middle">
                {itemContext.itemRef[props.item.ingredientId].name}
              </span>
            </a>
          )}
          {(itemContext.itemRef[props.item.ingredientId].category === "goods" ||
            itemContext.itemRef[props.item.ingredientId].category ===
              "animal_products") && (
            <a
              className="d-table-cell"
              href={itemContext.itemRef[props.item.ingredientId].url}
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="ItemModal-icon"
                src={
                  "./icons/goods/" +
                  itemContext.itemRef[props.item.ingredientId].icon
                }
                alt="made-from"
              />
              <span className="align-middle">
                {itemContext.itemRef[props.item.ingredientId].name}
              </span>
            </a>
          )}
          {!props.item.ingredientId && <span>N/A</span>}
        </td>
      </tr>
      <tr>
        <td>Equipment:</td>
        <td>
          {itemContext.itemRef[props.item.itemId].equipment.map(
            (equipment: string | number, idx: any) => {
              return (
                <div key={equipment + idx} className="mb-2">
                  <a
                    className="d-table-cell"
                    href={itemContext.itemRef[equipment].url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      className="ItemModal-artisan-equipment-icon"
                      src={
                        "./icons/general/" + itemContext.itemRef[equipment].icon
                      }
                      alt="equipment"
                    />
                    <span className="align-middle">
                      {itemContext.itemRef[equipment].name}
                    </span>
                  </a>
                </div>
              );
            }
          )}
        </td>
      </tr>
      {props.item.cropId && (
        <tr>
          <td>
            <span>Base Crop Price:</span>
          </td>
          <td>
            <img
              className="ItemModal-gold-icon"
              src="./icons/general/27px-Gold.png"
              alt="gold"
            />
            <span>
              {itemContext.itemRef[props.item.cropId].quality.normal.sellsFor}g
            </span>
          </td>
        </tr>
      )}
      <tr>
        <td>
          <span>Processing Time in Minutes:</span>
        </td>
        <td>
          <span>{props.item.processingTime} Minutes</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>Processing Time in Days:</span>
        </td>
        <td>
          <span>
            <i className="sv-tilde">~</i>
            {props.item.processingTimeInDays.toFixed(2)} Days
          </span>
        </td>
      </tr>
      {props.item.processingTimeInDays && props.item.processingTimeInDays <= 1 && (
        <tr>
          <td>
            <span>
              Processing Time in Days Modified:
              <br></br>
              <i>More realistic for number of crafts per day</i>
            </span>
          </td>
          <td>
            <span>
              <i className="sv-tilde">~</i>
              {props.item.processingTimeInDaysModified} Days
            </span>
          </td>
        </tr>
      )}
      {props.item.startQuality && (
        <tr>
          <td>
            <span>Base Quality:</span>
          </td>
          <td>
            <span className="text-capitalize">{props.item.startQuality}</span>
          </td>
        </tr>
      )}
      {props.item.quality && (
        <tr>
          <td>
            <span>Final Quality:</span>
          </td>
          <td>
            <span className="text-capitalize">
              {props.item.quality.toString()}
            </span>
          </td>
        </tr>
      )}
      <tr>
        <td>
          <span>Base Good Price:</span>
        </td>
        <td>
          <img
            className="ItemModal-gold-icon"
            src="./icons/general/27px-Gold.png"
            alt="gold"
          />
          <span>{props.item.basePrice.toFixed(2)}g</span>
        </td>
      </tr>
      {!props.item.isCustom && (
        <tr>
          <td>
            <span>Perks Price Multiplier:</span>
          </td>
          <td>
            <span>{+props.item.priceMultiplier.toFixed(2)}</span>
          </td>
        </tr>
      )}
      {props.item.quantity && (
        <tr>
          <td>
            <span>Quantity Per Craft:</span>
          </td>
          <td>
            <span>{props.item.quantity}</span>
          </td>
        </tr>
      )}
      <tr>
        <td>
          <span>
            Actual Sell Price:<br></br>
            <i>Base Good Price x Modifiers x Quantity</i>
          </span>
        </td>
        <td>
          <img
            className="ItemModal-gold-icon"
            src="./icons/general/27px-Gold.png"
            alt="gold"
          />
          <span>{+props.item.sellPrice!.toFixed(2)}g</span>
        </td>
      </tr>
      <tr className="ItemModal-gold-per-day-container">
        <td>
          <span>Gold Per Day:</span>
        </td>
        <td>
          <img
            className="ItemModal-gold-icon"
            src="./icons/general/27px-Gold.png"
            alt="gold"
          />
          <span>{+props.item.avgGoldPerDay.toFixed(2)}g</span>
        </td>
      </tr>
      {/* Warn users if certain Artisan item doesn't get Artisan buff */}
      {!itemContext.itemRef[props.item.itemId].getsArtisanBuff && (
        <tr>
          <td colSpan={2}>
            <i>This particular item does not get the Artisan buff</i>
          </td>
        </tr>
      )}

      {props.item.displayCategory === "mayo" && (
        <tr>
          <td colSpan={2}>
            <i>
              Only Mayonnaise made with Ostrich Eggs is affected by egg quality
            </i>
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default GoodTable;
