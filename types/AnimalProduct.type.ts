import { Quality } from "./Quality.type";

export type AnimalProduct = {
  category: string
  icon: string
  id: string
  isEdible: boolean
  name: string
  quality: Quality
  sources: string[]
  subCategory: string | null
  url: string
  variants: string[]
}