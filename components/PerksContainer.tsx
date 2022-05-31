import React, { FC, useContext } from "react";
import { PerksContext } from "../pages";

interface PerksContainerProps {}

const PerksContainer: FC<PerksContainerProps> = (props) => {
  const perksContext = useContext(PerksContext);
  return (
    <div className="PerksContainer">
      <p className="">Perks:</p>
      <span>
        {perksContext.hasTiller && (
          <span className="PerksContainer-single-perk">
            <img
              className="PerksContainer-perks-icon me-1"
              src="./icons/general/36px-Tiller.webp"
              alt="tiller"
            />
            {/* <span>Tiller</span> */}
          </span>
        )}
        {perksContext.hasRancher && (
          <span className="PerksContainer-single-perk">
            <img
              className="PerksContainer-perks-icon me-1"
              src="./icons/general/36px-Rancher.png"
              alt="rancher"
            />
            {/* <span>Rancher</span> */}
          </span>
        )}
        {perksContext.hasAgriculturist && (
          <span className="PerksContainer-single-perk">
            <img
              className="PerksContainer-perks-icon me-1"
              src="./icons/general/36px-Agriculturist.webp"
              alt="agriculturist"
            />
            {/* <span>Agriculturist</span> */}
          </span>
        )}
        {perksContext.hasArtisan && (
          <span className="PerksContainer-single-perk">
            <img
              className="PerksContainer-perks-icon me-1"
              src="./icons/general/36px-Artisan.webp"
              alt="artisan"
            />
            {/* <span>Artisan</span> */}
          </span>
        )}
        {!perksContext.hasArtisan &&
          !perksContext.hasAgriculturist &&
          !perksContext.hasTiller &&
          !perksContext.hasRancher && <span>N/A</span>}
      </span>
    </div>
  );
};

export default PerksContainer;
