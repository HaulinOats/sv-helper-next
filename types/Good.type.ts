import { Quality } from "./Quality.type"

export type Good = {
  buffDuration: {
    minutes: number
    seconds: number
  }
  buffs: string[]
  category: string
  equipment: string[]
  getsArtisanBuff: boolean
  icon: string
  id: string
  isEdible: boolean
  madeFrom: string[]
  name: string
  processingTime: number | null
  quality: Quality
  restore: {
    energy: number | null 
    health: number | null
  }
  sources: string[]
  subCategory: string | null
  url: string
}