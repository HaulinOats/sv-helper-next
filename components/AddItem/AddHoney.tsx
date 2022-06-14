import { ChangeEvent, useContext, useState } from "react";
import { ItemContext } from "../../pages/_app";

interface AddHoneyProps {
  honeyFlowerId: string | undefined;
  setHoneyFlowerId: (flowerHoneyId: string | undefined) => void;
}

const AddHoney: React.FC<AddHoneyProps> = (props) => {
  const itemContext = useContext(ItemContext);

  const honeyFlowerIdOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.currentTarget.value.length) {
      return props.setHoneyFlowerId(undefined);
    }
    props.setHoneyFlowerId(e.currentTarget.value);
  };

  return (
    <div>
      <label>Flower Type:</label>
      <select
        value={props.honeyFlowerId}
        onChange={(e) => honeyFlowerIdOnChange(e)}
      >
        <option value="">No Flower</option>
        {itemContext.itemRef["honey"].flowerModifiers.map((flower: any) => {
          return (
            <option key={flower.id} value={flower.id}>
              {itemContext.itemRef[flower.id].name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default AddHoney;
