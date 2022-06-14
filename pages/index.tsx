import React, { createContext, useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import AddItem from "../components/AddItem";
import InfoPanel from "../components/InfoPanel";
import ItemContainer from "../components/ItemContainer";
import PerksContainer from "../components/PerksContainer";
import { CalculationItem } from "../types/CalculationItem.type";
import NoItemsContainer from "../components/NoItemsContainer";
import { getCalculations } from "../util/calculations";
import { getItemFromStorage } from "../util/storage";

interface AppState {
  [key: string]: string | boolean | number | CalculationItem[];
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

const perkDefaultValues = {
  farmingLevel: 0,
  hasTiller: false,
  hasAgriculturist: false,
  hasRancher: false,
  hasArtisan: false,
};

export const PerksContext = createContext(perkDefaultValues);

const Home: NextPage = () => {
  const appRef = useRef<HTMLDivElement>(null);
  const appInnerRef = useRef<HTMLDivElement>(null);

  const [appState, setAppState] = useState<AppState>({
    selectedItemsArr: [],
    addItemPanelIsShowing: false,
    showInfoPanel: false,
    sortByField: "addedAt",
    ...perkDefaultValues,
  });

  useEffect(() => {
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

    let tempSelectedItems: CalculationItem[] = [];
    if (!purgeData && localStorage.getItem("selectedItemsArr")) {
      tempSelectedItems = JSON.parse(
        localStorage.getItem("selectedItemsArr") as string
      ) as CalculationItem[];
    }

    setAppState({
      ...appState,
      sortByField: getItemFromStorage("sortByField"),
      farmingLevel: getItemFromStorage("farmingLevel"),
      hasTiller: getItemFromStorage("hasTiller"),
      hasRancher: getItemFromStorage("hasRancher"),
      hasAgriculturist: getItemFromStorage("hasAgriculturist"),
      hasArtisan: getItemFromStorage("hasArtisan"),
      selectedItemsArr: tempSelectedItems,
    });
  }, []);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENV === "development") {
      setTimeout(updateAppStorage, 0);
    } else {
      updateAppStorage();
    }
  }, [appState]);

  const updateAppStorage = () => {
    localStorage.setItem(
      "selectedItemsArr",
      JSON.stringify(appState.selectedItemsArr)
    );
    localStorage.setItem("sortByField", appState.sortByField);
    localStorage.setItem("farmingLevel", String(appState.farmingLevel));
    localStorage.setItem("hasTiller", String(appState.hasTiller));
    localStorage.setItem("hasRancher", String(appState.hasRancher));
    localStorage.setItem("hasAgriculturist", String(appState.hasAgriculturist));
    localStorage.setItem("hasArtisan", String(appState.hasArtisan));
  };

  const updateCalculationsAndSort = (selectedItems: CalculationItem[]) => {
    let tempSelectedItemsArr: CalculationItem[] = [];
    selectedItems.forEach((item) => {
      tempSelectedItemsArr.push({
        ...item,
        ...getCalculations(item, appState),
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
      addItemPanelIsShowing: false,
    });
  };

  const hideAddItemPanel = () => {
    setAppState({ ...appState, addItemPanelIsShowing: false });
  };

  const showAddItemPanel = () => {
    setAppState({ ...appState, addItemPanelIsShowing: true });
  };

  const setDynamicField = (
    stateName: string,
    stateObj: { [key: string]: boolean | number }
  ) => {
    switch (stateName) {
      case "app":
        setAppState({ ...appState, ...stateObj });
        break;
    }
  };

  const deleteItem = (idx: number) => {
    let itemsArr = appState.selectedItemsArr;
    itemsArr.splice(idx, 1);
    setAppState({
      ...appState,
      selectedItemsArr: itemsArr,
    });
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
      selectedItemsArr: itemsArr,
    });
  };

  const reverseSort = () => {
    let itemsArr = appState.selectedItemsArr;
    itemsArr.reverse();
    setAppState({
      ...appState,
      selectedItemsArr: itemsArr,
    });
  };

  const openInfoPanel = () => {
    setAppState({ ...appState, showInfoPanel: true });
  };

  const closeInfoPanel = () => {
    setAppState({ ...appState, showInfoPanel: false });
  };

  const deleteAll = () => {
    setAppState({
      ...appState,
      selectedItemsArr: [],
    });
  };

  const addItem = (item: CalculationItem) => {
    let itemsArr = appState.selectedItemsArr;
    itemsArr.push(item);
    updateCalculationsAndSort(itemsArr);
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
          addItemPanelIsShowing={appState.addItemPanelIsShowing}
          hideAddItemPanel={hideAddItemPanel}
          addItem={addItem}
          setDynamicField={setDynamicField}
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
