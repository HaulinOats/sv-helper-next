import Image from "next/image";
import React, { FC, useContext } from "react";
import { PerksContext } from "../pages";

interface PerksContainerProps {}

const PerksContainer: FC<PerksContainerProps> = (props) => {
  const perksContext = useContext(PerksContext);
  return (
    <div className="PerksContainer">
      <p>Perks:</p>
      <span className="PerksContainer-single-perk-outer">
        {perksContext.hasTiller && (
          <span className="PerksContainer-single-perk">
            <Image
              width="36"
              height="36"
              src="/icons/general/36px-Tiller.webp"
              alt="tiller"
            />
          </span>
        )}
        {perksContext.hasRancher && (
          <span className="PerksContainer-single-perk">
            <Image
              width="36"
              height="36"
              src="/icons/general/36px-Rancher.png"
              alt="rancher"
            />
          </span>
        )}
        {perksContext.hasAgriculturist && (
          <span className="PerksContainer-single-perk">
            <Image
              width="36"
              height="36"
              src="/icons/general/36px-Agriculturist.webp"
              alt="agriculturist"
            />
          </span>
        )}
        {perksContext.hasArtisan && (
          <span className="PerksContainer-single-perk">
            <Image
              width="36"
              height="36"
              src="/icons/general/36px-Artisan.webp"
              alt="artisan"
            />
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
