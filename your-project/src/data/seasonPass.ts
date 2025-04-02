import { SeasonPass } from '../types/seasonPass';

// Set end date to 19 days from now
const endDate = new Date();
endDate.setDate(endDate.getDate() + 19);

export const SEASON_PASS_1: SeasonPass = {
  id: 1,
  name: "Survev.io2 Pass 1",
  description: "The first edition Pass in surviv.io",
  startDate: new Date().toISOString(),
  endDate: endDate.toISOString(),
  currentLevel: 1,
  maxLevel: 23,
  currentXP: 0,
  xpNeededForNextLevel: 100,
  items: [
    {
      id: "item1",
      name: "Desert Shield",
      description: "A rare desert combat shield",
      rarity: "rare",
      type: "skin",
      levelRequired: 2,
      imageUrl: ""
    },
    {
      id: "item2",
      name: "Gold Bag",
      description: "A bag of gold",
      rarity: "epic",
      type: "accessory",
      levelRequired: 3,
      imageUrl: ""
    },
    {
      id: "item3",
      name: "Atomic Emblem",
      description: "Legendary atomic emblem",
      rarity: "legendary",
      type: "skin",
      levelRequired: 4,
      imageUrl: ""
    },
    {
      id: "item4",
      name: "Gold Pouch",
      description: "A pouch of gold",
      rarity: "epic",
      type: "accessory",
      levelRequired: 5,
      imageUrl: ""
    },
    {
      id: "item5",
      name: "Rainbow Shield",
      description: "Legendary rainbow shield",
      rarity: "legendary",
      type: "skin",
      levelRequired: 6,
      imageUrl: ""
    }
  ],
  quests: [
    {
      id: 'quest1',
      title: 'Survivr Elite',
      description: 'Win a match with 10+ eliminations',
      xpReward: 40,
      completed: false,
    },
    {
      id: 'quest2',
      title: 'Medical Expert',
      description: 'Heal 500 health points in a single match',
      xpReward: 30,
      completed: false,
    },
    {
      id: 'quest3',
      title: 'Loot Goblin',
      description: 'Open 25 crates in a single match',
      xpReward: 25,
      completed: false,
    },
    {
      id: 'quest4',
      title: 'Close Encounters',
      description: 'Get 5 kills with shotguns in a single match',
      xpReward: 35,
      completed: false,
    },
    {
      id: 'quest5',
      title: 'Long Range Specialist',
      description: 'Deal 1000 damage with sniper rifles',
      xpReward: 30,
      completed: false,
    },
    {
      id: 'quest6',
      title: 'Pistol Pete',
      description: 'Get 3 kills with pistols in a single match',
      xpReward: 20,
      completed: false,
    },
    {
      id: 'quest7',
      title: 'Grenade Expert',
      description: 'Eliminate 2 players with grenades',
      xpReward: 40,
      completed: false,
    },
    {
      id: 'quest8',
      title: 'Supply Chain',
      description: 'Open an airdrop crate',
      xpReward: 25,
      completed: false,
    },
    {
      id: 'quest9',
      title: 'Unarmored Mayhem',
      description: 'Win a match without wearing any armor',
      xpReward: 50,
      completed: false,
    },
    {
      id: 'quest11',
      title: 'Untouchable',
      description: 'Win a match without taking any damage',
      xpReward: 75,
      completed: false,
    },
    {
      id: 'quest12',
      title: 'Pacifist',
      description: 'Win a match without eliminating any players',
      xpReward: 60,
      completed: false,
    },
    {
      id: 'quest13',
      title: 'Toilet Hoarder',
      description: 'Loot 10 toilets in a single match',
      xpReward: 45,
      completed: false,
    },
    {
      id: 'quest14',
      title: 'Full Inventory',
      description: 'Have all inventory slots filled with items',
      xpReward: 20,
      completed: false,
    },
    {
      id: 'quest15',
      title: 'The Finisher',
      description: 'Eliminate the last player in the match',
      xpReward: 40,
      completed: false,
    },
    {
      id: 'quest16',
      title: 'Team Player',
      description: 'Revive 3 teammates in a single match',
      xpReward: 35,
      completed: false,
    },
    {
      id: 'quest17',
      title: 'Weapon Variety',
      description: 'Eliminate players with 3 different weapon types in a single match',
      xpReward: 40,
      completed: false,
    },
    {
      id: 'quest18',
      title: 'Quick Draw',
      description: 'Eliminate a player within 15 seconds of spawning',
      xpReward: 30,
      completed: false,
    },
  ]};
