import itemData from "../public/item-data";
import { Item } from "../types/Item.type";

export const createItemObjects = () => {
  //itemRef is global reference for all objects by id
  //itemData creates an object that is grouped by category
  let itemRef: any = {};
  let tempItemData: any = {};

  for (let i = 0; i < itemData.length; i++) {
    //add to itemRef
    itemRef[itemData[i].id!] = itemData[i];

    //add to itemData
    if (tempItemData[itemData[i].category]) {
      tempItemData[itemData[i].category].push(itemData[i]);
    } else {
      tempItemData[itemData[i].category] = [itemData[i]];
    }

    //create fruit and veg id array for dropdowns
    if (itemData[i].isWineable || itemData[i].isJuiceable) {
      if (tempItemData.artisanFruitAndVegIds) {
        tempItemData.artisanFruitAndVegIds.push(itemData[i].id);
      } else {
        tempItemData.artisanFruitAndVegIds = [itemData[i].id];
      }
    }
  }

  //sort items by name
  for (let category in tempItemData) {
    tempItemData[category].sort((a: Item, b: Item) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }
  //sort artisan fruit and veg ids array
  tempItemData.artisanFruitAndVegIds.sort((a: Item, b: Item) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  // console.log("itemRef: ", itemRef);
  // console.log("itemData: ", tempItemData);

  return {
    itemRef,
    itemData: tempItemData,
  };
};

export default createItemObjects;
