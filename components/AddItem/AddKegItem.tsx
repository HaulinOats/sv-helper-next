import { ChangeEvent, useContext } from "react";
import { ItemContext } from "../../pages/_app";
import { qualityDropdownOptions } from "../../util/helpers";
import Image from "next/image";

interface AddKegItemProps {
  isCask: boolean;
  isCustom: boolean;
  customSellPrice: number;
  caskQuality: string;
  caskQualityOnChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  isCustomOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  customSellPriceOnChange: (
    e: ChangeEvent<HTMLInputElement>,
    isChange?: boolean
  ) => void;
  addItem: (item: any) => void;
  toggleIsCask: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AddKegItem: React.FC<AddKegItemProps> = (props) => {
  const itemContext = useContext(ItemContext);

  return (
    <div>
      <div className="mt-2">
        <div className="App-slider-container">
          <div className="App-slider-inner">
            <label className="switch" htmlFor="cask-checkbox">
              <input
                className="form-check-input"
                type="checkbox"
                id="cask-checkbox"
                checked={props.isCask}
                onChange={props.toggleIsCask}
              />
              <div className="slider round"></div>
            </label>
          </div>
          <label htmlFor="cask-checkbox">Use Cask</label>
          <span className="AddItem-custom-img">
            <Image width="36" height="36" src="/icons/cask.svg" alt="custom" />
          </span>
        </div>
      </div>
      {props.isCask && (
        <div className="mt-2">
          <label>Desired Quality:</label>
          <select
            value={props.caskQuality}
            onChange={props.caskQualityOnChange}
          >
            {qualityDropdownOptions.map((option) => {
              if (option.value !== "normal")
                return (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                );
              else return "";
            })}
          </select>
        </div>
      )}
    </div>
  );
};

export default AddKegItem;
