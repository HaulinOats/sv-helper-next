import "../styles/globals.css";
import "../styles/App.css";
import "../styles/AddItem.css";
import "../styles/CropDetail.css";
import "../styles/GoodDetail.css";
import "../styles/Home.css";
import "../styles/InfoPanel.css";
import "../styles/ItemContainer.css";
import "../styles/ItemModal.css";
import "../styles/LevelPerksSelection.css";
import "../styles/PerksContainer.css";
import "../styles/SortContainer.css";
import "../styles/Tooltip.css";

import type { AppProps } from "next/app";
import Script from "next/script";
import { ItemRef } from "../types/ItemRef.type";
import { ItemData } from "../types/ItemData.type";
import createItemObjects from "../util/item";
import React from "react";

//itemRef is a key/value store for every single item in the dataset. The key is the item's id.
//itemData is the dataset sorted into categories
const { itemRef, itemData }: { itemRef: ItemRef; itemData: ItemData } =
  createItemObjects();
export const ItemContext = React.createContext({ itemRef, itemData });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ItemContext.Provider value={{ itemData, itemRef }}>
      <Component {...pageProps} />
      <Script
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
      />
    </ItemContext.Provider>
  );
}

export default MyApp;
