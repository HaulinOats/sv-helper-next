import { Quality } from "./Quality.type";

export type Tree = {
  category: string
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
  vendors:{
    id: string
    cost: number
  }[]
}