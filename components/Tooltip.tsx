import React, { FC } from "react";

interface TooltipProps {}

const Tooltip: FC<TooltipProps> = (props) => {
  return (
    <div className="Tooltip">
      <h2>Tooltip</h2>
      <div className="Tooltip-clickguard"></div>
      <div className="Tooltip-main"></div>
    </div>
  );
};

export default Tooltip;
