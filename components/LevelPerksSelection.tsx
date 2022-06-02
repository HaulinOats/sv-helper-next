import React, { ChangeEvent, FC, useContext, useState } from "react";
import { PerksContext } from "../pages";

interface LevelPerksSelectionProps {
  setDynamicField: (
    stateName: string,
    stateObj: { [key: string]: any }
  ) => void;
}

const LevelPerksSelection: FC<LevelPerksSelectionProps> = (props) => {
  const perksContext = useContext(PerksContext);

  const farmingLevelOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    let tFarmingLevel = Math.round(Number(e.currentTarget.value));
    let stateObj = {};

    if (tFarmingLevel < 5) {
      stateObj = {
        ...stateObj,
        hasTiller: false,
        hasRancher: false,
      };
    }
    if (tFarmingLevel < 10) {
      stateObj = {
        ...stateObj,
        hasAgriculturist: false,
        hasArtisan: false,
      };
    }

    if (tFarmingLevel > 10) {
      tFarmingLevel = 10;
    } else if (tFarmingLevel < 0) {
      tFarmingLevel = 0;
    }

    stateObj = {
      ...stateObj,
      farmingLevel: tFarmingLevel,
    };

    // if (e.type === "blur") {}

    props.setDynamicField("app", stateObj);
  };

  const toggleTiller = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      props.setDynamicField("app", {
        hasTiller: e.currentTarget.checked,
        hasRancher: false,
      });
      return;
    }

    props.setDynamicField("app", {
      hasTiller: e.currentTarget.checked,
      hasArtisan: false,
      hasAgriculturist: false,
    });
  };

  const toggleRancher = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      props.setDynamicField("app", {
        hasArtisan: false,
        hasAgriculturist: false,
        hasTiller: false,
        hasRancher: e.currentTarget.checked,
      });
      return;
    }

    props.setDynamicField("app", {
      hasRancher: e.currentTarget.checked,
    });
  };

  const toggleAgriculturist = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      props.setDynamicField("app", {
        hasArtisan: false,
        hasAgriculturist: e.currentTarget.checked,
      });
      return;
    }

    props.setDynamicField("app", {
      hasAgriculturist: e.currentTarget.checked,
    });
  };

  const toggleArtisan = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      props.setDynamicField("app", {
        hasAgriculturist: false,
        hasArtisan: e.currentTarget.checked,
      });
      return;
    }
    props.setDynamicField("app", {
      hasArtisan: e.currentTarget.checked,
    });
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
          value={perksContext.farmingLevel}
          onClick={(e) => e.currentTarget.select()}
          onChange={farmingLevelOnChange}
          onBlur={farmingLevelOnChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.currentTarget.blur();
          }}
        />
      </div>
      {perksContext.farmingLevel > 4 && (
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
                src="/icons/general/36px-Tiller.webp"
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
                src="/icons/general/36px-Rancher.png"
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
      {perksContext.farmingLevel > 9 && perksContext.hasTiller && (
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
                src="/icons/general/36px-Agriculturist.webp"
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
                src="/icons/general/36px-Artisan.webp"
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
