import React, { ChangeEvent, FC, useContext, useState } from "react";
import { PerksContext } from "../pages";

interface LevelPerksSelectionProps {
  setField: (prop: string, val: any) => void;
}

const LevelPerksSelection: FC<LevelPerksSelectionProps> = (props) => {
  const perksContext = useContext(PerksContext);
  const [farmingLevel, setFarmingLevel] = useState(perksContext.farmingLevel);

  const farmingLevelOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    let tFarmingLevel = Math.round(Number(e.currentTarget.value));

    if (tFarmingLevel < 5) {
      props.setField("hasTiller", false);
      props.setField("hasRancher", false);
    }
    if (tFarmingLevel < 10) {
      props.setField("hasAgriculturist", false);
      props.setField("hasArtisan", false);
    }

    if (tFarmingLevel > 10) {
      tFarmingLevel = 10;
    } else if (tFarmingLevel < 0) {
      tFarmingLevel = 0;
    }

    setFarmingLevel(tFarmingLevel);

    if (e.type === "blur") {
      props.setField("farmingLevel", tFarmingLevel);
    }
  };

  const toggleTiller = (e: ChangeEvent<HTMLInputElement>) => {
    props.setField("hasTiller", e.currentTarget.checked);

    if (e.currentTarget.checked) {
      props.setField("hasRancher", false);
    } else {
      props.setField("hasArtisan", false);
      props.setField("hasAgriculturist", false);
    }
  };

  const toggleRancher = (e: ChangeEvent<HTMLInputElement>) => {
    props.setField("hasRancher", e.currentTarget.checked);

    if (e.currentTarget.checked) {
      props.setField("hasTiller", false);
      props.setField("hasArtisan", false);
      props.setField("hasAgriculturist", false);
    }
  };

  const toggleAgriculturist = (e: ChangeEvent<HTMLInputElement>) => {
    props.setField("hasAgriculturist", e.currentTarget.checked);

    if (e.currentTarget.checked) {
      props.setField("hasArtisan", false);
    }
  };

  const toggleArtisan = (e: ChangeEvent<HTMLInputElement>) => {
    props.setField("hasArtisan", e.currentTarget.checked);

    if (e.currentTarget.checked) {
      props.setField("hasAgriculturist", false);
    }
  };

  return (
    <div className="LevelPerksSelection">
      <div className="form-group mt-2">
        <label className="LevelPerksSelection-farming-level-label user-select-none">
          Farming Level:
        </label>
        <input
          className="LevelPerksSelection-farming-level-input"
          type="number"
          min="0"
          max="10"
          value={farmingLevel}
          onClick={(e) => e.currentTarget.select()}
          onChange={farmingLevelOnChange}
          onBlur={farmingLevelOnChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.currentTarget.blur();
          }}
        />
      </div>
      {farmingLevel > 4 && (
        <div>
          <div className="LevelPerksSelection-perk-container form-group mt-2">
            <div className="App-slider-container">
              <div className="App-slider-inner">
                <label className="switch" htmlFor="tiller-checkbox">
                  <input
                    type="checkbox"
                    id="tiller-checkbox"
                    checked={perksContext.hasTiller}
                    onChange={toggleTiller}
                  />
                  <div className="slider round"></div>
                </label>
              </div>
              <img
                className="LevelPerksSelection-perk-icon align-middle"
                src="./icons/general/36px-Tiller.webp"
                alt="tiller"
              />
              <label
                className="LevelPerksSelection-checkbox-label form-check-label ms-2 user-select-none"
                htmlFor="tiller-checkbox"
              >
                Tiller (Crops Worth 10% More)
              </label>
            </div>
          </div>
          <div className="LevelPerksSelection-perk-container form-group mt-2">
            <div className="App-slider-container">
              <div className="App-slider-inner">
                <label className="switch" htmlFor="rancher-checkbox">
                  <input
                    type="checkbox"
                    id="rancher-checkbox"
                    checked={perksContext.hasRancher}
                    onChange={toggleRancher}
                  />
                  <div className="slider round"></div>
                </label>
              </div>
              <img
                className="LevelPerksSelection-perk-icon align-middle"
                src="./icons/general/36px-Rancher.png"
                alt="rancher"
              />
              <label
                className="LevelPerksSelection-checkbox-label form-check-label ms-2 user-select-none"
                htmlFor="rancher-checkbox"
              >
                Rancher (Animal Products Worth 20% More)
              </label>
            </div>
          </div>
        </div>
      )}
      {farmingLevel > 9 && perksContext.hasTiller && (
        <div>
          <div className="LevelPerksSelection-perk-container form-group mt-2">
            <div className="App-slider-container">
              <div className="App-slider-inner">
                <label className="switch" htmlFor="agriculturist-checkbox">
                  <input
                    type="checkbox"
                    id="agriculturist-checkbox"
                    checked={perksContext.hasAgriculturist}
                    onChange={toggleAgriculturist}
                  />
                  <div className="slider round"></div>
                </label>
              </div>
              <img
                className="LevelPerksSelection-perk-icon align-middle"
                src="./icons/general/36px-Agriculturist.webp"
                alt="agriculturist"
              />
              <label
                className="LevelPerksSelection-checkbox-label form-check-label ms-2 user-select-none"
                htmlFor="agriculturist-checkbox"
              >
                Agriculturist (Crops Grow 10% Faster)
              </label>
            </div>
          </div>
          <div className="LevelPerksSelection-perk-container form-group mt-2">
            <div className="App-slider-container">
              <div className="App-slider-inner">
                <label className="switch" htmlFor="artisan-checkbox">
                  <input
                    type="checkbox"
                    id="artisan-checkbox"
                    checked={perksContext.hasArtisan}
                    onChange={toggleArtisan}
                  />
                  <div className="slider round"></div>
                </label>
              </div>
              <img
                className="LevelPerksSelection-perk-icon align-middle"
                src="./icons/general/36px-Artisan.webp"
                alt="artisan"
              />
              <label
                className="LevelPerksSelection-checkbox-label form-check-label ms-2 user-select-none"
                htmlFor="artisan-checkbox"
              >
                Artisan (Artisan Goods Worth 40% More)
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelPerksSelection;
