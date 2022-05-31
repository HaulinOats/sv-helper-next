import { AnimalProduct } from "./AnimalProduct.type";
import { ArtisanEquipment } from "./ArtisanEquipment.type";
import { Buff } from "./Buff.type";
import { Building } from "./Building.type";
import { Bundle } from "./Bundle.type";
import { Crafting } from "./Crafting.type";
import { Crop } from "./Crop.type";
import { Fertilizer } from "./Fertilizer.type";
import { Food } from "./Food.type";
import { Good } from "./Good.type";
import { Ingredient } from "./Ingredient.type";
import { People } from "./People.type";
import { Perk } from "./Perk.type";
import { Quest } from "./Quest.type";
import { Seed } from "./Seed.type";
import { Tree } from "./Tree.type";
import { Vendor } from "./Vendor.type";

export type ItemData = {
  animal_products: AnimalProduct[]
  artisanFruitAndVegIds: string[]
  artisan_equipment: ArtisanEquipment[]
  buff: Buff[]
  buildings: Building[]
  bundles: Bundle[]
  crafting: Crafting[]
  crops: Crop[]
  fertilizers: Fertilizer[]
  food: Food[]
  goods: Good[]
  ingredients: Ingredient[]
  people: People[]
  perks: Perk[]
  quests: Quest[]
  seeds: Seed[]
  trees: Tree[]
  vendors: Vendor[]
}