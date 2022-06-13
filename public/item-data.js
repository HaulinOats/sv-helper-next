const itemData = [
  {
    id: "blue_jazz",
    name: "Blue Jazz",
    category: "crops",
    subCategory: "flower",
    isWineable: false,
    isJuiceable: false,
    seasons: ["spring"],
    harvestTime: {
      initial: 7,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 50,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      silver: {
        sellsFor: 62,
        restore: {
          energy: 63,
          health: 28,
        },
      },
      gold: {
        sellsFor: 75,
        restore: {
          energy: 81,
          health: 36,
        },
      },
      iridium: {
        sellsFor: 100,
        restore: {
          energy: 117,
          health: 52,
        },
      },
    },
    honeySellPrice: 200,
    dropsFrom: null,
    usedIn: ["lucky_lunch"],
    icon: "Blue_Jazz.webp",
    seedId: "jazz_seeds",
    url: "https://stardewcommunitywiki.com/Blue_Jazz",
  },
  {
    id: "cauliflower",
    name: "Cauliflower",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["spring"],
    harvestTime: {
      initial: 12,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 175,
        restore: {
          energy: 75,
          health: 33,
        },
      },
      silver: {
        sellsFor: 218,
        restore: {
          energy: 105,
          health: 47,
        },
      },
      gold: {
        sellsFor: 262,
        restore: {
          energy: 135,
          health: 60,
        },
      },
      iridium: {
        sellsFor: 350,
        restore: {
          energy: 195,
          health: 87,
        },
      },
    },
    dropsFrom: null,
    usedIn: [
      "spring_crops_bundle",
      "cheese_cauliflower",
      "jodis_request",
      "maru",
    ],
    icon: "Cauliflower.webp",
    seedId: "cauliflower_seeds",
    url: "https://stardewcommunitywiki.com/Cauliflower",
  },
  {
    id: "coffee_bean",
    name: "Coffee Bean",
    category: "crops",
    subCategory: "custom",
    isWineable: false,
    isJuiceable: false,
    seasons: ["spring", "summer"],
    harvestTime: {
      initial: 10,
      regrowth: 2,
    },
    harvestYield: 4,
    quality: {
      normal: {
        sellsFor: 15,
        restore: null,
      },
      silver: {
        sellsFor: 18,
        restore: null,
      },
      gold: {
        sellsFor: 22,
        restore: null,
      },
      iridium: {
        sellsFor: 30,
        restore: null,
      },
    },
    usedIn: ["coffee"],
    vendors: [
      {
        id: "traveling_cart",
        cost: 2500,
      },
    ],
    icon: "Coffee_Bean.webp",
    seedId: "coffee_bean",
    url: "https://stardewcommunitywiki.com/Coffee_Bean",
  },
  {
    id: "garlic",
    name: "Garlic",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["spring"],
    harvestTime: {
      initial: 4,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 60,
        restore: {
          energy: 20,
          health: 9,
        },
      },
      silver: {
        sellsFor: 75,
        restore: {
          energy: 28,
          health: 12,
        },
      },
      gold: {
        sellsFor: 90,
        restore: {
          energy: 36,
          health: 16,
        },
      },
      iridium: {
        sellsFor: 120,
        restore: {
          energy: 52,
          health: 23,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["escargot", "fiddlehead_risotto", "oil_of_garlic"],
    icon: "Garlic.webp",
    seedId: "garlic_seeds",
    url: "https://stardewcommunitywiki.com/Garlic",
  },
  {
    id: "green_bean",
    name: "Green Bean",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["spring"],
    harvestTime: {
      initial: 10,
      regrowth: 3,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 40,
        restore: {
          energy: 25,
          health: 11,
        },
      },
      silver: {
        sellsFor: 50,
        restore: {
          energy: 35,
          health: 15,
        },
      },
      gold: {
        sellsFor: 60,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      iridium: {
        sellsFor: 80,
        restore: {
          energy: 65,
          health: 29,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["bean_hotpot", "spring_crops_bundle"],
    icon: "Green_Bean.webp",
    seedId: "bean_starter",
    url: "https://stardewcommunitywiki.com/Green_Bean",
  },
  {
    id: "kale",
    name: "Kale",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["spring"],
    harvestTime: {
      initial: 6,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 110,
        restore: {
          energy: 50,
          health: 22,
        },
      },
      silver: {
        sellsFor: 137,
        restore: {
          energy: 70,
          health: 31,
        },
      },
      gold: {
        sellsFor: 165,
        restore: {
          energy: 90,
          health: 40,
        },
      },
      iridium: {
        sellsFor: 220,
        restore: {
          energy: 130,
          health: 58,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["salmon_dinner", "stir_fry"],
    icon: "Kale.webp",
    seedId: "kale_seeds",
    url: "https://stardewcommunitywiki.com/Kale",
  },
  {
    id: "parsnip",
    name: "Parsnip",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["spring"],
    harvestTime: {
      initial: 4,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 35,
        restore: {
          energy: 25,
          health: 11,
        },
      },
      silver: {
        sellsFor: 43,
        restore: {
          energy: 35,
          health: 15,
        },
      },
      gold: {
        sellsFor: 52,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      iridium: {
        sellsFor: 70,
        restore: {
          energy: 65,
          health: 29,
        },
      },
    },
    dropsFrom: null,
    usedIn: [
      "farmers_lunch",
      "parsnip_soup",
      "pam",
      "spring_crops_bundle",
      "quality_crops_bundle",
    ],
    icon: "Parsnip.webp",
    seedId: "parsnip_seeds",
    url: "https://stardewcommunitywiki.com/Parsnip",
  },
  {
    id: "potato",
    name: "Potato",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["spring"],
    harvestTime: {
      initial: 6,
      regrowth: null,
    },
    harvestYield: 1.25,
    quality: {
      normal: {
        sellsFor: 80,
        restore: {
          energy: 25,
          health: 11,
        },
      },
      silver: {
        sellsFor: 100,
        restore: {
          energy: 35,
          health: 15,
        },
      },
      gold: {
        sellsFor: 120,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      iridium: {
        sellsFor: 160,
        restore: {
          energy: 65,
          health: 29,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["hashbrowns", "spring_crops_bundle"],
    icon: "Potato.webp",
    seedId: "potato_seeds",
    url: "https://stardewcommunitywiki.com/Potato",
  },
  {
    id: "rhubard",
    name: "Rhubarb",
    category: "crops",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["spring"],
    harvestTime: {
      initial: 13,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 220,
        restore: null,
      },
      silver: {
        sellsFor: 275,
        restore: null,
      },
      gold: {
        sellsFor: 330,
        restore: null,
      },
      iridium: {
        sellsFor: 440,
        restore: null,
      },
    },
    dropsFrom: null,
    usedIn: ["rhubarb_pie"],
    icon: "Rhubarb.webp",
    seedId: "rhubarb_seeds",
    url: "https://stardewcommunitywiki.com/Rhubarb",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    category: "crops",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["spring"],
    harvestTime: {
      initial: 8,
      regrowth: 4,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 120,
        restore: {
          energy: 50,
          health: 22,
        },
      },
      silver: {
        sellsFor: 150,
        restore: {
          energy: 70,
          health: 31,
        },
      },
      gold: {
        sellsFor: 180,
        restore: {
          energy: 90,
          health: 40,
        },
      },
      iridium: {
        sellsFor: 240,
        restore: {
          energy: 130,
          health: 58,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["demetrius", "maru"],
    icon: "Strawberry.webp",
    seedId: "strawberry_seeds",
    url: "https://stardewcommunitywiki.com/Strawberry",
  },
  {
    id: "tulip",
    name: "Tulip",
    category: "crops",
    subCategory: "flower",
    isWineable: false,
    isJuiceable: false,
    seasons: ["spring"],
    harvestTime: {
      initial: 6,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 30,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      silver: {
        sellsFor: 37,
        restore: {
          energy: 63,
          health: 28,
        },
      },
      gold: {
        sellsFor: 45,
        restore: {
          energy: 81,
          health: 36,
        },
      },
      iridium: {
        sellsFor: 60,
        restore: {
          energy: 117,
          health: 52,
        },
      },
    },
    honeySellPrice: 160,
    dropsFrom: null,
    usedIn: ["evelyn"],
    icon: "Tulip.webp",
    seedId: "tulip_bulb",
    url: "https://stardewcommunitywiki.com/Tulip",
  },
  {
    id: "unmilled_rice",
    name: "Unmilled Rice",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["spring"],
    harvestTime: {
      initial: 8,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 30,
        restore: {
          energy: 3,
          health: 1,
        },
      },
      silver: {
        sellsFor: 37,
        restore: {
          energy: 4,
          health: 1,
        },
      },
      gold: {
        sellsFor: 45,
        restore: {
          energy: 5,
          health: 2,
        },
      },
      iridium: {
        sellsFor: 60,
        restore: {
          energy: 7,
          health: 3,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["rice"],
    icon: "Unmilled_Rice.webp",
    seedId: "rice_shoot",
    url: "https://stardewcommunitywiki.com/Unmilled_Rice",
  },
  {
    id: "blueberry",
    name: "Blueberry",
    category: "crops",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["summer"],
    harvestTime: {
      initial: 13,
      regrowth: 4,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 50,
        restore: {
          energy: 25,
          health: 11,
        },
      },
      silver: {
        sellsFor: 62,
        restore: {
          energy: 35,
          health: 15,
        },
      },
      gold: {
        sellsFor: 75,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      iridium: {
        sellsFor: 100,
        restore: {
          energy: 65,
          health: 29,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["blueberry_tart", "fruit_salad", "summer_crops_bundle"],
    icon: "Blueberry.webp",
    seedId: "blueberry_seeds",
    url: "https://stardewcommunitywiki.com/Blueberry",
  },
  {
    id: "corn",
    name: "Corn",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["summer", "fall"],
    harvestTime: {
      initial: 14,
      regrowth: 4,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 50,
        restore: {
          energy: 25,
          health: 11,
        },
      },
      silver: {
        sellsFor: 62,
        restore: {
          energy: 35,
          health: 15,
        },
      },
      gold: {
        sellsFor: 75,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      iridium: {
        sellsFor: 100,
        restore: {
          energy: 65,
          health: 29,
        },
      },
    },
    oilProcessingTime: 1000,
    dropsFrom: null,
    usedIn: ["tortilla", "oil", "fall_crops_bundle", "quality_crops_bundle"],
    iconNames: {
      default: "Corn.webp",
      seed: "Corn_Seeds.webp",
    },
    icon: "Corn.webp",
    seedId: "corn_seeds",
    url: "https://stardewcommunitywiki.com/Corn",
  },
  {
    id: "hops",
    name: "Hops",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: false,
    seasons: ["summer"],
    harvestTime: {
      initial: 11,
      regrowth: 1,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 25,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      silver: {
        sellsFor: 31,
        restore: {
          energy: 63,
          health: 28,
        },
      },
      gold: {
        sellsFor: 37,
        restore: {
          energy: 81,
          health: 36,
        },
      },
      iridium: {
        sellsFor: 50,
        restore: {
          energy: 117,
          health: 52,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["pale_ale"],
    icon: "Hops.webp",
    seedId: "hops_starter",
    url: "https://stardewcommunitywiki.com/Hops",
  },
  {
    id: "hot_pepper",
    name: "Hot Pepper",
    category: "crops",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["summer"],
    harvestTime: {
      initial: 5,
      regrowth: 3,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 40,
        restore: {
          energy: 13,
          health: 5,
        },
      },
      silver: {
        sellsFor: 15,
        restore: {
          energy: 18,
          health: 8,
        },
      },
      gold: {
        sellsFor: 60,
        restore: {
          energy: 23,
          health: 10,
        },
      },
      iridium: {
        sellsFor: 80,
        restore: {
          energy: 33,
          health: 14,
        },
      },
    },
    dropsFrom: null,
    usedIn: [
      "pepper_poppers",
      "spicy_eel",
      "tropical_curry",
      "summer_crops_bundle",
      "knee_therapy",
      "lewis",
      "shane",
    ],
    icon: "Hot_Pepper.webp",
    seedId: "pepper_seeds",
    url: "https://stardewcommunitywiki.com/Hot_Pepper",
  },
  {
    id: "melon",
    name: "Melon",
    category: "crops",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["summer"],
    harvestTime: {
      initial: 12,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 250,
        restore: {
          energy: 113,
          health: 50,
        },
      },
      silver: {
        sellsFor: 312,
        restore: {
          energy: 158,
          health: 71,
        },
      },
      gold: {
        sellsFor: 375,
        restore: {
          energy: 203,
          health: 91,
        },
      },
      iridium: {
        sellsFor: 500,
        restore: {
          energy: 293,
          health: 131,
        },
      },
    },
    dropsFrom: null,
    usedIn: [
      "fruit_salad",
      "pink_cake",
      "summer_crops_bundle",
      "quality_crops_bundle",
      "crop_research",
      "penny",
    ],
    icon: "Melon.webp",
    seedId: "melon_seeds",
    url: "https://stardewcommunitywiki.com/Melon",
  },
  {
    id: "poppy",
    name: "Poppy",
    category: "crops",
    subCategory: "flower",
    isWineable: false,
    isJuiceable: false,
    seasons: ["summer"],
    harvestTime: {
      initial: 7,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 140,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      silver: {
        sellsFor: 175,
        restore: {
          energy: 63,
          health: 28,
        },
      },
      gold: {
        sellsFor: 210,
        restore: {
          energy: 81,
          health: 36,
        },
      },
      iridium: {
        sellsFor: 280,
        restore: {
          energy: 117,
          health: 52,
        },
      },
    },
    honeySellPrice: 380,
    dropsFrom: null,
    usedIn: ["poppyseed_muffin", "chefs_bundle", "penny"],
    icon: "Poppy.webp",
    seedId: "poppy_seeds",
    url: "https://stardewcommunitywiki.com/Poppy",
  },
  {
    id: "radish",
    name: "Radish",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["summer"],
    harvestTime: {
      initial: 6,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 90,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      silver: {
        sellsFor: 112,
        restore: {
          energy: 63,
          health: 28,
        },
      },
      gold: {
        sellsFor: 135,
        restore: {
          energy: 81,
          health: 36,
        },
      },
      iridium: {
        sellsFor: 180,
        restore: {
          energy: 117,
          health: 52,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["radish_salad", "red_plate"],
    icon: "Radish.webp",
    seedId: "radish_seeds",
    url: "https://stardewcommunitywiki.com/Radish",
  },
  {
    id: "red_cabbage",
    name: "Red Cabbage",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["summer"],
    harvestTime: {
      initial: 9,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 260,
        restore: {
          energy: 75,
          health: 33,
        },
      },
      silver: {
        sellsFor: 325,
        restore: {
          energy: 105,
          health: 47,
        },
      },
      gold: {
        sellsFor: 390,
        restore: {
          energy: 135,
          health: 60,
        },
      },
      iridium: {
        sellsFor: 520,
        restore: {
          energy: 195,
          health: 87,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["red_plate", "coleslaw", "fish_taco", "dye_bundle"],
    icon: "Red_Cabbage.webp",
    seedId: "red_cabbage_seeds",
    url: "https://stardewcommunitywiki.com/Red_Cabbage",
  },
  {
    id: "starfruit",
    name: "Starfruit",
    category: "crops",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["summer"],
    harvestTime: {
      initial: 13,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 750,
        restore: {
          energy: 125,
          health: 56,
        },
      },
      silver: {
        sellsFor: 937,
        restore: {
          energy: 175,
          health: 78,
        },
      },
      gold: {
        sellsFor: 1125,
        restore: {
          energy: 225,
          health: 101,
        },
      },
      iridium: {
        sellsFor: 1500,
        restore: {
          energy: 325,
          health: 146,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["junimo_hut", "a_soldiers_star"],
    icon: "Starfruit.webp",
    seedId: "starfruit_seeds",
    url: "https://stardewcommunitywiki.com/Starfruit",
  },
  {
    id: "summer_spangle",
    name: "Summer Spangle",
    category: "crops",
    subCategory: "flower",
    isWineable: false,
    isJuiceable: false,
    seasons: ["summer"],
    harvestTime: {
      initial: 8,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 90,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      silver: {
        sellsFor: 112,
        restore: {
          energy: 63,
          health: 28,
        },
      },
      gold: {
        sellsFor: 135,
        restore: {
          energy: 81,
          health: 36,
        },
      },
      iridium: {
        sellsFor: 180,
        restore: {
          energy: 117,
          health: 52,
        },
      },
    },
    honeySellPrice: 280,
    dropsFrom: null,
    usedIn: ["caroline"],
    icon: "Summer_Spangle.webp",
    seedId: "spangle_seeds",
    url: "https://stardewcommunitywiki.com/Summer_Spangle",
  },
  {
    id: "sunflower",
    name: "Sunflower",
    category: "crops",
    subCategory: "flower",
    isWineable: false,
    isJuiceable: false,
    seasons: ["summer", "fall"],
    harvestTime: {
      initial: 8,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 80,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      silver: {
        sellsFor: 100,
        restore: {
          energy: 63,
          health: 28,
        },
      },
      gold: {
        sellsFor: 120,
        restore: {
          energy: 81,
          health: 36,
        },
      },
      iridium: {
        sellsFor: 160,
        restore: {
          energy: 117,
          health: 52,
        },
      },
    },
    honeySellPrice: 260,
    oilProcessingTime: 60,
    dropsFrom: null,
    usedIn: ["oil", "dye_bundle", "haley"],
    icon: "Sunflower.webp",
    seedId: "sunflower_seeds",
    url: "https://stardewcommunitywiki.com/Sunflower",
  },
  {
    id: "tomato",
    name: "Tomato",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["summer"],
    harvestTime: {
      initial: 11,
      regrowth: 4,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 60,
        restore: {
          energy: 20,
          health: 9,
        },
      },
      silver: {
        sellsFor: 75,
        restore: {
          energy: 28,
          health: 12,
        },
      },
      gold: {
        sellsFor: 90,
        restore: {
          energy: 36,
          health: 16,
        },
      },
      iridium: {
        sellsFor: 120,
        restore: {
          energy: 52,
          health: 23,
        },
      },
    },
    dropsFrom: null,
    usedIn: [
      "bruschetta",
      "eggplant_parmesan",
      "fish_stew",
      "pizza",
      "spaghetti",
      "vegetable_medley",
      "summer_crops_bundle",
    ],
    icon: "Tomato.webp",
    seedId: "tomato_seeds",
    url: "https://stardewcommunitywiki.com/Tomato",
  },
  {
    id: "wheat",
    name: "Wheat",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: false,
    seasons: ["summer", "fall"],
    harvestTime: {
      initial: 4,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 25,
        restore: null,
      },
      silver: {
        sellsFor: 31,
        restore: null,
      },
      gold: {
        sellsFor: 37,
        restore: null,
      },
      iridium: {
        sellsFor: 50,
        restore: null,
      },
    },
    dropsFrom: null,
    usedIn: ["beer", "wheat_flour", "fodder_bundle"],
    icon: "Wheat.webp",
    seedId: "wheat_seeds",
    url: "https://stardewcommunitywiki.com/Wheat_Seeds",
  },
  {
    id: "amaranth",
    name: "Amaranth",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["fall"],
    harvestTime: {
      initial: 7,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 150,
        restore: {
          energy: 50,
          health: 22,
        },
      },
      silver: {
        sellsFor: 187,
        restore: {
          energy: 70,
          health: 31,
        },
      },
      gold: {
        sellsFor: 225,
        restore: {
          energy: 90,
          health: 40,
        },
      },
      iridium: {
        sellsFor: 300,
        restore: {
          energy: 130,
          health: 58,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["salmon_dinner", "cows_delight"],
    icon: "Amaranth.webp",
    seedId: "amaranth_seeds",
    url: "https://stardewcommunitywiki.com/Amaranth",
  },
  {
    id: "artichoke",
    name: "Artichoke",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["fall"],
    harvestTime: {
      initial: 8,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 160,
        restore: {
          energy: 30,
          health: 13,
        },
      },
      silver: {
        sellsFor: 200,
        restore: {
          energy: 42,
          health: 18,
        },
      },
      gold: {
        sellsFor: 240,
        restore: {
          energy: 54,
          health: 24,
        },
      },
      iridium: {
        sellsFor: 320,
        restore: {
          energy: 78,
          health: 35,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["artichoke_dip", "super_meal"],
    icon: "Artichoke.webp",
    seedId: "artichoke_seeds",
    url: "https://stardewcommunitywiki.com/Artichoke",
  },
  {
    id: "beet",
    name: "Beet",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["fall"],
    harvestTime: {
      initial: 6,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 100,
        restore: {
          energy: 30,
          health: 13,
        },
      },
      silver: {
        sellsFor: 125,
        restore: {
          energy: 42,
          health: 18,
        },
      },
      gold: {
        sellsFor: 150,
        restore: {
          energy: 54,
          health: 24,
        },
      },
      iridium: {
        sellsFor: 200,
        restore: {
          energy: 78,
          health: 35,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["vegetable_medley", "sugar", "the_mysterious_qi", "evelyn"],
    icon: "Beet.webp",
    seedId: "beet_seeds",
    url: "https://stardewcommunitywiki.com/Beet",
  },
  {
    id: "bok_choy",
    name: "Bok Choy",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["fall"],
    harvestTime: {
      initial: 6,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 80,
        restore: {
          energy: 25,
          health: 11,
        },
      },
      silver: {
        sellsFor: 100,
        restore: {
          energy: 35,
          health: 15,
        },
      },
      gold: {
        sellsFor: 120,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      iridium: {
        sellsFor: 160,
        restore: {
          energy: 65,
          health: 29,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["super_meal"],
    icon: "Bok_Choy.webp",
    seedId: "bok_choy_seeds",
    url: "https://stardewcommunitywiki.com/Bok_Choy",
  },
  {
    id: "cranberry",
    name: "Cranberry",
    category: "crops",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["fall"],
    harvestTime: {
      initial: 7,
      regrowth: 5,
    },
    harvestYield: 2,
    quality: {
      normal: {
        sellsFor: 75,
        restore: {
          energy: 38,
          health: 17,
        },
      },
      silver: {
        sellsFor: 93,
        restore: {
          energy: 53,
          health: 23,
        },
      },
      gold: {
        sellsFor: 112,
        restore: {
          energy: 68,
          health: 30,
        },
      },
      iridium: {
        sellsFor: 150,
        restore: {
          energy: 98,
          health: 44,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["cranberry_candy", "cranberry_sauce", "stuffing", "super_meal"],
    icon: "Cranberries.webp",
    seedId: "cranberry_seeds",
    url: "https://stardewcommunitywiki.com/Cranberries",
  },
  {
    id: "eggplant",
    name: "Eggplant",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["fall"],
    harvestTime: {
      initial: 5,
      regrowth: 5,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 60,
        restore: {
          energy: 20,
          health: 9,
        },
      },
      silver: {
        sellsFor: 75,
        restore: {
          energy: 28,
          health: 12,
        },
      },
      gold: {
        sellsFor: 90,
        restore: {
          energy: 36,
          health: 16,
        },
      },
      iridium: {
        sellsFor: 120,
        restore: {
          energy: 52,
          health: 23,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["eggplant_parmesan", "survival_burger", "fall_crops_bundle"],
    icon: "Eggplant.webp",
    seedId: "eggplant_seeds",
    url: "https://stardewcommunitywiki.com/Eggplant",
  },
  {
    id: "fairy_rose",
    name: "Fairy Rose",
    category: "crops",
    subCategory: "flower",
    isWineable: false,
    isJuiceable: false,
    seasons: ["fall"],
    harvestTime: {
      initial: 12,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 290,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      silver: {
        sellsFor: 362,
        restore: {
          energy: 63,
          health: 28,
        },
      },
      gold: {
        sellsFor: 435,
        restore: {
          energy: 81,
          health: 36,
        },
      },
      iridium: {
        sellsFor: 580,
        restore: {
          energy: 117,
          health: 52,
        },
      },
    },
    honeySellPrice: 680,
    dropsFrom: null,
    usedIn: ["fairy_dust", "evelyn", "jas"],
    icon: "Fairy_Rose.webp",
    seedId: "fairy_seeds",
    url: "https://stardewcommunitywiki.com/Fairy_Rose",
  },
  {
    id: "pumpkin",
    name: "Pumpkin",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["fall"],
    harvestTime: {
      initial: 13,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 320,
        restore: null,
      },
      silver: {
        sellsFor: 400,
        restore: null,
      },
      gold: {
        sellsFor: 480,
        restore: null,
      },
      iridium: {
        sellsFor: 640,
        restore: null,
      },
    },
    dropsFrom: null,
    usedIn: [
      "autumns_bounty",
      "pumpkin_pie",
      "pumpkin_soup",
      "jack_o_lantern",
      "fall_crops_bundle",
      "quality_crops_bundle",
      "carving_pumpkins",
      "abigail",
      "krobus",
      "willy",
    ],
    icon: "Pumpkin.webp",
    seedId: "pumpkin_seeds",
    url: "https://stardewcommunitywiki.com/Pumpkin",
  },
  {
    id: "yam",
    name: "Yam",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: true,
    seasons: ["fall"],
    harvestTime: {
      initial: 10,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 160,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      silver: {
        sellsFor: 200,
        restore: {
          energy: 63,
          health: 28,
        },
      },
      gold: {
        sellsFor: 240,
        restore: {
          energy: 81,
          health: 36,
        },
      },
      iridium: {
        sellsFor: 320,
        restore: {
          energy: 117,
          health: 52,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["autumns_bounty", "glazed_yams", "fall_crops_bundle", "linus"],
    icon: "Yam.webp",
    seedId: "yam_seeds",
    url: "https://stardewcommunitywiki.com/Yam",
  },
  {
    id: "ancient_fruit",
    name: "Ancient Fruit",
    category: "crops",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["spring", "summer", "fall"],
    harvestTime: {
      initial: 28,
      regrowth: 7,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 550,
        restore: null,
      },
      silver: {
        sellsFor: 687,
        restore: null,
      },
      gold: {
        sellsFor: 825,
        restore: null,
      },
      iridium: {
        sellsFor: 1100,
        restore: null,
      },
    },
    dropsFrom: null,
    usedIn: [],
    icon: "Ancient_Fruit.webp",
    seedId: "ancient_seeds",
    url: "https://stardewcommunitywiki.com/Ancient_Fruit",
  },
  {
    id: "cactus_fruit",
    name: "Cactus Fruit",
    category: "crops",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["spring", "summer", "fall"],
    harvestTime: {
      initial: 12,
      regrowth: 3,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 75,
        restore: {
          energy: 75,
          health: 33,
        },
      },
      silver: {
        sellsFor: 93,
        restore: {
          energy: 105,
          health: 47,
        },
      },
      gold: {
        sellsFor: 112,
        restore: {
          energy: 135,
          health: 60,
        },
      },
      iridium: {
        sellsFor: 150,
        restore: {
          energy: 195,
          health: 87,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["exotic_foraging_bundle", "linus", "pam", "sam"],
    icon: "Cactus_Fruit.webp",
    seedId: "cactus_seeds",
    url: "https://stardewcommunitywiki.com/Cactus_Fruit",
  },
  {
    id: "pineapple",
    name: "Pineapple",
    category: "crops",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["summer"],
    harvestTime: {
      initial: 14,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 300,
        restore: {
          energy: 138,
          health: 62,
        },
      },
      silver: {
        sellsFor: 375,
        restore: {
          energy: 193,
          health: 86,
        },
      },
      gold: {
        sellsFor: 450,
        restore: {
          energy: 248,
          health: 111,
        },
      },
      iridium: {
        sellsFor: 600,
        restore: {
          energy: 358,
          health: 161,
        },
      },
    },
    dropsFrom: null,
    usedIn: ["tropical_curry"],
    icon: "Pineapple.webp",
    seedId: "pineapple_seeds",
    url: "https://stardewcommunitywiki.com/Pineapple",
  },
  {
    id: "sweet_gem_berry",
    name: "Sweet Gem Berry",
    category: "crops",
    subCategory: "fruits",
    isWineable: false,
    isJuiceable: false,
    seasons: ["fall"],
    harvestTime: {
      initial: 24,
      regrowth: null,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 3000,
        restore: null,
      },
      silver: {
        sellsFor: 3750,
        restore: null,
      },
      gold: {
        sellsFor: 4500,
        restore: null,
      },
      iridium: {
        sellsFor: 6000,
        restore: null,
      },
    },
    dropsFrom: null,
    usedIn: [],
    icon: "Sweet_Gem_Berry.webp",
    seedId: "rare_seed",
    url: "https://stardewcommunitywiki.com/Sweet_Gem_Berry",
  },
  {
    id: "tea_leaves",
    name: "Tea Leaves",
    category: "crops",
    subCategory: "vegetable",
    isWineable: false,
    isJuiceable: false,
    seasons: ["spring", "summer", "fall"],
    harvestTime: {
      initial: 20,
      regrowth: 1,
    },
    harvestYield: 1,
    quality: {
      normal: {
        sellsFor: 50,
        restore: null,
      },
      silver: {
        sellsFor: 50,
        restore: null,
      },
      gold: {
        sellsFor: 50,
        restore: null,
      },
      iridium: {
        sellsFor: 50,
        restore: null,
      },
    },
    vendors: [],
    dropsFrom: null,
    usedIn: ["green_tea"],
    icon: "Tea_Leaves.webp",
    seedId: "tea_sapling",
    url: "https://stardewcommunitywiki.com/Tea_Leaves",
  },
  {
    id: "apple",
    name: "Apple",
    category: "trees",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["fall"],
    quality: {
      normal: {
        sellsFor: 100,
        restore: null,
      },
      silver: {
        sellsFor: 125,
        restore: null,
      },
      gold: {
        sellsFor: 150,
        restore: null,
      },
      iridium: {
        sellsFor: 200,
        restore: null,
      },
    },
    vendors: [
      {
        id: "pierre",
        cost: 4000,
      },
      {
        id: "traveling_cart",
        cost: 4000,
      },
    ],
    usedIn: [],
    icon: "Apple.webp",
    seedId: "apple_sapling",
    url: "https://stardewvalleywiki.com/Apple",
  },
  {
    id: "apricot",
    name: "Apricot",
    category: "trees",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["spring"],
    quality: {
      normal: {
        sellsFor: 50,
        restore: null,
      },
      silver: {
        sellsFor: 62,
        restore: null,
      },
      gold: {
        sellsFor: 75,
        restore: null,
      },
      iridium: {
        sellsFor: 100,
        restore: null,
      },
    },
    sellsFor: 50,
    vendors: [
      {
        id: "pierre",
        cost: 2000,
      },
      {
        id: "traveling_cart",
        cost: 2000,
      },
    ],
    usedIn: [],
    icon: "Apricot.webp",
    seedId: "apricot_sapling",
    url: "https://stardewvalleywiki.com/Apricot",
  },
  {
    id: "cherry",
    name: "Cherry",
    category: "trees",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["spring"],
    quality: {
      normal: {
        sellsFor: 80,
        restore: null,
      },
      silver: {
        sellsFor: 100,
        restore: null,
      },
      gold: {
        sellsFor: 120,
        restore: null,
      },
      iridium: {
        sellsFor: 160,
        restore: null,
      },
    },
    sellsFor: 80,
    vendors: [
      {
        id: "pierre",
        cost: 3400,
      },
      {
        id: "traveling_cart",
        cost: 3400,
      },
    ],
    usedIn: [],
    icon: "Cherry.png",
    seedId: "cherry_sapling",
    url: "https://stardewvalleywiki.com/Cherry",
  },
  {
    id: "orange",
    name: "Orange",
    category: "trees",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["summer"],
    quality: {
      normal: {
        sellsFor: 100,
        restore: null,
      },
      silver: {
        sellsFor: 125,
        restore: null,
      },
      gold: {
        sellsFor: 150,
        restore: null,
      },
      iridium: {
        sellsFor: 200,
        restore: null,
      },
    },
    sellsFor: 100,
    vendors: [
      {
        id: "pierre",
        cost: 4000,
      },
      {
        id: "traveling",
        cost: 4000,
      },
    ],
    usedIn: [],
    icon: "Orange.webp",
    seedId: "orange_sapling",
    url: "https://stardewvalleywiki.com/Orange",
  },
  {
    id: "peach",
    name: "Peach",
    category: "trees",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["summer"],
    quality: {
      normal: {
        sellsFor: 140,
        restore: null,
      },
      silver: {
        sellsFor: 175,
        restore: null,
      },
      gold: {
        sellsFor: 210,
        restore: null,
      },
      iridium: {
        sellsFor: 280,
        restore: null,
      },
    },
    sellsFor: 140,
    vendors: [
      {
        id: "pierre",
        cost: 6000,
      },
      {
        id: "traveling_cart",
        cost: 6000,
      },
    ],
    usedIn: [],
    icon: "Peach.webp",
    seedId: "peach_sapling",
    url: "https://stardewvalleywiki.com/Peach",
  },
  {
    id: "pomegranate",
    name: "Pomegranate",
    category: "trees",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["fall"],
    quality: {
      normal: {
        sellsFor: 140,
        restore: null,
      },
      silver: {
        sellsFor: 175,
        restore: null,
      },
      gold: {
        sellsFor: 210,
        restore: null,
      },
      iridium: {
        sellsFor: 280,
        restore: null,
      },
    },
    sellsFor: 140,
    vendors: [
      {
        id: "pierre",
        cost: 6000,
      },
      {
        id: "traveling_cart",
        cost: 6000,
      },
    ],
    usedIn: [],
    icon: "Pomegranate.webp",
    seedId: "pomegranate_sapling",
    url: "https://stardewvalleywiki.com/Pomegranate",
  },
  {
    id: "mango",
    name: "Mango",
    category: "trees",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["summer"],
    quality: {
      normal: {
        sellsFor: 130,
        restore: null,
      },
      silver: {
        sellsFor: 162,
        restore: null,
      },
      gold: {
        sellsFor: 195,
        restore: null,
      },
      iridium: {
        sellsFor: 260,
        restore: null,
      },
    },
    sellsFor: 130,
    vendors: [],
    usedIn: [],
    icon: "Mango.webp",
    seedId: "mango_sapling",
    url: "https://stardewvalleywiki.com/Mango",
  },
  {
    id: "banana",
    name: "Banana",
    category: "trees",
    subCategory: "fruits",
    isWineable: true,
    isJuiceable: false,
    seasons: ["summer"],
    quality: {
      normal: {
        sellsFor: 150,
        restore: null,
      },
      silver: {
        sellsFor: 187,
        restore: null,
      },
      gold: {
        sellsFor: 225,
        restore: null,
      },
      iridium: {
        sellsFor: 300,
        restore: null,
      },
    },
    sellsFor: 150,
    usedIn: [],
    icon: "Banana.png",
    seedId: "banana_sapling",
    url: "https://stardewvalleywiki.com/Banana",
  },

  {
    id: "sunflower_seeds",
    name: "Sunflower Seeds",
    category: "seeds",
    subCategory: "crop",
    oilProcessingTime: 3200,
    icon: "Sunflower_Seeds.png",
    url: "https://stardewcommunitywiki.com/Sunflower_Seeds",
  },
  {
    id: "jazz_seeds",
    name: "Jazz Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 30,
      },
      {
        id: "joja",
        cost: 37,
      },
    ],
    icon: "Jazz_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Jazz_Seeds",
  },
  {
    id: "cauliflower_seeds",
    name: "Cauliflower Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 80,
      },
      {
        id: "joja",
        cost: 100,
      },
    ],
    icon: "Cauliflower_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Cauliflower_Seeds",
  },
  {
    id: "garlic_seeds",
    name: "Garlic Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 40,
      },
    ],
    icon: "Garlic_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Garlic_Seeds",
  },
  {
    id: "bean_starter",
    name: "Bean Starter",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 60,
      },
      {
        id: "joja",
        cost: 75,
      },
    ],
    icon: "Bean_Starter.webp",
    url: "https://stardewcommunitywiki.com/Bean_Starter",
  },
  {
    id: "kale_seeds",
    name: "Kale Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 20,
      },
      {
        id: "joja",
        cost: 25,
      },
    ],
    icon: "Kale_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Kale_Seeds",
  },
  {
    id: "parsnip_seeds",
    name: "Parsnip Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 20,
      },
      {
        id: "joja",
        cost: 25,
      },
    ],
    icon: "Parsnip_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Parsnip_Seeds",
  },
  {
    id: "potato_seeds",
    name: "Potato Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 50,
      },
      {
        id: "joja",
        cost: 62,
      },
    ],
    icon: "Potato_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Potato_Seeds",
  },
  {
    id: "rhubarb_seeds",
    name: "Rhubarb Seeds",
    category: "seeds",
    vendors: [
      {
        id: "oasis",
        cost: 100,
      },
    ],
    icon: "Rhubarb_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Rhubarb_Seeds",
  },
  {
    id: "strawberry_seeds",
    name: "Strawberry Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pam",
        cost: 100,
      },
    ],
    icon: "Strawberry_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Strawberry_Seeds",
  },
  {
    id: "tulip_bulb",
    name: "Tulip Bulb",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 20,
      },
      {
        id: "joja",
        cost: 25,
      },
    ],
    icon: "Tulip_Bulb.webp",
    url: "https://stardewcommunitywiki.com/Tulip_Bulb",
  },
  {
    id: "rice_shoot",
    name: "Rice Shoot",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 40,
      },
    ],
    icon: "Rice_Shoot.webp",
    url: "https://stardewcommunitywiki.com/Rice_Shoot",
  },
  {
    id: "blueberry_seeds",
    name: "Blueberry Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 80,
      },
    ],
    icon: "Blueberry_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Blueberry_Seeds",
  },
  {
    id: "corn_seeds",
    name: "Corn Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 150,
      },
      {
        id: "joja",
        cost: 187,
      },
    ],
    icon: "Corn_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Corn_Seeds",
  },
  {
    id: "hops_starter",
    name: "Hops Starter",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 60,
      },
      {
        id: "joja",
        cost: 75,
      },
    ],
    icon: "Hops_Starter.webp",
    url: "https://stardewcommunitywiki.com/Hops_Starter",
  },
  {
    id: "pepper_seeds",
    name: "Pepper Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 40,
      },
      {
        id: "joja",
        cost: 50,
      },
    ],
    icon: "Pepper_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Pepper_Seeds",
  },
  {
    id: "melon_seeds",
    name: "Melon Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 80,
      },
      {
        id: "joja",
        cost: 100,
      },
    ],
    icon: "Melon_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Melon_Seeds",
  },
  {
    id: "poppy_seeds",
    name: "Poppy Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 100,
      },
      {
        id: "joja",
        cost: 125,
      },
    ],
    icon: "Poppy_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Poppy_Seeds",
  },
  {
    id: "radish_seeds",
    name: "Radish Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 40,
      },
      {
        id: "joja",
        cost: 50,
      },
    ],
    icon: "Radish_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Radish_Seeds",
  },
  {
    id: "red_cabbage_seeds",
    name: "Red Cabbage Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 100,
      },
    ],
    icon: "Red_Cabbage_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Red_Cabbage_Seeds",
  },
  {
    id: "starfruit_seeds",
    name: "Starfruit Seeds",
    category: "seeds",
    vendors: [
      {
        id: "oasis",
        cost: 400,
      },
    ],
    icon: "Starfruit_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Starfruit_Seeds",
  },
  {
    id: "spangle_seeds",
    name: "Spangle Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 50,
      },
      {
        id: "joja",
        cost: 62,
      },
    ],
    icon: "Spangle_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Spangle_Seeds",
  },
  {
    id: "tomato_seeds",
    name: "Tomato Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 50,
      },
      {
        id: "joja",
        cost: 62,
      },
    ],
    icon: "Tomato_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Tomato_Seeds",
  },
  {
    id: "wheat_seeds",
    name: "Wheat Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 10,
      },
      {
        id: "joja",
        cost: 12,
      },
    ],
    icon: "Wheat_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Wheat_Seeds",
  },
  {
    id: "amaranth_seeds",
    name: "Amaranth Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 70,
      },
      {
        id: "joja",
        cost: 87,
      },
    ],
    icon: "Amaranth_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Amaranth_Seeds",
  },
  {
    id: "artichoke_seeds",
    name: "Artichoke Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 30,
      },
    ],
    icon: "Artichoke_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Artichoke_Seeds",
  },
  {
    id: "beet_seeds",
    name: "Beet Seeds",
    category: "seeds",
    vendors: [
      {
        id: "oasis",
        cost: 20,
      },
    ],
    icon: "Beet_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Beet_Seeds",
  },
  {
    id: "bok_choy_seeds",
    name: "Bok Choy Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 50,
      },
      {
        id: "joja",
        cost: 62,
      },
    ],
    icon: "Bok_Choy_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Bok_Choy_Seeds",
  },
  {
    id: "cranberry_seeds",
    name: "Cranberry Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 240,
      },
      {
        id: "joja",
        cost: 300,
      },
    ],
    icon: "Cranberry_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Cranberry_Seeds",
  },
  {
    id: "eggplant_seeds",
    name: "Eggplant Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 20,
      },
      {
        id: "joja",
        cost: 25,
      },
    ],
    icon: "Eggplant_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Eggplant_Seeds",
  },
  {
    id: "fairy_seeds",
    name: "Fairy Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 200,
      },
      {
        id: "joja",
        cost: 250,
      },
    ],
    icon: "Fairy_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Fairy_Seeds",
  },
  {
    id: "pumpkin_seeds",
    name: "Pumpkin Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 100,
      },
      {
        id: "joja",
        cost: 125,
      },
    ],
    icon: "Pumpkin_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Pumpkin_Seeds",
  },
  {
    id: "yam_seeds",
    name: "Yam Seeds",
    category: "seeds",
    vendors: [
      {
        id: "pierre",
        cost: 60,
      },
      {
        id: "joja",
        cost: 75,
      },
    ],
    icon: "Yam_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Yam_Seeds",
  },
  {
    id: "ancient_seeds",
    name: "Ancient Seeds",
    category: "seeds",
    vendors: [
      {
        id: "traveling_cart",
        cost: 550,
      },
    ],
    icon: "Ancient_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Ancient_Seeds",
  },
  {
    id: "cactus_seeds",
    name: "Cactus Seeds",
    category: "seeds",
    vendors: [
      {
        id: "oasis",
        cost: 150,
      },
    ],
    icon: "Cactus_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Cactus_Seeds",
  },
  {
    id: "pineapple_seeds",
    name: "Pineapple Seeds",
    category: "seeds",
    vendors: [],
    icon: "Pineapple_Seeds.webp",
    url: "https://stardewcommunitywiki.com/Pineapple_Seeds",
  },
  {
    id: "rare_seed",
    name: "Rare Seed",
    category: "seeds",
    vendors: [
      {
        id: "traveling_cart",
        cost: 1000,
      },
    ],
    icon: "Rare_Seed.webp",
    url: "https://stardewcommunitywiki.com/Rare_Seed",
  },
  {
    id: "tea_sapling",
    name: "Tea Sapling",
    category: "seeds",
    vendors: [],
    icon: "Tea_Sapling.webp",
    url: "https://stardewcommunitywiki.com/Tea_Sapling",
  },
  {
    id: "apple_sapling",
    name: "Apple Sapling",
    category: "seeds",
    icon: "Apple_Sapling.webp",
    url: "https://stardewvalleywiki.com/Apple_Sapling",
  },
  {
    id: "apricot_sapling",
    name: "Apricot Sapling",
    category: "seeds",
    icon: "Apricot_Sapling.webp",
    url: "https://stardewvalleywiki.com/Apricot_Sapling",
  },
  {
    id: "cherry_sapling",
    name: "Cherry Sapling",
    category: "seeds",
    icon: "Cherry_Sapling.webp",
    url: "https://stardewvalleywiki.com/Cherry_Sapling",
  },
  {
    id: "orange_sapling",
    name: "Orange Sapling",
    category: "seeds",
    icon: "Orange_Sapling.webp",
    url: "https://stardewvalleywiki.com/Orange_Sapling",
  },
  {
    id: "peach_sapling",
    name: "Peach Sapling",
    category: "seeds",
    icon: "Peach_Sapling.webp",
    url: "https://stardewvalleywiki.com/Peach_Sapling",
  },
  {
    id: "pomegranate_sapling",
    name: "Pomegranate Sapling",
    category: "seeds",
    icon: "Pomegranate_Sapling.webp",
    url: "https://stardewvalleywiki.com/Pomegranate_Sapling",
  },
  {
    id: "mango_sapling",
    name: "Mango Sapling",
    category: "seeds",
    icon: "Mango_Sapling.webp",
    url: "https://stardewvalleywiki.com/Mango_Sapling",
  },
  {
    id: "banana_sapling",
    name: "Banana Sapling",
    category: "seeds",
    icon: "Banana_Sapling.webp",
    url: "https://stardewvalleywiki.com/Banana_Sapling",
  },

  {
    id: "honey",
    name: "Honey",
    category: "goods",
    subCategory: null,
    sources: ["Oasis"],
    isEdible: false,
    sellsFor: 100,
    getsArtisanBuff: true,
    buffs: [],
    processingTime: 6100,
    madeFrom: ["honey"],
    equipment: ["bee_house"],
    flowerModifiers: [
      {
        id: "tulip",
        honeySellPrice: 160,
      },
      {
        id: "blue_jazz",
        honeySellPrice: 200,
      },
      {
        id: "summer_spangle",
        honeySellPrice: 280,
      },
      {
        id: "poppy",
        honeySellPrice: 380,
      },
      {
        id: "sunflower",
        honeySellPrice: 260,
      },
      {
        id: "fairy_rose",
        honeySellPrice: 680,
      },
    ],
    icon: "Honey.png",
    url: "https://stardewvalleywiki.com/Honey",
  },
  {
    id: "coffee",
    name: "Coffee",
    category: "goods",
    subCategory: null,
    sources: ["The Saloon"],
    isEdible: true,
    sellsFor: 150,
    getsArtisanBuff: false,
    buffs: [
      {
        id: "speed",
        value: 1,
      },
    ],
    buffDuration: {
      minutes: 1,
      seconds: 23,
    },
    restore: {
      energy: 3,
      health: 1,
    },
    processingTime: 120,
    madeFrom: ["coffee_bean"],
    equipment: ["keg"],
    icon: "Coffee.png",
    url: "https://stardewvalleywiki.com/Coffee",
  },
  {
    id: "beer",
    name: "Beer",
    category: "goods",
    subCategory: null,
    sources: ["The Saloon", "Ginger Island Resort"],
    quality: {
      normal: {
        sellsFor: 200,
        restore: {
          energy: 50,
          health: 22,
        },
      },
      silver: {
        caskPriceMultiplier: 1.25,
        sellsFor: 250,
        processingTime: 11200,
        restore: {
          energy: 70,
          health: 31,
        },
      },
      gold: {
        caskPriceMultiplier: 1.5,
        sellsFor: 300,
        processingTime: 22400,
        restore: {
          energy: 90,
          health: 40,
        },
      },
      iridium: {
        caskPriceMultiplier: 2,
        sellsFor: 400,
        processingTime: 44800,
        restore: {
          energy: 130,
          health: 58,
        },
      },
    },
    isEdible: true,
    getsArtisanBuff: true,
    buffs: [
      {
        id: "speed",
        value: -1,
      },
    ],
    buffDuration: {
      minutes: 0,
      seconds: 30,
    },
    restore: {
      energy: 50,
      health: 22,
    },
    processingTime: 1750,
    madeFrom: ["wheat"],
    equipment: ["keg", "cask"],
    icon: "Beer.png",
    url: "https://stardewvalleywiki.com/Beer",
  },
  {
    id: "green_tea",
    name: "Green Tea",
    category: "goods",
    subCategory: null,
    sources: [],
    isEdible: true,
    sellsFor: 100,
    getsArtisanBuff: true,
    buffs: [
      {
        id: "max_energy",
        value: 30,
      },
    ],
    buffDuration: {
      minutes: 4,
      seconds: 12,
    },
    equipment: ["keg"],
    processingTime: 180,
    madeFrom: ["tea_leaves"],
    icon: "Green_Tea.png",
    url: "https://stardewvalleywiki.com/Green_Tea",
  },
  {
    id: "mead",
    name: "Mead",
    category: "goods",
    subCategory: null,
    sources: ["Ginger Island Resort"],
    quality: {
      normal: {
        sellsFor: 200,
        restore: {
          energy: 75,
          health: 33,
        },
      },
      silver: {
        caskPriceMultiplier: 1.25,
        sellsFor: 250,
        processingTime: 11200,
        restore: {
          energy: 105,
          health: 47,
        },
      },
      gold: {
        caskPriceMultiplier: 1.5,
        sellsFor: 300,
        processingTime: 22400,
        restore: {
          energy: 135,
          health: 60,
        },
      },
      iridium: {
        caskPriceMultiplier: 2,
        sellsFor: 400,
        processingTime: 44800,
        restore: {
          energy: 195,
          health: 87,
        },
      },
    },
    isEdible: true,
    sellsFor: 200,
    getsArtisanBuff: true,
    buffs: [
      {
        id: "speed",
        value: -1,
      },
    ],
    buffDuration: {
      minutes: 0,
      seconds: 30,
    },
    processingTime: 600,
    madeFrom: ["honey"],
    equipment: ["keg", "cask"],
    icon: "Mead.png",
    url: "https://stardewvalleywiki.com/Mead",
  },
  {
    id: "pale_ale",
    name: "Pale Ale",
    category: "goods",
    subCategory: null,
    sources: [],
    quality: {
      normal: {
        sellsFor: 300,
        restore: {
          energy: 50,
          health: 22,
        },
      },
      silver: {
        caskPriceMultiplier: 1.25,
        sellsFor: 375,
        processingTime: 14400,
        restore: {
          energy: 70,
          health: 31,
        },
      },
      gold: {
        caskPriceMultiplier: 1.5,
        sellsFor: 450,
        processingTime: 27200,
        restore: {
          energy: 90,
          health: 40,
        },
      },
      iridium: {
        caskPriceMultiplier: 2,
        sellsFor: 600,
        processingTime: 54400,
        restore: {
          energy: 130,
          health: 58,
        },
      },
    },
    isEdible: true,
    getsArtisanBuff: true,
    buffs: [
      {
        id: "speed",
        value: -1,
      },
    ],
    buffDuration: {
      minutes: 0,
      seconds: 30,
    },
    equipment: ["keg", "cask"],
    processingTime: 2250,
    madeFrom: ["hops"],
    icon: "Pale_Ale.png",
    url: "https://stardewvalleywiki.com/Pale_Ale",
  },
  {
    id: "cheese",
    name: "Cheese",
    category: "goods",
    subCategory: null,
    sources: [],
    quality: {
      normal: {
        sellsFor: 230,
        processingTime: 200,
        restore: {
          energy: 125,
          health: 56,
        },
      },
      silver: {
        caskPriceMultiplier: 1.25,
        sellsFor: 287,
        processingTime: 4800,
        restore: {
          energy: 175,
          health: 78,
        },
      },
      gold: {
        caskPriceMultiplier: 1.5,
        sellsFor: 345,
        processingTime: 11200,
        restore: {
          energy: 225,
          health: 101,
        },
      },
      iridium: {
        caskPriceMultiplier: 2,
        sellsFor: 460,
        processingTime: 22400,
        restore: {
          energy: 325,
          health: 146,
        },
      },
    },
    isEdible: true,
    getsArtisanBuff: true,
    buffs: null,
    buffDuration: null,
    equipment: ["cheese_press", "cask"],
    processingTime: 200,
    madeFrom: ["milk"],
    icon: "Cheese.png",
    url: "https://stardewvalleywiki.com/Cheese",
  },
  {
    id: "goat_cheese",
    name: "Goat Cheese",
    category: "goods",
    subCategory: null,
    sources: [],
    quality: {
      normal: {
        sellsFor: 400,
        processingTime: 200,
        restore: {
          energy: 125,
          health: 56,
        },
      },
      silver: {
        caskPriceMultiplier: 1.25,
        sellsFor: 500,
        processingTime: 4800,
        restore: {
          energy: 175,
          health: 78,
        },
      },
      gold: {
        caskPriceMultiplier: 1.5,
        sellsFor: 600,
        processingTime: 11200,
        restore: {
          energy: 225,
          health: 101,
        },
      },
      iridium: {
        caskPriceMultiplier: 2,
        sellsFor: 800,
        processingTime: 22400,
        restore: {
          energy: 325,
          health: 146,
        },
      },
    },
    isEdible: true,
    getsArtisanBuff: true,
    buffs: null,
    buffDuration: null,
    equipment: ["cheese_press", "cask"],
    processingTime: 200,
    madeFrom: ["goat_milk"],
    icon: "Goat_Cheese.png",
    url: "https://stardewvalleywiki.com/Goat_Cheese",
  },
  {
    id: "mayonnaise",
    name: "Mayonnaise",
    category: "goods",
    subCategory: "mayonnaise",
    sources: [],
    quality: {
      normal: {
        sellsFor: 190,
        restore: null,
      },
      silver: {
        sellsFor: 237,
        restore: null,
      },
      gold: {
        sellsFor: 285,
        restore: null,
      },
      iridium: {
        sellsFor: 380,
        restore: null,
      },
    },
    isEdible: false,
    getsArtisanBuff: true,
    buffs: null,
    buffDuration: null,
    equipment: ["mayonnaise_machine"],
    processingTime: 180,
    madeFrom: ["egg"],
    icon: "Mayonnaise.png",
    url: "https://stardewvalleywiki.com/Mayonnaise",
  },
  {
    id: "duck_mayonnaise",
    name: "Duck Mayonnaise",
    category: "goods",
    subCategory: "mayonnaise",
    sources: [],
    quality: {
      normal: {
        sellsFor: 375,
        restore: null,
      },
    },
    sellsFor: 375,
    isEdible: false,
    getsArtisanBuff: true,
    buffs: null,
    buffDuration: null,
    equipment: ["mayonnaise_machine"],
    processingTime: 180,
    madeFrom: ["duck_egg"],
    icon: "Duck_Mayonnaise.png",
    url: "https://stardewvalleywiki.com/Duck_Mayonnaise",
  },
  {
    id: "void_mayonnaise",
    name: "Void Mayonnaise",
    category: "goods",
    subCategory: "mayonnaise",
    sources: [],
    quality: {
      normal: {
        sellsFor: 275,
        restore: {
          energy: -75,
          health: 0,
        },
      },
    },
    sellsFor: 275,
    isEdible: false,
    getsArtisanBuff: true,
    buffs: null,
    buffDuration: null,
    equipment: ["mayonnaise_machine"],
    processingTime: 180,
    madeFrom: ["void_egg"],
    icon: "Void_Mayonnaise.png",
    url: "https://stardewvalleywiki.com/Void_Mayonnaise",
  },
  {
    id: "dinosaur_mayonnaise",
    name: "Dinosaur Mayonnaise",
    category: "goods",
    subCategory: "mayonnaise",
    sources: [],
    quality: {
      normal: {
        sellsFor: 800,
        restore: null,
      },
    },
    sellsFor: 800,
    isEdible: false,
    getsArtisanBuff: true,
    buffs: null,
    buffDuration: null,
    equipment: ["mayonnaise_machine"],
    processingTime: 180,
    madeFrom: ["dinosaur_egg"],
    icon: "Dinosaur_Mayonnaise.png",
    url: "https://stardewvalleywiki.com/Dinosaur_Mayonnaise",
  },
  {
    id: "oil",
    name: "Oil",
    category: "goods",
    subCategory: "oil",
    restore: {
      energy: 13,
      health: 5,
    },
    madeFrom: ["corn", "sunflower", "sunflower_seeds"],
    equipment: ["oil_maker"],
    processingTime: null,
    sellsFor: 100,
    buffs: null,
    getsArtisanBuff: false,
    icon: "Oil.png",
    url: "https://stardewcommunitywiki.com/Oil",
  },
  {
    id: "truffle_oil",
    name: "Truffle Oil",
    category: "goods",
    subCategory: "oil",
    restore: {
      energy: 38,
      health: 17,
    },
    madeFrom: ["truffle"],
    equipment: ["oil_maker"],
    processingTime: 360,
    sellsFor: 1065,
    buffs: null,
    getsArtisanBuff: true,
    icon: "Truffle_Oil.png",
    url: "https://stardewvalleywiki.com/Truffle_Oil",
  },
  {
    id: "cloth",
    name: "Cloth",
    category: "goods",
    subCategory: "cloth",
    madeFrom: ["wool"],
    equipment: ["loom"],
    processingTime: 240,
    sellsFor: 470,
    buffs: null,
    getsArtisanBuff: true,
    getsRancherBuff: true,
    icon: "Cloth.png",
    url: "https://stardewvalleywiki.com/Cloth",
  },
  {
    id: "juice",
    name: "Juice",
    category: "goods",
    subCategory: null,
    getsArtisanBuff: true,
    restore: {
      energy: 75,
      health: 33,
    },
    equipment: ["keg"],
    processingTime: 6000,
    excludedCrops: ["wheat", "hops", "tea_leaves"],
    icon: "Juice.png",
    url: "https://stardewvalleywiki.com/Juice",
  },
  {
    id: "wine",
    name: "Wine",
    category: "goods",
    subCategory: null,
    getsArtisanBuff: true,
    restore: {
      energy: 50,
      health: 22,
    },
    quality: {
      silver: {
        caskPriceMultiplier: 1.25,
        processingTime: 22400,
      },
      gold: {
        caskPriceMultiplier: 1.5,
        processingTime: 44800,
      },
      iridium: {
        caskPriceMultiplier: 2,
        processingTime: 89600,
      },
    },
    equipment: ["keg", "cask"],
    processingTime: 10000,
    excludedCrops: [],
    icon: "Wine.png",
    url: "https://stardewvalleywiki.com/Wine",
  },
  {
    id: "pickles",
    name: "Pickles",
    category: "goods",
    subCategory: null,
    getsArtisanBuff: true,
    processingTime: 4000,
    equipment: ["preserves_jar"],
    excludedCrops: [],
    icon: "Pickles.webp",
    url: "https://stardewcommunitywiki.com/Jellies_and_Pickles",
  },
  {
    id: "jelly",
    name: "Jelly",
    category: "goods",
    subCategory: null,
    getsArtisanBuff: true,
    processingTime: 4000,
    equipment: ["preserves_jar"],
    excludedCrops: [],
    icon: "Jelly.webp",
    url: "https://stardewcommunitywiki.com/Jellies_and_Pickles",
  },

  {
    id: "milk",
    name: "Milk",
    category: "animal_products",
    subCategory: "milk",
    sources: [],
    quality: {
      normal: {
        sellsFor: 125,
        restore: {
          energy: 38,
          health: 17,
        },
      },
      silver: {
        sellsFor: 156,
        restore: {
          energy: 53,
          health: 23,
        },
      },
      gold: {
        sellsFor: 187,
        restore: {
          energy: 68,
          health: 30,
        },
      },
      iridium: {
        sellsFor: 250,
        restore: {
          energy: 98,
          health: 44,
        },
      },
    },
    isEdible: true,
    icon: "Milk.png",
    url: "https://stardewvalleywiki.com/Milk",
  },

  {
    id: "large_milk",
    name: "Large Milk",
    category: "animal_products",
    subCategory: "milk",
    sources: [],
    quality: {
      normal: {
        sellsFor: 190,
        restore: {
          energy: 50,
          health: 22,
        },
      },
      silver: {
        sellsFor: 237,
        restore: {
          energy: 70,
          health: 31,
        },
      },
      gold: {
        sellsFor: 285,
        restore: {
          energy: 90,
          health: 40,
        },
      },
      iridium: {
        sellsFor: 380,
        restore: {
          energy: 130,
          health: 58,
        },
      },
    },
    isEdible: true,
    icon: "Large_Milk.png",
    url: "https://stardewvalleywiki.com/Large_Milk",
  },
  {
    id: "goat_milk",
    name: "Goat Milk",
    category: "animal_products",
    subCategory: "milk",
    sources: [],
    quality: {
      normal: {
        sellsFor: 225,
        restore: {
          energy: 63,
          health: 28,
        },
      },
      silver: {
        sellsFor: 281,
        restore: {
          energy: 88,
          health: 39,
        },
      },
      gold: {
        sellsFor: 337,
        restore: {
          energy: 113,
          health: 50,
        },
      },
      iridium: {
        sellsFor: 450,
        restore: {
          energy: 163,
          health: 73,
        },
      },
    },
    isEdible: true,
    icon: "Goat_Milk.png",
    url: "https://stardewvalleywiki.com/Goat_Milk",
  },
  {
    id: "large_goat_milk",
    name: "Large Goat Milk",
    category: "animal_products",
    subCategory: "milk",
    sources: [],
    quality: {
      normal: {
        sellsFor: 345,
        restore: {
          energy: 88,
          health: 39,
        },
      },
      silver: {
        sellsFor: 431,
        restore: {
          energy: 123,
          health: 55,
        },
      },
      gold: {
        sellsFor: 517,
        restore: {
          energy: 158,
          health: 71,
        },
      },
      iridium: {
        sellsFor: 690,
        restore: {
          energy: 228,
          health: 102,
        },
      },
    },
    isEdible: true,
    icon: "Large_Goat_Milk.png",
    url: "https://stardewvalleywiki.com/Large_Goat_Milk",
  },
  {
    id: "egg",
    name: "Egg",
    category: "animal_products",
    subCategory: "egg",
    sources: [],
    quality: {
      normal: {
        sellsFor: 50,
        restore: {
          energy: 25,
          health: 11,
        },
      },
      silver: {
        sellsFor: 62,
        restore: {
          energy: 35,
          health: 15,
        },
      },
      gold: {
        sellsFor: 65,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      iridium: {
        sellsFor: 100,
        restore: {
          energy: 65,
          health: 29,
        },
      },
    },
    variants: ["white", "brown", "blue"],
    isEdible: true,
    icon: "Egg.png",
    url: "https://stardewvalleywiki.com/Egg",
  },
  {
    id: "large_egg",
    name: "Large Egg",
    category: "animal_products",
    subCategory: "egg",
    sources: [],
    quality: {
      normal: {
        sellsFor: 95,
        restore: {
          energy: 38,
          health: 17,
        },
      },
      silver: {
        sellsFor: 118,
        restore: {
          energy: 53,
          health: 23,
        },
      },
      gold: {
        sellsFor: 142,
        restore: {
          energy: 68,
          health: 30,
        },
      },
      iridium: {
        sellsFor: 190,
        restore: {
          energy: 98,
          health: 44,
        },
      },
    },
    variants: ["white", "brown"],
    isEdible: true,
    icon: "Large_Egg.png",
    url: "https://stardewvalleywiki.com/Large_Egg",
  },
  {
    id: "ostrich_egg",
    name: "Ostrich Egg",
    category: "animal_products",
    subCategory: "egg",
    sources: [],
    quality: {
      normal: {
        sellsFor: 600,
        restore: {
          energy: 38,
          health: 17,
        },
      },
      silver: {
        sellsFor: 750,
        restore: {
          energy: 53,
          health: 23,
        },
      },
      gold: {
        sellsFor: 900,
        restore: {
          energy: 68,
          health: 30,
        },
      },
      iridium: {
        sellsFor: 1200,
        restore: {
          energy: 98,
          health: 44,
        },
      },
    },
    variants: [],
    isEdible: true,
    icon: "Ostrich_Egg.png",
    url: "https://stardewvalleywiki.com/Ostrich_Egg",
  },
  {
    id: "golden_egg",
    name: "Golden Egg",
    category: "animal_products",
    subCategory: "egg",
    sources: [],
    quality: {
      normal: {
        sellsFor: 500,
        restore: {
          energy: 25,
          health: 11,
        },
      },
      silver: {
        sellsFor: 625,
        restore: {
          energy: 35,
          health: 15,
        },
      },
      gold: {
        sellsFor: 750,
        restore: {
          energy: 45,
          health: 20,
        },
      },
      iridium: {
        sellsFor: 1000,
        restore: {
          energy: 65,
          health: 29,
        },
      },
    },
    variants: [],
    isEdible: true,
    icon: "Golden_Egg.png",
    url: "https://stardewvalleywiki.com/Golden_Egg",
  },
  {
    id: "duck_egg",
    name: "Duck Egg",
    category: "animal_products",
    subCategory: "egg",
    sources: [],
    quality: {
      normal: {
        sellsFor: 95,
        restore: {
          energy: 38,
          health: 17,
        },
      },
      silver: {
        sellsFor: 118,
        restore: {
          energy: 53,
          health: 23,
        },
      },
      gold: {
        sellsFor: 142,
        restore: {
          energy: 68,
          health: 30,
        },
      },
      iridium: {
        sellsFor: 190,
        restore: {
          energy: 98,
          health: 44,
        },
      },
    },
    variants: [],
    isEdible: true,
    icon: "Duck_Egg.png",
    url: "https://stardewvalleywiki.com/Duck_Egg",
  },
  {
    id: "void_egg",
    name: "Void Egg",
    category: "animal_products",
    subCategory: "egg",
    sources: [],
    quality: {
      normal: {
        sellsFor: 65,
        restore: {
          energy: 38,
          health: 17,
        },
      },
      silver: {
        sellsFor: 81,
        restore: {
          energy: 53,
          health: 23,
        },
      },
      gold: {
        sellsFor: 97,
        restore: {
          energy: 68,
          health: 30,
        },
      },
      iridium: {
        sellsFor: 130,
        restore: {
          energy: 98,
          health: 44,
        },
      },
    },
    variants: [],
    isEdible: true,
    icon: "Void_Egg.png",
    url: "https://stardewvalleywiki.com/Void_Egg",
  },
  {
    id: "dinosaur_egg",
    name: "Dinosaur Egg",
    category: "animal_products",
    subCategory: "egg",
    sources: [],
    quality: {
      normal: {
        sellsFor: 350,
        restore: null,
      },
      silver: {
        sellsFor: 437,
        restore: null,
      },
      gold: {
        sellsFor: 525,
        restore: null,
      },
      iridium: {
        sellsFor: 700,
        restore: null,
      },
    },
    variants: [],
    isEdible: true,
    icon: "Dinosaur_Egg.png",
    url: "https://stardewvalleywiki.com/Dinosaur_Egg",
  },
  {
    id: "truffle",
    name: "Truffle",
    category: "animal_products",
    subCategory: "mushroom",
    sources: ["pig"],
    quality: {
      normal: {
        sellsFor: 625,
        restore: {
          energy: 13,
          health: 5,
        },
      },
      silver: {
        sellsFor: 781,
        restore: {
          energy: 18,
          health: 8,
        },
      },
      gold: {
        sellsFor: 937,
        restore: {
          energy: 23,
          health: 10,
        },
      },
      iridium: {
        sellsFor: 1250,
        restore: {
          energy: 33,
          health: 14,
        },
      },
    },
    getsRancherBuff: false,
    variants: [],
    isEdible: true,
    icon: "Truffle.png",
    url: "https://stardewvalleywiki.com/Truffle",
  },
  {
    id: "wool",
    name: "Wool",
    category: "animal_products",
    subCategory: "wool",
    sources: ["rabbit", "sheep"],
    quality: {
      normal: {
        sellsFor: 340,
        restore: null,
      },
      silver: {
        sellsFor: 425,
        restore: null,
      },
      gold: {
        sellsFor: 510,
        restore: null,
      },
      iridium: {
        sellsFor: 680,
        restore: null,
      },
    },
    getsRancherBuff: true,
    variants: [],
    isEdible: false,
    icon: "Wool.png",
    url: "https://stardewvalleywiki.com/Wool",
  },

  {
    id: "wheat_flour",
    name: "Wheat Flour",
    category: "ingredients",
    subCategory: null,
    sellsFor: 50,
    buffs: [],
    icon: "36px-Wheat_Flour.webp",
    url: "https://stardewcommunitywiki.com/Wheat_Flour",
  },
  {
    id: "sugar",
    name: "Sugar",
    category: "ingredients",
    subCategory: null,
    sellsFor: 50,
    buffs: [],
    icon: "36px-Sugar.webp",
    url: "https://stardewcommunitywiki.com/Sugar",
  },

  {
    id: "oil_of_garlic",
    name: "Oil Of Garlic",
    category: "crafting",
    subCategory: null,
    buffs: [],
    icon: "36px-Oil_of_Garlic.webp",
    url: "https://stardewcommunitywiki.com/Oil_of_Garlic",
  },

  {
    id: "basic_fertilizer",
    name: "Basic Fertilizer",
    category: "fertilizers",
    subCategory: null,
    icon: "Basic_Fertilizer.png",
    url: "https://stardewvalleywiki.com/Basic_Fertilizer",
    vendors: [
      {
        id: "pierre",
        cost: 100,
      },
    ],
  },
  {
    id: "quality_fertilizer",
    name: "Quality Fertilizer",
    category: "fertilizers",
    subCategory: null,
    icon: "Quality_Fertilizer.png",
    url: "https://stardewvalleywiki.com/Quality_Fertilizer",
    vendors: [
      {
        id: "pierre",
        cost: 150,
      },
    ],
  },
  {
    id: "speed_gro",
    name: "Speed-Gro",
    category: "fertilizers",
    subCategory: null,
    icon: "Speed-Gro.png",
    url: "https://stardewvalleywiki.com/Speed-Gro",
    vendors: [
      {
        id: "pierre",
        cost: 100,
      },
    ],
  },
  {
    id: "deluxe_speed_gro",
    name: "Deluxe Speed-Gro",
    category: "fertilizers",
    subCategory: null,
    icon: "Deluxe_Speed-Gro.png",
    url: "https://stardewvalleywiki.com/Deluxe_Speed-Gro",
    vendors: [
      {
        id: "pierre",
        cost: 150,
      },
      {
        id: "oasis",
        cost: 80,
      },
    ],
  },
  {
    id: "deluxe_fertilizer",
    name: "Deluxe Fertilizer",
    category: "fertilizers",
    subCategory: null,
    icon: "Deluxe_Fertilizer.png",
    url: "https://stardewvalleywiki.com/Deluxe_Fertilizer",
    vendors: [],
  },
  {
    id: "hyper_speed_gro",
    name: "Hyper Speed-Gro",
    category: "fertilizers",
    subCategory: null,
    icon: "Hyper_Speed-Gro.png",
    url: "https://stardewvalleywiki.com/Hyper_Speed-Gro",
    vendors: [],
  },

  {
    id: "lucky_lunch",
    name: "Lucky Lunch",
    category: "food",
    subCategory: null,
    buffs: [
      {
        field: "farming",
        value: 2,
      },
    ],
    farmingBuff: 2,
    icon: "36px-Lucky_Lunch.webp",
    url: "https://stardewcommunitywiki.com/Lucky_Lunch",
  },
  {
    id: "complete_breakfast",
    name: "Complete Breakfast",
    category: "food",
    subCategory: null,
    buffs: [
      {
        field: "farming",
        value: 2,
      },
    ],
    farmingBuff: 2,
    icon: "Complete_Breakfast.png",
    url: "https://stardewvalleywiki.com/Complete_Breakfast",
  },
  {
    id: "hashbrowns",
    name: "Hashbrowns",
    category: "food",
    subCategory: null,
    buffs: [
      {
        field: "farming",
        value: 1,
      },
    ],
    farmingBuff: 1,
    icon: "Hashbrowns.png",
    url: "https://stardewvalleywiki.com/Hashbrowns",
  },
  {
    id: "pepper_poppers",
    name: "Pepper Poppers",
    category: "food",
    subCategory: null,
    buffs: [
      {
        field: "farming",
        value: 2,
      },
    ],
    farmingBuff: 2,
    icon: "Pepper_Poppers.png",
    url: "https://stardewvalleywiki.com/Pepper_Poppers",
  },
  {
    id: "tom_kha_soup",
    name: "Tom Kha Soup",
    category: "food",
    subCategory: null,
    buffs: [
      {
        field: "farming",
        value: 2,
      },
    ],
    farmingBuff: 2,
    icon: "Tom_Kha_Soup.png",
    url: "https://stardewvalleywiki.com/Tom_Kha_Soup",
  },
  {
    id: "farmers_lunch",
    name: "Farmer's Lunch",
    category: "food",
    subCategory: null,
    buffs: [
      {
        field: "farming",
        value: 3,
      },
    ],
    farmingBuff: 3,
    icon: "Farmer's_Lunch.png",
    url: "https://stardewvalleywiki.com/Farmer%27s_Lunch",
  },
  {
    id: "maple_bar",
    name: "Maple Bar",
    category: "food",
    subCategory: null,
    buffs: [
      {
        field: "farming",
        value: 1,
      },
    ],
    farmingBuff: 1,
    icon: "Maple_Bar.png",
    url: "https://stardewvalleywiki.com/Maple_Bar",
  },
  {
    id: "cheese_cauliflower",
    name: "Cheese Cauliflower",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Cheese_Cauliflower.webp",
    url: "https://stardewcommunitywiki.com/Cheese_Cauliflower",
  },
  {
    id: "escargot",
    name: "Escargot",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Escargot.webp",
    url: "https://stardewcommunitywiki.com/Escargot",
  },
  {
    id: "fiddlehead_risotto",
    name: "Fiddlehead Risotto",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Fiddlehead_Risotto.webp",
    url: "https://stardewcommunitywiki.com/Fiddlehead_Risotto",
  },
  {
    name: "Bean Hotpot",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Bean_Hotpot.webp",
    url: "https://stardewcommunitywiki.com/Bean_Hotpot",
  },
  {
    id: "salmon_dinner",
    name: "Salmon Dinner",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Salmon_Dinner.webp",
    url: "https://stardewcommunitywiki.com/Salmon_Dinner",
  },
  {
    id: "stir_fry",
    name: "Stir Fry",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Stir_Fry.webp",
    url: "https://stardewcommunitywiki.com/Stir_Fry",
  },
  {
    id: "farmers_lunch",
    name: "Farmer's Lunch",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Farmer's_Lunch.webp",
    url: "https://stardewcommunitywiki.com/Farmer%27s_Lunch",
  },
  {
    id: "parsnip_soup",
    name: "Parsnip Soup",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Parsnip_Soup.webp",
    url: "https://stardewcommunitywiki.com/Parsnip_Soup",
  },
  {
    id: "rhubarb_pie",
    name: "Rhubarb Pie",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Rhubarb_Pie.webp",
    url: "https://stardewcommunitywiki.com/Rhubarb_Pie",
  },
  {
    id: "rice",
    name: "Rice",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "Rice.webp",
    url: "https://stardewcommunitywiki.com/Rice",
  },
  {
    id: "blueberry_tart",
    name: "Blueberry Tart",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Blueberry_Tart.webp",
    url: "https://stardewcommunitywiki.com/Blueberry_Tart",
  },
  {
    id: "fruit_salad",
    name: "Fruit Salad",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Fruit_Salad.webp",
    url: "https://stardewcommunitywiki.com/Fruit_Salad",
  },
  {
    id: "tortilla",
    name: "Tortilla",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Tortilla.webp",
    url: "https://stardewcommunitywiki.com/Tortilla",
  },
  {
    id: "spicy_eel",
    name: "Spicy Eel",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Spicy_Eel.webp",
    url: "https://stardewcommunitywiki.com/Spicy_Eel",
  },
  {
    id: "tropical_curry",
    name: "Tropical Curry",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Tropical_Curry.webp",
    url: "https://stardewcommunitywiki.com/Tropical_Curry",
  },
  {
    id: "pink_cake",
    name: "Pink Cake",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Pink_Cake.webp",
    url: "https://stardewcommunitywiki.com/Pink_Cake",
  },
  {
    id: "poppyseed_muffin",
    name: "Poppyseed Muffin",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Poppyseed_Muffin.webp",
    url: "https://stardewcommunitywiki.com/Poppyseed_Muffin",
  },
  {
    id: "chefs_bundle",
    name: "Chef's Bundle",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Bundle_Red.webp",
    url: "https://stardewcommunitywiki.com/Bundles#Chefs_Bundle",
  },
  {
    id: "radish_salad",
    name: "Radish Salad",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Radish_Salad.webp",
    url: "https://stardewcommunitywiki.com/Radish_Salad",
  },
  {
    id: "red_plate",
    name: "Red Plate",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Red_Plate.webp",
    url: "https://stardewcommunitywiki.com/Red_Plate",
  },
  {
    id: "coleslaw",
    name: "Coleslaw",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Coleslaw.webp",
    url: "https://stardewcommunitywiki.com/Coleslaw",
  },
  {
    id: "fish_taco",
    name: "Fish Taco",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Fish_Taco.webp",
    url: "https://stardewcommunitywiki.com/Fish_Taco",
  },
  {
    id: "bruschetta",
    name: "Bruschetta",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Bruschetta.webp",
    url: "https://stardewcommunitywiki.com/Bruschetta",
  },
  {
    id: "eggplant_parmesan",
    name: "Eggplant Parmesan",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Eggplant_Parmesan.webp",
    url: "https://stardewcommunitywiki.com/Eggplant_Parmesan",
  },
  {
    id: "fish_stew",
    name: "Fish Stew",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Fish_Stew.webp",
    url: "https://stardewcommunitywiki.com/Fish_Stew",
  },
  {
    id: "pizza",
    name: "Pizza",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Pizza.webp",
    url: "https://stardewcommunitywiki.com/Pizza",
  },
  {
    id: "spaghetti",
    name: "Spaghetti",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Spaghetti.webp",
    url: "https://stardewcommunitywiki.com/Spaghetti",
  },
  {
    id: "vegetable_medley",
    name: "Vegetable Medley",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Vegetable_Medley.webp",
    url: "https://stardewcommunitywiki.com/Vegetable_Medley",
  },
  {
    id: "artichoke_dip",
    name: "Artichoke Dip",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Artichoke_Dip.webp",
    url: "https://stardewcommunitywiki.com/Artichoke_Dip",
  },
  {
    id: "super_meal",
    name: "Super Meal",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Super_Meal.webp",
    url: "https://stardewcommunitywiki.com/Super_Meal",
  },
  {
    id: "cranberry_candy",
    name: "Cranberry Candy",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Cranberry_Candy.webp",
    url: "https://stardewcommunitywiki.com/Cranberry_Candy",
  },
  {
    id: "cranberry_sauce",
    name: "Cranberry Sauce",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Cranberry_Sauce.webp",
    url: "https://stardewcommunitywiki.com/Cranberry_Sauce",
  },
  {
    id: "stuffing",
    name: "Stuffing",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Stuffing.webp",
    url: "https://stardewcommunitywiki.com/Stuffing",
  },
  {
    id: "survival_burger",
    name: "Survival Burger",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Survival_Burger.webp",
    url: "https://stardewcommunitywiki.com/Survival_Burger",
  },
  {
    id: "fairy_dust",
    name: "Fairy Dust",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Fairy_Dust.webp",
    url: "https://stardewcommunitywiki.com/Fairy_Dust",
  },
  {
    id: "autumns_bounty",
    name: "Autumn's Bounty",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Autumn's_Bounty.webp",
    url: "https://stardewcommunitywiki.com/Autumn%27s_Bounty",
  },
  {
    id: "pumpkin_pie",
    name: "Pumpkin Pie",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Pumpkin_Pie.webp",
    url: "https://stardewcommunitywiki.com/Pumpkin_Pie",
  },
  {
    id: "pumpkin_soup",
    name: "Pumpkin Soup",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Pumpkin_Soup.webp",
    url: "https://stardewcommunitywiki.com/Pumpkin_Soup",
  },
  {
    id: "jack_o_lantern",
    name: "Jack-O-Lantern",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Jack-O-Lantern.webp",
    url: "https://stardewcommunitywiki.com/Jack-O-Lantern",
  },
  {
    id: "glazed_yams",
    name: "Glazed Yams",
    category: "food",
    subCategory: null,
    buffs: [],
    icon: "36px-Glazed_Yams.webp",
    url: "https://stardewcommunitywiki.com/Glazed_Yams",
  },

  {
    id: "spring_crops_bundle",
    name: "Spring Crops Bundle",
    category: "bundles",
    subCategory: null,
    icon: "36px-Bundle_Green",
    url: "https://stardewcommunitywiki.com/Bundles#Spring_Crops_Bundle",
  },
  {
    id: "summer_crops_bundle",
    name: "Summer Crops Bundle",
    category: "bundles",
    subCategory: null,
    icon: "36px-Bundle_Yellow.webp",
    url: "https://stardewcommunitywiki.com/Bundles#Summer_Crops_Bundle",
  },
  {
    id: "fall_crops_bundle",
    name: "Fall Crops Bundle",
    category: "bundles",
    subCategory: null,
    icon: "36px-Bundle_Orange.webp",
    url: "https://stardewcommunitywiki.com/Bundles#Fall_Crops_Bundle",
  },
  {
    id: "quality_crops_bundle",
    name: "Quality Crops Bundle",
    category: "bundles",
    subCategory: null,
    icon: "36px-Bundle_Teal.webp",
    url: "https://stardewcommunitywiki.com/Bundles#Quality_Crops_Bundle",
  },
  {
    id: "dye_bundle",
    name: "Dye Bundle",
    category: "bundles",
    subCategory: null,
    icon: "36px-Bundle_Teal.webp",
    url: "https://stardewcommunitywiki.com/Bundles#Dye_Bundle",
  },
  {
    id: "fodder_bundle",
    name: "Fodder Bundle",
    category: "bundles",
    subCategory: null,
    icon: "36px-Bundle_Yellow.webp",
    url: "https://stardewcommunitywiki.com/Bundles#Fodder_Bundle",
  },
  {
    id: "exotic_foraging_bundle",
    name: "Exotic Foraging Bundle",
    category: "bundles",
    subCategory: null,
    icon: "36px-Bundle_Purple.webp",
    url: "https://stardewcommunitywiki.com/Bundles#Exotic_Foraging_Bundle",
  },

  {
    id: "jodis_request",
    name: "Jodi's Request",
    category: "quests",
    subCategory: null,
    url: "https://stardewcommunitywiki.com/Quests#Jodi.27s_Request",
  },
  {
    id: "knee_therapy",
    name: "Knee Therapy",
    category: "quests",
    subCategory: null,
    url: "https://stardewcommunitywiki.com/Quests#Knee_Therapy",
  },
  {
    id: "crop_research",
    name: "Crop Research",
    category: "quests",
    subCategory: null,
    url: "https://stardewcommunitywiki.com/Quests#Crop_Research",
  },
  {
    id: "a_soldiers_star",
    name: "A Soldier's Star",
    category: "quests",
    subCategory: null,
    url: "https://stardewcommunitywiki.com/Quests#A_Soldier.27s_Star",
  },
  {
    id: "cows_delight",
    name: "Cow's Delight",
    category: "quests",
    subCategory: null,
    url: "https://stardewcommunitywiki.com/Quests#Cow.27s_Delight",
  },
  {
    id: "the_mysterious_qi",
    name: "The Mysterious Qi",
    category: "quests",
    subCategory: null,
    url: "https://stardewcommunitywiki.com/Quests#The_Mysterious_Qi",
  },
  {
    id: "carving_pumpkins",
    name: "Carving Pumpkins",
    category: "quests",
    subCategory: null,
    url: "https://stardewcommunitywiki.com/Quests#Carving_Pumpkins",
  },

  {
    id: "maru",
    name: "Maru",
    category: "people",
    subCategory: null,
    icon: "Maru_Icon.webp",
    url: "https://stardewcommunitywiki.com/Maru",
  },
  {
    id: "pam",
    name: "Pam",
    category: "people",
    subCategory: null,
    icon: "Pam_Icon.png",
    url: "https://stardewcommunitywiki.com/Pam",
  },
  {
    id: "demetrius",
    name: "Demetrius",
    category: "people",
    subCategory: null,
    icon: "Demetrius_Icon.webp",
    url: "https://stardewcommunitywiki.com/Demetrius",
  },
  {
    id: "evelyn",
    name: "Evelyn",
    category: "people",
    subCategory: null,
    icon: "Evelyn_Icon.webp",
    url: "https://stardewcommunitywiki.com/Evelyn",
  },
  {
    id: "lewis",
    name: "Lewis",
    category: "people",
    subCategory: null,
    icon: "Lewis_Icon.webp",
    url: "https://stardewcommunitywiki.com/Lewis",
  },
  {
    id: "shane",
    name: "Shane",
    category: "people",
    subCategory: null,
    icon: "Shane_Icon.webp",
    url: "https://stardewcommunitywiki.com/Shane",
  },
  {
    id: "penny",
    name: "Penny",
    category: "people",
    subCategory: null,
    icon: "Penny_Icon.webp",
    url: "https://stardewcommunitywiki.com/Penny",
  },
  {
    id: "caroline",
    name: "Caroline",
    category: "people",
    subCategory: null,
    icon: "Caroline_Icon.webp",
    url: "https://stardewcommunitywiki.com/Caroline",
  },
  {
    id: "haley",
    name: "Haley",
    category: "people",
    subCategory: null,
    icon: "Haley_Icon.webp",
    url: "https://stardewcommunitywiki.com/Haley",
  },
  {
    id: "jas",
    name: "Jas",
    category: "people",
    subCategory: null,
    icon: "Jas_Icon.webp",
    url: "https://stardewcommunitywiki.com/Jas",
  },
  {
    id: "abigail",
    name: "Abigail",
    category: "people",
    subCategory: null,
    icon: "Abigail_Icon.webp",
    url: "https://stardewcommunitywiki.com/Abigail",
  },
  {
    id: "krobus",
    name: "Krobus",
    category: "people",
    subCategory: null,
    icon: "Krobus_Icon.webp",
    url: "https://stardewcommunitywiki.com/Krobus",
  },
  {
    id: "willy",
    name: "Willy",
    category: "people",
    subCategory: null,
    icon: "Willy_Icon.webp",
    url: "https://stardewcommunitywiki.com/Willy",
  },
  {
    id: "linus",
    name: "Linus",
    category: "people",
    subCategory: null,
    icon: "Linus_Icon.webp",
    url: "https://stardewcommunitywiki.com/Linus",
  },
  {
    id: "sam",
    name: "Sam",
    category: "people",
    subCategory: null,
    icon: "Sam_Icon.webp",
    url: "https://stardewcommunitywiki.com/Sam",
  },
  {
    id: "robin",
    name: "Robin",
    category: "people",
    subCategory: null,
    icon: "Robin_Icon.webp",
    url: "https://stardewcommunitywiki.com/Robin",
  },
  {
    id: "wizard",
    name: "Wizard",
    category: "people",
    subCategory: null,
    icon: "Wizard_Icon.webp",
    url: "https://stardewcommunitywiki.com/Wizard",
  },

  {
    id: "junimo_hut",
    name: "Junimo Hut",
    category: "buildings",
    builtBy: "wizard",
    icon: "36px-Junimo_Hut.webp",
    url: "https://stardewcommunitywiki.com/Junimo_Hut",
  },

  {
    id: "speed",
    name: "Speed",
    category: "buff",
    subCategory: null,
    icon: "36px-Speed_w.png",
  },
  {
    id: "max_energy",
    name: "Max Energy",
    category: "buff",
    subCategory: null,
    icon: "36px-Max_Energy.png",
  },
  {
    id: "farming",
    name: "Farming",
    category: "buff",
    subCategory: null,
    icon: "36px-Farming.png",
  },

  {
    id: "bee_house",
    name: "Bee House",
    category: "artisan_equipment",
    subCategory: null,
    icon: "Bee_House.png",
    url: "https://stardewvalleywiki.com/Bee_House",
  },
  {
    id: "keg",
    name: "Keg",
    category: "artisan_equipment",
    subCategory: null,
    icon: "Keg.png",
    url: "https://stardewvalleywiki.com/Keg",
  },
  {
    id: "cask",
    name: "Cask",
    category: "artisan_equipment",
    subCategory: null,
    icon: "Cask.png",
    url: "https://stardewvalleywiki.com/Cask",
  },
  {
    id: "preserves_jar",
    name: "Preserves Jar",
    category: "artisan_equipment",
    subCategory: null,
    icon: "Preserves_Jar.png",
    url: "https://stardewvalleywiki.com/Preserves_Jar",
  },
  {
    id: "loom",
    name: "Loom",
    category: "artisan_equipment",
    subCategory: null,
    icon: "Loom.png",
    url: "https://stardewvalleywiki.com/Loom",
  },
  {
    id: "oil_maker",
    name: "Oil Maker",
    category: "artisan_equipment",
    subCategory: null,
    icon: "Oil_Maker.png",
    url: "https://stardewvalleywiki.com/Oil_Maker",
  },
  {
    id: "mayonnaise_machine",
    name: "Mayonnaise Machine",
    category: "artisan_equipment",
    subCategory: null,
    icon: "Mayonnaise_Machine.png",
    url: "https://stardewvalleywiki.com/Mayonnaise_Machine",
  },
  {
    id: "cheese_press",
    name: "Cheese Press",
    category: "artisan_equipment",
    subCategory: null,
    icon: "Cheese_Press.png",
    url: "https://stardewvalleywiki.com/Cheese_Press",
  },

  {
    id: "pierre",
    name: "Pierre",
    shortName: "Pierre",
    category: "vendors",
    subCategory: null,
    icon: "Pierre_Icon.webp",
  },
  {
    id: "joja",
    name: "JoJa Mart",
    shortName: "Joja",
    category: "vendors",
    subCategory: null,
    icon: "Morris_Icon.webp",
  },
  {
    id: "oasis",
    name: "Oasis",
    shortName: "Oasis",
    category: "vendors",
    subCategory: null,
    icon: "Sandy_Icon.webp",
  },
  {
    id: "traveling_cart",
    name: "Traveling Cart",
    shortName: "Traveling",
    category: "vendors",
    subCategory: null,
    icon: "Sandy_Icon.webp",
  },

  {
    id: "tiller",
    name: "Tiller",
    category: "perks",
    subCategory: "profession",
    description: "Crops worth 10% more",
    icon: "36px-Tiller.png",
    url: "https://stardewvalleywiki.com/Farming#Farming_Skill",
  },
  {
    id: "rancher",
    name: "Rancher",
    category: "perks",
    subCategory: "profession",
    description: "Animal products worth 20% more",
    icon: "36px-Rancher.png",
    url: "https://stardewvalleywiki.com/Farming#Farming_Skill",
  },
  {
    id: "agriculturist",
    name: "Agriculturist",
    category: "perks",
    subCategory: "profession",
    description: "All crops grow 10% faster",
    icon: "36px-Agriculturist.png",
    url: "https://stardewvalleywiki.com/Farming#Farming_Skill",
  },
  {
    id: "artisan",
    name: "Artisan",
    category: "perks",
    subCategory: "profession",
    description: "Artisan goods worth 40% more",
    icon: "36px-Artisan.png",
    url: "https://stardewvalleywiki.com/Farming#Farming_Skill",
  },
];

export default itemData;
