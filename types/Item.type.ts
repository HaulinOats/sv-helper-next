import { Quality } from "./Quality.type";

export type Item = {
  [x: string]: any;
  id: string;
  category: string;
  subCategory: string;
  name: string;
  url: string;
  description?: string;
  icon?: string;
  iconNames?: {
    default: string;
    seed: string;
  };
  dropsFrom?: string;
  madeFrom: string[];
  harvestTime: {
    initial: number;
    regrowth: number;
  };
  harvestYield: number;
  isJuiceable?: boolean;
  isWineable?: boolean;
  quality: Quality;
  seasons: string[];
  seedId?: string;
  usedIn?: string[];
  vendors?: {
    id: string;
    cost: number;
  }[];
  buffs?: {
    field: string;
    value: number;
  }[];
  oilProcessingTime?: number;
  processingTime?: number;
};
