import { useContext } from "react";
import { ItemContext } from "../../pages/_app";
import { CropCalculationItem } from "../../types/CropCalculationItem.type";
import { GoodCalculationItem } from "../../types/GoodCalculationItem";

interface TitleContainerProps {
  item: CropCalculationItem | GoodCalculationItem;
}

const App: React.FC<TitleContainerProps> = (props) => {
  const itemContext = useContext(ItemContext);
  let titleElement;

  if (props.item.displayCategory === "crop") {
    titleElement = (
      <span className="ItemModal-main-icon-container">
        <img
          src={"./icons/crops/" + itemContext.itemRef[props.item.itemId].icon}
          alt={itemContext.itemRef[props.item.itemId].icon}
        />
        <h2 className="d-inline align-bottom ms-3">
          {itemContext.itemRef[props.item.itemId].name}
        </h2>
      </span>
    );
  } else {
    titleElement = (
      <span>
        <span className="ItemModal-main-icon-container">
          {props.item.quality && (
            <span
              className={`ItemModal-name-quality-star App-${props.item.quality}-color`}
            >
              &#9733;
            </span>
          )}
          <img
            src={"./icons/goods/" + itemContext.itemRef[props.item.itemId].icon}
            alt={itemContext.itemRef[props.item.itemId].icon}
          />
        </span>
        <h2 className="d-inline align-bottom ms-3">
          {props.item.name
            ? props.item.name
            : itemContext.itemRef[props.item.itemId].name}
        </h2>
      </span>
    );
  }

  return (
    <div className="ItemModal-title-container">
      <a
        href={itemContext.itemRef[props.item.itemId].url}
        rel="noreferrer"
        target="_blank"
      >
        {titleElement}
      </a>
      <div className="d-flex">
        {props.item.isGreenhouse && (
          <span>
            <img
              className="ItemModal-status-icon ItemModal-status-greenhouse-icon"
              src="./icons/greenhouse.svg"
              alt="greenhouse"
            />
          </span>
        )}
        {props.item.isCask && (
          <span>
            <img
              className="ItemModal-status-icon"
              src="./icons/cask.svg"
              alt="cask"
            />
          </span>
        )}
        {props.item.isCustom && (
          <span>
            <img
              className="ItemModal-status-icon"
              src="./icons/custom.svg"
              alt="custom"
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default App;
