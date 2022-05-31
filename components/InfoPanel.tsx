import React, { FC } from "react";

interface InfoPanelProps {
  openInfoPanel: () => void;
  closeInfoPanel: () => void;
}

const InfoPanel: FC<InfoPanelProps> = (props) => {
  return (
    <div className="InfoPanel">
      <div
        className="InfoPanel-clickguard"
        onClick={props.closeInfoPanel}
      ></div>
      <div className="InfoPanel-main">
        <p className="InfoPanel-close-btn" onClick={props.closeInfoPanel}>
          &times;
        </p>
        <h2 className="InfoPanel-heading">Stardew Valley Helper</h2>
        <div className="row">
          <p>
            I created this app to help with calculating data relating to crops
            and craftable goods in Stardew Valley. I referenced Exnil's formulas
            on their{" "}
            <a
              href="https://github.com/exnil/crop_planner"
              rel="noreferrer"
              target="_blank"
            >
              GitHub respository
            </a>{" "}
            and they appear to be very accurate.
          </p>
          <p>
            I will continue to tweak this app and add new features in the weeks
            to come. Shoot me an email if you have any suggestions:{" "}
            <a href="mailto:brett84c@gmail.com?subject=Stardew%20Valley%20Helper">
              brett84c@gmail.com
            </a>
          </p>
          .
          {/* <a className="InfoPanel-helper" href="./helper-ss.png" rel="noreferrer" target="_blank">
            <img className="col-8" src="./helper-ss.png" alt="helper"/>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
