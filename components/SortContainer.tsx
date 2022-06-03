import Image from "next/image";
import React, { FC } from "react";

interface SortContainerProps {
  sortByField: string;
  sortByFieldName: (field: string) => void;
  reverseSort: () => void;
}

const SortContainer: FC<SortContainerProps> = (props) => {
  return (
    <div className="SortContainer">
      <div>
        <span
          className="SortContainer-sort-container"
          style={{ backgroundImage: `url('./wood.png')` }}
        >
          <label>Sort:</label>
          <select
            className="SortContainer-sort-by-dropdown"
            value={props.sortByField}
            onChange={(e) => props.sortByFieldName(e.target.value)}
          >
            <option value="addedAt">Time Added</option>
            <option value="name">Name</option>
            <option value="avgGoldPerDay">Avg. Gold Per Day</option>
            <option value="sellPrice">Sell Price (Goods)</option>
            <option value="sellPricePerHarvestRounded">
              Avg Sell Price (Crops)
            </option>
            <option value="seedCost">Seed Cost (Crops)</option>
            <option value="fertilizerCost">Fertilizer Cost (Crops)</option>
            <option value="maxHarvestsRounded">Total Harvests (Crops)</option>
          </select>
          <span className="SortContainer-reverse-sort-img">
            <Image
              width="36"
              height="36"
              src="/icons/reverse-sort.svg"
              alt="reverse-sort"
              onClick={props.reverseSort}
            />
          </span>
        </span>
      </div>
    </div>
  );
};

export default SortContainer;
