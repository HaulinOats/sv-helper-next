import { Quality } from "./Quality.type"

export type Crop = {
  category: string
  dropsFrom: string[] | null
  harvestTime: {
    initial: number 
    regrowth: number | null
  }
  harvestYield: number
  icon: string
  id: string
  isJuiceable: boolean
  isWineable: boolean
  name: string
  quality: Quality
  seasons: string[]
  seedId: string
  subCategory: string | null
  url: string
  usedIn: string[]
}