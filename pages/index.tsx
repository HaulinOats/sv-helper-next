import React, { createContext, useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import soilModifiers from "../public/soil-modifiers";
import AddItem from "../components/AddItem";
import InfoPanel from "../components/InfoPanel";
import ItemContainer from "../components/ItemContainer";
import PerksContainer from "../components/PerksContainer";
import { CalculationItem } from "../types/CalculationItem.type";
import { CropCalculationItem } from "../types/CropCalculationItem.type";
import { GoodCalculationItem } from "../types/GoodCalculationItem";
import { WineJuiceCalculationItem } from "../types/WineJuiceCalculationItem.type";
import { PreserveCalculationItem } from "../types/PreserveCalculationItem";
import { CheeseCalculationItem } from "../types/CheeseCalculationItem.type";
import { MayoCalculationItem } from "../types/MayoCalculationItem";
import { OilCalculationItem } from "../types/OilCalculationItem.type";
import NoItemsContainer from "../components/NoItemsContainer";
import {
  getCheeseCalculations,
  getCropCalculations,
  getGoodCalculations,
  getMayoCalculations,
  getOilCalculations,
  getPreserveCalculations,
  getWineJuiceCalculations,
} from "../util/calculations";
import { getItemFromStorage } from "../util/storage";

const defaultPerkValues = {
  farmingLevel: 0,
  hasTiller: false,
  hasAgriculturist: false,
  hasRancher: false,
  hasArtisan: false,
};

export const PerksContext = createContext(defaultPerkValues);

interface AppState {
  selectedItemsArr: CalculationItem[];
  addItemPanelIsShowing: boolean;
  showInfoPanel: boolean;
  sortByField: string;
  farmingLevel: number;
  hasTiller: boolean;
  hasAgriculturist: boolean;
  hasRancher: boolean;
  hasArtisan: boolean;
}

const Home: NextPage = () => {
  const appRef = useRef<HTMLDivElement>(null);
  const appInnerRef = useRef<HTMLDivElement>(null);

  const [appState, setAppState] = useState<AppState>({
    selectedItemsArr: [],
    addItemPanelIsShowing: false,
    showInfoPanel: false,
    sortByField: "addedAt",
    ...defaultPerkValues,
  });

  useEffect(() => {
    //check if dataVersion variables match, if not, purge stored items
    //change this value when needing to purge items from storage
    //should only need to change when major changes to dataset occur
    let dataVersion = 1;
    let purgeData = false;
    if (localStorage.getItem("dataVersion")) {
      if (
        JSON.parse(localStorage.getItem("dataVersion") as string) !==
        dataVersion
      ) {
        purgeData = true;
        localStorage.setItem("dataVersion", String(dataVersion));
      }
    } else {
      localStorage.setItem("dataVersion", String(dataVersion));
      purgeData = true;
    }

    //get items from storage or set to default state values
    setAppState({
      ...appState,
      farmingLevel: getItemFromStorage("farmingLevel") || appState.farmingLevel,
      hasTiller: getItemFromStorage("hasTiller") || appState.hasTiller,
      hasRancher: getItemFromStorage("hasRancher") || appState.hasRancher,
      hasAgriculturist:
        getItemFromStorage("hasAgriculturist") || appState.hasAgriculturist,
      hasArtisan: getItemFromStorage("hasArtisan") || appState.hasArtisan,
      sortByField: getItemFromStorage("sortByField") || appState.sortByField,
      selectedItemsArr: !purgeData
        ? getItemFromStorage("selectedItems")
        : [] || appState.selectedItemsArr,
    });

    //set dynamic background
    let currentDate = new Date();
    if (currentDate.getHours() > 7 && currentDate.getHours() < 19) {
      appRef.current!.style.backgroundImage = "url(./day-bg.png)";
    } else {
      appRef.current!.style.backgroundImage = "url(./night-bg.png)";
    }

    //adjusts bottom container starting position based on height of header
    let height = appInnerRef.current?.offsetHeight;
    appRef.current!.style.marginTop = `${height}px`;
  }, []);

  useEffect(() => {
    updateStorage();
  });

  const updateCalculationsAndSort = (
    selectedItems: CalculationItem[],
    hideAddItemPanel?: boolean
  ) => {
    let tempSelectedItemsArr: CalculationItem[] = [];
    selectedItems.forEach((item) => {
      let calculationObj = {};
      switch (item.displayCategory) {
        case "crop":
          calculationObj = getCropCalculations(
            item as CropCalculationItem,
            appState.farmingLevel,
            appState.hasTiller,
            appState.hasAgriculturist
          );
          break;
        case "wineJuice":
          calculationObj = getWineJuiceCalculations(
            item as WineJuiceCalculationItem,
            appState.hasArtisan
          );
          break;
        case "preserves":
          calculationObj = getPreserveCalculations(
            item as PreserveCalculationItem,
            appState.hasArtisan
          );
          break;
        case "good":
          calculationObj = getGoodCalculations(
            item as GoodCalculationItem,
            appState.hasArtisan,
            appState.hasRancher
          );
          break;
        case "cheese":
          calculationObj = getCheeseCalculations(
            item as CheeseCalculationItem,
            appState.hasArtisan,
            appState.hasRancher
          );
          break;
        case "mayo":
          calculationObj = getMayoCalculations(
            item as MayoCalculationItem,
            appState.hasRancher,
            appState.hasArtisan
          );
          break;
        case "oil":
          calculationObj = getOilCalculations(
            item as OilCalculationItem,
            appState.hasArtisan
          );
          break;
        default:
      }
      tempSelectedItemsArr.push({
        ...item,
        ...calculationObj,
      });
    });

    //sort items based on sortByField value
    tempSelectedItemsArr.sort((a, b) => {
      if (a[appState.sortByField]! < b[appState.sortByField]!) return -1;
      if (a[appState.sortByField]! > b[appState.sortByField]!) return 1;
      return 0;
    });

    setAppState({
      ...appState,
      selectedItemsArr: tempSelectedItemsArr,
      addItemPanelIsShowing: hideAddItemPanel,
    });
  };

  const updateStorage = () => {
    localStorage.setItem(
      "selectedItems",
      JSON.stringify(appState.selectedItemsArr)
    );
    localStorage.setItem("sortByField", appState.sortByField);
    localStorage.setItem("farmingLevel", String(appState.farmingLevel));
    localStorage.setItem("hasTiller", String(appState.hasTiller));
    localStorage.setItem("hasRancher", String(appState.hasRancher));
    localStorage.setItem("hasAgriculturist", String(appState.hasAgriculturist));
    localStorage.setItem("hasArtisan", String(appState.hasArtisan));
  };

  const hideAddItemPanel = () => {
    setAppState({ ...appState, addItemPanelIsShowing: false });
  };

  const showAddItemPanel = () => {
    setAppState({ ...appState, addItemPanelIsShowing: true });
  };

  const setDynamicField = (prop: string, val: any) => {
    setAppState({ ...appState, [prop]: val });
  };

  const deleteItem = (idx: number) => {
    let itemsArr = appState.selectedItemsArr;
    itemsArr.splice(idx, 1);
    updateCalculationsAndSort(itemsArr);
  };

  const sortByFieldName = (fieldName: string) => {
    let itemsArr = appState.selectedItemsArr;
    itemsArr.sort((a: CalculationItem, b: CalculationItem) => {
      if (a[fieldName]! < b[fieldName]!) return -1;
      if (a[fieldName]! > b[fieldName]!) return 1;
      return 0;
    });
    setAppState({
      ...appState,
      sortByField: fieldName,
    });
    updateCalculationsAndSort(itemsArr);
  };

  const reverseSort = () => {
    let itemsArr = appState.selectedItemsArr;
    itemsArr.reverse();
    updateCalculationsAndSort(itemsArr);
  };

  const openInfoPanel = () => {
    setAppState({ ...appState, showInfoPanel: true });
  };

  const closeInfoPanel = () => {
    setAppState({ ...appState, showInfoPanel: false });
  };

  const deleteAll = () => {
    updateCalculationsAndSort([]);
  };

  const addItem = (item: CalculationItem) => {
    let itemsArr = appState.selectedItemsArr;
    itemsArr.push(item);
    updateCalculationsAndSort(itemsArr, false);
  };

  return (
    <PerksContext.Provider
      value={{
        farmingLevel: appState.farmingLevel,
        hasArtisan: appState.hasArtisan,
        hasAgriculturist: appState.hasAgriculturist,
        hasRancher: appState.hasRancher,
        hasTiller: appState.hasTiller,
      }}
    >
      <div ref={appRef} className="App container-fluid">
        <AddItem
          soilModifiers={soilModifiers}
          addItemPanelIsShowing={appState.addItemPanelIsShowing}
          hideAddItemPanel={hideAddItemPanel}
          addItem={addItem}
          setField={setDynamicField}
        />
        {appState.showInfoPanel && (
          <InfoPanel
            openInfoPanel={openInfoPanel}
            closeInfoPanel={closeInfoPanel}
          />
        )}
        <div
          ref={appInnerRef}
          className="App-top-container"
          style={{ backgroundImage: `url('./wood.png')` }}
        >
          <div className="App-top-container-first">
            <h1 onClick={openInfoPanel}>
              <i className="App-title-first">Stardew</i>
              <i className="App-title-second">Valley</i>
              <i className="App-title-third">Helper</i>
            </h1>
            <span
              className="App-perks-level-container"
              onClick={showAddItemPanel}
            >
              <div className="App-perks-level-farming">
                <span>Farming Lvl:</span>
                <span>{appState.farmingLevel}</span>
              </div>
              <PerksContainer />
            </span>
            <button className="App-add-item-btn" onClick={showAddItemPanel}>
              Add Item
            </button>
          </div>
        </div>
        {appState.selectedItemsArr.length > 0 && (
          <ItemContainer
            items={appState.selectedItemsArr}
            deleteItem={deleteItem}
            deleteAll={deleteAll}
            sortByField={appState.sortByField}
            sortByFieldName={sortByFieldName}
            reverseSort={reverseSort}
          />
        )}
        {/* If no items have been added */}
        {!appState.selectedItemsArr.length && <NoItemsContainer />}
      </div>
    </PerksContext.Provider>
  );
};

export default Home;
